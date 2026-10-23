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
  const waUrl = siteConfig.contact_whatsapp || "https://wa.me/6285156176433";
  const tgUrl = siteConfig.contact_telegram || "https://t.me/msr77";
  const email = siteConfig.contact_email || "contact@xsur.my.id";

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
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,${encodeURIComponent(SVG_ICON)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
      --radius: 14px;
      --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; background-color: var(--bg); color: var(--text); font-family: var(--font-sans); }
    body { min-height: 100vh; overflow-x: hidden; line-height: 1.6; }

    /* Cyber Matrix Ambient Grid */
    .ambient-bg {
      position: fixed; inset: 0; pointer-events: none; z-index: -1;
      background: radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.08), transparent 45%),
                  radial-gradient(circle at 85% 30%, rgba(30, 41, 59, 0.4), transparent 50%),
                  linear-gradient(to bottom, #07090e, #090d15);
    }
    .grid-overlay {
      position: fixed; inset: 0; pointer-events: none; z-index: -1; opacity: 0.15;
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
    }

    /* Container */
    .container { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

    /* Header / Navbar */
    header {
      position: sticky; top: 0; z-index: 1000;
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      background: rgba(7, 9, 14, 0.88); border-bottom: 1px solid var(--border);
      height: 74px; display: flex; align-items: center;
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
    .brand-link { display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; }
    .brand-logo-svg { height: 38px; width: auto; max-width: 160px; display: block; }

    .nav-links { display: flex; align-items: center; gap: 8px; }
    .nav-item {
      padding: 9px 15px; font-size: 13.5px; font-weight: 600; color: #cbd5e1;
      text-decoration: none; border-radius: 8px; transition: all 0.2s ease;
      background: transparent; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
    }
    .nav-item:hover { color: var(--white); background: rgba(255, 255, 255, 0.05); }

    /* Dropdown Menus */
    .nav-dropdown-wrapper { position: relative; }
    .dropdown-arrow { transition: transform 0.2s ease; }
    .nav-dropdown-wrapper:hover .dropdown-arrow { transform: rotate(180deg); }
    .nav-dropdown-menu {
      position: absolute; top: calc(100% + 8px); left: 0; min-width: 290px;
      background: #0d121c; border: 1px solid var(--border); border-radius: 12px;
      padding: 8px; box-shadow: 0 16px 36px rgba(0,0,0,0.6); opacity: 0; visibility: hidden;
      transform: translateY(6px); transition: all 0.2s ease; z-index: 200;
    }
    .nav-dropdown-wrapper:hover .nav-dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
    .dropdown-item {
      display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px;
      border-radius: 8px; text-decoration: none; color: var(--text); transition: background 0.15s ease;
    }
    .dropdown-item:hover { background: rgba(0, 242, 254, 0.08); }
    .dropdown-item-title { display: flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 700; color: var(--white); }
    .dropdown-item-desc { font-size: 11.5px; color: var(--text-muted); line-height: 1.4; margin-top: 2px; }

    /* Badges */
    .badge {
      font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
      padding: 2px 7px; border-radius: 999px; font-family: var(--font-mono);
      background: rgba(255, 255, 255, 0.1); color: var(--white); white-space: nowrap;
    }
    .badge.live { background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); }
    .badge.popular, .badge.hot { background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .badge.pro, .badge.core, .badge.enterprise { background: rgba(0, 242, 254, 0.15); color: var(--cyan); border: 1px solid rgba(0, 242, 254, 0.3); }

    .btn-header-cta {
      padding: 9px 18px; font-size: 13.5px; font-weight: 700; border-radius: 8px;
      background: var(--white); color: #000; text-decoration: none; transition: all 0.2s ease;
      display: inline-flex; align-items: center; gap: 6px;
    }
    .btn-header-cta:hover { background: #e2e8f0; transform: translateY(-1px); }

    /* Mobile Hamburger Button */
    .btn-hamburger {
      display: none; background: transparent; border: 1px solid var(--border);
      border-radius: 8px; padding: 8px; color: #fff; cursor: pointer;
    }
    .btn-hamburger svg { display: block; }

    /* Mobile Drawer */
    .mobile-drawer {
      display: none; position: fixed; top: 74px; inset-x: 0; bottom: 0;
      background: rgba(7, 9, 14, 0.98); backdrop-filter: blur(20px);
      z-index: 999; padding: 20px; overflow-y: auto; flex-direction: column; gap: 12px;
      border-bottom: 1px solid var(--border);
    }
    .mobile-drawer.open { display: flex; }
    .mob-nav-link {
      padding: 14px 16px; font-size: 15px; font-weight: 700; color: #fff;
      text-decoration: none; border-radius: 10px; background: rgba(255,255,255,0.03);
      border: 1px solid var(--border); display: block;
    }
    .mob-dropdown-group {
      background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
    }
    .mob-dropdown-header {
      padding: 14px 16px; font-size: 15px; font-weight: 700; color: #fff;
      display: flex; justify-content: space-between; align-items: center; cursor: pointer;
    }
    .mob-arrow { transition: transform 0.2s ease; }
    .mob-dropdown-group.active .mob-arrow { transform: rotate(180deg); }
    .mob-dropdown-body { display: none; padding: 8px 12px 14px; flex-direction: column; gap: 8px; border-top: 1px solid var(--border); }
    .mob-dropdown-group.active .mob-dropdown-body { display: flex; }
    .mob-dropdown-link {
      padding: 10px 12px; background: rgba(255,255,255,0.03); border-radius: 8px;
      text-decoration: none; display: block;
    }

    /* Hero Section */
    .hero { padding: 80px 0 50px; text-align: left; }
    .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 44px; align-items: center; }
    
    .hero-tag {
      display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono);
      font-size: 11.5px; font-weight: 600; color: var(--cyan); background: var(--cyan-dim);
      border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 999px; padding: 6px 14px; margin-bottom: 22px;
    }
    .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: pulse 2s infinite; }
    @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }

    .hero-title {
      font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; letter-spacing: -1.2px; margin-bottom: 20px;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hero-sub {
      font-size: clamp(14.5px, 2vw, 16.5px); color: var(--text-muted); line-height: 1.65; margin-bottom: 30px; max-width: 580px;
    }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
    
    .btn-primary {
      padding: 12px 24px; border-radius: 10px; font-size: 14px; font-weight: 700;
      background: linear-gradient(135deg, #00f2fe, #0077fe); color: #000;
      text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
      transition: all 0.2s ease; box-shadow: 0 4px 20px var(--cyan-glow);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px var(--cyan-glow); }

    .btn-secondary {
      padding: 12px 22px; border-radius: 10px; font-size: 14px; font-weight: 600;
      background: rgba(255, 255, 255, 0.05); color: var(--white);
      border: 1px solid var(--border); text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
      transition: all 0.2s ease;
    }
    .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2); }

    /* Live Telemetry Terminal Card */
    .telemetry-card {
      background: #090d14; border: 1px solid var(--border); border-radius: var(--radius);
      box-shadow: 0 20px 40px rgba(0,0,0,0.7); overflow: hidden; font-family: var(--font-mono);
    }
    .term-header {
      background: #0e131d; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border); font-size: 12px; color: var(--text-muted);
    }
    .term-dots { display: flex; gap: 6px; }
    .term-dot { width: 10px; height: 10px; border-radius: 50%; background: #334155; }
    .term-body { padding: 18px; font-size: 12.5px; line-height: 1.7; color: #94a3b8; }
    .term-body .term-line { display: flex; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 4px; }
    .term-body .term-line span:first-child { color: #64748b; }
    .term-body .term-line span:last-child { color: var(--white); font-weight: 600; }
    .text-cyan { color: var(--cyan) !important; }
    .text-emerald { color: #10b981 !important; }

    /* Section Headers */
    .section-head { text-align: center; max-width: 720px; margin: 80px auto 40px; }
    .section-tag {
      font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; color: var(--cyan);
      letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px; display: block;
    }
    .section-title { font-size: clamp(26px, 4vw, 34px); font-weight: 800; letter-spacing: -0.8px; margin-bottom: 12px; }
    .section-desc { font-size: 15px; color: var(--text-muted); line-height: 1.6; }

    /* Category Filter Navigation Bar (Touch & Scroll Friendly) */
    .filter-wrapper {
      display: flex; justify-content: center; margin-bottom: 34px; overflow-x: auto;
      padding: 4px 0 10px; -webkit-overflow-scrolling: touch;
    }
    .filter-bar {
      display: inline-flex; gap: 8px; background: rgba(14, 19, 29, 0.85);
      border: 1px solid var(--border); padding: 6px; border-radius: 12px;
      backdrop-filter: blur(10px);
    }
    .filter-pill {
      background: transparent; border: none; color: #94a3b8; padding: 8px 16px;
      font-size: 13px; font-weight: 700; border-radius: 8px; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
      transition: all 0.2s ease;
    }
    .filter-pill:hover { color: #fff; background: rgba(255,255,255,0.05); }
    .filter-pill.active { background: var(--cyan); color: #000; box-shadow: 0 2px 10px var(--cyan-glow); }

    /* Projects Grid */
    .projects-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 22px;
    }
    .project-card-item {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);
      padding: 26px; transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column;
      justify-content: space-between; text-decoration: none; color: inherit; position: relative;
    }
    .project-card-item:hover {
      transform: translateY(-4px); border-color: var(--border-focus);
      box-shadow: 0 14px 30px rgba(0,0,0,0.6);
    }
    .proj-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
    .proj-cat-badge {
      font-size: 11px; font-family: var(--font-mono); color: var(--cyan);
      background: var(--cyan-dim); padding: 3px 10px; border-radius: 6px; font-weight: 600;
    }
    .proj-title { font-size: 18px; font-weight: 700; color: #fff; line-height: 1.35; margin-bottom: 10px; }
    .proj-summary { font-size: 13.5px; color: var(--text-muted); line-height: 1.6; margin-bottom: 18px; flex-grow: 1; }
    .proj-tech-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
    .proj-tech-chip {
      font-size: 10.5px; font-family: var(--font-mono); background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08); padding: 2px 7px; border-radius: 4px; color: #cbd5e1;
    }
    .proj-footer {
      display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05);
      padding-top: 14px; font-size: 12.5px; font-weight: 600; color: var(--cyan);
    }

    /* Founder Profile Section (Black and White Anonymous) */
    .founder-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
      padding: 40px; display: grid; grid-template-columns: 260px 1fr; gap: 40px; align-items: center;
      position: relative; overflow: hidden; backdrop-filter: blur(12px);
    }
    .founder-img-box { position: relative; width: 220px; height: 220px; margin: 0 auto; }
    .founder-img {
      width: 100%; height: 100%; object-fit: cover; border-radius: 18px;
      filter: grayscale(100%) contrast(140%) brightness(90%);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 30px rgba(0, 242, 254, 0.15);
    }
    .founder-halo {
      position: absolute; inset: -8px; border-radius: 24px; border: 1.5px dashed rgba(0, 242, 254, 0.35);
      pointer-events: none; animation: spin-slow 40s linear infinite;
    }
    @keyframes spin-slow { 100% { transform: rotate(360deg); } }

    .founder-badge-grid { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0; }
    .founder-pill {
      font-size: 11.5px; font-family: var(--font-mono); padding: 5px 12px; border-radius: 6px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); color: #cbd5e1;
    }

    /* Gemini Logo Showcase */
    .logo-showcase {
      background: linear-gradient(180deg, rgba(14, 19, 29, 0.8), rgba(9, 13, 20, 0.95));
      border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin: 70px 0;
      display: grid; grid-template-columns: 220px 1fr; gap: 40px; align-items: center;
    }
    .logo-render-box { width: 100%; max-width: 180px; margin: 0 auto; }

    /* Consultation / Contact */
    .contact-card {
      background: radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.1), transparent 70%), #0c1018;
      border: 1px solid var(--border); border-radius: 20px; padding: 50px 24px; text-align: center; margin-bottom: 70px;
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border); padding: 36px 0; font-size: 13px; color: #64748b;
      background: #05070a;
    }
    .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
    .footer-admin-link { color: #475569; text-decoration: none; font-family: var(--font-mono); font-size: 12px; }
    .footer-admin-link:hover { color: var(--cyan); }

    /* Animation */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive Breakpoints */
    @media (max-width: 900px) {
      .nav-links { display: none; }
      .btn-hamburger { display: block; }
      .hero-grid { grid-template-columns: 1fr; gap: 32px; }
      .founder-card { grid-template-columns: 1fr; text-align: center; padding: 28px 20px; }
      .founder-badge-grid { justify-content: center; }
      .logo-showcase { grid-template-columns: 1fr; text-align: center; padding: 30px 20px; }
      .filter-wrapper { justify-content: flex-start; }
      .projects-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      .container { padding: 0 16px; }
      .hero-actions a { width: 100%; justify-content: center; }
      .founder-img-box { width: 180px; height: 180px; }
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
    <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
      <a href="${waUrl}" target="_blank" class="btn-primary" style="justify-content: center; width: 100%;">
        Konsultasi WhatsApp Langsung
      </a>
      <a href="${tgUrl}" target="_blank" class="btn-secondary" style="justify-content: center; width: 100%;">
        Telegram Founder (@msr77)
      </a>
      <a href="/admin" class="btn-secondary" style="justify-content: center; width: 100%; font-size: 12px; color: #64748b;">
        ⚙️ Akses Panel Admin
      </a>
    </div>
  </div>

  <main class="container">
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-grid">
        <div>
          <div class="hero-tag">
            <span class="pulse-dot"></span>
            <span>ENTERPRISE CYBER DEFENSE &amp; SCALABLE AUTOMATION</span>
          </div>
          <h1 class="hero-title">${companyName}</h1>
          <p class="hero-sub">
            Menyatukan riset mendalam <strong>keamanan siber</strong>, rekayasa jaringan <strong>enterprise MikroTik</strong>, serta arsitektur <strong>otomasi terdistribusi</strong>. Dirancang untuk keandalan produksi tanpa kompromi.
          </p>
          <div class="hero-actions">
            <a href="${waUrl}" target="_blank" class="btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Konsultasi WhatsApp
            </a>
            <a href="${tgUrl}" target="_blank" class="btn-secondary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.7 6.46a2.234 2.234 0 0 0-.17 4.17l4.08 1.48 1.5 4.63a1.5 1.5 0 0 0 2.37.58l2.5-2.07 4.45 3.3a1.5 1.5 0 0 0 2.38-.85l3.2-15.5a2.24 2.24 0 0 0-2.59-2.41z"/></svg>
              Telegram Founder
            </a>
            <a href="#projects" class="btn-secondary">Katalog Portofolio</a>
          </div>
        </div>

        <!-- Telemetry Card -->
        <div class="telemetry-card">
          <div class="term-header">
            <div class="term-dots">
              <div class="term-dot"></div>
              <div class="term-dot"></div>
              <div class="term-dot"></div>
            </div>
            <span>xsur-edge-v4.9.sys</span>
          </div>
          <div class="term-body">
            <div class="term-line"><span>GATEWAY PROTOCOL:</span> <span class="text-emerald">CONNECTED (HTTP/3 QUIC)</span></div>
            <div class="term-line"><span>PROTECTION MATRIX:</span> <span class="text-cyan">ZERO-TRUST SECURE</span></div>
            <div class="term-line"><span>EDGE DATACENTER:</span> <span id="tele-colo">CLOUDFLARE GLOBAL</span></div>
            <div class="term-line"><span>CIPHER ALGORITHM:</span> <span>AES-256-GCM / TLS 1.3</span></div>
            <div class="term-line"><span>REALTIME LATENCY:</span> <span id="tele-lat" class="text-cyan">&lt; 15 ms</span></div>
            <div class="term-line"><span>SECURITY ARCHITECT:</span> <span class="text-emerald">VERIFIED BY BANG MANSUR</span></div>
            <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed #1e293b; font-size: 11px; color: #64748b;">
              &gt; PT XECURE SIBER UNGGUL RESOLUSI [ACTIVE PROTOCOL]
            </div>
          </div>
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
        <div style="margin-top: 16px;">
          <a href="https://github.com/xyz-sur" target="_blank" class="btn-secondary" style="padding: 7px 15px; font-size: 12.5px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Portofolio @xyz-sur
          </a>
        </div>
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
          WhatsApp Direct Konsultasi
        </a>
        <a href="${tgUrl}" target="_blank" class="btn-secondary" style="font-size: 14px; padding: 13px 24px;">
          Telegram DM (@msr77)
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
          Infrastruktur dilindungi Cloudflare Enterprise Edge &bull; ISO/IEC &amp; NIST Framework Compliant
        </div>
      </div>
      <div>
        <a href="/admin" class="footer-admin-link">⚙️ Admin Console</a>
      </div>
    </div>
  </footer>

  <script>
    // Live Telemetry ping
    const start = performance.now();
    fetch('/api/public/ping')
      .then(r => r.json())
      .then(d => {
        const lat = Math.round(performance.now() - start);
        const latEl = document.getElementById('tele-lat');
        if (latEl) latEl.innerText = lat + ' ms';
        const coloEl = document.getElementById('tele-colo');
        if (coloEl && d.colo) coloEl.innerText = d.colo + ' (' + (d.country || 'ID') + ')';
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
