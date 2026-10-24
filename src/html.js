// Public UI Template for PT Xecure Siber Unggul Resolusi (xsur.my.id)
import { SVG_HORIZONTAL, SVG_ICON, LOGO_PHILOSOPHY } from "./logo.js";
import { generateSeoTags } from "./seo.js";
import { PROJECT_CATEGORIES, DEFAULT_PROJECTS } from "./projects.js";

export function renderPublicPage({ menus, siteConfig, projects = DEFAULT_PROJECTS, canonicalUrl }) {
  const seoHead = generateSeoTags({ siteConfig, canonicalUrl });
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const brandName = siteConfig.brand_name || "XSUR";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const founderTitle = siteConfig.founder_title || "Founder & Chief Security Architect";
  const founderEdu = siteConfig.founder_edu || "Master of Computer Science (S2 Magister Ilmu Komputer)";
  const founderImg = siteConfig.founder_image || "https://i.ibb.co.com/LXK49TZc/unamed.png";
  const waUrl = siteConfig.contact_whatsapp || "https://wa.me/62857100055554";
  const tgUrl = siteConfig.contact_telegram || "https://t.me/premium2in";
  const email = siteConfig.contact_email || "contact@xsur.my.id";
  const intergramChatId = siteConfig.intergram_chat_id || "682723201";
  const intergramEnabled = siteConfig.intergram_enabled !== "0";

  // Build Desktop & Mobile Menus
  const parentMenus = menus.filter(m => !m.parent_id);
  
  // Desktop Nav HTML
  const navHtml = parentMenus.map(m => {
    if (m.is_dropdown) {
      const children = menus.filter(c => c.parent_id === m.id);
      return `
        <div class="nav-dropdown-wrapper">
          <button class="nav-item nav-dropdown-btn" aria-expanded="false">
            <span>${m.label}</span>
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="nav-dropdown-menu">
            ${children.map(c => `
              <a href="${c.url}" target="${c.target}" class="dropdown-item">
                <div class="dropdown-item-content">
                  <div class="dropdown-item-title">
                    <span>${c.label}</span>
                    ${c.badge ? `<span class="badge ${c.badge.toLowerCase()}">${c.badge}</span>` : ''}
                  </div>
                  ${c.description ? `<p class="dropdown-item-desc">${c.description}</p>` : ''}
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      return `<a href="${m.url}" target="${m.target}" class="nav-item">${m.label}</a>`;
    }
  }).join('');

  // Mobile Drawer HTML
  const mobileNavHtml = parentMenus.map(m => {
    if (m.is_dropdown) {
      const children = menus.filter(c => c.parent_id === m.id);
      return `
        <div class="mob-dropdown-group">
          <div class="mob-dropdown-header" onclick="toggleMobDropdown(this)">
            <span>${m.label}</span>
            <svg class="mob-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="mob-dropdown-body">
            ${children.map(c => `
              <a href="${c.url}" target="${c.target}" class="mob-dropdown-link" onclick="closeMobMenu()">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                  <span style="font-weight:600; color:#fff;">${c.label}</span>
                  ${c.badge ? `<span class="badge ${c.badge.toLowerCase()}">${c.badge}</span>` : ''}
                </div>
                ${c.description ? `<div style="font-size:11px; color:#64748b; margin-top:2px;">${c.description}</div>` : ''}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      return `<a href="${m.url}" target="${m.target}" class="mob-nav-link" onclick="closeMobMenu()">${m.label}</a>`;
    }
  }).join('');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <link rel="icon" type="image/png" sizes="32x32" href="/logo.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/logo.png">
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ${seoHead}
  <style>
    :root {
      --bg: #07090e;
      --bg-card: rgba(14, 18, 27, 0.75);
      --bg-surface: #0e131d;
      --border: rgba(255, 255, 255, 0.08);
      --border-focus: rgba(0, 242, 254, 0.4);
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --cyan: #00f2fe;
      --cyan-dim: rgba(0, 242, 254, 0.12);
      --cyan-glow: rgba(0, 242, 254, 0.25);
      --white: #ffffff;
      --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; background-color: var(--bg); }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      overflow-x: hidden;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      position: relative;
    }

    .ambient-bg {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 15% 15%, rgba(0, 242, 254, 0.04) 0%, transparent 40%),
                  radial-gradient(circle at 85% 85%, rgba(0, 114, 255, 0.04) 0%, transparent 40%),
                  radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.8) 0%, transparent 100%);
      pointer-events: none;
      z-index: 0;
    }

    .grid-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }

    /* Header & Navigation */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      background: rgba(7, 9, 14, 0.85);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }
    .brand-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: var(--white);
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .nav-item {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 13.5px;
      font-weight: 600;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 10px;
      border-radius: 6px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
    }
    .nav-item:hover { color: var(--cyan); }

    /* Dropdown */
    .nav-dropdown-wrapper { position: relative; }
    .nav-dropdown-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      min-width: 290px;
      background: rgba(14, 19, 29, 0.98);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(20px);
      display: none;
      z-index: 110;
      animation: fadeIn 0.18s ease;
    }
    .nav-dropdown-wrapper:hover .nav-dropdown-menu,
    .nav-dropdown-wrapper:focus-within .nav-dropdown-menu { display: block; }
    .dropdown-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .dropdown-item:hover { background: rgba(0, 242, 254, 0.08); }
    .dropdown-item-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13.5px;
      font-weight: 600;
      color: var(--white);
    }
    .dropdown-item:hover .dropdown-item-title { color: var(--cyan); }
    .dropdown-item-desc {
      font-size: 12px;
      color: #64748b;
      margin-top: 3px;
      line-height: 1.4;
    }

    .badge {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      font-family: var(--font-mono);
      display: inline-block;
    }
    .badge.portal { background: rgba(0, 242, 254, 0.15); color: var(--cyan); border: 1px solid rgba(0, 242, 254, 0.3); }
    .badge.enterprise, .badge.high-throughput { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
    .badge.official, .badge.resmi { background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
    .badge.fintech { background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }

    .btn-header-cta {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--cyan-dim);
      border: 1px solid var(--border-focus);
      color: var(--cyan);
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;
      font-family: var(--font-mono);
    }
    .btn-header-cta:hover {
      background: var(--cyan);
      color: #07090e;
      box-shadow: 0 0 20px var(--cyan-glow);
    }

    /* Mobile Hamburger & Drawer */
    .btn-hamburger {
      display: none;
      background: none;
      border: 1px solid var(--border);
      color: var(--text);
      padding: 7px;
      border-radius: 8px;
      cursor: pointer;
    }
    .mobile-drawer {
      display: none;
      position: fixed;
      top: 72px;
      left: 0;
      right: 0;
      background: rgba(10, 14, 22, 0.98);
      border-bottom: 1px solid var(--border);
      padding: 20px;
      z-index: 99;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(20px);
      max-height: calc(100vh - 72px);
      overflow-y: auto;
    }
    .mobile-drawer.open { display: block; animation: slideDown 0.2s ease; }
    .mob-nav-link {
      display: block;
      padding: 12px 14px;
      color: #fff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
      border-radius: 8px;
      margin-bottom: 6px;
    }
    .mob-nav-link:hover { background: rgba(255, 255, 255, 0.05); color: var(--cyan); }
    .mob-dropdown-group { margin-bottom: 8px; border-radius: 8px; overflow: hidden; background: rgba(255, 255, 255, 0.02); }
    .mob-dropdown-header {
      padding: 12px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }
    .mob-dropdown-body { display: none; padding: 4px 12px 12px; }
    .mob-dropdown-group.active .mob-dropdown-body { display: block; }
    .mob-dropdown-link {
      display: block;
      padding: 10px;
      text-decoration: none;
      border-radius: 6px;
      margin-bottom: 4px;
      background: rgba(0, 0, 0, 0.2);
    }

    /* Hero Section */
    .hero {
      padding: 90px 0 60px;
      position: relative;
    }
    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(0, 242, 254, 0.08);
      border: 1px solid rgba(0, 242, 254, 0.25);
      color: var(--cyan);
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 24px;
      letter-spacing: 0.5px;
    }
    .hero-tag .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--cyan);
      box-shadow: 0 0 8px var(--cyan);
      animation: pulse 2s infinite;
    }
    .hero-title {
      font-size: clamp(34px, 5.5vw, 64px);
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1.08;
      color: var(--white);
      max-width: 950px;
      margin-bottom: 24px;
    }
    .hero-title .gradient-text {
      background: linear-gradient(135deg, #ffffff 40%, var(--cyan) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-desc {
      font-size: clamp(16px, 2vw, 18px);
      color: var(--text-muted);
      max-width: 760px;
      line-height: 1.6;
      margin-bottom: 36px;
    }
    .hero-actions {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }
    .btn-primary {
      background: var(--cyan);
      color: #07090e;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14.5px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 0 25px var(--cyan-glow);
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 35px rgba(0, 242, 254, 0.5);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.04);
      color: var(--white);
      border: 1px solid var(--border);
      padding: 14px 26px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14.5px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Live Telemetry Bar */
    .telemetry-bar {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 14px 22px;
      background: rgba(14, 19, 29, 0.6);
      border: 1px solid var(--border);
      border-radius: 10px;
      font-family: var(--font-mono);
      font-size: 12px;
      color: #64748b;
      flex-wrap: wrap;
    }
    .telemetry-item { display: flex; align-items: center; gap: 8px; }
    .telemetry-val { color: var(--cyan); font-weight: 600; }

    /* Section Headers */
    .section-head {
      margin-top: 80px;
      margin-bottom: 36px;
    }
    .section-tag {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--cyan);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
      display: block;
    }
    .section-title {
      font-size: clamp(26px, 3.5vw, 38px);
      font-weight: 800;
      color: var(--white);
      letter-spacing: -0.5px;
      margin-bottom: 12px;
    }
    .section-desc {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 680px;
      line-height: 1.6;
    }

    /* Founder Card (Monochrome Anonymous) */
    .founder-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 36px;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 36px;
      align-items: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }
    .founder-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, var(--cyan), transparent);
    }
    .founder-img-box {
      position: relative;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .founder-halo {
      position: absolute;
      top: -8px; left: -8px; right: -8px; bottom: -8px;
      border-radius: 50%;
      border: 1.5px dashed rgba(0, 242, 254, 0.4);
      animation: rotateHalo 25s linear infinite;
    }
    .founder-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      filter: grayscale(100%) contrast(125%) brightness(95%);
      border: 2px solid rgba(255, 255, 255, 0.15);
      background: #000;
    }
    .founder-badge-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }
    .founder-pill {
      font-family: var(--font-mono);
      font-size: 11.5px;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: #cbd5e1;
    }

    /* Standards & Frameworks Matrix */
    .standards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-top: 24px;
    }
    .standard-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
    }
    .standard-card:hover {
      border-color: var(--border-focus);
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 242, 254, 0.08);
    }
    .standard-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(0, 242, 254, 0.08);
      border: 1px solid rgba(0, 242, 254, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--cyan);
      margin-bottom: 16px;
      font-size: 20px;
    }
    .standard-title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
    }
    .standard-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    /* Interactive Category Filter */
    .filter-wrapper {
      margin-top: 24px;
      margin-bottom: 28px;
      overflow-x: auto;
      padding-bottom: 8px;
    }
    .filter-bar {
      display: inline-flex;
      background: rgba(14, 19, 29, 0.8);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 5px;
      gap: 4px;
    }
    .filter-pill {
      background: none;
      border: none;
      color: #94a3b8;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .filter-pill:hover { color: #fff; }
    .filter-pill.active {
      background: var(--cyan-dim);
      color: var(--cyan);
      border: 1px solid rgba(0, 242, 254, 0.3);
      box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
    }

    /* Projects Grid */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 24px;
    }
    .project-card-item {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }
    .project-card-item:hover {
      border-color: var(--border-focus);
      transform: translateY(-4px);
      box-shadow: 0 15px 35px rgba(0, 242, 254, 0.1);
    }
    .proj-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
    }
    .proj-cat-badge {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 700;
      color: var(--cyan);
      letter-spacing: 1px;
    }
    .proj-title {
      font-size: 17px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
      line-height: 1.35;
    }
    .proj-summary {
      font-size: 13.5px;
      color: #94a3b8;
      line-height: 1.55;
      margin-bottom: 18px;
    }
    .proj-tech-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 20px;
    }
    .proj-tech-chip {
      font-family: var(--font-mono);
      font-size: 10.5px;
      padding: 3px 8px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
    }
    .proj-footer {
      border-top: 1px solid var(--border);
      padding-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: var(--cyan);
      font-family: var(--font-mono);
    }

    /* Live Edge Diagnostics Sandbox */
    .diag-box {
      background: #080c14;
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      margin-top: 24px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    }
    .diag-header {
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid var(--border);
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 12px;
    }
    .diag-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid var(--border);
    }
    .diag-item {
      font-family: var(--font-mono);
      font-size: 12px;
    }
    .diag-label { color: #64748b; margin-bottom: 4px; font-size: 11px; }
    .diag-val { color: var(--cyan); font-weight: 700; word-break: break-all; }
    .diag-terminal {
      padding: 20px;
      font-family: var(--font-mono);
      font-size: 12.5px;
      color: #a7f3d0;
      line-height: 1.6;
      min-height: 140px;
      max-height: 240px;
      overflow-y: auto;
      background: #05080e;
    }

    /* Solution Estimator */
    .calc-box {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
      margin-top: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .calc-label {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--cyan);
      letter-spacing: 0.5px;
      margin-bottom: 10px;
      display: block;
    }
    .calc-btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }
    .calc-pill {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border);
      color: #94a3b8;
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 600;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .calc-pill:hover { color: #fff; }
    .calc-pill.active {
      background: var(--cyan-dim);
      border-color: rgba(0, 242, 254, 0.4);
      color: var(--cyan);
    }
    .calc-result-box {
      background: #05080e;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Gemini Logo Showcase */
    .logo-showcase {
      background: linear-gradient(135deg, rgba(14, 18, 27, 0.9) 0%, rgba(7, 9, 14, 0.95) 100%);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
      margin-top: 60px;
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 32px;
      align-items: center;
    }
    .logo-render-box {
      width: 120px;
      height: 120px;
      border-radius: 16px;
      background: rgba(0, 242, 254, 0.04);
      border: 1px solid rgba(0, 242, 254, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 25px rgba(0, 242, 254, 0.1);
    }

    /* Consultation CTA Card */
    .contact-card {
      background: radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.1) 0%, rgba(14, 18, 27, 0.8) 70%);
      border: 1px solid rgba(0, 242, 254, 0.2);
      border-radius: 16px;
      padding: 50px 30px;
      text-align: center;
      margin-top: 80px;
      margin-bottom: 80px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border);
      padding: 36px 0;
      background: #05070a;
      font-size: 13px;
      color: #64748b;
    }
    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .footer-admin-link {
      color: #64748b;
      text-decoration: none;
      font-family: var(--font-mono);
      font-size: 12px;
      transition: color 0.2s ease;
    }
    .footer-admin-link:hover { color: var(--cyan); }

    /* Intergram Live Chat Widget Custom Styling */
    #intergramRoot {
      font-family: var(--font-sans) !important;
      z-index: 2147483647 !important;
    }
    #intergramRoot > div {
      box-shadow: 0 0 25px rgba(0, 242, 254, 0.5) !important;
      border: 1px solid rgba(0, 242, 254, 0.4) !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    #intergramRoot > div:hover {
      transform: scale(1.08) !important;
      box-shadow: 0 0 35px rgba(0, 242, 254, 0.8) !important;
    }
    .intergram-hint {
      position: fixed;
      bottom: 84px;
      right: 22px;
      background: rgba(10, 14, 23, 0.94);
      border: 1px solid rgba(0, 242, 254, 0.4);
      color: var(--cyan);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 11px;
      font-family: var(--font-mono);
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
      z-index: 9999;
      cursor: pointer;
      backdrop-filter: blur(10px);
      transition: all 0.25s ease;
    }
    .intergram-hint:hover {
      border-color: var(--cyan);
      box-shadow: 0 0 20px rgba(0, 242, 254, 0.6);
      transform: translateY(-2px);
    }
    .intergram-hint .pulse-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--cyan);
      box-shadow: 0 0 8px var(--cyan);
      animation: pulse 1.8s infinite;
    }

    /* Animations */
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.9); }
    }
    @keyframes rotateHalo {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* FAQ Rich Accordion Styles (Google Structured Data & UX) */
    .faq-grid {
      display: grid;
      gap: 14px;
      max-width: 900px;
      margin: 0 auto 60px;
    }
    details.faq-item {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 18px 22px;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    details.faq-item[open] {
      border-color: rgba(0, 242, 254, 0.4);
      background: rgba(14, 19, 29, 0.95);
      box-shadow: 0 8px 32px rgba(0, 242, 254, 0.08);
    }
    details.faq-item summary {
      font-weight: 700;
      font-size: 15px;
      color: var(--white);
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      user-select: none;
    }
    details.faq-item summary::-webkit-details-marker {
      display: none;
    }
    details.faq-item summary::after {
      content: "+";
      font-family: var(--font-mono);
      font-size: 20px;
      line-height: 1;
      color: var(--cyan);
      flex-shrink: 0;
      transition: transform 0.2s ease;
    }
    details.faq-item[open] summary::after {
      content: "−";
      color: #38bdf8;
    }
    details.faq-item p {
      margin-top: 14px;
      font-size: 14px;
      line-height: 1.7;
      color: #94a3b8;
    }

    /* Responsive Breakpoints */
    @media (max-width: 900px) {
      .nav-links { display: none; }
      .btn-hamburger { display: block; }
      .founder-card { grid-template-columns: 1fr; text-align: center; }
      .founder-img-box { margin: 0 auto; }
      .founder-badge-grid { justify-content: center; }
      .calc-box { grid-template-columns: 1fr; }
      .logo-showcase { grid-template-columns: 1fr; text-align: center; }
      .logo-render-box { margin: 0 auto; }
    }
    @media (max-width: 600px) {
      .projects-grid { grid-template-columns: 1fr; }
      .container { padding: 0 16px; }
      .hero-actions a { width: 100%; justify-content: center; }
      .founder-img-box { width: 180px; height: 180px; }
      .intergram-hint { display: none; }
    }
  </style>
</head>
<body>
  <div class="ambient-bg"></div>
  <div class="grid-overlay"></div>

  <!-- Header -->
  <header>
    <div class="container nav-inner">
      <a href="/" class="brand-link">
        <div style="height: 38px; width: 135px;">
          ${SVG_HORIZONTAL}
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        ${navHtml}
        <a href="#standards" class="nav-item">Standar Siber</a>
        <a href="#diagnostic" class="nav-item">Audit Edge</a>
        <a href="#calculator" class="nav-item">Estimator</a>
        <a href="#faq" class="nav-item">FAQ</a>
        <a href="https://mail.xsur.my.id" target="_blank" class="nav-item" style="color: var(--cyan); font-weight: 600;">Webmail ↗</a>
        <a href="${waUrl}" target="_blank" class="btn-header-cta">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Diskusi Teknis
        </a>
      </nav>

      <!-- Hamburger Button -->
      <button class="btn-hamburger" onclick="toggleMobMenu()" aria-label="Toggle Navigation Menu">
        <svg id="ham-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobile-drawer" class="mobile-drawer">
    ${mobileNavHtml}
    <a href="#standards" class="mob-nav-link" onclick="closeMobMenu()">🛡️ Standar Siber Global</a>
    <a href="#diagnostic" class="mob-nav-link" onclick="closeMobMenu()">⚡ Live Edge Diagnostics</a>
    <a href="#calculator" class="mob-nav-link" onclick="closeMobMenu()">📊 Solution Estimator</a>
    <a href="#faq" class="mob-nav-link" onclick="closeMobMenu()">❓ Tanya Jawab (FAQ)</a>
    <a href="https://mail.xsur.my.id" target="_blank" class="mob-nav-link" onclick="closeMobMenu()" style="color: var(--cyan);">✉️ XSUR Webmail Suite ↗</a>
    <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
      <a href="${waUrl}" target="_blank" class="btn-primary" style="justify-content: center; width: 100%;">
        WhatsApp Direct (+62 857-1000-55554)
      </a>
      <a href="${tgUrl}" target="_blank" class="btn-secondary" style="justify-content: center; width: 100%;">
        Telegram DM (@premium2in)
      </a>
      <a href="/admin" class="btn-secondary" style="justify-content: center; width: 100%; font-size: 12px; color: #64748b;">
        ⚙️ Akses Panel Admin
      </a>
    </div>
  </div>

  <main class="container">
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-tag">
        <span class="dot"></span>
        <span>EDGE-DEPLOYED ZERO TRUST INFRASTRUCTURE</span>
      </div>
      <h1 class="hero-title">
        PT Xecure Siber Unggul Resolusi <span class="gradient-text">— Keamanan Siber, MikroTik &amp; Otomasi Enterprise</span>
      </h1>
      <p class="hero-desc">
        PT Xecure Siber Unggul Resolusi (XSUR) menghadirkan audit penetrasi (VAPT OWASP), arsitektur MikroTik enterprise multi-WAN berlatensi rendah, serta bot Telegram MTProto dan API Gateway berkapasitas throughput masif yang dipimpin langsung oleh Bang Mansur, S2 Magister Ilmu Komputer.
      </p>

      <div class="hero-actions">
        <a href="#projects" class="btn-primary">
          <span>Jelajahi Portofolio &amp; Solusi</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#diagnostic" class="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Uji Diagnostik Edge</span>
        </a>
        <a href="${waUrl}" target="_blank" class="btn-secondary">
          <span>Konsultasi Langsung</span>
        </a>
      </div>

      <!-- Live Edge Telemetry Bar -->
      <div class="telemetry-bar">
        <div class="telemetry-item">
          <span>EDGE NODE:</span>
          <span class="telemetry-val" id="tele-colo">SIN (Singapore)</span>
        </div>
        <div class="telemetry-item">
          <span>ROUND-TRIP:</span>
          <span class="telemetry-val" id="tele-lat">~14 ms</span>
        </div>
        <div class="telemetry-item">
          <span>SECURITY CONTEXT:</span>
          <span class="telemetry-val">WAF &bull; TLS 1.3 Strict &bull; HTTP/3</span>
        </div>
        <div class="telemetry-item">
          <span>INTEGRITY:</span>
          <span class="telemetry-val">Zero Plaintext Leaks</span>
        </div>
      </div>
    </section>

    <!-- Founder Section (Monochrome Anonymous) -->
    <section class="section-head" id="about">
      <span class="section-tag">LEADERSHIP &amp; EXPERTISE</span>
      <h2 class="section-title">Profil Founder &amp; Chief Architect</h2>
      <p class="section-desc">Kombinasi integritas akademik Magister Ilmu Komputer dengan pengalaman lapangan di garis depan pengamanan siber dan rekayasa jaringan.</p>
    </section>

    <div class="founder-card">
      <div class="founder-img-box">
        <div class="founder-halo"></div>
        <img src="${founderImg}" alt="${founderName}" class="founder-img" loading="lazy">
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 11.5px; color: var(--cyan); margin-bottom: 6px;">
          CHIEF EXECUTIVE &amp; SECURITY PRACTITIONER
        </div>
        <h3 style="font-size: 26px; font-weight: 800; color: var(--white); margin-bottom: 4px;">${founderName}</h3>
        <p style="font-size: 14px; color: #94a3b8; font-weight: 600; margin-bottom: 14px;">${founderEdu}</p>
        <p style="font-size: 14.5px; color: #cbd5e1; line-height: 1.6; margin-bottom: 18px;">
          "Menyatukan eksplorasi riset mendalam dengan reliabilitas operasional industri. Kami tidak hanya mengaudit kelemahan, tetapi merancang arsitektur sistematis agar infrastruktur tahan terhadap ancaman siber dan lonjakan trafik masif."
        </p>
        <div class="founder-badge-grid">
          <span class="founder-pill">🛡️ VAPT &amp; SecOps</span>
          <span class="founder-pill">🌐 MikroTik RouterOS Specialist</span>
          <span class="founder-pill">⚡ High-Throughput MTProto Bots</span>
          <span class="founder-pill">💳 FinTech &amp; H2H Gateway</span>
          <span class="founder-pill">🔍 Reverse Engineering &amp; Forensics</span>
        </div>
        <div style="margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="https://github.com/xyz-sur" target="_blank" class="btn-secondary" style="padding: 7px 15px; font-size: 12.5px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub @xyz-sur
          </a>
          <a href="https://t.me/premium2in" target="_blank" class="btn-secondary" style="padding: 7px 15px; font-size: 12.5px;">
            Telegram @premium2in
          </a>
        </div>
      </div>
    </div>

    <!-- Standards & Frameworks Matrix Section -->
    <section class="section-head" id="standards">
      <span class="section-tag">COMPLIANCE &amp; METHODOLOGY</span>
      <h2 class="section-title">Standar Siber &amp; Kerangka Kerja Global</h2>
      <p class="section-desc">Setiap solusi dan audit yang kami kerjakan mengacu secara ketat pada metodologi pengujian keamanan internasional dan rekayasa jaringan berstandar industri.</p>
    </section>

    <div class="standards-grid">
      <div class="standard-card">
        <div class="standard-icon">🛡️</div>
        <h3 class="standard-title">NIST CSF 2.0 &amp; SP 800-115</h3>
        <p class="standard-desc">Kerangka pengujian keamanan teknis menyeluruh mencakup fase Identifikasi, Proteksi, Deteksi anomali, Mitigasi respon insiden, hingga Pemulihan sistem secara cepat.</p>
      </div>
      <div class="standard-card">
        <div class="standard-icon">🔍</div>
        <h3 class="standard-title">OWASP ASVS &amp; Top 10 API</h3>
        <p class="standard-desc">Standardisasi audit kerentanan aplikasi web dan REST/GraphQL microservices dari Broken Object Level Authorization (BOLA), SQLi, SSRF, hingga Race Condition.</p>
      </div>
      <div class="standard-card">
        <div class="standard-icon">🌐</div>
        <h3 class="standard-title">MikroTik RouterOS v7 Core</h3>
        <p class="standard-desc">Arsitektur perutean enterprise berbasis dynamic routing BGP/OSPF, multi-WAN auto failover &lt;1 detik, bandwidth HTB Queue Tree, serta tunnel WireGuard &amp; OVPN terisolasi.</p>
      </div>
      <div class="standard-card">
        <div class="standard-icon">⚡</div>
        <h3 class="standard-title">Zero-Trust &amp; CAS Concurrency</h3>
        <p class="standard-desc">Pola transaksi atomik Compare-And-Swap (CAS) untuk pencegahan double-spend saldo, enkripsi sesi MTProto bot anti-spam, serta deployment edge Cloudflare tanpa cold-start.</p>
      </div>
    </div>

    <!-- Classified Projects & Solutions Section -->
    <section class="section-head" id="projects">
      <span class="section-tag">SOLUTIONS &amp; CLASSIFIED PORTFOLIO</span>
      <h2 class="section-title">Klasifikasi Portofolio &amp; Layanan</h2>
      <p class="section-desc">Pilihan spesialisasi terbagi dalam empat kluster kapabilitas: Jasa &amp; Audit Enterprise, Bot &amp; Otomasi Telegram, Pemrograman Web &amp; API, serta Regulasi Telekomunikasi.</p>
    </section>

    <!-- Interactive Category Filter -->
    <div class="filter-wrapper">
      <div class="filter-bar">
        ${PROJECT_CATEGORIES.map((cat, idx) => `
          <button class="filter-pill ${idx === 0 ? 'active' : ''}" onclick="filterProjects('${cat.id}')">
            <span>${cat.icon}</span>
            <span>${cat.label}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Projects Grid Container -->
    <div class="projects-grid" id="projects-container">
      ${projects.map(p => `
        <a href="${p.url}" target="${p.target || '_blank'}" class="project-card-item" data-cat="${p.category}">
          <div>
            <div class="proj-card-top">
              <span class="proj-cat-badge">${p.category.toUpperCase()}</span>
              ${p.badge ? `<span class="badge ${p.badge.toLowerCase().replace(/[^a-z0-9]/g, '')}">${p.badge}</span>` : ''}
            </div>
            <h3 class="proj-title">${p.title}</h3>
            <p class="proj-summary">${p.summary}</p>
            <div class="proj-tech-wrap">
              ${(Array.isArray(p.tech_stack) ? p.tech_stack : (p.tech_stack || '').split(',')).map(t => t.trim() ? `<span class="proj-tech-chip">${t.trim()}</span>` : '').join('')}
            </div>
          </div>
          <div class="proj-footer">
            <span>Buka Akses / Info Lengkap</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          </div>
        </a>
      `).join('')}
    </div>

    <!-- Live Edge Diagnostics Sandbox -->
    <section class="section-head" id="diagnostic">
      <span class="section-tag">LIVE EDGE SANDBOX</span>
      <h2 class="section-title">Diagnostik Edge &amp; Keamanan Peramban</h2>
      <p class="section-desc">Periksa integritas jaringan dan parameter keamanan koneksi Anda langsung dari node edge terdekat Cloudflare.</p>
    </section>

    <div class="diag-box">
      <div class="diag-header">
        <span>CLIENT_TELEMETRY_INSPECTOR // ACTIVE</span>
        <button onclick="runSecurityAuditSimulation()" class="btn-primary" style="padding: 6px 14px; font-size: 11.5px;">
          ▶ Jalankan Audit Keamanan
        </button>
      </div>
      <div class="diag-grid">
        <div class="diag-item">
          <div class="diag-label">CLIENT IP ADDRESS</div>
          <div class="diag-val" id="diag-ip">Mendeteksi...</div>
        </div>
        <div class="diag-item">
          <div class="diag-label">DATACENTER EDGE (COLO)</div>
          <div class="diag-val" id="diag-colo">Mendeteksi...</div>
        </div>
        <div class="diag-item">
          <div class="diag-label">TRANSPORT PROTOCOL</div>
          <div class="diag-val" id="diag-proto">HTTP/3 (QUIC)</div>
        </div>
        <div class="diag-item">
          <div class="diag-label">CIPHER SUITE</div>
          <div class="diag-val" id="diag-cipher">TLS_AES_128_GCM_SHA256</div>
        </div>
      </div>
      <div class="diag-terminal" id="diag-console">
        &gt; Inisialisasi inspeksi koneksi edge...<br>
        &gt; Membaca header keamanan dan integritas sesi pengguna...<br>
        &gt; Node Anycast operasional tanpa anomali. Klik [Jalankan Audit Keamanan] untuk simulasi inspeksi header.
      </div>
    </div>

    <!-- Interactive Solution Estimator -->
    <section class="section-head" id="calculator">
      <span class="section-tag">CONSULTATION ESTIMATOR</span>
      <h2 class="section-title">Kalkulator Estimasi Kebutuhan Solusi</h2>
      <p class="section-desc">Pilih pilar spesialisasi dan skala sistem Anda untuk mendapatkan ringkasan metodologi kerja dan menyusun draft konsultasi instan.</p>
    </section>

    <div class="calc-box">
      <div>
        <span class="calc-label">1. PILIH PILAR SPESIALISASI</span>
        <div class="calc-btn-group" id="calc-solution-group">
          <button class="calc-pill active" onclick="selectSolution(this, 'vapt')">🛡️ VAPT &amp; Web/API</button>
          <button class="calc-pill" onclick="selectSolution(this, 'mikrotik')">🌐 MikroTik Enterprise</button>
          <button class="calc-pill" onclick="selectSolution(this, 'bot')">⚡ Bot &amp; Userbot MTProto</button>
          <button class="calc-pill" onclick="selectSolution(this, 'fintech')">💳 FinTech &amp; API H2H</button>
        </div>

        <span class="calc-label">2. PILIH SKALA INFRASTRUKTUR</span>
        <div class="calc-btn-group" id="calc-scale-group">
          <button class="calc-pill active" onclick="selectScale(this, 'startup')">🚀 Startup / UMKM</button>
          <button class="calc-pill" onclick="selectScale(this, 'corp')">🏢 Korporasi / Multi-Branch</button>
          <button class="calc-pill" onclick="selectScale(this, 'mission')">🛡️ High-Throughput Critical</button>
        </div>

        <div style="font-size: 13px; color: #94a3b8; line-height: 1.5; margin-top: 15px;">
          Setiap proyek didampingi Non-Disclosure Agreement (NDA) resmi untuk menjamin kerahasiaan data sensitif dan arsitektur bisnis klien.
        </div>
      </div>

      <div class="calc-result-box">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-family: var(--font-mono); font-size: 11px; color: var(--cyan);">ESTIMASI LINGKUP &amp; SLA</span>
            <span class="badge official" id="calc-badge">STANDARD ENTERPRISE</span>
          </div>
          <h4 id="calc-res-title" style="font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 10px;">
            Audit Penetrasi Keamanan Siber (VAPT)
          </h4>
          <p id="calc-res-desc" style="font-size: 13.5px; color: #94a3b8; line-height: 1.55; margin-bottom: 14px;">
            Audit menyeluruh web application, REST API backend, dan infrastruktur cloud berdasarkan OWASP Top 10 dan NIST SP 800-115.
          </p>
          <div style="font-family: var(--font-mono); font-size: 12px; color: #cbd5e1; margin-bottom: 16px;">
            <div>&bull; Deliverable: <span id="calc-res-deliv" style="color: var(--cyan);">Laporan Audit Eksekutif, Bukti Eksploitasi (PoC), &amp; Panduan Remediasi</span></div>
            <div style="margin-top: 4px;">&bull; Respon SLA: <span id="calc-res-sla" style="color: #4ade80;">&lt; 2 Jam Tanggap Prioritas</span></div>
          </div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a id="calc-wa-btn" href="https://wa.me/62857100055554" target="_blank" class="btn-primary" style="flex: 1; justify-content: center; font-size: 13px; padding: 10px;">
            Kirim Draft via WhatsApp
          </a>
          <a id="calc-tg-btn" href="${tgUrl}" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center; font-size: 13px; padding: 10px;">
            Diskusi via Telegram
          </a>
        </div>
      </div>
    </div>

    <!-- Gemini Logo Showcase -->
    <div class="logo-showcase">
      <div class="logo-render-box">
        ${SVG_ICON}
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--cyan); margin-bottom: 8px;">
          VISUAL IDENTITY • GENERATED WITH GOOGLE GEMINI AI
        </div>
        <h3 style="font-size: 22px; font-weight: 800; color: var(--white); margin-bottom: 12px;">
          Filosofi Hexagonal Cyber Shield &amp; Interlocking 'X'
        </h3>
        <p style="font-size: 14px; color: #94a3b8; line-height: 1.65; margin-bottom: 16px;">
          ${LOGO_PHILOSOPHY}
        </p>
        <div style="font-family: var(--font-mono); font-size: 12px; color: #64748b;">
          &gt; Standar Identitas Korporat PT Xecure Siber Unggul Resolusi
        </div>
      </div>
    </div>

    <!-- FAQ Section (Google Rich Snippets & User Authority) -->
    <section class="section-head" id="faq" style="margin-top: 60px;">
      <span class="section-tag">PERTANYAAN UMUM &amp; KONSULTASI</span>
      <h2 class="section-title">Pertanyaan Umum Seputar Layanan XSUR</h2>
      <p class="section-sub">
        Informasi esensial mengenai legalitas entitas, metodologi audit keamanan siber, arsitektur jaringan MikroTik, dan prosedur konsultasi bersama Bang Mansur.
      </p>
    </section>

    <div class="faq-grid">
      <details class="faq-item" open>
        <summary>Apa itu PT Xecure Siber Unggul Resolusi (XSUR)?</summary>
        <p>
          PT Xecure Siber Unggul Resolusi (XSUR) adalah startup teknologi dan firma keamanan siber berbadan hukum yang didirikan oleh Bang Mansur. XSUR menyatukan keahlian praktis lapangan dan riset akademik dalam bidang audit keamanan (VAPT), infrastruktur jaringan MikroTik RouterOS enterprise, sistem otomasi bot MTProto terdistribusi, serta gateway FinTech dan telekomunikasi CEIR.
        </p>
      </details>

      <details class="faq-item">
        <summary>Siapa Founder dan Chief Security Architect di balik XSUR?</summary>
        <p>
          Founder dan Chief Security Architect XSUR adalah Bang Mansur, praktisi IT senior, profesional keamanan siber, dan lulusan S2 Magister Ilmu Komputer dengan spesialisasi rekayasa sistem terdistribusi, dynamic routing enterprise, dan reverse engineering.
        </p>
      </details>

      <details class="faq-item">
        <summary>Layanan dan spesialisasi apa saja yang disediakan oleh PT Xecure Siber Unggul Resolusi?</summary>
        <p>
          XSUR menyediakan 5 pilar spesialisasi enterprise: 1) Vulnerability Assessment &amp; Penetration Testing (VAPT OWASP Top 10), 2) Arsitektur Jaringan MikroTik RouterOS Multi-WAN &amp; OVPN Cloud Tunneling, 3) Otomasi High-Throughput Telegram MTProto Userbot Fleet, 4) Integrasi Gateway Telekomunikasi CEIR &amp; IMEI Bea Cukai (@cekceirbot), serta 5) XSUR Webmail &amp; Disposable Temp Mail Suite (mail.xsur.my.id).
        </p>
      </details>

      <details class="faq-item">
        <summary>Bagaimana metodologi audit keamanan siber (VAPT) yang diterapkan oleh XSUR?</summary>
        <p>
          Audit VAPT XSUR menggabungkan simulasi penyerangan black-box, gray-box, dan white-box yang mengacu pada standar global OWASP Top 10, NIST Cybersecurity Framework (CSF), dan SANS Top 25. Setiap temuan diverifikasi secara mendalam untuk mencegah false positive dan dilengkapi dokumen rekomendasi remediasi teknis yang dapat langsung dieksekusi tim developer.
        </p>
      </details>

      <details class="faq-item">
        <summary>Apakah XSUR melayani perancangan jaringan MikroTik enterprise dan multi-WAN antar kantor cabang?</summary>
        <p>
          Ya, XSUR berpengalaman menangani perancangan core routing MikroTik RouterOS v7, failover otomatis multi-WAN BGP/OSPF, interkoneksi secure tunnel (WireGuard / OpenVPN) site-to-site tanpa tabrakan subnet IP lokal, serta alokasi bandwidth cerdas berbasis QoS Simple Queue / Queue Tree.
        </p>
      </details>

      <details class="faq-item">
        <summary>Bagaimana cara melakukan konsultasi teknis atau memulai kerjasama proyek dengan XSUR?</summary>
        <p>
          Anda dapat menghubungi Bang Mansur secara langsung melalui Telegram resmi di @cspremium2in atau @jasangiklan, WhatsApp di nomor +62 857-1000-55554, atau email resmi ke contact@xsur.my.id. Seluruh diskusi dapat disertai Non-Disclosure Agreement (NDA) untuk menjamin kerahasiaan penuh proyek Anda.
        </p>
      </details>
    </div>

    <!-- Consultation CTA -->
    <section class="contact-card" id="contact">
      <span class="section-tag">MULAI KERJASAMA</span>
      <h2 style="font-size: clamp(24px, 4vw, 32px); font-weight: 800; margin-bottom: 12px; color: var(--white);">
        Diskusikan Kebutuhan Infrastruktur &amp; Keamanan Anda
      </h2>
      <p style="font-size: 15px; color: var(--text-muted); max-width: 600px; margin: 0 auto 28px;">
        Hubungi Bang Mansur secara langsung untuk konsultasi privat, NDA kerahasiaan proyek, atau penanganan insiden darurat.
      </p>
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
        <a href="${waUrl}" target="_blank" class="btn-primary" style="font-size: 14px; padding: 13px 26px;">
          WhatsApp Direct (+62 857-1000-55554)
        </a>
        <a href="${tgUrl}" target="_blank" class="btn-secondary" style="font-size: 14px; padding: 13px 24px;">
          Telegram DM (@premium2in)
        </a>
        <a href="mailto:${email}" class="btn-secondary" style="font-size: 14px; padding: 13px 24px;">
          Kirim Email Resmi
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer id="footer">
    <div class="container footer-inner">
      <div>
        <strong>${companyName}</strong> (${brandName}) &bull; &copy; ${new Date().getFullYear()} All Rights Reserved.
        <div style="font-size: 12px; color: #475569; margin-top: 4px;">
          Infrastruktur dilindungi Cloudflare Enterprise Edge &bull; ISO/IEC &amp; NIST Framework Compliant &bull; WhatsApp +62 857-1000-55554
        </div>
        <div style="font-size: 12px; color: #64748b; margin-top: 6px; display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="https://mail.xsur.my.id" target="_blank" style="color: var(--cyan); text-decoration: none;">✉️ Webmail &amp; Temp Mail</a>
          <a href="/sitemap.xml" target="_blank" style="color: #94a3b8; text-decoration: none;">🗺️ Sitemap XML</a>
          <a href="/llms.txt" target="_blank" style="color: #94a3b8; text-decoration: none;">🤖 LLMs.txt</a>
          <a href="/robots.txt" target="_blank" style="color: #94a3b8; text-decoration: none;">🤖 Robots.txt</a>
        </div>
      </div>
      <div>
        <a href="/admin" class="footer-admin-link">⚙️ Admin Console</a>
      </div>
    </div>
  </footer>

  ${intergramEnabled ? `
  <!-- Intergram Floating Live Chat Configuration -->
  <script>
    window.intergramId = "${intergramChatId}";
    window.intergramCustomizations = {
      titleClosed: 'Chat Bang Mansur',
      titleOpen: 'Konsultasi Siber — Bang Mansur',
      closedStyle: 'button',
      closedChatAvatarUrl: 'https://i.ibb.co.com/LXK49TZc/unamed.png',
      cookieExpiration: 2,
      introMessage: 'Halo! Ada yang bisa kami bantu terkait audit keamanan siber (VAPT), arsitektur MikroTik, bot Telegram, atau FinTech API?',
      autoResponse: 'Pesan Anda telah diteruskan langsung ke Telegram Bang Mansur (ID ${intergramChatId}). Mohon tunggu balasan sejenak...',
      autoNoResponse: 'Jika belum terbalas, silakan langsung hubungi Telegram @premium2in atau WhatsApp +62 857-1000-55554.',
      placeholderText: 'Ketik pesan konsultasi Anda...',
      displayMessageTime: true,
      mainColor: "#00f2fe",
      alwaysUseFloatingButton: true,
      disableLoadmill: true,
      desktopHeight: 520,
      desktopWidth: 380
    };
  </script>
  <script id="intergram" type="text/javascript" src="https://www.intergram.xyz/js/widget.js" defer></script>

  <div class="intergram-hint" onclick="document.querySelector('#intergramRoot > div')?.click()" title="Chat langsung ke Telegram Bang Mansur">
    <span class="pulse-dot"></span>
    <span>Live Chat Bang Mansur</span>
  </div>
  ` : ''}

  <script>
    // Live Telemetry ping & inspect
    const start = performance.now();
    fetch('/api/public/inspect')
      .then(r => r.json())
      .then(d => {
        const lat = Math.round(performance.now() - start);
        const latEl = document.getElementById('tele-lat');
        if (latEl) latEl.innerText = lat + ' ms';
        const coloEl = document.getElementById('tele-colo');
        if (coloEl && d.colo) coloEl.innerText = d.colo + ' (' + (d.country || 'ID') + ')';

        // Update Diagnostic Sandbox
        const ipEl = document.getElementById('diag-ip');
        if (ipEl && d.ip) ipEl.innerText = d.ip;
        const diagColo = document.getElementById('diag-colo');
        if (diagColo && d.colo) diagColo.innerText = d.colo + ' - ' + (d.city || 'Anycast');
        const protoEl = document.getElementById('diag-proto');
        if (protoEl && d.httpProtocol) protoEl.innerText = d.httpProtocol;
        const cipherEl = document.getElementById('diag-cipher');
        if (cipherEl && d.tlsCipher) cipherEl.innerText = d.tlsCipher;
      })
      .catch(() => {});

    // Interactive Project Categorization Filter
    function filterProjects(cat) {
      document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
      event.currentTarget.classList.add('active');
      const cards = document.querySelectorAll('.project-card-item');
      cards.forEach(c => {
        const itemCat = c.getAttribute('data-cat');
        if (cat === 'all' || itemCat === cat) {
          c.style.display = 'flex';
          c.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          c.style.display = 'none';
        }
      });
    }

    // Security Audit Simulation in Diagnostic Sandbox
    function runSecurityAuditSimulation() {
      const consoleBox = document.getElementById('diag-console');
      consoleBox.innerHTML = '<span style="color: #00f2fe;">&gt; Menjalankan Automated Security Scanner...</span><br>';
      
      const steps = [
        '[OK] Memvalidasi TLS 1.3 Strict Cipher Handshake: AEAD AES-GCM 128-bit terverifikasi.',
        '[OK] Memeriksa DNSSEC & BGP Route Hijacking Prevention: Cloudflare Anycast aktif.',
        '[OK] Verifikasi Atribut HSTS (Strict-Transport-Security) & Max-Age: Terpasang.',
        '[OK] Audit Isolasi Sesi & Proteksi Header Referrer: Strict-Origin-When-Cross-Origin.',
        '[OK] Evaluasi Transaksi Backend: Compare-And-Swap (CAS) Atomic Concurrency locking aktif.',
        '<span style="color: #4ade80; font-weight: bold;">&gt;&gt;&gt; AUDIT STATUS: 100% SECURE. Tidak ada celah perimeter terdeteksi.</span>'
      ];

      let delay = 300;
      steps.forEach((s, idx) => {
        setTimeout(() => {
          consoleBox.innerHTML += '&gt; ' + s + '<br>';
          consoleBox.scrollTop = consoleBox.scrollHeight;
        }, delay);
        delay += 400;
      });
    }

    // Solution Estimator Logic
    let currentSol = 'vapt';
    let currentScale = 'startup';

    const solutionData = {
      vapt: {
        title: 'Audit Penetrasi Keamanan Siber (VAPT)',
        desc: 'Audit menyeluruh web application, REST API backend, dan infrastruktur cloud berdasarkan OWASP Top 10 dan NIST SP 800-115.',
        deliv: 'Laporan Audit Eksekutif, Bukti Eksploitasi (PoC), & Panduan Remediasi'
      },
      mikrotik: {
        title: 'Arsitektur Jaringan MikroTik RouterOS v7 Enterprise',
        desc: 'Konfigurasi Multi-WAN failover otomatis &lt;1 detik, bandwidth QoS Hierarchical Token Bucket, perutean dinamis BGP/OSPF, dan WireGuard VPN site-to-site.',
        deliv: 'File Konfigurasi .rsc Teruji, Skema Topologi, & Monitoring Latensi'
      },
      bot: {
        title: 'Distributed Telegram MTProto Automation Fleet',
        desc: 'Pengembangan userbot dan bot worker berkecepatan tinggi dengan isolasi sesi MTProto, load balancing anti-flood, dan daemon background tangguh.',
        deliv: 'Source Code Python/Telethon, Modul Anti-Spam, & Systemd Service Daemons'
      },
      fintech: {
        title: 'PPOB & FinTech Transaction Engine',
        desc: 'Sistem API gateway pembayaran dan transaksi digital dengan mutasi bank otomatis, transaksi atomik Compare-And-Swap (CAS), dan 2FA OTP Telegram.',
        deliv: 'RESTful API Documentation, Database Schema D1/Postgres, & Dashboard Admin'
      }
    };

    const scaleData = {
      startup: { badge: 'STANDARD ENTERPRISE', sla: '&lt; 2 Jam Tanggap Prioritas' },
      corp: { badge: 'MULTI-BRANCH SCALE', sla: '&lt; 1 Jam Tanggap Darurat' },
      mission: { badge: 'MISSION CRITICAL 24/7', sla: '&lt; 15 Menit Dedicated Hotline' }
    };

    function selectSolution(btn, sol) {
      document.querySelectorAll('#calc-solution-group .calc-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSol = sol;
      updateCalcOutput();
    }

    function selectScale(btn, scale) {
      document.querySelectorAll('#calc-scale-group .calc-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScale = scale;
      updateCalcOutput();
    }

    function updateCalcOutput() {
      const sol = solutionData[currentSol];
      const sc = scaleData[currentScale];
      document.getElementById('calc-res-title').innerHTML = sol.title;
      document.getElementById('calc-res-desc').innerHTML = sol.desc;
      document.getElementById('calc-res-deliv').innerHTML = sol.deliv;
      document.getElementById('calc-badge').innerText = sc.badge;
      document.getElementById('calc-res-sla').innerHTML = sc.sla;

      const waMsg = encodeURIComponent('Halo Bang Mansur, saya ingin berkonsultasi mengenai ' + sol.title + ' untuk skala ' + sc.badge + '. Mohon informasi jadwal diskusi teknis dan NDA.');
      document.getElementById('calc-wa-btn').href = 'https://wa.me/62857100055554?text=' + waMsg;
    }

    // Mobile Hamburger Menu
    function toggleMobMenu() {
      const drawer = document.getElementById('mobile-drawer');
      drawer.classList.toggle('open');
      const icon = document.getElementById('ham-icon');
      if (drawer.classList.contains('open')) {
        icon.innerHTML = '<path d="M18 6L6 18M6 6l12 12"/>';
      } else {
        icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/>';
      }
    }
    function closeMobMenu() {
      const drawer = document.getElementById('mobile-drawer');
      drawer.classList.remove('open');
      const icon = document.getElementById('ham-icon');
      if (icon) icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/>';
    }
    function toggleMobDropdown(el) {
      el.parentElement.classList.toggle('active');
    }
  </script>
</body>
</html>`;
}
