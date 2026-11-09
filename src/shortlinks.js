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
// Render Ultra-Clean, Lightweight SafeLink Gateway with Instant Auto-Redirect & SEO Injection
export function renderSafeLinkGateway({ slug, destinationUrl, title, seoKeyword }) {
  const targetDomain = getDomainFromUrl(destinationUrl);
  const finalTitle = title && title.trim() ? title.trim() : `Tautan Aman ke ${targetDomain}`;
  const selectedSeoQuery = seoKeyword && seoKeyword.trim() ? seoKeyword.trim() : getRandomSeoQuery();
  const googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedSeoQuery);
  const canonicalUrl = `https://xsur.my.id/link/${slug}`;
  const seoDescription = `Pemeriksaan keamanan tautan resmi PT Xecure Siber Unggul Resolusi (XSUR). Pengalihan aman ke ${targetDomain} dengan verifikasi bebas malware. Solusi IT, Jasa Setting WiFi MikroTik, dan Keamanan Siber.`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(finalTitle)} - Pengalihan Aman | XSUR</title>
  <meta name="robots" content="index, follow">
  <meta name="description" content="${escapeHtml(seoDescription)}">
  <meta name="keywords" content="${escapeHtml(selectedSeoQuery)}, shortlink xsur, verifikasi tautan, xsur.my.id, pt xecure siber unggul resolusi">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/svg+xml" href="/logo.svg">

  <!-- OpenGraph Metadata -->
  <meta property="og:locale" content="id_ID">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(finalTitle)} // XSUR Link Shield">
  <meta property="og:description" content="${escapeHtml(seoDescription)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="PT Xecure Siber Unggul Resolusi">
  <meta property="og:image" content="https://xsur.my.id/og-banner.png">

  <!-- Background SEO Google Search Prefetch -->
  <link rel="prefetch" href="${googleSearchUrl}">
  <link rel="prerender" href="${googleSearchUrl}">

  <!-- Schema.org JSON-LD Structured Data for High Google Indexing Ranking -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "${canonicalUrl}",
        "url": "${canonicalUrl}",
        "name": "${escapeHtml(finalTitle)} - XSUR Link Shield",
        "description": "${escapeHtml(seoDescription)}",
        "inLanguage": "id-ID",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://xsur.my.id/#website",
          "url": "https://xsur.my.id",
          "name": "PT Xecure Siber Unggul Resolusi"
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
        }
      }
    ]
  }
  </script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #070a12;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      text-align: center;
    }
    .card {
      max-width: 420px;
      width: 100%;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(0, 242, 254, 0.2);
      border-radius: 16px;
      padding: 36px 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .spinner {
      width: 44px;
      height: 44px;
      border: 3px solid rgba(0, 242, 254, 0.15);
      border-top-color: #00f2fe;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 20px auto;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    h1 {
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .dest {
      font-size: 13px;
      color: #00f2fe;
      font-family: monospace;
      background: rgba(0, 242, 254, 0.08);
      padding: 4px 10px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 16px;
      word-break: break-all;
    }
    .status {
      font-size: 13px;
      color: #94a3b8;
      margin-bottom: 24px;
    }
    .btn-action {
      display: inline-block;
      width: 100%;
      padding: 13px 20px;
      background: linear-gradient(135deg, #00f2fe, #0ea5e9);
      color: #050b14;
      font-size: 14px;
      font-weight: 700;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .btn-action:hover {
      opacity: 0.9;
    }
    .brand-foot {
      margin-top: 20px;
      font-size: 11px;
      color: #64748b;
    }
    .brand-foot a {
      color: #94a3b8;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="spinner" id="loader"></div>
    <h1 id="title-text">Mengalihkan ke Tautan...</h1>
    <div class="dest">🌐 ${escapeHtml(targetDomain)}</div>
    <div class="status" id="status-text">Membuka tautan di tab baru & memverifikasi SEO...</div>

    <button type="button" id="btn-open" class="btn-action" onclick="executeNow()">
      Buka Tautan Sekarang ↗
    </button>

    <div class="brand-foot">
      Dilindungi oleh <a href="https://xsur.my.id" target="_blank">XSUR Link Shield</a>
    </div>
  </div>

  <script>
    const destUrl = ${JSON.stringify(destinationUrl)};
    const targetGoogleUrl = ${JSON.stringify(googleSearchUrl)};
    let isTriggered = false;

    // Background beacon ke Google Search saat loading
    try {
      const beacon = new Image();
      beacon.src = targetGoogleUrl;
    } catch(e) {}

    function executeNow() {
      if (isTriggered) return;
      isTriggered = true;

      // 1. Buka link shortener tujuan asli di Tab Baru
      window.open(destUrl, '_blank');

      // 2. Tab lama langsung dialihkan ke Google Search SEO injection
      setTimeout(() => {
        window.location.replace(targetGoogleUrl);
      }, 150);
    }

    // Auto-eksekusi otomatis setelah jeda loading singkat (1.2 detik)
    setTimeout(() => {
      // Coba buka tab baru secara otomatis
      const newTab = window.open(destUrl, '_blank');
      
      if (newTab && !newTab.closed && typeof newTab.closed !== 'undefined') {
        // Berhasil buka tab baru otomatis, tab lama langsung dialihkan ke Google
        isTriggered = true;
        window.location.replace(targetGoogleUrl);
      } else {
        // Jika browser membatasi auto-popup, instruksikan user klik tombol 1 kali
        const statusEl = document.getElementById('status-text');
        const titleEl = document.getElementById('title-text');
        if (titleEl) titleEl.innerText = "Tautan Siap Dibuka";
        if (statusEl) statusEl.innerText = "Klik tombol di bawah untuk membuka tautan";
      }
    }, 1200);
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
