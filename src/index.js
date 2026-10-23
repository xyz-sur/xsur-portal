// Cloudflare Workers Main Entry for PT Xecure Siber Unggul Resolusi (xsur.my.id)
import { renderPublicPage } from "./html.js";
import { renderAdminPage } from "./admin_html.js";
import { SVG_HORIZONTAL, SVG_ICON } from "./logo.js";

// SHA-256 helper for password verification
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// Session parser helper
function getSessionToken(request) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/xsur_auth=([a-zA-Z0-9_\-]+)/);
  return match ? match[1] : null;
}

// Authentication verification against D1
async function verifyAdminAuth(request, env) {
  const token = getSessionToken(request);
  if (!token) return false;
  try {
    const session = await env.DB.prepare(
      "SELECT session_id FROM xsur_admin_sessions WHERE session_id = ? AND expires_at > datetime('now')"
    ).bind(token).first();
    return !!session;
  } catch (e) {
    return false;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // 1. Static Assets & Telemetry
    if (path === "/logo.svg") {
      return new Response(SVG_HORIZONTAL, {
        headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" }
      });
    }

    if (path === "/favicon.ico" || path === "/icon.svg") {
      return new Response(SVG_ICON, {
        headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" }
      });
    }

    if (path === "/robots.txt") {
      const robots = `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin/\nSitemap: https://xsur.my.id/sitemap.xml\n`;
      return new Response(robots, { headers: { "Content-Type": "text/plain" } });
    }

    if (path === "/sitemap.xml") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://xsur.my.id/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://xsur.my.id/#about</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://xsur.my.id/#services</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://xsur.my.id/#products</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
      return new Response(sitemap, { headers: { "Content-Type": "application/xml" } });
    }

    if (path === "/api/public/ping") {
      return Response.json({
        status: "operational",
        colo: request.cf?.colo || "CGK",
        country: request.cf?.country || "ID",
        httpProtocol: request.cf?.httpProtocol || "HTTP/3",
        timestamp: Date.now()
      });
    }

    // 2. Fetch Dynamic Data from D1 Database
    let menus = [];
    let siteConfig = {};
    try {
      const menuRows = await env.DB.prepare(
        "SELECT * FROM xsur_nav_menus WHERE is_active = 1 ORDER BY sort_order ASC"
      ).all();
      menus = menuRows.results || [];

      const configRows = await env.DB.prepare("SELECT key, value FROM xsur_site_config").all();
      (configRows.results || []).forEach(r => {
        siteConfig[r.key] = r.value;
      });
    } catch (e) {
      console.error("D1 Fetch Error:", e);
    }

    // 3. Admin Authentication & Dashboard
    if (path === "/admin") {
      const isAuth = await verifyAdminAuth(request, env);
      const allMenus = isAuth ? (await env.DB.prepare("SELECT * FROM xsur_nav_menus ORDER BY sort_order ASC").all()).results || [] : [];
      const html = renderAdminPage({ isAuthenticated: isAuth, menus: allMenus, siteConfig });
      return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    if (path === "/api/admin/login" && method === "POST") {
      let pwd = "";
      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await request.json();
        pwd = body.password || "";
      } else {
        const formData = await request.formData();
        pwd = formData.get("password") || "";
      }

      const inputHash = await sha256(pwd);
      const targetHash = siteConfig.admin_password_hash || "8d20b6dac67d7d8ae6126117f09dc9723d01f403ef790750244450c36442c141";

      if (inputHash === targetHash) {
        // Generate secure session
        const sessionId = "sess_" + crypto.randomUUID().replace(/-/g, "") + "_" + Date.now();
        await env.DB.prepare(
          "INSERT INTO xsur_admin_sessions (session_id, expires_at) VALUES (?, datetime('now', '+7 days'))"
        ).bind(sessionId).run();

        const headers = new Headers();
        headers.set("Set-Cookie", `xsur_auth=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`);
        headers.set("Location", "/admin");
        return new Response(null, { status: 302, headers });
      } else {
        const html = renderAdminPage({
          isAuthenticated: false,
          menus: [],
          siteConfig,
          errorMsg: "Kunci keamanan salah. Akses ditolak!"
        });
        return new Response(html, { status: 401, headers: { "Content-Type": "text/html; charset=utf-8" } });
      }
    }

    if (path === "/api/admin/logout" && method === "POST") {
      const token = getSessionToken(request);
      if (token) {
        await env.DB.prepare("DELETE FROM xsur_admin_sessions WHERE session_id = ?").bind(token).run();
      }
      const headers = new Headers();
      headers.set("Set-Cookie", `xsur_auth=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
      headers.set("Location", "/admin");
      return new Response(null, { status: 302, headers });
    }

    // 4. Admin CRUD API Endpoints (Protected)
    if (path.startsWith("/api/admin/")) {
      const isAuth = await verifyAdminAuth(request, env);
      if (!isAuth) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Menus CRUD
      if (path === "/api/admin/menus" && method === "POST") {
        const body = await request.json();
        const { id, label, url, target, sort_order, parent_id, is_dropdown, description, badge } = body;

        if (id) {
          await env.DB.prepare(`
            UPDATE xsur_nav_menus
            SET label = ?, url = ?, target = ?, sort_order = ?, parent_id = ?, is_dropdown = ?, description = ?, badge = ?
            WHERE id = ?
          `).bind(label, url, target || "_self", sort_order || 0, parent_id || null, is_dropdown || 0, description || "", badge || "", id).run();
        } else {
          await env.DB.prepare(`
            INSERT INTO xsur_nav_menus (label, url, target, sort_order, parent_id, is_dropdown, description, badge, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
          `).bind(label, url, target || "_self", sort_order || 0, parent_id || null, is_dropdown || 0, description || "", badge || "").run();
        }
        return Response.json({ success: true });
      }

      if (path.startsWith("/api/admin/menus/") && method === "DELETE") {
        const id = parseInt(path.split("/").pop());
        await env.DB.prepare("DELETE FROM xsur_nav_menus WHERE id = ? OR parent_id = ?").bind(id, id).run();
        return Response.json({ success: true });
      }

      // Site Config Update
      if (path === "/api/admin/config" && method === "POST") {
        const body = await request.json();
        for (const [k, v] of Object.entries(body)) {
          if (k !== "admin_password_hash") {
            await env.DB.prepare(
              "INSERT INTO xsur_site_config (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value"
            ).bind(k, String(v)).run();
          }
        }
        return Response.json({ success: true });
      }
    }

    // 5. Default Public Landing Page
    const canonicalUrl = `https://xsur.my.id`;
    const publicHtml = renderPublicPage({ menus, siteConfig, canonicalUrl });
    return new Response(publicHtml, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300"
      }
    });
  }
};
