// XSUR Link Shield & URL Shortener Engine
// Module for generating permanent shortlinks, 5s verification gateway, and management dashboard

import { SVG_HORIZONTAL, SVG_ICON } from "./logo.js";

export const DEFAULT_SEO_QUERIES = [
  "xsur.my.id PT Xecure Siber Unggul Resolusi",
  "xsur.my.id jasa setting wifi kantor mikrotik jakarta",
  "xsur.my.id jasa pembuatan bot whatsapp telegram otomatis",
  "xsur.my.id solusi wifi lemot kantor ruko cafe pembagian bandwidth",
  "xsur.my.id konsultasi keamanan siber penetration testing profesional",
  "xsur.my.id jasa audit website anti hack deface malware",
  "xsur.my.id jasa pembuatan website bisnis elegan responsif",
  "xsur.my.id setting failover multi isp load balancing mikrotik",
  "xsur.my.id jasa integrasi gateway pembayaran qris instan otomatis",
  "xsur.my.id bot notifikasi whatsapp php nodejs otomatis",
  "xsur.my.id jasa setting server proxmox vps cloud linux debian",
  "xsur.my.id jasa setup vpn interkoneksi antar kantor cabang wireguard",
  "xsur.my.id jasa perbaikan jaringan internet kantor lambat putus putus",
  "xsur.my.id instalasi access point ruijie unifi ubiquiti kantor",
  "xsur.my.id jasa coding bimbingan tugas freelance bang mansur",
  "xsur.my.id bang mansur pakar IT cybersecurity jakarta",
  "xsur.my.id optimasi kecepatan website skor pagespeed 100",
  "xsur.my.id jasa migrasi server hosting cpanel ke cloudflare vps",
  "xsur.my.id konfigurasi bandwidth management qos jaringan kantor",
  "xsur.my.id konsultan teknologi informasi ukm perusahaan solusi tuntas"
];

export function getRandomSeoQuery() {
  return DEFAULT_SEO_QUERIES[Math.floor(Math.random() * DEFAULT_SEO_QUERIES.length)];
}

// Generate cryptographically random 10-character alphanumeric slug
export function generateRandomSlug(length = 10) {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789"; // unambiguous lowercase & numbers
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  let res = "";
  for (let i = 0; i < length; i++) {
    res += chars[bytes[i] % chars.length];
  }
  return res;
}

// Render 5-Second SafeLink Verification Gateway
// Helper to safely extract domain name
function getDomainFromUrl(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.hostname;
  } catch (e) {
    return String(urlStr).replace(/https?:\/\//i, "").split("/")[0] || "tautan-tujuan";
  }
}

