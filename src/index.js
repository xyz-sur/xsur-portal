// Cloudflare Workers Main Entry for PT Xecure Siber Unggul Resolusi (xsur.my.id)
import { renderPublicPage } from "./html.js";
import { renderAdminPage } from "./admin_html.js";
import { SVG_HORIZONTAL, SVG_ICON } from "./logo.js";
import { DEFAULT_PROJECTS } from "./projects.js";
import { OG_BANNER_BASE64, LOGO_PNG_BASE64, base64ToUint8Array } from "./assets.js";
import { renderSafeLinkGateway, renderLinkDashboard, renderPublicLinkPage, renderAdminLoginForm, renderAdminLinkDashboard, generateRandomSlug, getRandomSeoQuery } from "./shortlinks.js";

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

    // 1. High-Performance Static Binary Assets for Google Indexing & Social Cards
    if (path === "/og-banner.png" || path === "/og-image.png") {
      const bytes = base64ToUint8Array(OG_BANNER_BASE64);
      return new Response(bytes, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=604800, immutable",
          "Content-Length": bytes.length.toString()
        }
      });
    }

    if (path === "/logo.png") {
      const bytes = base64ToUint8Array(LOGO_PNG_BASE64);
      return new Response(bytes, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=604800, immutable",
          "Content-Length": bytes.length.toString()
        }
      });
    }

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

    // Googlebot, Bingbot, Yandex SEO crawler control
    if (path === "/robots.txt") {
      const robots = `User-agent: *
Allow: /
Allow: /og-banner.png
Allow: /logo.png
Allow: /logo.svg
Allow: /llms.txt
Disallow: /admin
Disallow: /api/admin/

User-agent: Googlebot
Allow: /
Allow: /og-banner.png
Allow: /logo.png
Allow: /logo.svg
Disallow: /admin
Disallow: /api/admin/

User-agent: Googlebot-Image
Allow: /og-banner.png
Allow: /logo.png
Allow: /logo.svg

User-agent: Bingbot
Allow: /
Allow: /og-banner.png
Allow: /logo.png
Disallow: /admin
Disallow: /api/admin/

Host: https://xsur.my.id
Sitemap: https://xsur.my.id/sitemap.xml
`;
      return new Response(robots, {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" }
      });
    }

    // Standards-Compliant XML Sitemap for Google Search Console with Google Image Extension
    if (path === "/sitemap.xml") {
      const today = new Date().toISOString().split("T")[0];
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://xsur.my.id/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://xsur.my.id/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://xsur.my.id/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://xsur.my.id/" />
    <image:image>
      <image:loc>https://xsur.my.id/og-banner.png</image:loc>
      <image:title>Solusi IT Lengkap untuk Semua Kebutuhan Bisnis &amp; Kantor | PT Xecure Siber Unggul Resolusi (XSUR)</image:title>
      <image:caption>Mitra solusi IT serba ada: setting WiFi kantor MikroTik, pembuatan website &amp; bot WA/Telegram, integrasi QRIS, dan pengamanan sistem anti-hack bersama Bang Mansur</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://xsur.my.id/logo.png</image:loc>
      <image:title>Logo Resmi PT Xecure Siber Unggul Resolusi</image:title>
      <image:caption>Identitas resmi PT Xecure Siber Unggul Resolusi (XSUR)</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://mail.xsur.my.id/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
      return new Response(sitemap, {
        headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=86400" }
      });
    }

    // Modern 2026 AI Search Crawler Reference (ChatGPT Search, Perplexity, Gemini, Claude, Google AI Overview)
    if (path === "/llms.txt" || path === "/llms-full.txt") {
      const llmsText = `# PT Xecure Siber Unggul Resolusi

> Solusi IT lengkap untuk semua kebutuhan bisnis, kantor, UMKM, dan perorangan: jasa setting jaringan WiFi MikroTik, pembuatan website toko online, bot WhatsApp/Telegram otomatis, integrasi QRIS, dan pengamanan sistem anti-hack bergaransi.

PT Xecure Siber Unggul Resolusi (XSUR) adalah penyedia solusi IT dan keamanan siber terpadu yang dipimpin oleh Bang Mansur.

## Layanan Utama

- [Jasa Setting Jaringan WiFi & MikroTik Kantor](https://xsur.my.id/#projects): Optimalisasi internet stabil tanpa lelet, pembagian bandwidth QoS, failover multi-ISP, dan VPN antar kantor cabang.
- [Jasa Audit & Pengamanan Website Anti-Hack](https://xsur.my.id/#projects): Pemeriksaan celah keamanan web dan API sebelum dibobol hacker, proteksi Cloudflare, dan perbaikan situs kena retas.
- [Jasa Pembuatan Bot WhatsApp & Telegram](https://xsur.my.id/#projects): Asisten otomatis 24 jam untuk balas chat pelanggan, kirim notifikasi pesanan, dan cek mutasi pembayaran.
- [Jasa Integrasi Pembayaran QRIS Otomatis](https://xsur.my.id/#projects): Terima pembayaran QRIS dari semua bank dan e-wallet dengan status lunas instan otomatis.
- [Jasa Pembuatan Website Perusahaan & Toko Online](https://xsur.my.id/#projects): Website cepat, elegan, responsif HP, dan terdaftar resmi di Google SEO.
- [Konsultasi IT & Asistensi Coding](https://xsur.my.id/#projects): Bimbingan teknis pemrograman, perancangan software, dan konsultasi privat bersama Bang Mansur.

## Tautan Resmi

- [Website Resmi XSUR](https://xsur.my.id): Halaman utama portal solusi IT dan portofolio layanan.
- [XSUR Webmail Korporat](https://mail.xsur.my.id): Sistem webmail email resmi perusahaan.
- [Sitemap XML](https://xsur.my.id/sitemap.xml): Indeks peta situs untuk mesin pencari.
- [Kontak WhatsApp](https://wa.me/62857100055554): Layanan konsultasi langsung via WhatsApp.
- [Kontak Telegram](https://t.me/premium2in): Diskusi proyek dan konsultasi via Telegram.
`;
      return new Response(llmsText, {
        headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=86400" }
      });
    }

    // Agentic Resource Discovery (ARD 2026 Standard)
    if (path === "/.well-known/ard.json") {
      const ardData = {
        "version": "1.0",
        "name": "PT Xecure Siber Unggul Resolusi",
        "description": "Solusi IT Lengkap untuk Semua Kebutuhan Bisnis, Kantor, UMKM & Personal",
        "url": "https://xsur.my.id",
        "contact": "contact@xsur.my.id",
        "resources": [
          {
            "name": "llms.txt",
            "url": "https://xsur.my.id/llms.txt",
            "type": "text/markdown",
            "description": "AI-readable description of IT services and competencies"
          },
          {
            "name": "sitemap.xml",
            "url": "https://xsur.my.id/sitemap.xml",
            "type": "application/xml",
            "description": "Index of all public portal endpoints"
          }
        ]
      };
      return Response.json(ardData, {
        headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=86400" }
      });
    }

    // Public Stats API for Live Counter
    if (path === "/api/public/stats") {
      let stats = {
        today_views: 284,
        month_views: 7840,
        total_views: 52190,
        active_consultations: 7,
        completed_projects: 432,
        client_satisfaction: 99.8
      };
      if (env.DB) {
        try {
          const row = await env.DB.prepare("SELECT today_views, month_views, total_views, active_consultations, completed_projects, client_satisfaction FROM xsur_stats WHERE id = 'main'").first();
          if (row) stats = row;
        } catch (e) {}
      }
      return Response.json({
        today_views: stats.today_views,
        month_views: stats.month_views,
        total_views: stats.total_views,
        active_consultations: stats.active_consultations,
        completed_projects: stats.completed_projects,
        client_satisfaction: stats.client_satisfaction
      }, {
        headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "no-cache" }
      });
    }

    if (path === "/api/public/ping") {
      return Response.json({
        status: "ok",
        timestamp: Date.now()
      }, {
        headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "no-cache" }
      });
    }

    // 2. Fetch Dynamic Data from D1 Database
    let menus = [];
    let siteConfig = {};
    let projects = [];

    try {
      const menuRows = await env.DB.prepare(
        "SELECT * FROM xsur_nav_menus WHERE is_active = 1 ORDER BY sort_order ASC"
      ).all();
      menus = menuRows.results || [];

      const configRows = await env.DB.prepare("SELECT key, value FROM xsur_site_config").all();
      (configRows.results || []).forEach(r => {
        siteConfig[r.key] = r.value;
      });

      const projRows = await env.DB.prepare(
        "SELECT * FROM xsur_projects WHERE is_active = 1 ORDER BY sort_order ASC"
      ).all();
      if (projRows.results && projRows.results.length > 0) {
        projects = projRows.results;
      } else {
        projects = DEFAULT_PROJECTS;
      }
    } catch (e) {
      console.error("D1 Fetch Error:", e);
      projects = DEFAULT_PROJECTS;
    }

    // ==========================================
    // 2.5. XSUR LINK SHIELD SHORTENER & GATEWAY
    // ==========================================

    // Dynamic SafeLink Resolution (/link/<slug>, /link-<slug>, /l/<slug>)
    if ((path.startsWith("/link/") && path !== "/link/" && path !== "/link/admin" && path !== "/link/dashboard") || path.startsWith("/link-") || path.startsWith("/l/")) {
      let slug = "";
      if (path.startsWith("/link/")) slug = path.slice(6);
      else if (path.startsWith("/link-")) slug = path.slice(6);
      else if (path.startsWith("/l/")) slug = path.slice(3);

      slug = slug.split("/")[0].split("?")[0].trim().toLowerCase();

      if (slug && slug !== "admin" && slug !== "dashboard") {
        if (env.DB) {
          try {
            const linkRow = await env.DB.prepare(
              "SELECT * FROM xsur_shortlinks WHERE slug = ? AND status = 'active'"
            ).bind(slug).first();

            if (linkRow) {
              // Asynchronous non-blocking visitor click tracking
              if (ctx && ctx.waitUntil) {
                ctx.waitUntil(
                  env.DB.prepare(
                    "UPDATE xsur_shortlinks SET clicks = clicks + 1, last_visited_at = CURRENT_TIMESTAMP WHERE id = ?"
                  ).bind(linkRow.id).run()
                );
              } else {
                await env.DB.prepare(
                  "UPDATE xsur_shortlinks SET clicks = clicks + 1, last_visited_at = CURRENT_TIMESTAMP WHERE id = ?"
                ).bind(linkRow.id).run();
              }

              // Check if direct redirect is explicitly requested via ?direct=1
              if (url.searchParams.get("direct") === "1") {
                return Response.redirect(linkRow.destination_url, 302);
              }

              // Pick dynamic SEO keyword (use link's own or dynamically rotate prioritizing Pekanbaru & Kota Besar)
              let activeSeo = linkRow.seo_keyword;
              if (!activeSeo && env.DB) {
                try {
                  const randomSeo = await env.DB.prepare(
                    "SELECT keyword FROM xsur_seo_keywords WHERE status = 'active' ORDER BY weight DESC, RANDOM() LIMIT 1"
                  ).first();
                  if (randomSeo && randomSeo.keyword) activeSeo = randomSeo.keyword;
                } catch(e) {}
              }
              if (!activeSeo) activeSeo = getRandomSeoQuery();

              const html = renderSafeLinkGateway({
                slug: linkRow.slug,
                destinationUrl: linkRow.destination_url,
                title: linkRow.title,
                seoKeyword: activeSeo
              });
              return new Response(html, {
                headers: {
                  "Content-Type": "text/html; charset=utf-8",
                  "Cache-Control": "no-store, no-cache, must-revalidate"
                }
              });
            }
          } catch (err) {
            console.error("Shortlink D1 lookup error:", err);
          }
        }

        // Slug not found -> return friendly 404
        return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tautan Tidak Ditemukan // XSUR Link Shield</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <style>
    body { background: #06090e; color: #f8fafc; font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; }
    .box { background: rgba(13, 19, 33, 0.9); border: 1px solid rgba(244, 63, 94, 0.4); padding: 40px; border-radius: 16px; max-width: 480px; box-shadow: 0 10px 40px rgba(0,0,0,0.6); }
    h1 { color: #fb7185; font-size: 22px; margin-bottom: 12px; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
    a { display: inline-block; background: #00f2fe; color: #05080f; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; }
  </style>
</head>
<body>
  <div class="box">
    <h1>⚠️ Tautan Tidak Ditemukan</h1>
    <p>Shortlink <code>/link/${slug}</code> yang Anda tuju tidak terdaftar atau sudah dinonaktifkan oleh sistem keamanan XSUR Link Shield.</p>
    <a href="https://xsur.my.id">← Kembali ke Beranda XSUR</a>
  </div>
</body>
</html>`, {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8" }
        });
      }
    }

    // Link Management Dashboard & Public Generator (/link, /link/dashboard, /link/admin)
    if (path === "/link" || path === "/link/" || path === "/link/admin" || path === "/link/dashboard") {
      const isAuth = await verifyAdminAuth(request, env);
      const clientIp = request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown";
      let errorMsg = url.searchParams.get("error") || "";
      const successMsg = url.searchParams.get("success") || "";
      const createdSlug = url.searchParams.get("created") || "";

      // Khusus Akses Dashboard Admin (/link/admin atau /link/dashboard)
      if (path === "/link/admin" || path === "/link/dashboard") {
        if (!isAuth) {
          // Periksa apakah IP sedang diblokir
          if (env.DB) {
            try {
              const banCheck = await env.DB.prepare(
                "SELECT * FROM xsur_admin_login_attempts WHERE ip = ? AND banned_until IS NOT NULL AND banned_until > datetime('now')"
              ).bind(clientIp).first();
              if (banCheck) {
                errorMsg = "IP Anda sedang diblokir selama 1 jam karena 3x salah password.";
              }
            } catch(e) {}
          }
          return new Response(renderAdminLoginForm({ error: errorMsg }), {
            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
          });
        }

        // Jika terautentikasi -> tampilkan Dashboard Admin Lengkap
        let links = [];
        let seoKeywords = [];
        if (env.DB) {
          try {
            const [linkRows, seoRows] = await Promise.all([
              env.DB.prepare("SELECT * FROM xsur_shortlinks ORDER BY id DESC").all(),
              env.DB.prepare("SELECT * FROM xsur_seo_keywords ORDER BY weight DESC, id DESC").all()
            ]);
            links = linkRows.results || [];
            seoKeywords = seoRows.results || [];
          } catch (e) {
            console.error("D1 Fetch shortlinks/seo error:", e);
          }
        }
        return new Response(renderAdminLinkDashboard({ links, seoKeywords, error: errorMsg, success: successMsg }), {
          headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
        });
      }

      // Halaman Pengguna Publik (/link) dengan ikon login samar di navbar
      return new Response(renderPublicLinkPage({ createdSlug, error: errorMsg, success: successMsg }), {
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
      });
    }

    // Link Dashboard Auth & Actions API dengan Rate Limiting 3x Gagal -> Ban 1 Jam + Telegram Alert
    if (path === "/api/link/login" && method === "POST") {
      const clientIp = request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown";
      const userAgent = request.headers.get("user-agent") || "Perangkat Tidak Dikenal";

      // 1. Cek apakah IP sedang di-banned
      if (env.DB) {
        try {
          const banCheck = await env.DB.prepare(
            "SELECT * FROM xsur_admin_login_attempts WHERE ip = ? AND banned_until IS NOT NULL AND banned_until > datetime('now')"
          ).bind(clientIp).first();

          if (banCheck) {
            return new Response(null, {
              status: 302,
              headers: { "Location": "/link/dashboard?error=IP+Anda+sedang+diblokir+selama+1+jam+karena+3x+salah+password." }
            });
          }
        } catch (e) {
          console.error("Ban check error:", e);
        }
      }

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
        // Login Sukses: Bersihkan catatan kegagalan untuk IP ini
        if (env.DB) {
          try {
            await env.DB.prepare("DELETE FROM xsur_admin_login_attempts WHERE ip = ?").bind(clientIp).run();
          } catch(e) {}
        }

        const sessionId = "sess_" + crypto.randomUUID().replace(/-/g, "") + "_" + Date.now();
        await env.DB.prepare(
          "INSERT INTO xsur_admin_sessions (session_id, expires_at) VALUES (?, datetime('now', '+7 days'))"
        ).bind(sessionId).run();

        const headers = new Headers();
        headers.set("Set-Cookie", `xsur_auth=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`);
        headers.set("Location", "/link/dashboard?success=Login+berhasil+ke+Dashboard+Admin");
        return new Response(null, { status: 302, headers });
      } else {
        // Password Salah: Catat dan hitung percobaan
        let attempts = 1;
        if (env.DB) {
          try {
            await env.DB.prepare(`
              INSERT INTO xsur_admin_login_attempts (ip, attempts, last_attempt_at, user_agent)
              VALUES (?, 1, datetime('now'), ?)
              ON CONFLICT(ip) DO UPDATE SET 
                attempts = attempts + 1,
                last_attempt_at = datetime('now'),
                user_agent = excluded.user_agent
            `).bind(clientIp, userAgent).run();

            const row = await env.DB.prepare("SELECT attempts FROM xsur_admin_login_attempts WHERE ip = ?").bind(clientIp).first();
            if (row && row.attempts) attempts = row.attempts;
          } catch (e) {
            console.error("Record attempt error:", e);
          }
        }

        if (attempts >= 3) {
          // BANNED IP 1 JAM & KIRIM NOTIFIKASI TELEGRAM KE BIGBOS
          if (env.DB) {
            try {
              await env.DB.prepare(
                "UPDATE xsur_admin_login_attempts SET banned_until = datetime('now', '+1 hour') WHERE ip = ?"
              ).bind(clientIp).run();
            } catch(e) {}
          }

          const botToken = siteConfig.telegram_alert_bot_token;
          const chatId = siteConfig.telegram_alert_chat_id || "682723201";
          if (botToken && chatId) {
            const timeWib = new Date(Date.now() + 7 * 3600 * 1000).toISOString().replace("T", " ").slice(0, 19) + " WIB";
            const alertMsg = `🚨 <b>[PERINGATAN KEAMANAN] IP DIBLOKIR 1 JAM</b>

` +
              `Terdeteksi <b>3x percobaan salah password</b> pada login admin XSUR Link Shield!

` +
              `🌐 <b>Alamat IP:</b> <code>${clientIp}</code>
` +
              `📱 <b>Perangkat / Device:</b> <code>${userAgent}</code>
` +
              `⏰ <b>Waktu Kejadian:</b> ${timeWib}
` +
              `🛡️ <b>Tindakan:</b> IP otomatis diblokir selama 1 jam dari sistem.`;

            const sendAlert = fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: chatId, text: alertMsg, parse_mode: "HTML" })
            }).catch(err => console.error("Telegram alert err:", err));

            if (ctx && ctx.waitUntil) {
              ctx.waitUntil(sendAlert);
            }
          }

          return new Response(null, {
            status: 302,
            headers: { "Location": "/link/dashboard?error=IP+Anda+diblokir+selama+1+jam+karena+3x+salah+password!+Notifikasi+telah+dikirimkan+ke+Telegram+pemilik." }
          });
        } else {
          const remaining = 3 - attempts;
          return new Response(null, {
            status: 302,
            headers: { "Location": `/link/dashboard?error=Password+salah!+Sisa+percobaan:+${remaining}+kali+sebelum+IP+diblokir+1+jam.` }
          });
        }
      }
    }

    if (path === "/api/link/logout" || path === "/api/admin/logout") {
      const headers = new Headers();
      headers.set("Set-Cookie", "xsur_auth=deleted; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0");
      headers.set("Location", "/link?success=Berhasil+keluar+dari+admin");
      return new Response(null, { status: 302, headers });
    }

    // Public and Admin Link Generator
    if (path === "/api/link/create" && method === "POST") {
      const isAuth = await verifyAdminAuth(request, env);

      let destUrl = "";
      let title = "";
      let customSlug = "";
      let seoKeyword = "";

      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await request.json();
        destUrl = (body.destination_url || "").trim();
        title = (body.title || "").trim();
        customSlug = (body.custom_slug || "").trim();
        seoKeyword = (body.seo_keyword || "").trim();
      } else {
        const formData = await request.formData();
        destUrl = (formData.get("destination_url") || "").trim();
        title = (formData.get("title") || "").trim();
        customSlug = (formData.get("custom_slug") || "").trim();
        seoKeyword = (formData.get("seo_keyword") || "").trim();
      }

      const redirectBase = isAuth ? "/link/dashboard" : "/link";

      if (!destUrl) {
        return new Response(null, { status: 302, headers: { "Location": `${redirectBase}?error=URL+tujuan+wajib+diisi` } });
      }
      if (!destUrl.startsWith("http://") && !destUrl.startsWith("https://")) {
        destUrl = "https://" + destUrl;
      }

      let finalSlug = "";
      if (customSlug) {
        finalSlug = customSlug.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 32);
      }
      if (!finalSlug) {
        finalSlug = generateRandomSlug(10);
      }

      // Auto-assign high quality SEO keyword from rotated list (prioritizing Pekanbaru & Kota Besar)
      if (!seoKeyword && env.DB) {
        try {
          const randomSeo = await env.DB.prepare(
            "SELECT keyword FROM xsur_seo_keywords WHERE status = 'active' ORDER BY weight DESC, RANDOM() LIMIT 1"
          ).first();
          if (randomSeo && randomSeo.keyword) seoKeyword = randomSeo.keyword;
        } catch(e) {}
      }
      if (!seoKeyword) {
        seoKeyword = getRandomSeoQuery();
      }

      try {
        await env.DB.prepare(`
          INSERT INTO xsur_shortlinks (slug, destination_url, title, seo_keyword, clicks, status)
          VALUES (?, ?, ?, ?, 0, 'active')
        `).bind(finalSlug, destUrl, title, seoKeyword).run();

        if (isAuth) {
          return new Response(null, { status: 302, headers: { "Location": `/link/dashboard?success=Shortlink+berhasil+dibuat:+/link/${finalSlug}` } });
        } else {
          return new Response(null, { status: 302, headers: { "Location": `/link?created=${finalSlug}` } });
        }
      } catch (err) {
        console.error("D1 Create shortlink error:", err);
        return new Response(null, { status: 302, headers: { "Location": `${redirectBase}?error=Slug+sudah+digunakan+atau+terjadi+kesalahan` } });
      }
    }

    // Admin Delete Link
    if (path === "/api/link/delete" && method === "POST") {
      const isAuth = await verifyAdminAuth(request, env);
      if (!isAuth) {
        return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?error=Unauthorized" } });
      }

      let slug = "";
      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await request.json();
        slug = (body.slug || "").trim();
      } else {
        const formData = await request.formData();
        slug = (formData.get("slug") || "").trim();
      }

      if (slug) {
        await env.DB.prepare("DELETE FROM xsur_shortlinks WHERE slug = ?").bind(slug).run();
      }
      return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?success=Shortlink+berhasil+dihapus" } });
    }

    // Admin Add SEO Keyword (Mendukung prioritas Pekanbaru / Kota Besar)
    if (path === "/api/link/seo/add" && method === "POST") {
      const isAuth = await verifyAdminAuth(request, env);
      if (!isAuth) {
        return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?error=Unauthorized" } });
      }

      let keyword = "";
      let priority = "1";
      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await request.json();
        keyword = (body.keyword || "").trim();
        priority = String(body.priority || "1");
      } else {
        const formData = await request.formData();
        keyword = (formData.get("keyword") || "").trim();
        priority = String(formData.get("priority") || "1");
      }

      if (!keyword) {
        return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?error=Keyword+tidak+boleh+kosong" } });
      }

      const weight = (priority === "2" || keyword.toLowerCase().includes("pekanbaru")) ? 2 : 1;

      try {
        await env.DB.prepare(
          "INSERT INTO xsur_seo_keywords (keyword, weight, clicks, status) VALUES (?, ?, 0, 'active') ON CONFLICT(keyword) DO UPDATE SET weight = excluded.weight"
        ).bind(keyword, weight).run();
        return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?success=Target+Keyword+SEO+berhasil+ditambahkan" } });
      } catch (err) {
        console.error("D1 Add SEO error:", err);
        return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?error=Gagal+menambahkan+keyword" } });
      }
    }

    // Admin Delete SEO Keyword
    if (path === "/api/link/seo/delete" && method === "POST") {
      const isAuth = await verifyAdminAuth(request, env);
      if (!isAuth) {
        return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?error=Unauthorized" } });
      }

      let id = "";
      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await request.json();
        id = body.id;
      } else {
        const formData = await request.formData();
        id = formData.get("id");
      }

      if (id) {
        await env.DB.prepare("DELETE FROM xsur_seo_keywords WHERE id = ?").bind(id).run();
      }
      return new Response(null, { status: 302, headers: { "Location": "/link/dashboard?success=Target+SEO+berhasil+dihapus" } });
    }

    // 3. Admin Authentication & Dashboard
    if (path === "/admin") {
      const isAuth = await verifyAdminAuth(request, env);
      const allMenus = isAuth ? (await env.DB.prepare("SELECT * FROM xsur_nav_menus ORDER BY sort_order ASC").all()).results || [] : [];
      const allProjects = isAuth ? (await env.DB.prepare("SELECT * FROM xsur_projects ORDER BY sort_order ASC").all()).results || [] : [];
      const displayProjects = allProjects.length > 0 ? allProjects : projects;
      const html = renderAdminPage({ isAuthenticated: isAuth, menus: allMenus, siteConfig, projects: displayProjects });
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
          projects: DEFAULT_PROJECTS,
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

      // Projects CRUD
      if (path === "/api/admin/projects" && method === "POST") {
        const body = await request.json();
        const { id, category, title, summary, badge, sort_order, tech_stack, url, target } = body;

        if (id) {
          await env.DB.prepare(`
            UPDATE xsur_projects
            SET category = ?, title = ?, summary = ?, badge = ?, sort_order = ?, tech_stack = ?, url = ?, target = ?
            WHERE id = ?
          `).bind(category, title, summary, badge || "", sort_order || 1, tech_stack || "", url, target || "_blank", id).run();
        } else {
          await env.DB.prepare(`
            INSERT INTO xsur_projects (category, title, summary, badge, sort_order, tech_stack, url, target, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
          `).bind(category, title, summary, badge || "", sort_order || 1, tech_stack || "", url, target || "_blank").run();
        }
        return Response.json({ success: true });
      }

      if (path.startsWith("/api/admin/projects/") && method === "DELETE") {
        const id = parseInt(path.split("/").pop());
        await env.DB.prepare("DELETE FROM xsur_projects WHERE id = ?").bind(id).run();
        return Response.json({ success: true });
      }

      // Site Config & SEO Update
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

    // 5. Real-Time Visitor Counter & Operational Metrics Tracking in D1
    const now = new Date();
    const todayDate = now.toISOString().slice(0, 10);
    const monthDate = now.toISOString().slice(0, 7);

    let stats = {
      today_views: 284,
      month_views: 7840,
      total_views: 52190,
      active_consultations: 7,
      completed_projects: 432,
      client_satisfaction: 99.8
    };

    if (env.DB) {
      try {
        await env.DB.prepare(`
          UPDATE xsur_stats
          SET 
            today_views = CASE WHEN today_date = ? THEN today_views + 1 ELSE 1 END,
            today_date = ?,
            month_views = CASE WHEN month_date = ? THEN month_views + 1 ELSE 1 END,
            month_date = ?,
            total_views = total_views + 1,
            updated_at = CURRENT_TIMESTAMP
          WHERE id = 'main'
        `).bind(todayDate, todayDate, monthDate, monthDate).run();

        const row = await env.DB.prepare("SELECT * FROM xsur_stats WHERE id = 'main'").first();
        if (row) stats = row;
      } catch (err) {
        console.error("Visitor tracking error:", err);
      }
    }

    // 6. Default Public Landing Page
    const canonicalUrl = `https://xsur.my.id`;
    const publicHtml = renderPublicPage({ menus, siteConfig, projects, stats, canonicalUrl });
    return new Response(publicHtml, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300"
      }
    });
  }
};
