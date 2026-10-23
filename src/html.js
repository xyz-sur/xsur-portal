// Public UI Template for PT Xecure Siber Unggul Resolusi (xsur.my.id)
import { SVG_HORIZONTAL, SVG_ICON, LOGO_PHILOSOPHY } from "./logo.js";
import { generateSeoTags } from "./seo.js";

export function renderPublicPage({ menus, siteConfig, canonicalUrl }) {
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

  // Build Menus HTML
  const parentMenus = menus.filter(m => !m.parent_id);
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

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      position: sticky; top: 0; z-index: 100;
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      background: rgba(7, 9, 14, 0.85); border-bottom: 1px solid var(--border);
      height: 76px; display: flex; align-items: center;
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
    .brand-link { display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; }
    .brand-logo-svg { height: 42px; width: auto; max-width: 170px; display: block; }

    .nav-links { display: flex; align-items: center; gap: 8px; }
    .nav-item {
      padding: 10px 16px; font-size: 14px; font-weight: 600; color: #cbd5e1;
      text-decoration: none; border-radius: 8px; transition: all 0.2s ease;
      background: transparent; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
    }
    .nav-item:hover { color: var(--white); background: rgba(255, 255, 255, 0.05); }

    /* Dropdown Menus */
    .nav-dropdown-wrapper { position: relative; }
    .dropdown-arrow { transition: transform 0.2s ease; }
    .nav-dropdown-wrapper:hover .dropdown-arrow { transform: rotate(180deg); }
    .nav-dropdown-menu {
      position: absolute; top: calc(100% + 8px); left: 0; min-width: 280px;
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
      background: rgba(255, 255, 255, 0.1); color: var(--white);
    }
    .badge.live { background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); }
    .badge.popular, .badge.hot { background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .badge.pro, .badge.core { background: rgba(0, 242, 254, 0.15); color: var(--cyan); border: 1px solid rgba(0, 242, 254, 0.3); }

    .btn-header-cta {
      padding: 9px 18px; font-size: 13.5px; font-weight: 700; border-radius: 8px;
      background: var(--white); color: #000; text-decoration: none; transition: all 0.2s ease;
    }
    .btn-header-cta:hover { background: #e2e8f0; transform: translateY(-1px); }

    /* Hero Section */
    .hero { padding: 90px 0 60px; text-align: left; }
    .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; }
    
    .hero-tag {
      display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono);
      font-size: 12px; font-weight: 600; color: var(--cyan); background: var(--cyan-dim);
      border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 999px; padding: 6px 14px; margin-bottom: 24px;
    }
    .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: pulse 2s infinite; }
    @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }

    .hero-title {
      font-size: 48px; font-weight: 800; line-height: 1.15; letter-spacing: -1.2px; margin-bottom: 20px;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hero-sub {
      font-size: 17px; color: var(--text-muted); line-height: 1.65; margin-bottom: 32px; max-width: 580px;
    }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
    
    .btn-primary {
      padding: 13px 26px; border-radius: 10px; font-size: 14.5px; font-weight: 700;
      background: linear-gradient(135deg, #00f2fe, #0077fe); color: #000;
      text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
      transition: all 0.2s ease; box-shadow: 0 4px 20px var(--cyan-glow);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px var(--cyan-glow); }

    .btn-secondary {
      padding: 13px 24px; border-radius: 10px; font-size: 14.5px; font-weight: 600;
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
    .term-body .term-line { display: flex; justify-content: space-between; margin-bottom: 6px; }
    .term-body .term-line span:first-child { color: #64748b; }
    .term-body .term-line span:last-child { color: var(--white); font-weight: 600; }
    .text-cyan { color: var(--cyan) !important; }
    .text-emerald { color: #10b981 !important; }

    /* Section Headers */
    .section-head { text-align: center; max-width: 680px; margin: 90px auto 48px; }
    .section-tag {
      font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; color: var(--cyan);
      letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px; display: block;
    }
    .section-title { font-size: 34px; font-weight: 800; letter-spacing: -0.8px; margin-bottom: 14px; }
    .section-desc { font-size: 15.5px; color: var(--text-muted); }

    /* Founder Profile Section (Black and White Anonymous) */
    .founder-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
      padding: 40px; display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: center;
      position: relative; overflow: hidden; backdrop-filter: blur(12px);
    }
    .founder-card::before {
      content: ''; position: absolute; top: -50%; left: -20%; width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(0, 242, 254, 0.07), transparent 70%); pointer-events: none;
    }
    .founder-img-box { position: relative; width: 240px; height: 240px; margin: 0 auto; }
    .founder-img {
      width: 100%; height: 100%; object-fit: cover; border-radius: 20px;
      /* Anonymous B&W High-Contrast Style */
      filter: grayscale(100%) contrast(135%) brightness(95%);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 30px rgba(0, 242, 254, 0.15);
    }
    .founder-halo {
      position: absolute; inset: -8px; border-radius: 26px; border: 1.5px dashed rgba(0, 242, 254, 0.3);
      pointer-events: none; animation: spin-slow 40s linear infinite;
    }
    @keyframes spin-slow { 100% { transform: rotate(360deg); } }

    .founder-badge-grid { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0; }
    .founder-pill {
      font-size: 12px; font-family: var(--font-mono); padding: 5px 12px; border-radius: 6px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); color: #cbd5e1;
    }

    /* Services Grid */
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; }
    .service-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);
      padding: 30px; transition: all 0.25s ease; position: relative;
    }
    .service-card:hover { transform: translateY(-4px); border-color: var(--border-focus); box-shadow: 0 12px 30px rgba(0,0,0,0.5); }
    .service-num { font-family: var(--font-mono); font-size: 13px; font-weight: 700; color: var(--cyan); margin-bottom: 14px; }
    .service-name { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: var(--white); }
    .service-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; }
    .service-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .service-tag { font-size: 11px; font-family: var(--font-mono); background: rgba(255,255,255,0.04); padding: 3px 8px; border-radius: 4px; color: #94a3b8; }

    /* Products Showcase */
    .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    .prod-card {
      background: #090d14; border: 1px solid var(--border); border-radius: var(--radius);
      padding: 24px; text-decoration: none; color: inherit; transition: all 0.2s ease; display: block;
    }
    .prod-card:hover { border-color: var(--cyan); transform: translateY(-3px); }
    .prod-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
    .prod-title { font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 6px; }
    .prod-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; }

    /* Gemini Logo Showcase */
    .logo-showcase {
      background: linear-gradient(180deg, rgba(14, 19, 29, 0.8), rgba(9, 13, 20, 0.95));
      border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin: 80px 0;
      display: grid; grid-template-columns: 240px 1fr; gap: 40px; align-items: center;
    }
    .logo-render-box { width: 100%; max-width: 200px; margin: 0 auto; }

    /* Consultation / Contact */
    .contact-card {
      background: radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.1), transparent 70%), #0c1018;
      border: 1px solid var(--border); border-radius: 20px; padding: 50px 30px; text-align: center; margin-bottom: 80px;
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border); padding: 40px 0; font-size: 13px; color: #64748b;
      background: #05070a;
    }
    .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
    .footer-admin-link { color: #475569; text-decoration: none; font-family: var(--font-mono); font-size: 12px; }
    .footer-admin-link:hover { color: var(--cyan); }

    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr; }
      .founder-card { grid-template-columns: 1fr; text-align: center; }
      .founder-badge-grid { justify-content: center; }
      .logo-showcase { grid-template-columns: 1fr; text-align: center; }
      .nav-links { display: none; }
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
        <div style="height: 40px; width: 140px;">
          ${SVG_HORIZONTAL}
        </div>
      </a>

      <nav class="nav-links">
        ${navHtml}
        <a href="${waUrl}" target="_blank" class="btn-header-cta">Diskusi Teknis</a>
      </nav>
    </div>
  </header>

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
            Menyatukan riset mendalam <strong>keamanan siber</strong>, rekayasa jaringan <strong>enterprise routing</strong>, serta otomasi infrastruktur terdistribusi. Dibangun atas integritas teknis dan komitmen proteksi data tingkat tinggi.
          </p>
          <div class="hero-actions">
            <a href="${waUrl}" target="_blank" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Konsultasi WhatsApp
            </a>
            <a href="${tgUrl}" target="_blank" class="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.7 6.46a2.234 2.234 0 0 0-.17 4.17l4.08 1.48 1.5 4.63a1.5 1.5 0 0 0 2.37.58l2.5-2.07 4.45 3.3a1.5 1.5 0 0 0 2.38-.85l3.2-15.5a2.24 2.24 0 0 0-2.59-2.41z"/></svg>
              Telegram Founder
            </a>
            <a href="#services" class="btn-secondary">Portofolio Solusi</a>
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
            <div class="term-line"><span>GATEWAY:</span> <span class="text-emerald">CONNECTED (HTTP/3 QUIC)</span></div>
            <div class="term-line"><span>PROTECTION:</span> <span class="text-cyan">ZERO-TRUST SECURE</span></div>
            <div class="term-line"><span>DATACENTER:</span> <span id="tele-colo">CLOUDFLARE GLOBAL</span></div>
            <div class="term-line"><span>ENCRYPTION:</span> <span>AES-256-GCM / TLS 1.3</span></div>
            <div class="term-line"><span>LATENCY:</span> <span id="tele-lat" class="text-cyan">&lt; 15 ms</span></div>
            <div class="term-line"><span>SYSTEM AUDIT:</span> <span class="text-emerald">VERIFIED BY BANG MANSUR</span></div>
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
        <div style="font-family: var(--font-mono); font-size: 12px; color: var(--cyan); margin-bottom: 6px;">
          CHIEF EXECUTIVE &amp; SECURITY PRACTITIONER
        </div>
        <h3 style="font-size: 28px; font-weight: 800; color: var(--white); margin-bottom: 4px;">${founderName}</h3>
        <p style="font-size: 14px; color: #94a3b8; font-weight: 600; margin-bottom: 14px;">${founderEdu}</p>
        <p style="font-size: 15px; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;">
          "Menyatukan eksplorasi riset mendalam dengan reliabilitas operasional industri. Kami tidak hanya mengaudit kelemahan, tetapi merancang arsitektur sistematis agar infrastruktur tahan terhadap serangan terdistribusi."
        </p>
        <div class="founder-badge-grid">
          <span class="founder-pill">🛡️ VAPT &amp; SecOps</span>
          <span class="founder-pill">🌐 MikroTik RouterOS Specialist</span>
          <span class="founder-pill">⚡ High-Throughput MTProto Bots</span>
          <span class="founder-pill">💳 FinTech &amp; H2H Gateway</span>
          <span class="founder-pill">🔍 Reverse Engineering &amp; Forensics</span>
        </div>
        <div style="margin-top: 18px;">
          <a href="https://github.com/xyz-sur" target="_blank" class="btn-secondary" style="padding: 8px 16px; font-size: 13px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Portofolio @xyz-sur
          </a>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <section class="section-head" id="services">
      <span class="section-tag">COMPREHENSIVE SOLUTIONS</span>
      <h2 class="section-title">Layanan &amp; Solusi Rekayasa</h2>
      <p class="section-desc">Pilar kapabilitas teknis yang dirancang khusus untuk enterprise, startup, dan kebutuhan infrastruktur berkeamanan tinggi.</p>
    </section>

    <div class="services-grid">
      <div class="service-card">
        <div class="service-num">01 // CYBERSECURITY</div>
        <h3 class="service-name">Vulnerability Assessment &amp; Pentest (VAPT)</h3>
        <p class="service-desc">Audit mendalam aplikasi web, API microservices, dan backend server. Mengidentifikasi kerentanan zero-day, business logic flaw, dan penguatan benteng pertahanan sesuai standar OWASP.</p>
        <div class="service-tags">
          <span class="service-tag">Web &amp; API Pentest</span>
          <span class="service-tag">Cloud WAF Hardening</span>
          <span class="service-tag">Zero-Day Defense</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-num">02 // ENTERPRISE NETWORKING</div>
        <h3 class="service-name">MikroTik RouterOS &amp; Distributed Tunnels</h3>
        <p class="service-desc">Perancangan arsitektur jaringan multi-WAN failover, BGP, traffic QoS, serta enkripsi OVPN dan WireGuard tunnel antar cabang tanpa risiko tabrakan subnet IP internal.</p>
        <div class="service-tags">
          <span class="service-tag">MikroTik v7.x</span>
          <span class="service-tag">OVPN / WireGuard</span>
          <span class="service-tag">Multi-WAN BGP</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-num">03 // AUTOMATION FLEET</div>
        <h3 class="service-name">High-Concurrency Bot &amp; MTProto Engines</h3>
        <p class="service-desc">Pembangunan userbot Telegram multi-worker, link sniffer otomatis, load balancing antrean, dan sistem bypass anti-flood Telegram terisolasi untuk kebutuhan pemasaran dan scraping data.</p>
        <div class="service-tags">
          <span class="service-tag">Telethon Engine</span>
          <span class="service-tag">Multi-Worker Fleet</span>
          <span class="service-tag">Anti-SpamBot Bypass</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-num">04 // FINTECH INFRASTRUCTURE</div>
        <h3 class="service-name">FinTech, PPOB &amp; H2H QRIS Gateway</h3>
        <p class="service-desc">Infrastruktur transaksi pembayaran QRIS dinamis real-time, sistem H2H biller pulsa/data, serta mutasi perbankan otomatis dengan dashboard berproteksi Telegram 2FA OTP.</p>
        <div class="service-tags">
          <span class="service-tag">Dynamic QRIS</span>
          <span class="service-tag">H2H Multi-Biller</span>
          <span class="service-tag">Telegram 2FA OTP</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-num">05 // TELECOM REGULATION</div>
        <h3 class="service-name">CEIR &amp; IMEI Telecommunication Audit</h3>
        <p class="service-desc">Sistem verifikasi integritas IMEI Bea Cukai dan Kemenperin terintegrasi langsung ke CeirGO API dengan arsitektur locking compare-and-swap anti-double charge.</p>
        <div class="service-tags">
          <span class="service-tag">CEIR Bea Cukai</span>
          <span class="service-tag">CAS Concurrency Lock</span>
          <span class="service-tag">CeirGO Ecosystem</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-num">06 // CONSULTATION</div>
        <h3 class="service-name">Private IT Consultation &amp; Digital Forensics</h3>
        <p class="service-desc">Pendampingan teknis privat bersama Bang Mansur untuk mitigasi insiden siber kritis, audit forensik digital, konsultasi riset komputasi (S2), dan perancangan roadmap IT enterprise.</p>
        <div class="service-tags">
          <span class="service-tag">Incident Response</span>
          <span class="service-tag">Digital Forensics</span>
          <span class="service-tag">Academic Research</span>
        </div>
      </div>
    </div>

    <!-- Products Showcase -->
    <section class="section-head" id="products">
      <span class="section-tag">LIVE ECOSYSTEM</span>
      <h2 class="section-title">Produk &amp; Platform Aktif</h2>
      <p class="section-desc">Layanan dan perangkat lunak produksi yang berjalan aktif di bawah manajemen PT Xecure Siber Unggul Resolusi.</p>
    </section>

    <div class="products-grid">
      <a href="https://cekimei.my.id" target="_blank" class="prod-card">
        <div class="prod-top">
          <span class="badge live">LIVE PRODUCTION</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </div>
        <h4 class="prod-title">Cek CEIR &amp; IMEI Platform</h4>
        <p class="prod-desc">Portal audit keabsahan IMEI Bea Cukai &amp; Kemenperin otomatis dengan integrasi QRIS instan.</p>
      </a>

      <a href="https://apiaing.msr.my.id" target="_blank" class="prod-card">
        <div class="prod-top">
          <span class="badge live">LIVE API</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </div>
        <h4 class="prod-title">Aing PPOB &amp; H2H Gateway</h4>
        <p class="prod-desc">API transaksi produk digital, top-up pulsa, paket data, dan validasi akun skala besar.</p>
      </a>

      <a href="https://workit.msr.my.id" target="_blank" class="prod-card">
        <div class="prod-top">
          <span class="badge core">ENTERPRISE</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </div>
        <h4 class="prod-title">WorkIt Task &amp; Voucher Engine</h4>
        <p class="prod-desc">Sistem internal pengelolaan tugas otomatis dan ekosistem voucher terenkripsi.</p>
      </a>

      <a href="https://t.me/cekceirbot" target="_blank" class="prod-card">
        <div class="prod-top">
          <span class="badge popular">TELEGRAM BOT</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </div>
        <h4 class="prod-title">@cekceirbot Telegram</h4>
        <p class="prod-desc">Bot audit IMEI berkecepatan tinggi dengan 5 format pengecekan resmi CeirGO.</p>
      </a>
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
        <h3 style="font-size: 24px; font-weight: 800; color: var(--white); margin-bottom: 12px;">
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
      <h2 style="font-size: 32px; font-weight: 800; margin-bottom: 12px; color: var(--white);">
        Diskusikan Kebutuhan Infrastruktur &amp; Keamanan Anda
      </h2>
      <p style="font-size: 16px; color: var(--text-muted); max-width: 600px; margin: 0 auto 30px;">
        Hubungi Bang Mansur secara langsung untuk konsultasi privat, NDA kerahasiaan proyek, atau penanganan insiden darurat.
      </p>
      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        <a href="${waUrl}" target="_blank" class="btn-primary" style="font-size: 15px; padding: 14px 30px;">
          WhatsApp Direct Konsultasi
        </a>
        <a href="${tgUrl}" target="_blank" class="btn-secondary" style="font-size: 15px; padding: 14px 26px;">
          Telegram DM (@msr77)
        </a>
        <a href="mailto:${email}" class="btn-secondary" style="font-size: 15px; padding: 14px 26px;">
          Kirim Email Resmi
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
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
  </script>
</body>
</html>`;
}
