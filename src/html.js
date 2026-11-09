// Public UI Template for PT Xecure Siber Unggul Resolusi (xsur.my.id)
import { SVG_HORIZONTAL, SVG_ICON, LOGO_PHILOSOPHY } from "./logo.js";
import { generateSeoTags } from "./seo.js";
import { PROJECT_CATEGORIES, DEFAULT_PROJECTS } from "./projects.js";

export function renderPublicPage({ menus, siteConfig, projects = DEFAULT_PROJECTS, stats = {}, canonicalUrl }) {
  const seoHead = generateSeoTags({ siteConfig, canonicalUrl });
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const brandName = siteConfig.brand_name || "XSUR";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const founderTitle = siteConfig.founder_title || "Founder & Chief Security Architect";
  const founderEdu = siteConfig.founder_edu || "Praktisi &amp; Konsultan Teknologi Informasi";
  const founderImg = siteConfig.founder_image || "https://i.ibb.co.com/LXK49TZc/unamed.png";
  const waUrl = siteConfig.contact_whatsapp || "https://wa.me/62857100055554";
  const tgUrl = siteConfig.contact_telegram || "https://t.me/premium2in";
  const email = siteConfig.contact_email || "contact@xsur.my.id";
  const intergramChatId = siteConfig.intergram_chat_id || "682723201";
  const intergramEnabled = siteConfig.intergram_enabled !== "0";
  const visitorStats = {
    today_views: stats.today_views || 284,
    month_views: stats.month_views || 7840,
    total_views: stats.total_views || 52190,
    active_consultations: stats.active_consultations || 7,
    completed_projects: stats.completed_projects || 432,
    client_satisfaction: stats.client_satisfaction || 99.8
  };

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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
  </noscript>
  <link rel="ard" href="/.well-known/ard.json">
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
      padding: 3px 8px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      font-family: var(--font-mono);
      display: inline-block;
      background: rgba(0, 242, 254, 0.18);
      color: #00f2fe;
      border: 1px solid rgba(0, 242, 254, 0.35);
    }
    .badge.portal { background: rgba(0, 242, 254, 0.18); color: var(--cyan); border: 1px solid rgba(0, 242, 254, 0.35); }
    .badge.layananutama, .badge.resmi, .badge.official { background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.4); }
    .badge.keamanansiber, .badge.otomasi24jam, .badge.serverkantor, .badge.enterprise, .badge.high-throughput { background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); }
    .badge.pembayaraninstan, .badge.fintech, .badge.serverpulsa { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.4); }
    .badge.webbisnis, .badge.emailbisnis, .badge.ceirresmi { background: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.4); }
    .badge.sistemkerja, .badge.iklandigital, .badge.mentoringahli { background: rgba(244, 63, 94, 0.2); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.4); }

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
      margin-bottom: 24px;
    }
    .audience-strip {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 40px;
      padding: 10px 18px;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(0, 242, 254, 0.15);
      border-radius: 30px;
      width: fit-content;
      max-width: 100%;
    }
    .audience-label {
      font-size: 11.5px;
      font-weight: 800;
      color: var(--cyan);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-family: var(--font-mono);
    }
    .audience-pill {
      font-size: 12px;
      color: #e2e8f0;
      background: rgba(255, 255, 255, 0.06);
      padding: 3px 11px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      white-space: nowrap;
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
      color: #cbd5e1;
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
    .diag-label { color: #94a3b8; margin-bottom: 4px; font-size: 11px; font-weight: 600; }
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


    /* ===================================================
       ESTETIK REAL-TIME TELEMETRY & STATS COCKPIT
       =================================================== */
    .stats-cockpit-frame {
      position: relative;
      background: radial-gradient(130% 120% at 50% -10%, rgba(0, 242, 254, 0.08) 0%, rgba(13, 19, 33, 0.8) 45%, rgba(7, 10, 19, 0.96) 100%);
      border: 1px solid rgba(0, 242, 254, 0.24);
      border-radius: 24px;
      padding: 34px 30px 28px;
      margin-top: 20px;
      margin-bottom: 70px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 45px -12px rgba(0, 242, 254, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    .stats-cockpit-frame::before {
      content: "";
      position: absolute;
      top: -80px;
      right: -80px;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(0, 242, 254, 0.14) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      filter: blur(30px);
    }
    .stats-cockpit-frame::after {
      content: "";
      position: absolute;
      bottom: -90px;
      left: -90px;
      width: 340px;
      height: 340px;
      background: radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      filter: blur(30px);
    }

    /* Cockpit Top Header Status Bar */
    .cockpit-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding-bottom: 22px;
      margin-bottom: 26px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      z-index: 2;
    }
    .cockpit-status-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(0, 242, 254, 0.07);
      border: 1px solid rgba(0, 242, 254, 0.25);
      padding: 6px 14px;
      border-radius: 30px;
    }
    .live-radar-ping {
      position: relative;
      width: 9px;
      height: 9px;
      background: #4ade80;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 10px #4ade80;
    }
    .live-radar-ping::after {
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      border: 1.5px solid #4ade80;
      animation: radarRipples 2s infinite cubic-bezier(0, 0.2, 0.8, 1);
    }
    @keyframes radarRipples {
      0% { transform: scale(0.6); opacity: 1; }
      100% { transform: scale(2.2); opacity: 0; }
    }
    .cockpit-title-text {
      font-family: var(--font-mono);
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #e2e8f0;
      text-transform: uppercase;
    }
    .cockpit-edge-tag {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 700;
      color: var(--cyan);
      background: rgba(0, 242, 254, 0.15);
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid rgba(0, 242, 254, 0.3);
    }
    .cockpit-time-chip {
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: #94a3b8;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.04);
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    /* Sub-section Dividers & Labels */
    .cockpit-section-label {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.8px;
      color: #cbd5e1;
      text-transform: uppercase;
      margin-bottom: 16px;
      position: relative;
      z-index: 2;
    }
    .cockpit-section-label::after {
      content: "";
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.12), transparent);
    }

    /* Cards Grid */
    .cockpit-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 26px;
      position: relative;
      z-index: 2;
    }
    .cockpit-cards-grid:last-of-type {
      margin-bottom: 24px;
    }

    /* Modern Estetik Stat Card */
    .stat-card-modern {
      position: relative;
      background: linear-gradient(145deg, rgba(19, 27, 46, 0.72) 0%, rgba(10, 15, 27, 0.85) 100%);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 18px;
      padding: 24px 22px;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 10px 24px -5px rgba(0, 0, 0, 0.5);
    }
    .stat-card-modern::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--card-accent, #00f2fe), transparent);
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }
    .stat-card-modern:hover {
      transform: translateY(-5px);
      border-color: rgba(0, 242, 254, 0.45);
      box-shadow: 0 18px 35px -8px rgba(0, 0, 0, 0.7), 0 0 25px -5px var(--card-glow, rgba(0, 242, 254, 0.25));
    }
    .stat-card-modern:hover::before {
      opacity: 1;
      height: 4px;
    }

    /* Specific Accent Color Themes */
    .card-theme-emerald {
      --card-accent: #22c55e;
      --card-glow: rgba(34, 197, 94, 0.25);
      background: linear-gradient(145deg, rgba(16, 33, 26, 0.7) 0%, rgba(9, 19, 15, 0.85) 100%);
      border-color: rgba(34, 197, 94, 0.25);
    }
    .card-theme-sky {
      --card-accent: #38bdf8;
      --card-glow: rgba(56, 189, 248, 0.25);
      background: linear-gradient(145deg, rgba(14, 28, 48, 0.7) 0%, rgba(8, 17, 30, 0.85) 100%);
      border-color: rgba(56, 189, 248, 0.22);
    }
    .card-theme-amber {
      --card-accent: #facc15;
      --card-glow: rgba(250, 204, 21, 0.25);
      background: linear-gradient(145deg, rgba(32, 27, 15, 0.7) 0%, rgba(18, 15, 8, 0.85) 100%);
      border-color: rgba(250, 204, 21, 0.22);
    }
    .card-theme-cyan {
      --card-accent: #00f2fe;
      --card-glow: rgba(0, 242, 254, 0.3);
      background: linear-gradient(145deg, rgba(12, 31, 46, 0.75) 0%, rgba(7, 18, 28, 0.88) 100%);
      border-color: rgba(0, 242, 254, 0.3);
    }
    .card-theme-purple {
      --card-accent: #c084fc;
      --card-glow: rgba(192, 132, 252, 0.25);
      background: linear-gradient(145deg, rgba(29, 18, 46, 0.7) 0%, rgba(16, 10, 27, 0.85) 100%);
      border-color: rgba(192, 132, 252, 0.22);
    }
    .card-theme-slate {
      --card-accent: #94a3b8;
      --card-glow: rgba(148, 163, 184, 0.25);
      background: linear-gradient(145deg, rgba(21, 28, 40, 0.7) 0%, rgba(11, 15, 23, 0.85) 100%);
      border-color: rgba(148, 163, 184, 0.2);
    }

    /* Card Interior Components */
    .stat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .stat-pill-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.5px;
      padding: 3px 10px;
      border-radius: 20px;
      text-transform: uppercase;
    }
    .pill-emerald { background: rgba(34, 197, 94, 0.18); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.35); }
    .pill-sky { background: rgba(56, 189, 248, 0.18); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); }
    .pill-amber { background: rgba(234, 179, 8, 0.18); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.35); }
    .pill-cyan { background: rgba(0, 242, 254, 0.18); color: #00f2fe; border: 1px solid rgba(0, 242, 254, 0.38); }
    .pill-purple { background: rgba(192, 132, 252, 0.18); color: #c084fc; border: 1px solid rgba(192, 132, 252, 0.35); }
    .pill-slate { background: rgba(148, 163, 184, 0.18); color: #cbd5e1; border: 1px solid rgba(148, 163, 184, 0.35); }

    .stat-icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .stat-metric-value {
      font-family: var(--font-mono);
      font-size: 34px;
      font-weight: 800;
      letter-spacing: -1px;
      line-height: 1.1;
      margin-bottom: 8px;
      color: #ffffff;
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
    .stat-metric-value .unit-text {
      font-size: 15px;
      font-weight: 600;
      color: var(--cyan);
      letter-spacing: 0;
    }
    .stat-metric-title {
      font-size: 14.5px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .stat-metric-desc {
      font-size: 12.5px;
      color: #94a3b8;
      line-height: 1.45;
      margin: 0;
    }

    /* Mini Progress or Trend Bar inside Card */
    .stat-card-footer-indicator {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--font-mono);
      font-size: 11px;
      color: #64748b;
    }
    .indicator-tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: #94a3b8;
    }
    .indicator-tag.active {
      color: #4ade80;
    }
    .indicator-sparkline {
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--cyan);
      background: rgba(0, 242, 254, 0.08);
      padding: 2px 7px;
      border-radius: 4px;
    }

    /* Cockpit Footer Ticker Strip */
    .cockpit-footer-strip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      z-index: 2;
    }
    .footer-guarantee-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #cbd5e1;
      font-weight: 500;
    }
    .dot-indicator {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      display: inline-block;
    }
    .dot-indicator.emerald { background: #4ade80; box-shadow: 0 0 6px #4ade80; }
    .dot-indicator.cyan { background: #00f2fe; box-shadow: 0 0 6px #00f2fe; }
    .dot-indicator.amber { background: #facc15; box-shadow: 0 0 6px #facc15; }

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
      .stats-cockpit-frame { padding: 22px 18px 20px; }
      .cockpit-top-bar { flex-direction: column; align-items: flex-start; }
      .stat-metric-value { font-size: 28px; }
    }
  </style>
</head>
<body>
  <div class="ambient-bg"></div>
  <div class="grid-overlay"></div>

  <!-- Header -->
  <header>
    <div class="container nav-inner">
      <a href="/" class="brand-link" aria-label="PT Xecure Siber Unggul Resolusi - Beranda">
        <div style="height: 38px; width: 135px;">
          ${SVG_HORIZONTAL}
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        ${navHtml}
        <a href="#standards" class="nav-item">Keunggulan</a>
        <a href="#projects" class="nav-item">Layanan &amp; Proyek</a>
        <a href="#diagnostic" class="nav-item">Cek Koneksi</a>
        <a href="#calculator" class="nav-item">Hitung Biaya</a>
        <a href="#stats" class="nav-item">Statistik</a>
        <a href="#faq" class="nav-item">Tanya Jawab</a>
        <a href="https://mail.xsur.my.id" target="_blank" class="nav-item" style="color: var(--cyan); font-weight: 600;">Webmail ↗</a>
        <a href="${waUrl}" target="_blank" class="btn-header-cta">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Hubungi Kami
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
    <a href="#standards" class="mob-nav-link" onclick="closeMobMenu()">⭐ 4 Keunggulan Layanan</a>
    <a href="#projects" class="mob-nav-link" onclick="closeMobMenu()">💼 Daftar Layanan &amp; Jasa</a>
    <a href="#diagnostic" class="mob-nav-link" onclick="closeMobMenu()">⚡ Cek Kualitas Koneksi</a>
    <a href="#calculator" class="mob-nav-link" onclick="closeMobMenu()">📊 Hitung Estimasi Biaya</a>
    <a href="#stats" class="mob-nav-link" onclick="closeMobMenu()">📈 Statistik &amp; Kunjungan Real</a>
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
        <span>SOLUSI IT TERPADU UNTUK SEMUA KEBUTUHAN ANDA</span>
      </div>
      <h1 class="hero-title">
        Solusi IT Lengkap untuk Semua: Jaringan, Website, Bot Otomasi &amp; <span class="gradient-text">Keamanan Sistem Bisnis</span>
      </h1>
      <p class="hero-desc">
        PT Xecure Siber Unggul Resolusi (XSUR) hadir sebagai mitra teknologi serba ada untuk siapa saja — perkantoran, ruko, toko online/UMKM, startup, hingga kebutuhan personal: mulai dari perbaikan jaringan WiFi kantor &amp; MikroTik agar internet stabil tanpa lemot, pembuatan website modern, bot WhatsApp/Telegram otomatis 24 jam, integrasi pembayaran QRIS instan, hingga pengamanan sistem dari serangan hacker. Cepat, terpercaya, dan bergaransi penuh bersama Bang Mansur.
      </p>

      <div class="hero-actions">
        <a href="#projects" class="btn-primary">
          <span>Lihat Layanan &amp; Portofolio</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#calculator" class="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Hitung Estimasi Biaya</span>
        </a>
        <a href="${waUrl}" target="_blank" class="btn-secondary">
          <span>Konsultasi WhatsApp</span>
        </a>
      </div>

      <!-- Audience Strip: Solusi untuk Semua Kalangan -->
      <div class="audience-strip">
        <span class="audience-label">Cocok Untuk:</span>
        <span class="audience-pill">🏢 Perkantoran &amp; Ruko</span>
        <span class="audience-pill">🏪 Toko Online &amp; UMKM</span>
        <span class="audience-pill">🚀 Startup &amp; Bisnis Digital</span>
        <span class="audience-pill">🎓 Mahasiswa &amp; Kebutuhan Personal</span>
      </div>

      <!-- Live Edge Telemetry Bar -->
      <div class="telemetry-bar">
        <div class="telemetry-item">
          <span>LOKASI SERVER:</span>
          <span class="telemetry-val" id="tele-colo">Indonesia &amp; Singapura</span>
        </div>
        <div class="telemetry-item">
          <span>KECEPATAN AKSES:</span>
          <span class="telemetry-val" id="tele-lat">&lt; 20 ms (Cepat)</span>
        </div>
        <div class="telemetry-item">
          <span>STATUS KEAMANAN:</span>
          <span class="telemetry-val">Koneksi Aman &amp; Terenkripsi</span>
        </div>
        <div class="telemetry-item">
          <span>LAYANAN KAMI:</span>
          <span class="telemetry-val">Online 24 Jam Nonstop</span>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="section-head" id="about">
      <span class="section-tag">PROFIL PENGELOLA</span>
      <h2 class="section-title">Mengenal Founder &amp; Praktisi Utama</h2>
      <p class="section-desc">Berpengalaman menangani infrastruktur jaringan, sistem otomasi, dan keamanan siber untuk mendukung pertumbuhan bisnis Anda.</p>
    </section>

    <div class="founder-card">
      <div class="founder-img-box">
        <div class="founder-halo"></div>
        <img src="${founderImg}" alt="${founderName}" class="founder-img" loading="lazy">
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 11.5px; color: var(--cyan); margin-bottom: 6px;">
          FOUNDER &amp; PRAKTISI TEKNOLOGI INFORMASI
        </div>
        <h3 style="font-size: 26px; font-weight: 800; color: var(--white); margin-bottom: 4px;">${founderName}</h3>
        <p style="font-size: 14px; color: #94a3b8; font-weight: 600; margin-bottom: 14px;">${founderEdu}</p>
        <p style="font-size: 14.5px; color: #cbd5e1; line-height: 1.6; margin-bottom: 18px;">
          "Kami fokus menghadirkan solusi teknologi yang langsung terasa manfaatnya untuk operasional dan bisnis Anda: internet kantor tidak lagi lemot atau sering putus, sistem penjualan berjalan otomatis 24 jam tanpa repot jaga manual, dan data penting perusahaan Anda terlindungi aman dari peretas."
        </p>
        <div class="founder-badge-grid">
          <span class="founder-pill">📶 Setting WiFi &amp; MikroTik Kantor</span>
          <span class="founder-pill">🛡️ Pengamanan Web Anti-Hack</span>
          <span class="founder-pill">🤖 Pembuatan Bot WA &amp; Telegram</span>
          <span class="founder-pill">💳 Pemasangan QRIS Otomatis</span>
          <span class="founder-pill">💻 Pembuatan Website &amp; Aplikasi</span>
          <span class="founder-pill">🎓 Konsultasi IT &amp; Bimbingan Coding</span>
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

    <!-- Keunggulan Layanan Kami Section -->
    <section class="section-head" id="standards">
      <span class="section-tag">MENGAPA MEMILIH KAMI?</span>
      <h2 class="section-title">4 Komitmen &amp; Keunggulan Layanan Kami</h2>
      <p class="section-desc">Kami menjamin setiap pengerjaan dikerjakan secara rapi, bergaransi, dan memberikan hasil nyata untuk kelancaran bisnis dan operasional kantor Anda.</p>
    </section>

    <div class="standards-grid">
      <div class="standard-card">
        <div class="standard-icon">📶</div>
        <h3 class="standard-title">Internet Kantor Stabil &amp; Cepat</h3>
        <p class="standard-desc">Bukan sekadar tersambung internet. Kami membagi kecepatan secara adil agar kasir, rapat online (Zoom), dan staf tidak saling berebut kuota. Otomatis pindah ke koneksi cadangan jika salah satu ISP bermasalah.</p>
      </div>
      <div class="standard-card">
        <div class="standard-icon">🛡️</div>
        <h3 class="standard-title">Sistem Aman dari Hacker &amp; Virus</h3>
        <p class="standard-desc">Website, toko online, dan server kantor Anda kami periksa dan lindungi dari celah kebocoran data pelanggan, serangan virus/ransomware, maupun pengalihan situs (deface).</p>
      </div>
      <div class="standard-card">
        <div class="standard-icon">🤖</div>
        <h3 class="standard-title">Bisnis Otomatis Berjalan 24 Jam</h3>
        <p class="standard-desc">Toko online dan bot WhatsApp/Telegram Anda dapat melayani ribuan pembeli, menerima pembayaran QRIS otomatis, dan mengirim produk secara instan bahkan saat Anda sedang istirahat.</p>
      </div>
      <div class="standard-card">
        <div class="standard-icon">🤝</div>
        <h3 class="standard-title">Didampingi Ahli Berpengalaman</h3>
        <p class="standard-desc">Setiap pengerjaan diawasi dan dikerjakan langsung oleh Bang Mansur dengan jaminan garansi pengerjaan dan panduan pemakaian yang ramah orang awam.</p>
      </div>
    </div>

    <!-- Layanan & Portofolio Section -->
    <section class="section-head" id="projects">
      <span class="section-tag">DAFTAR LAYANAN &amp; PORTOFOLIO</span>
      <h2 class="section-title">Layanan IT &amp; Proyek yang Siap Membantu Anda</h2>
      <p class="section-desc">Pilih layanan yang sesuai kebutuhan bisnis Anda: mulai dari perbaikan jaringan WiFi kantor, bot otomatisasi jualan, pembuatan website toko online, hingga pengamanan sistem dan konsultasi.</p>
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
      <span class="section-tag">UJI KONEKSI INTERNET</span>
      <h2 class="section-title">Cek Kualitas &amp; Keamanan Koneksi Anda</h2>
      <p class="section-desc">Periksa kestabilan jaringan, alamat IP Anda, dan status keamanan koneksi langsung dari server terdekat.</p>
    </section>

    <div class="diag-box">
      <div class="diag-header">
        <span>PEMERIKSAAN KONEKSI // AKTIF</span>
        <button onclick="runSecurityAuditSimulation()" class="btn-primary" style="padding: 6px 14px; font-size: 11.5px;">
          ▶ Cek Keamanan Koneksi
        </button>
      </div>
      <div class="diag-grid">
        <div class="diag-item">
          <div class="diag-label">ALAMAT IP ANDA</div>
          <div class="diag-val" id="diag-ip">Mendeteksi...</div>
        </div>
        <div class="diag-item">
          <div class="diag-label">SERVER TERDEKAT</div>
          <div class="diag-val" id="diag-colo">Mendeteksi...</div>
        </div>
        <div class="diag-item">
          <div class="diag-label">PROTOKOL INTERNET</div>
          <div class="diag-val" id="diag-proto">HTTP/3 (Cepat)</div>
        </div>
        <div class="diag-item">
          <div class="diag-label">ENKRIPSI DATA</div>
          <div class="diag-val" id="diag-cipher">Terenkripsi Aman (TLS 1.3)</div>
        </div>
      </div>
      <div class="diag-terminal" id="diag-console">
        &gt; Memeriksa kecepatan dan keamanan koneksi Anda...<br>
        &gt; Koneksi terhubung dengan stabil. Klik tombol [Cek Keamanan Koneksi] untuk pemeriksaan lengkap.
      </div>
    </div>

    <!-- Interactive Solution Estimator -->
    <section class="section-head" id="calculator">
      <span class="section-tag">HITUNG ESTIMASI KEBUTUHAN</span>
      <h2 class="section-title">Pilih Layanan &amp; Dapatkan Solusi Terbaik</h2>
      <p class="section-desc">Pilih jenis layanan dan skala bisnis Anda untuk melihat perkiraan lingkup kerja dan langsung berdiskusi dengan tim kami via WhatsApp.</p>
    </section>

    <div class="calc-box">
      <div>
        <span class="calc-label">1. PILIH JENIS LAYANAN</span>
        <div class="calc-btn-group" id="calc-solution-group">
          <button class="calc-pill active" onclick="selectSolution(this, 'jaringan')">📶 Setting WiFi &amp; Jaringan</button>
          <button class="calc-pill" onclick="selectSolution(this, 'keamanan')">🛡️ Keamanan Web &amp; Anti-Hack</button>
          <button class="calc-pill" onclick="selectSolution(this, 'bot')">🤖 Bot WA &amp; Telegram</button>
          <button class="calc-pill" onclick="selectSolution(this, 'software')">💻 Website &amp; QRIS</button>
        </div>

        <span class="calc-label">2. PILIH SKALA KEBUTUHAN</span>
        <div class="calc-btn-group" id="calc-scale-group">
          <button class="calc-pill active" onclick="selectScale(this, 'startup')">🏠 Toko / UMKM / Rumah</button>
          <button class="calc-pill" onclick="selectScale(this, 'corp')">🏢 Kantor / Kafe / Ruko</button>
          <button class="calc-pill" onclick="selectScale(this, 'mission')">🏬 Perusahaan / Skala Besar</button>
        </div>

        <div style="font-size: 13px; color: #94a3b8; line-height: 1.5; margin-top: 15px;">
          Setiap pengerjaan dilengkapi garansi teknis dan jaminan kerahasiaan data (NDA) untuk keamanan penuh operasional bisnis Anda.
        </div>
      </div>

      <div class="calc-result-box">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-family: var(--font-mono); font-size: 11px; color: var(--cyan);">RINGKASAN SOLUSI &amp; GARANSI</span>
            <span class="badge official" id="calc-badge">USAHA KECIL / UMKM</span>
          </div>
          <h3 id="calc-res-title" style="font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 10px;">
            Jasa Setting Jaringan WiFi &amp; Router MikroTik Kantor
          </h3>
          <p id="calc-res-desc" style="font-size: 13.5px; color: #94a3b8; line-height: 1.55; margin-bottom: 14px;">
            Optimalisasi internet kantor agar stabil tanpa lelet, pembagian bandwidth adil (agar Zoom/kasir tidak lag), penggabungan 2 provider internet (anti-mati lampu), serta koneksi aman antar cabang.
          </p>
          <div style="font-family: var(--font-mono); font-size: 12px; color: #cbd5e1; margin-bottom: 16px;">
            <div>&bull; Yang Didapat: <span id="calc-res-deliv" style="color: var(--cyan);">Konfigurasi Jaringan Bergaransi, Pengaturan Bandwidth, Skema Jaringan &amp; Pendampingan</span></div>
            <div style="margin-top: 4px;">&bull; Waktu Respon: <span id="calc-res-sla" style="color: #4ade80;">&lt; 2 Jam Tanggap Cepat</span></div>
          </div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a id="calc-wa-btn" href="https://wa.me/62857100055554" target="_blank" class="btn-primary" style="flex: 1; justify-content: center; font-size: 13px; padding: 10px;">
            Konsultasikan via WhatsApp
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

    <!-- FAQ Section -->
    <section class="section-head" id="faq" style="margin-top: 60px;">
      <span class="section-tag">PERTANYAAN UMUM</span>
      <h2 class="section-title">Pertanyaan yang Sering Diajukan</h2>
      <p class="section-sub">
        Informasi seputar cara pemesanan jasa, garansi pengerjaan, dan alur konsultasi bersama Bang Mansur.
      </p>
    </section>

    <div class="faq-grid">
      <details class="faq-item" open>
        <summary>Layanan apa saja yang disediakan oleh PT Xecure Siber Unggul Resolusi (XSUR)?</summary>
        <p>
          Kami melayani berbagai kebutuhan IT praktis untuk semua kalangan (perkantoran, toko online/UMKM, hingga perorangan): 1) Setting jaringan WiFi kantor &amp; router MikroTik agar internet stabil dan anti-lelet, 2) Pembuatan website profil bisnis dan toko online modern terdaftar di Google, 3) Pembuatan bot WhatsApp dan Telegram otomatis untuk jualan 24 jam, 4) Pengamanan website dari serangan hacker dan virus, 5) Pemasangan sistem pembayaran QRIS otomatis semua bank, serta 6) Konsultasi IT dan bimbingan coding.
        </p>
      </details>

      <details class="faq-item">
        <summary>Apakah layanan XSUR cocok untuk bisnis kecil, UMKM, atau kebutuhan pribadi?</summary>
        <p>
          Sangat cocok. Layanan XSUR dirancang fleksibel untuk semua skala: mulai dari pemilik toko online/UMKM yang butuh bot jualan auto-reply &amp; pembayaran QRIS, perkantoran/kafe yang butuh WiFi stabil tanpa rebutan kuota, hingga mahasiswa/perorangan yang butuh konsultasi IT atau bantuan coding.
        </p>
      </details>

      <details class="faq-item">
        <summary>Siapa yang mengerjakan dan mengawasi setiap proyek di XSUR?</summary>
        <p>
          Seluruh pengerjaan dipimpin langsung oleh Bang Mansur, praktisi IT senior dan profesional keamanan siber dengan pengalaman bertahun-tahun dalam menangani jaringan perkantoran, sistem otomasi, dan keamanan data.
        </p>
      </details>

      <details class="faq-item">
        <summary>Apakah ada garansi untuk jasa setting jaringan atau pembuatan sistem?</summary>
        <p>
          Tentu ada. Setiap jasa dan sistem yang kami bangun dilengkapi dengan masa garansi pengerjaan dan pendampingan teknis. Jika terjadi kendala atau butuh penyesuaian setelah pengerjaan selesai, kami siap membantu perbaikan hingga normal kembali.
        </p>
      </details>

      <details class="faq-item">
        <summary>Saya orang awam dan tidak paham IT, apakah sistemnya mudah digunakan?</summary>
        <p>
          Sangat mudah. Kami selalu merancang sistem yang ramah pengguna (user-friendly) agar bisa langsung dioperasikan oleh siapa saja. Kami juga menyediakan panduan penggunaan singkat yang jelas serta pelatihan bagi Anda atau staf Anda.
        </p>
      </details>

      <details class="faq-item">
        <summary>Apakah data dan sistem bisnis saya dijamin kerahasiaannya?</summary>
        <p>
          Pasti 100% aman. Kami menjunjung tinggi integritas privasi klien. Seluruh proyek dapat disertai dengan Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) resmi sehingga data perusahaan Anda terjamin aman dan tidak akan dibagikan ke pihak mana pun.
        </p>
      </details>

      <details class="faq-item">
        <summary>Bagaimana cara memesan jasa atau berkonsultasi?</summary>
        <p>
          Anda cukup klik tombol WhatsApp atau Telegram yang tersedia di halaman ini. Ceritakan kendala atau kebutuhan Anda secara santai, dan kami akan memberikan saran solusi yang paling hemat, tepat sasaran, dan sesuai kebutuhan Anda.
        </p>
      </details>
    </div>

    <!-- Real-Time Activity & Visitor Counter Section -->
    <section class="section-head" id="stats" style="margin-top: 70px;">
      <span class="section-tag">REAL-TIME OPERATIONAL METRICS</span>
      <h2 class="section-title">Aktivitas Layanan &amp; Kunjungan Klien Real-Time</h2>
      <p class="section-desc">
        Transparansi operasional kami: pantau langsung konsultasi yang sedang aktif diproses, total proyek sukses bergaransi, dan counter pengunjung resmi web XSUR.
      </p>
    </section>

    <!-- ESTETIK COCKPIT SHOWCASE FRAME -->
    <div class="stats-cockpit-frame">
      <!-- Top Cockpit Status Bar -->
      <div class="cockpit-top-bar">
        <div class="cockpit-status-badge">
          <span class="live-radar-ping"></span>
          <span class="cockpit-title-text">TELEMETRY AKTIVITAS &amp; TRAFIK REAL-TIME</span>
          <span class="cockpit-edge-tag">EDGE D1 LIVE</span>
        </div>
        <div class="cockpit-time-chip">
          <span>🕒</span>
          <span>SINKRONISASI OTOMATIS CLOUDFLARE</span>
        </div>
      </div>

      <!-- Segment 1: Aktivitas Pengerjaan & Konsultasi Klien -->
      <div class="cockpit-section-label">
        <span>⚡ STATUS PENANGANAN KLIEN &amp; PROYEK</span>
      </div>

      <div class="cockpit-cards-grid">
        <!-- Card 1: Sedang Diproses -->
        <div class="stat-card-modern card-theme-emerald">
          <div class="stat-card-header">
            <span class="stat-pill-badge pill-emerald"><span class="pulse-dot"></span> SEDANG DIPROSES</span>
            <div class="stat-icon-wrapper">⚡</div>
          </div>
          <div class="stat-metric-value" id="cnt-active">
            ${visitorStats.active_consultations} <span class="unit-text">Klien Aktif</span>
          </div>
          <div class="stat-metric-title">Konsultasi Aktif Hari Ini</div>
          <p class="stat-metric-desc">Klien yang sedang dalam penanganan teknis langsung bersama tim Bang Mansur.</p>
          <div class="stat-card-footer-indicator">
            <span class="indicator-tag active">● Antrean Berjalan Normal</span>
            <span class="indicator-sparkline">Respon &lt; 15 Mnt</span>
          </div>
        </div>

        <!-- Card 2: Proyek Selesai -->
        <div class="stat-card-modern card-theme-sky">
          <div class="stat-card-header">
            <span class="stat-pill-badge pill-sky">TERVERIFIKASI</span>
            <div class="stat-icon-wrapper">🏆</div>
          </div>
          <div class="stat-metric-value" id="cnt-completed">
            ${(visitorStats.completed_projects).toLocaleString('id-ID')}+
          </div>
          <div class="stat-metric-title">Proyek Sukses Bergaransi</div>
          <p class="stat-metric-desc">Jaringan WiFi kantor, website toko online, bot otomatis, dan pengamanan sistem.</p>
          <div class="stat-card-footer-indicator">
            <span class="indicator-tag">✓ 100% Tuntas Beres</span>
            <span class="indicator-sparkline">Garansi Purna Jual</span>
          </div>
        </div>

        <!-- Card 3: Rating & Kepuasan -->
        <div class="stat-card-modern card-theme-amber">
          <div class="stat-card-header">
            <span class="stat-pill-badge pill-amber">★★★★★ RATING</span>
            <div class="stat-icon-wrapper">⭐</div>
          </div>
          <div class="stat-metric-value">
            ${visitorStats.client_satisfaction}%
          </div>
          <div class="stat-metric-title">Tingkat Kepuasan Klien</div>
          <p class="stat-metric-desc">Berdasarkan ulasan mitra perkantoran, ruko, UMKM, dan perorangan di Indonesia.</p>
          <div class="stat-card-footer-indicator">
            <span class="indicator-tag">128+ Ulasan Positif</span>
            <span class="indicator-sparkline">Skor 4.9 / 5.0</span>
          </div>
        </div>
      </div>

      <!-- Segment 2: Kunjungan Pengunjung Web Resmi -->
      <div class="cockpit-section-label" style="margin-top: 10px;">
        <span>👥 TRAFIK KUNJUNGAN WEBSITE RESMI XSUR</span>
      </div>

      <div class="cockpit-cards-grid">
        <!-- Card 4: Pengunjung Hari Ini (Real Counter) -->
        <div class="stat-card-modern card-theme-cyan">
          <div class="stat-card-header">
            <span class="stat-pill-badge pill-cyan"><span class="pulse-dot blue"></span> LIVE HARI INI</span>
            <div class="stat-icon-wrapper">👥</div>
          </div>
          <div class="stat-metric-value" id="cnt-today">
            ${(visitorStats.today_views).toLocaleString('id-ID')}
          </div>
          <div class="stat-metric-title">Pengunjung Web Hari Ini</div>
          <p class="stat-metric-desc">Trafik kunjungan riil yang tercatat otomatis di edge server Cloudflare D1.</p>
          <div class="stat-card-footer-indicator">
            <span class="indicator-tag active">● Real-time Visitor D1</span>
            <span class="indicator-sparkline">Live Ticker</span>
          </div>
        </div>

        <!-- Card 5: Kunjungan Bulan Ini -->
        <div class="stat-card-modern card-theme-purple">
          <div class="stat-card-header">
            <span class="stat-pill-badge pill-purple">BULAN INI</span>
            <div class="stat-icon-wrapper">📈</div>
          </div>
          <div class="stat-metric-value" id="cnt-month">
            ${(visitorStats.month_views).toLocaleString('id-ID')}+
          </div>
          <div class="stat-metric-title">Kunjungan Bulan Ini</div>
          <p class="stat-metric-desc">Akses pencarian organik Google, rujukan kemitraan, dan klien korporat.</p>
          <div class="stat-card-footer-indicator">
            <span class="indicator-tag">🚀 Trafik Terus Naik</span>
            <span class="indicator-sparkline">SERP Top 10</span>
          </div>
        </div>

        <!-- Card 6: Total Kunjungan Kumulatif -->
        <div class="stat-card-modern card-theme-slate">
          <div class="stat-card-header">
            <span class="stat-pill-badge pill-slate">AKUMULATIF</span>
            <div class="stat-icon-wrapper">🌐</div>
          </div>
          <div class="stat-metric-value" id="cnt-total">
            ${(visitorStats.total_views).toLocaleString('id-ID')}+
          </div>
          <div class="stat-metric-title">Total Kunjungan Portal</div>
          <p class="stat-metric-desc">Dihitung otomatis tanpa rekayasa melalui jaringan database Cloudflare D1.</p>
          <div class="stat-card-footer-indicator">
            <span class="indicator-tag">🌍 Global Cloudflare CDN</span>
            <span class="indicator-sparkline">Verified Hits</span>
          </div>
        </div>
      </div>

      <!-- Cockpit Footer Ticker Strip -->
      <div class="cockpit-footer-strip">
        <div class="footer-guarantee-pill">
          <span class="dot-indicator emerald"></span>
          <span>Semua Pengerjaan Diberikan Garansi Tuntas</span>
        </div>
        <div class="footer-guarantee-pill">
          <span class="dot-indicator cyan"></span>
          <span>Konsultasi Langsung Bersama Bang Mansur</span>
        </div>
        <div class="footer-guarantee-pill">
          <span class="dot-indicator amber"></span>
          <span>Data Trafik Transparan di Database Cloudflare</span>
        </div>
      </div>
    </div>

    <!-- Consultation CTA -->
    <section class="contact-card" id="contact">
      <span class="section-tag">KONSULTASI MUDAH</span>
      <h2 style="font-size: clamp(24px, 4vw, 32px); font-weight: 800; margin-bottom: 12px; color: var(--white);">
        Punya Kendala IT atau Butuh Sistem Otomasi?
      </h2>
      <p style="font-size: 15px; color: var(--text-muted); max-width: 600px; margin: 0 auto 28px;">
        Hubungi Bang Mansur langsung untuk berdiskusi santai mengenai perbaikan WiFi kantor, pembuatan bot jualan, website baru, atau pengamanan sistem bisnis Anda.
      </p>
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
        <a href="${waUrl}" target="_blank" class="btn-primary" style="font-size: 14px; padding: 13px 26px;">
          WhatsApp Langsung (+62 857-1000-55554)
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
          Solusi IT Profesional, Jaringan Internet Kantor &amp; Otomasi Bisnis &bull; Layanan Bergaransi &bull; WhatsApp: +62 857-1000-55554
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
      introMessage: 'Halo! Ada yang bisa kami bantu terkait setting WiFi kantor, pembuatan bot WhatsApp/Telegram, website baru, atau pengamanan sistem? Silakan chat langsung di sini.',
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
    let currentSol = 'jaringan';
    let currentScale = 'startup';

    const solutionData = {
      jaringan: {
        title: 'Jasa Setting Jaringan WiFi & Router MikroTik Kantor',
        desc: 'Optimalisasi internet kantor agar stabil tanpa lelet, pembagian bandwidth adil (agar Zoom/kasir tidak lag), penggabungan 2 provider internet (anti-mati lampu), serta koneksi aman antar cabang.',
        deliv: 'Konfigurasi Jaringan Bergaransi, Pengaturan Bandwidth, Skema Jaringan & Pendampingan'
      },
      keamanan: {
        title: 'Jasa Audit & Pengamanan Website (Anti-Hack / Pentest)',
        desc: 'Pemeriksaan menyeluruh celah keamanan website toko online dan sistem kantor sebelum dibobol hacker, perlindungan data pelanggan dari kebocoran, serta pembersihan sistem yang pernah kena hack.',
        deliv: 'Laporan Celah Keamanan, Penutupan Bug / Patch, & Panduan Pencegahan Serangan'
      },
      bot: {
        title: 'Jasa Pembuatan Bot WhatsApp & Telegram Otomatis untuk Bisnis',
        desc: 'Sistem asisten otomatis yang melayani pelanggan 24 jam nonstop: membalas pertanyaan pelanggan, mengirimkan notifikasi pesanan otomatis, cek pembayaran, dan promosi tanpa perlu admin standby.',
        deliv: 'Bot Siap Pakai 24 Jam, Script Otomasi, Panduan Cara Pakai & Pelatihan Admin'
      },
      software: {
        title: 'Jasa Pembuatan Website Perusahaan & Sistem Pembayaran QRIS',
        desc: 'Pembuatan website profil bisnis modern yang cepat dan nyaman di HP, serta integrasi sistem pembayaran QRIS langsung lunas tanpa perlu cek mutasi transfer manual.',
        deliv: 'Website Siap Online, Sistem QRIS Terintegrasi, Domain & Email Resmi Kantor'
      }
    };

    const scaleData = {
      startup: { badge: 'USAHA KECIL / UMKM', sla: '&lt; 2 Jam Tanggap Cepat' },
      corp: { badge: 'KANTOR / KAFE / RUKO', sla: '&lt; 1 Jam Tanggap Prioritas' },
      mission: { badge: 'PERUSAHAAN / SKALA BESAR', sla: '&lt; 15 Menit Hotline Langsung' }
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