// Render 5-Second SafeLink Verification Gateway with Rich SEO, Link Preview Spoiler, and Dual-Tab SEO Injection
export function renderSafeLinkGateway({ slug, destinationUrl, title, seoKeyword }) {
  const targetDomain = getDomainFromUrl(destinationUrl);
  const finalTitle = title && title.trim() ? title.trim() : `Tautan Aman ke ${targetDomain}`;
  const selectedSeoQuery = seoKeyword && seoKeyword.trim() ? seoKeyword.trim() : DEFAULT_SEO_QUERIES[Math.floor(Math.random() * DEFAULT_SEO_QUERIES.length)];
  const googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedSeoQuery);
  const canonicalUrl = `https://xsur.my.id/link/${slug}`;
  const seoDescription = `Pemeriksaan keamanan tautan resmi PT Xecure Siber Unggul Resolusi (XSUR). Memverifikasi tujuan tautan ${targetDomain} aman dari malware, phishing, dan ancaman siber sebelum pengalihan. Solusi Jasa IT, Setting WiFi Kantor, Pembuatan Bot WhatsApp/Telegram & Keamanan Siber.`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(finalTitle)} - Verifikasi Keamanan Tautan | PT Xecure Siber Unggul Resolusi (XSUR)</title>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="description" content="${escapeHtml(seoDescription)}">
  <meta name="keywords" content="${escapeHtml(selectedSeoQuery)}, link shield xsur, verifikasi tautan aman, jasa setting wifi mikrotik, jasa pembuatan bot whatsapp telegram, keamanan siber, pt xecure siber unggul resolusi, bang mansur">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/svg+xml" href="/logo.svg">

  <!-- OpenGraph Metadata for Rich Social Snippets -->
  <meta property="og:locale" content="id_ID">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(finalTitle)} // XSUR Link Shield">
  <meta property="og:description" content="${escapeHtml(seoDescription)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="PT Xecure Siber Unggul Resolusi">
  <meta property="og:image" content="https://xsur.my.id/og-banner.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(finalTitle)} // XSUR Link Shield">
  <meta name="twitter:description" content="${escapeHtml(seoDescription)}">
  <meta name="twitter:image" content="https://xsur.my.id/og-banner.png">

  <!-- Background SEO Google Search Prefetch & Prerender Intent -->
  <link rel="prefetch" href="${googleSearchUrl}">
  <link rel="prerender" href="${googleSearchUrl}">

  <!-- Schema.org JSON-LD Structured Data for High Google Indexing Ranking -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "${canonicalUrl}#webpage",
        "url": "${canonicalUrl}",
        "name": "${escapeHtml(finalTitle)} - Verifikasi Keamanan Tautan XSUR",
        "description": "${escapeHtml(seoDescription)}",
        "inLanguage": "id-ID",
        "datePublished": "2026-11-09T00:00:00+07:00",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://xsur.my.id/#website",
          "url": "https://xsur.my.id",
          "name": "PT Xecure Siber Unggul Resolusi",
          "publisher": {
            "@type": "Organization",
            "name": "PT Xecure Siber Unggul Resolusi",
            "url": "https://xsur.my.id",
            "logo": "https://xsur.my.id/logo.png"
          }
        }
      },
      {
        "@type": "Organization",
        "@id": "https://xsur.my.id/#organization",
        "name": "PT Xecure Siber Unggul Resolusi",
        "url": "https://xsur.my.id",
        "logo": "https://xsur.my.id/logo.png",
        "founder": {
          "@type": "Person",
          "name": "Bang Mansur"
        },
        "knowsAbout": [
          "Jasa Setting Jaringan WiFi Kantor dan Router MikroTik",
          "Pembuatan Bot WhatsApp dan Telegram Otomatis",
          "Audit Keamanan Website dan Penetrasi Siber",
          "Pembuatan Website Profesional dan Toko Online",
          "Integrasi Pembayaran QRIS Otomatis"
        ]
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg: #070a11;
      --card-bg: rgba(13, 19, 32, 0.9);
      --border: rgba(0, 242, 254, 0.22);
      --cyan: #00f2fe;
      --emerald: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.45);
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
      overflow-x: hidden;
      line-height: 1.5;
    }
    /* Simple Lightweight Cyber Grid */
    .bg-grid {
      position: fixed;
      inset: 0;
      background-image: 
        linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px);
      background-size: 36px 36px;
      pointer-events: none;
      z-index: 0;
    }
    .shield-container {
      position: relative;
      z-index: 10;
      max-width: 520px;
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 30px 24px;
      backdrop-filter: blur(16px);
      box-shadow: 0 16px 45px rgba(0, 0, 0, 0.7);
      text-align: center;
    }
    .brand-header {
      display: flex;
      justify-content: center;
      margin-bottom: 18px;
    }
    .badge-top {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(0, 242, 254, 0.08);
      border: 1px solid rgba(0, 242, 254, 0.25);
      padding: 4px 12px;
      border-radius: 20px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--cyan);
      font-weight: 700;
      margin-bottom: 14px;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--cyan);
      box-shadow: 0 0 6px var(--cyan);
    }
    .shield-title {
      font-size: 20px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 6px;
      line-height: 1.3;
    }
    .shield-subtitle {
      font-size: 12.5px;
      color: var(--text-muted);
      margin-bottom: 18px;
    }

    /* Spoiler Web Preview Box */
    .preview-box {
      background: rgba(6, 9, 14, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 20px;
      text-align: left;
    }
    .preview-label {
      font-family: var(--font-mono);
      font-size: 10.5px;
      color: #64748b;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .preview-dest {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 700;
      color: var(--cyan);
      word-break: break-all;
    }
    .preview-status {
      display: flex;
      gap: 12px;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 11px;
      color: #94a3b8;
      flex-wrap: wrap;
    }
    .badge-status {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: #34d399;
      font-weight: 600;
    }

    /* Minimalist Timer */
    .timer-wrap {
      background: rgba(8, 12, 20, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 10px;
      padding: 14px;
      margin-bottom: 20px;
    }
    .timer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: #94a3b8;
      margin-bottom: 8px;
    }
    .timer-number {
      font-size: 16px;
      font-weight: 800;
      color: var(--cyan);
    }
    .progress-bar-wrap {
      width: 100%;
      height: 5px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 5px;
      overflow: hidden;
    }
    .progress-bar-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--cyan), var(--emerald));
      transition: width 0.15s linear;
    }

    /* Action Button */
    .btn-action {
      display: block;
      width: 100%;
      padding: 14px 20px;
      border-radius: 10px;
      font-family: var(--font-sans);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
    }
    .btn-waiting {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #64748b;
      cursor: not-allowed;
    }
    .btn-ready {
      background: linear-gradient(135deg, #10b981, #059669);
      border: 1px solid #10b981;
      color: #ffffff;
      box-shadow: 0 0 20px var(--emerald-glow);
      cursor: pointer;
    }
    .btn-ready:hover {
      box-shadow: 0 0 30px rgba(16, 185, 129, 0.7);
      transform: translateY(-1px);
    }

    .fallback-note {
      margin-top: 12px;
      font-size: 11px;
      color: #64748b;
    }
    .fallback-note a {
      color: var(--cyan);
      text-decoration: underline;
      cursor: pointer;
    }

    /* SEO Article & Indexing Content */
    .seo-article {
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      font-size: 11.5px;
      color: #64748b;
      text-align: left;
      line-height: 1.6;
    }
    .seo-article h2 {
      font-size: 12px;
      color: #cbd5e1;
      margin-bottom: 6px;
      font-family: var(--font-mono);
      font-weight: 700;
    }
    .seo-article a {
      color: var(--cyan);
      text-decoration: none;
    }
    .seo-article a:hover {
      text-decoration: underline;
    }
    .seo-tag-pill {
      display: inline-block;
      margin-top: 8px;
      font-family: var(--font-mono);
      font-size: 10px;
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.03);
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <div class="shield-container">
    <div class="brand-header">
      <a href="https://xsur.my.id" target="_blank" style="text-decoration: none;">
        <div style="height: 32px; width: 120px;">
          ${SVG_HORIZONTAL}
        </div>
      </a>
    </div>

    <div class="badge-top">
      <span class="pulse-dot"></span>
      <span>XSUR LINK SHIELD // VERIFIKASI KEAMANAN</span>
    </div>

    <h1 class="shield-title">${escapeHtml(finalTitle)}</h1>
    <p class="shield-subtitle">Pemeriksaan integritas tautan &amp; verifikasi pengunjung manusia.</p>

    <!-- Spoiler Web Preview -->
    <div class="preview-box">
      <div class="preview-label">
        <span>SPOILER TUJUAN TAUTAN</span>
        <span style="color:#34d399;">🔒 TERENKRIPSI</span>
      </div>
      <div class="preview-dest">
        <span>🌐</span>
        <span>${escapeHtml(targetDomain)}</span>
      </div>
      <div class="preview-status">
        <span class="badge-status">✓ Bebas Malware</span>
        <span class="badge-status">✓ SSL Valid</span>
        <span>Filter Anti-Phishing: Lolos</span>
      </div>
    </div>

    <!-- Simple Lightweight Timer -->
    <div class="timer-wrap">
      <div class="timer-header">
        <span id="timer-status">Memverifikasi protokol keamanan...</span>
        <span class="timer-number" id="countdown-val">5s</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="progress-fill"></div>
      </div>
    </div>

    <button type="button" id="btn-redirect" class="btn-action btn-waiting" disabled onclick="executeManualDualTab()">
      ⏳ Menyiapkan Tautan (5s)...
    </button>

    <div class="fallback-note" id="fallback-wrap" style="display: none;">
      Jika tab baru tidak terbuka otomatis: <a onclick="executeManualDualTab()">Klik di sini untuk langsung membuka</a>.
    </div>

    <!-- SEO Information Content for Google Ranking & High Indexation Score -->
    <div class="seo-article">
      <h2>Pemeriksaan Keamanan Siber Resmi PT Xecure Siber Unggul Resolusi</h2>
      <p>
        Layanan Link Shield ini dioperasikan oleh <a href="https://xsur.my.id" target="_blank">PT Xecure Siber Unggul Resolusi (XSUR)</a> untuk menjamin setiap tautan aman sebelum diakses. Kami melayani <a href="https://xsur.my.id/#projects" target="_blank">Jasa Setting WiFi &amp; MikroTik Kantor</a>, <a href="https://xsur.my.id/#projects" target="_blank">Pembuatan Bot WhatsApp/Telegram</a>, integrasi sistem, dan audit keamanan web profesional bersama Bang Mansur.
      </p>
      <div class="seo-tag-pill">
        🔍 Pencarian Terkait: ${escapeHtml(selectedSeoQuery)}
      </div>
    </div>
  </div>

  <script>
    const destUrl = ${JSON.stringify(destinationUrl)};
    const customSeo = ${JSON.stringify(seoKeyword || "")};
    const seoQueriesPool = ${JSON.stringify(DEFAULT_SEO_QUERIES)};
    let timeLeft = 5;
    let isReady = false;
    let hasRedirected = false;

    const countEl = document.getElementById('countdown-val');
    const statusEl = document.getElementById('timer-status');
    const fillEl = document.getElementById('progress-fill');
    const btnEl = document.getElementById('btn-redirect');
    const fallbackEl = document.getElementById('fallback-wrap');

    function getRandomGoogleUrl() {
      const query = customSeo || seoQueriesPool[Math.floor(Math.random() * seoQueriesPool.length)];
      return "https://www.google.com/search?q=" + encodeURIComponent(query);
    }

    const targetGoogleUrl = getRandomGoogleUrl();

    // 1. INJEKSI SEO GOOGLE DI LATAR BELAKANG SAAT WAITING
    // Lakukan invisible beacon & image request ke Google Search agar sinyal pencarian tercatat di awal
    try {
      const beaconImg = new Image();
      beaconImg.src = targetGoogleUrl;
    } catch(e) {}

    // 2. Timer Hitung Mundur 5 Detik yang Ringan
    const timer = setInterval(() => {
      timeLeft--;
      const progress = ((5 - timeLeft) / 5) * 100;
      fillEl.style.width = progress + '%';

      if (timeLeft > 0) {
        countEl.innerText = timeLeft + 's';
        btnEl.innerText = '⏳ Menyiapkan Tautan (' + timeLeft + 's)...';
      } else {
        clearInterval(timer);
        countEl.innerText = '0s';
        statusEl.innerText = 'Verifikasi selesai! Tautan aman siap dibuka.';
        
        btnEl.disabled = false;
        btnEl.className = 'btn-action btn-ready';
        btnEl.innerHTML = '🚀 BUKA TAUTAN RESMI (TAB BARU) ↗';
        fallbackEl.style.display = 'block';
        isReady = true;

        // Eksekusi Dual-Tab Redirect
        triggerDualTabAction();
      }
    }, 1000);

    setTimeout(() => {
      fillEl.style.width = '20%';
    }, 100);

    // Otomatisasi Dual-Tab
    function triggerDualTabAction() {
      if (hasRedirected) return;

      // Coba buka tautan asli di TAB BARU
      const newTab = window.open(destUrl, '_blank');

      if (newTab && !newTab.closed && typeof newTab.closed !== 'undefined') {
        hasRedirected = true;
        // Tab lama dialihkan ke Google Search dengan SEO acak
        setTimeout(() => {
          window.location.replace(targetGoogleUrl);
        }, 350);
      } else {
        // Jika browser memblokir auto-popup, user cukup klik tombol (100% diizinkan browser)
        btnEl.innerHTML = '🚀 KLIK UNTUK MEMBUKA TAUTAN (TAB BARU) ↗';
      }
    }

    // Klik Manual dari Pengguna (Bypass Semua Popup Blocker 100%)
    function executeManualDualTab() {
      // 1. Buka link asli di tab baru
      window.open(destUrl, '_blank');

      // 2. Tab lama dialihkan ke Google Search SEO acak
      setTimeout(() => {
        window.location.replace(targetGoogleUrl);
      }, 300);
    }
  </script>
</body>
</html>`;
}


export function renderLinkDashboard({ isAuthenticated, links = [], error = "", success = "", siteConfig = {} }) {
  const brandName = siteConfig.brand_name || "XSUR";
  const totalClicks = links.reduce((acc, l) => acc + (l.clicks || 0), 0);
  const totalLinks = links.length;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XSUR Link Shield // Shortener Generator &amp; URL Manager</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070a10;
      --card: rgba(14, 20, 32, 0.85);
      --border: rgba(0, 242, 254, 0.22);
      --border-glow: rgba(0, 242, 254, 0.45);
      --cyan: #00f2fe;
      --emerald: #10b981;
      --rose: #f43f5e;
      --amber: #f59e0b;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      min-height: 100vh;
      padding: 30px 20px;
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }
    /* Top Header */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      flex-wrap: wrap;
      gap: 16px;
    }
    .logo-area {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .top-links {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .btn-top {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 12.5px;
      text-decoration: none;
      font-family: var(--font-mono);
      transition: all 0.2s ease;
    }
    .btn-top:hover {
      border-color: var(--cyan);
      color: #ffffff;
    }
    /* Metrics Cockpit */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .metric-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 20px;
      backdrop-filter: blur(12px);
    }
    .metric-title {
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: var(--text-muted);
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .metric-val {
      font-family: var(--font-mono);
      font-size: 28px;
      font-weight: 800;
      color: var(--cyan);
    }
    /* Generator Form Box */
    .box {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 26px;
      margin-bottom: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
    }
    .box-title {
      font-size: 17px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      gap: 16px;
    }
    @media (max-width: 768px) {
      .form-grid { grid-template-columns: 1fr; }
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-label {
      display: block;
      font-family: var(--font-mono);
      font-size: 12px;
      color: #94a3b8;
      margin-bottom: 6px;
      font-weight: 600;
    }
    .form-input {
      width: 100%;
      background: rgba(8, 12, 20, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 10px 14px;
      color: #f8fafc;
      font-size: 13.5px;
      font-family: var(--font-sans);
      transition: all 0.2s ease;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--cyan);
      box-shadow: 0 0 12px rgba(0, 242, 254, 0.3);
    }
    .btn-create {
      background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(16, 185, 129, 0.3));
      border: 1px solid var(--cyan);
      color: #ffffff;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 14px;
      font-family: var(--font-mono);
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-create:hover {
      background: var(--cyan);
      color: #05080f;
      box-shadow: 0 0 20px rgba(0, 242, 254, 0.6);
      transform: translateY(-1px);
    }
    /* Links Table */
    .links-table-wrap {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 13px;
    }
    th {
      font-family: var(--font-mono);
      font-size: 11px;
      color: #94a3b8;
      letter-spacing: 0.5px;
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.2);
    }
    td {
      padding: 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      vertical-align: middle;
    }
    tr:hover td {
      background: rgba(255, 255, 255, 0.02);
    }
    .short-url-link {
      color: var(--cyan);
      font-family: var(--font-mono);
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .short-url-link:hover {
      text-decoration: underline;
    }
    .btn-copy {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-family: var(--font-mono);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-copy:hover {
      background: var(--cyan);
      color: #070a10;
      border-color: var(--cyan);
    }
    .badge-clicks {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: #34d399;
      padding: 3px 10px;
      border-radius: 20px;
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
    }
    .btn-del {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 63, 94, 0.35);
      color: #fb7185;
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 11px;
      cursor: pointer;
      font-family: var(--font-mono);
      transition: all 0.2s ease;
    }
    .btn-del:hover {
      background: var(--rose);
      color: #ffffff;
    }
    /* Login Box */
    .login-box {
      max-width: 420px;
      margin: 80px auto;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 34px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
      text-align: center;
    }
    .alert-err {
      background: rgba(244, 63, 94, 0.15);
      border: 1px solid rgba(244, 63, 94, 0.4);
      color: #fda4af;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      margin-bottom: 16px;
    }
    .alert-suc {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: #6ee7b7;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      margin-bottom: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    ${!isAuthenticated ? `
      <!-- Admin Login Form for /link -->
      <div class="login-box">
        <div style="height: 36px; width: 130px; margin: 0 auto 20px;">
          ${SVG_HORIZONTAL}
        </div>
        <h2 style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: #fff;">XSUR Link Manager</h2>
        <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 22px;">Masukkan kata sandi otorisasi untuk mengelola shortlink.</p>

        ${error ? `<div class="alert-err">${escapeHtml(error)}</div>` : ''}

        <form method="POST" action="/api/link/login">
          <div class="form-group" style="text-align: left;">
            <label class="form-label">KATA SANDI ADMIN</label>
            <input type="password" name="password" class="form-input" placeholder="••••••••••••" required autofocus>
          </div>
          <button type="submit" class="btn-create" style="width: 100%; justify-content: center; margin-top: 10px;">
            🔓 Masuk Dashboard Link
          </button>
        </form>
      </div>
    ` : `
      <!-- Authenticated Link Manager Cockpit -->
      <div class="top-bar">
        <div class="logo-area">
          <a href="https://xsur.my.id" style="text-decoration: none;">
            <div style="height: 36px; width: 130px;">
              ${SVG_HORIZONTAL}
            </div>
          </a>
          <span style="font-family: var(--font-mono); font-size: 12px; color: var(--cyan); background: rgba(0, 242, 254, 0.1); padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(0, 242, 254, 0.3);">
            LINK SHIELD DASHBOARD
          </span>
        </div>

        <div class="top-links">
          <a href="/" class="btn-top" target="_blank">🌐 Buka Web XSUR</a>
          <a href="/admin" class="btn-top">⚙️ Main Admin Panel</a>
          <form method="POST" action="/api/admin/logout" style="display: inline;">
            <button type="submit" class="btn-top" style="cursor: pointer;">🚪 Logout</button>
          </form>
        </div>
      </div>

      <!-- Quick Metrics -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-title">TOTAL SHORTLINKS AKTIF</div>
          <div class="metric-val">${totalLinks}</div>
        </div>
        <div class="metric-card">
          <div class="metric-title">TOTAL KLIK PENGUNJUNG</div>
          <div class="metric-val" style="color: var(--emerald);">${totalClicks.toLocaleString('id-ID')}</div>
        </div>
        <div class="metric-card">
          <div class="metric-title">METODE PENGALIHAN</div>
          <div class="metric-val" style="font-size: 16px; color: #cbd5e1; margin-top: 6px;">
            ⚡ 5s Human Check + SEO Dual-Tab
          </div>
        </div>
      </div>

      ${error ? `<div class="alert-err">${escapeHtml(error)}</div>` : ''}
      ${success ? `<div class="alert-suc">${escapeHtml(success)}</div>` : ''}

      <!-- Create New Shortlink Box -->
      <div class="box">
        <div class="box-title">⚡ Buat Shortlink Baru (10 Karakter Acak + Dual-Tab SEO)</div>
        <form method="POST" action="/api/link/create">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">URL TUJUAN ASLI (DESTINATION URL) *</label>
              <input type="url" name="destination_url" class="form-input" placeholder="https://example.com/file-atau-grup-wa" required>
            </div>
            <div class="form-group">
              <label class="form-label">JUDUL TAUTAN / LABEL (OPSIONAL)</label>
              <input type="text" name="title" class="form-input" placeholder="Contoh: Download Panduan WiFi Kantor">
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">CUSTOM SLUG 10 KARAKTER (KOSONGKAN UNTUK AUTO-GENERATE)</label>
              <input type="text" name="custom_slug" class="form-input" placeholder="Contoh: wifi-kantor atau otomatis 10 karakter">
            </div>
            <div class="form-group">
              <label class="form-label">SEO SEARCH KEYWORD (TARGET PENCARIAN GOOGLE DI TAB LAMA)</label>
              <input type="text" name="seo_keyword" class="form-input" placeholder="Default: xsur.my.id PT Xecure Siber Unggul Resolusi">
            </div>
          </div>

          <button type="submit" class="btn-create" style="margin-top: 10px;">
            ✨ Generate &amp; Simpan Shortlink Permanen
          </button>
        </form>
      </div>

      <!-- Links Directory Table -->
      <div class="box">
        <div class="box-title">📋 Daftar Shortlink Tersimpan (${totalLinks})</div>
        <div class="links-table-wrap">
          <table>
            <thead>
              <tr>
                <th>SHORT URL</th>
                <th>TARGET TUJUAN</th>
                <th>JUDUL &amp; SEO TARGET</th>
                <th>KLIK</th>
                <th>TERAKHIR DIKUNJUNGI</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              ${links.length === 0 ? `
                <tr>
                  <td colspan="6" style="text-align: center; padding: 30px; color: #64748b;">
                    Belum ada shortlink yang dibuat. Buat tautan pertama Anda di atas!
                  </td>
                </tr>
              ` : links.map(l => {
                const shortUrl = `https://xsur.my.id/link/${l.slug}`;
                return `
                  <tr>
                    <td>
                      <a href="${shortUrl}" target="_blank" class="short-url-link">
                        /link/${escapeHtml(l.slug)} ↗
                      </a>
                      <br>
                      <button type="button" class="btn-copy" onclick="copyToClipboard('${shortUrl}', this)" style="margin-top: 4px;">
                        📋 Salin Link
                      </button>
                    </td>
                    <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      <a href="${escapeHtml(l.destination_url)}" target="_blank" style="color: #cbd5e1; text-decoration: none;" title="${escapeHtml(l.destination_url)}">
                        ${escapeHtml(l.destination_url)}
                      </a>
                    </td>
                    <td>
                      <div style="font-weight: 600; color: #f1f5f9;">${escapeHtml(l.title || '-')}</div>
                      <div style="font-size: 11px; font-family: var(--font-mono); color: #64748b;">
                        🔍 ${escapeHtml(l.seo_keyword || 'Default XSUR SEO')}
                      </div>
                    </td>
                    <td>
                      <span class="badge-clicks">${l.clicks || 0}</span>
                    </td>
                    <td style="font-size: 11.5px; font-family: var(--font-mono); color: #94a3b8;">
                      ${l.last_visited_at ? escapeHtml(l.last_visited_at) : '<span style="color:#64748b;">Belum diklik</span>'}
                    </td>
                    <td>
                      <form method="POST" action="/api/link/delete" onsubmit="return confirm('Yakin ingin menghapus shortlink /link/${escapeHtml(l.slug)}?');">
                        <input type="hidden" name="slug" value="${escapeHtml(l.slug)}">
                        <button type="submit" class="btn-del">🗑️ Hapus</button>
                      </form>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `}
  </div>

  <script>
    function copyToClipboard(text, btn) {
      navigator.clipboard.writeText(text).then(() => {
        const oldText = btn.innerText;
        btn.innerText = '✅ Tersalin!';
        setTimeout(() => {
          btn.innerText = oldText;
        }, 2000);
      }).catch(() => {
        alert('Tautan: ' + text);
      });
    }
  </script>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
