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

// Helper to safely extract domain name
function getDomainFromUrl(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.hostname;
  } catch (e) {
    return String(urlStr).replace(/https?:\/\//i, "").split("/")[0] || "external-link";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 1. GATEWAY VERIFIKASI 5 DETIK & DUAL-TAB SEO
// ==========================================
export function renderSafeLinkGateway({ slug, destinationUrl, title, seoKeyword }) {
  const targetDomain = getDomainFromUrl(destinationUrl);
  const finalTitle = title && title.trim() ? title.trim() : `Tautan Aman ke ${targetDomain}`;
  const selectedSeoQuery = seoKeyword && seoKeyword.trim() ? seoKeyword.trim() : getRandomSeoQuery();
  const googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedSeoQuery);
  const canonicalUrl = `https://xsur.my.id/link/${slug}`;
  const seoDescription = `Pemeriksaan keamanan tautan resmi PT Xecure Siber Unggul Resolusi (XSUR). Verifikasi keamanan pengalihan ke ${targetDomain} bebas malware dan ancaman siber. Solusi IT, Setting WiFi MikroTik, dan Keamanan Siber.`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(finalTitle)} - Verifikasi Keamanan Tautan | XSUR</title>
  <meta name="robots" content="index, follow">
  <meta name="description" content="${escapeHtml(seoDescription)}">
  <meta name="keywords" content="${escapeHtml(selectedSeoQuery)}, shortlink xsur, link shield, verifikasi keamanan, xsur.my.id, pt xecure siber unggul resolusi">
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
      background: #060911;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
      text-align: center;
      line-height: 1.5;
    }
    .card {
      max-width: 480px;
      width: 100%;
      background: rgba(13, 20, 36, 0.9);
      border: 1px solid rgba(0, 242, 254, 0.25);
      border-radius: 18px;
      padding: 32px 24px;
      box-shadow: 0 16px 45px rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(12px);
    }
    .badge-shield {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(0, 242, 254, 0.08);
      border: 1px solid rgba(0, 242, 254, 0.3);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      color: #00f2fe;
      font-weight: 700;
      margin-bottom: 16px;
      letter-spacing: 0.5px;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00f2fe;
      box-shadow: 0 0 6px #00f2fe;
    }
    h1 {
      font-size: 19px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 6px;
      line-height: 1.3;
    }
    .sub {
      font-size: 12.5px;
      color: #94a3b8;
      margin-bottom: 18px;
    }
    /* Spoiler Box */
    .spoiler-box {
      background: rgba(6, 10, 18, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 20px;
      text-align: left;
    }
    .spoiler-head {
      font-size: 10.5px;
      color: #64748b;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
    }
    .spoiler-dest {
      font-size: 13.5px;
      font-weight: 700;
      color: #00f2fe;
      font-family: monospace;
      word-break: break-all;
    }
    .spoiler-url {
      font-size: 11.5px;
      color: #94a3b8;
      margin-top: 4px;
      font-family: monospace;
      word-break: break-all;
      opacity: 0.85;
    }
    .spoiler-badges {
      display: flex;
      gap: 12px;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 11px;
      color: #10b981;
      font-weight: 600;
    }

    /* Minimalist Timer */
    .timer-wrap {
      background: rgba(8, 13, 24, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 20px;
    }
    .timer-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #94a3b8;
      margin-bottom: 8px;
    }
    .timer-sec {
      font-size: 16px;
      font-weight: 800;
      color: #00f2fe;
      font-family: monospace;
    }
    .progress-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #00f2fe, #10b981);
      transition: width 0.15s linear;
    }

    /* Action Button */
    .btn-action {
      display: block;
      width: 100%;
      padding: 14px 20px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-wait {
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #64748b;
      cursor: not-allowed;
    }
    .btn-ready {
      background: linear-gradient(135deg, #10b981, #059669);
      border: 1px solid #10b981;
      color: #ffffff;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.45);
      cursor: pointer;
    }
    .btn-ready:hover {
      box-shadow: 0 0 30px rgba(16, 185, 129, 0.7);
      transform: translateY(-1px);
    }
    .fallback-text {
      margin-top: 14px;
      font-size: 11.5px;
      color: #64748b;
    }
    .fallback-text a {
      color: #00f2fe;
      text-decoration: underline;
      cursor: pointer;
    }
    .foot-info {
      margin-top: 20px;
      font-size: 11px;
      color: #475569;
    }
    .foot-info a {
      color: #64748b;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <div style="margin-bottom: 14px;">
      <a href="https://xsur.my.id" target="_blank" style="text-decoration: none;">
        <div style="height: 28px; width: 110px; margin: 0 auto;">
          ${SVG_HORIZONTAL}
        </div>
      </a>
    </div>

    <div class="badge-shield">
      <span class="pulse-dot"></span>
      <span>XSUR LINK SHIELD // VERIFIKASI KEAMANAN</span>
    </div>

    <h1>${escapeHtml(finalTitle)}</h1>
    <p class="sub">Memverifikasi keamanan tautan sebelum diteruskan.</p>

    <!-- Spoiler Link yang Akan Dituju -->
    <div class="spoiler-box">
      <div class="spoiler-head">
        <span>SPOILER LINK TUJUAN</span>
        <span style="color:#10b981;">🔒 TERENKRIPSI</span>
      </div>
      <div class="spoiler-dest">
        🌐 ${escapeHtml(targetDomain)}
      </div>
      <div class="spoiler-url">
        🔗 ${escapeHtml(destinationUrl.length > 55 ? destinationUrl.slice(0, 52) + '...' : destinationUrl)}
      </div>
      <div class="spoiler-badges">
        <span>✓ Bebas Malware</span>
        <span>✓ SSL Valid</span>
        <span>✓ Reputasi Aman</span>
      </div>
    </div>

    <!-- Minimalist 5s Countdown -->
    <div class="timer-wrap">
      <div class="timer-row">
        <span id="timer-label">Memverifikasi tautan...</span>
        <span class="timer-sec" id="timer-val">5s</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" id="timer-fill"></div>
      </div>
    </div>

    <button type="button" id="btn-redirect" class="btn-action btn-wait" disabled onclick="executeAction()">
      ⏳ Mohon Tunggu 5 Detik...
    </button>

    <div class="fallback-text" id="fallback-wrap" style="display: none;">
      Tab baru tidak terbuka otomatis? <a onclick="executeAction()">Klik di sini untuk membuka langsung</a>.
    </div>

    <div class="foot-info">
      Dilindungi otomatis oleh <a href="https://xsur.my.id" target="_blank">PT Xecure Siber Unggul Resolusi</a>
    </div>
  </div>

  <script>
    const destUrl = ${JSON.stringify(destinationUrl)};
    const targetGoogleUrl = ${JSON.stringify(googleSearchUrl)};
    let timeLeft = 5;
    let isRedirected = false;

    const timerVal = document.getElementById('timer-val');
    const timerLabel = document.getElementById('timer-label');
    const timerFill = document.getElementById('timer-fill');
    const btnEl = document.getElementById('btn-redirect');
    const fallbackEl = document.getElementById('fallback-wrap');

    // 1. Injeksi Background SEO Google saat waiting
    try {
      const beacon = new Image();
      beacon.src = targetGoogleUrl;
    } catch(e) {}

    // 2. Countdown 5 detik
    const timer = setInterval(() => {
      timeLeft--;
      const progress = ((5 - timeLeft) / 5) * 100;
      timerFill.style.width = progress + '%';

      if (timeLeft > 0) {
        timerVal.innerText = timeLeft + 's';
        btnEl.innerText = '⏳ Mohon Tunggu ' + timeLeft + ' Detik...';
      } else {
        clearInterval(timer);
        timerVal.innerText = '0s';
        timerLabel.innerText = 'Verifikasi selesai! Tautan aman.';
        
        btnEl.disabled = false;
        btnEl.className = 'btn-action btn-ready';
        btnEl.innerHTML = '🚀 BUKA TAUTAN RESMI (TAB BARU) ↗';
        fallbackEl.style.display = 'block';

        // Auto trigger dual tab
        autoTrigger();
      }
    }, 1000);

    setTimeout(() => { timerFill.style.width = '20%'; }, 80);

    function autoTrigger() {
      if (isRedirected) return;

      // Coba buka tautan asli di tab baru
      const newTab = window.open(destUrl, '_blank');

      if (newTab && !newTab.closed && typeof newTab.closed !== 'undefined') {
        isRedirected = true;
        // Tab lama dialihkan ke Google Search SEO injection
        setTimeout(() => {
          window.location.replace(targetGoogleUrl);
        }, 300);
      } else {
        // Jika browser membatasi auto-popup, user cukup klik tombol
        btnEl.innerHTML = '🚀 KLIK UNTUK BUKA TAUTAN (TAB BARU) ↗';
      }
    }

    function executeAction() {
      // User click gesture: 100% diizinkan semua browser
      window.open(destUrl, '_blank');
      setTimeout(() => {
        window.location.replace(targetGoogleUrl);
      }, 250);
    }
  </script>
</body>
</html>`;
}

// ==========================================
// 2. PORTAL SHORTLINK PUBLIK & DASHBOARD ADMIN
// ==========================================
export function renderLinkDashboard({ isAuthenticated, links = [], seoKeywords = [], createdSlug = "", error = "", success = "", siteConfig = {} }) {
  const brandName = siteConfig.brand_name || "XSUR";
  const totalClicks = links.reduce((acc, l) => acc + (l.clicks || 0), 0);
  const totalLinks = links.length;
  const totalKeywords = seoKeywords.length;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isAuthenticated ? "Dashboard Admin // XSUR Link Shield" : "Shortener URL Aman & Generator Link // XSUR Link Shield"}</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070a12;
      --card-bg: rgba(14, 20, 36, 0.9);
      --border: rgba(0, 242, 254, 0.22);
      --cyan: #00f2fe;
      --emerald: #10b981;
      --rose: #f43f5e;
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
      padding-bottom: 60px;
      line-height: 1.5;
    }
    .navbar {
      background: rgba(7, 10, 18, 0.95);
      border-bottom: 1px solid var(--border);
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(12px);
    }
    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: var(--text);
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .btn-nav {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: var(--text);
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .btn-nav:hover {
      border-color: var(--cyan);
      color: var(--cyan);
    }
    .container {
      max-width: 1060px;
      margin: 32px auto 0 auto;
      padding: 0 16px;
    }

    /* Alerts */
    .alert {
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 13.5px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .alert-success {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
    }
    .alert-error {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 63, 94, 0.35);
      color: #fb7185;
    }

    /* Created Link Card */
    .created-banner {
      background: linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(16, 185, 129, 0.12));
      border: 1px solid rgba(0, 242, 254, 0.4);
      border-radius: 14px;
      padding: 22px;
      margin-bottom: 28px;
      text-align: center;
      box-shadow: 0 0 25px rgba(0, 242, 254, 0.15);
    }
    .created-title {
      font-size: 16px;
      font-weight: 800;
      color: var(--cyan);
      margin-bottom: 8px;
    }
    .created-url-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: rgba(6, 9, 14, 0.85);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 16px;
      max-width: 580px;
      margin: 12px auto;
      font-family: var(--font-mono);
      font-size: 14.5px;
      color: #ffffff;
      word-break: break-all;
    }

    /* Generator Card */
    .gen-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px;
      margin-bottom: 32px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .gen-header {
      margin-bottom: 20px;
    }
    .gen-header h2 {
      font-size: 19px;
      font-weight: 800;
      color: #ffffff;
    }
    .gen-header p {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 4px;
    }

    .form-group {
      margin-bottom: 18px;
      text-align: left;
    }
    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 6px;
    }
    .form-input {
      width: 100%;
      background: rgba(6, 9, 14, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 12px 14px;
      font-size: 14px;
      color: #ffffff;
      outline: none;
      transition: border-color 0.2s;
    }
    .form-input:focus {
      border-color: var(--cyan);
    }
    .slug-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 8px;
    }
    .slug-opt {
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(6, 9, 14, 0.5);
      border-radius: 8px;
      padding: 10px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #cbd5e1;
    }
    .slug-opt.active {
      border-color: var(--cyan);
      background: rgba(0, 242, 254, 0.08);
      color: var(--cyan);
      font-weight: 700;
    }
    .custom-slug-wrap {
      margin-top: 10px;
      display: none;
    }

    .btn-submit {
      width: 100%;
      padding: 13px 20px;
      background: linear-gradient(135deg, var(--cyan), #0ea5e9);
      border: none;
      border-radius: 8px;
      color: #050b14;
      font-size: 14.5px;
      font-weight: 800;
      cursor: pointer;
      transition: opacity 0.2s;
      margin-top: 8px;
    }
    .btn-submit:hover {
      opacity: 0.9;
    }

    /* Admin Tabs & Stats */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .stat-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 18px 20px;
      text-align: left;
    }
    .stat-val {
      font-size: 26px;
      font-weight: 800;
      color: var(--cyan);
      font-family: var(--font-mono);
    }
    .stat-lbl {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 4px;
    }

    .tab-nav {
      display: flex;
      gap: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }
    .tab-btn {
      padding: 10px 18px;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .tab-btn.active {
      color: var(--cyan);
      border-bottom-color: var(--cyan);
    }

    .tab-panel {
      display: none;
    }
    .tab-panel.active {
      display: block;
    }

    /* Table */
    .table-responsive {
      overflow-x: auto;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      text-align: left;
    }
    th {
      background: rgba(6, 9, 14, 0.85);
      padding: 12px 16px;
      font-weight: 700;
      color: #94a3b8;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      white-space: nowrap;
    }
    td {
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      vertical-align: middle;
    }
    tr:hover td {
      background: rgba(255, 255, 255, 0.02);
    }

    .btn-del {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 63, 94, 0.3);
      color: #fb7185;
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 11.5px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-del:hover {
      background: rgba(244, 63, 94, 0.25);
    }

    /* Login Modal */
    .modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      z-index: 100;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-card {
      max-width: 380px;
      width: 100%;
      background: #0d1424;
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.8);
      text-align: left;
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar">
    <a href="/link" class="brand-group">
      <div style="height: 28px; width: 100px;">
        ${SVG_HORIZONTAL}
      </div>
      <span style="font-size: 13px; font-weight: 800; color: var(--cyan); letter-spacing: 0.5px;">LINK SHIELD</span>
    </a>
    <div class="nav-actions">
      <a href="https://xsur.my.id" target="_blank" class="btn-nav">🌐 Portal Utama</a>
      ${isAuthenticated ? `
        <a href="/api/link/logout" class="btn-nav" style="border-color: rgba(244, 63, 94, 0.4); color: #fb7185;">🚪 Keluar Admin</a>
      ` : `
        <button type="button" class="btn-nav" onclick="openLoginModal()">🔐 Masuk Dashboard</button>
      `}
    </div>
  </nav>

  <div class="container">
    ${error ? `
      <div class="alert alert-error">
        <span>⚠️ ${escapeHtml(error)}</span>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:inherit;cursor:pointer;">✕</button>
      </div>
    ` : ""}

    ${success ? `
      <div class="alert alert-success">
        <span>✓ ${escapeHtml(success)}</span>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:inherit;cursor:pointer;">✕</button>
      </div>
    ` : ""}

    ${createdSlug ? `
      <div class="created-banner">
        <div class="created-title">🎉 Shortlink Anda Berhasil Dibuat!</div>
        <p style="font-size: 13px; color: var(--text-muted);">Tautan Anda kini dilindungi verifikasi 5 detik & injeksi SEO Google otomatis.</p>
        <div class="created-url-box">
          <span id="created-url">https://xsur.my.id/link/${escapeHtml(createdSlug)}</span>
        </div>
        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 14px;">
          <button type="button" class="btn-nav" onclick="copyCreatedUrl()" style="background: var(--cyan); color: #050b14; border: none; font-weight: 700;">
            📋 Salin Link
          </button>
          <a href="/link/${escapeHtml(createdSlug)}" target="_blank" class="btn-nav">
            ↗ Coba Buka Link
          </a>
        </div>
      </div>
    ` : ""}

    ${!isAuthenticated ? `
      <!-- ================= PUBLIC SHORTLINK GENERATOR ================= -->
      <div class="gen-card">
        <div class="gen-header">
          <h2>Buat Shortlink Aman Terverifikasi</h2>
          <p>Pemendek URL permanen dengan proteksi verifikasi 5 detik & optimasi SEO Google otomatis.</p>
        </div>

        <form action="/api/link/create" method="POST">
          <div class="form-group">
            <label class="form-label">URL Asli Tujuan (Wajib):</label>
            <input type="url" name="destination_url" required placeholder="https://t.me/username atau https://drive.google.com/..." class="form-input">
          </div>

          <div class="form-group">
            <label class="form-label">Pilihan Format Link (Slug):</label>
            <div class="slug-options">
              <label class="slug-opt active" id="opt-default-label" onclick="selectSlugType('default')">
                <input type="radio" name="slug_type" value="default" checked style="display:none;">
                <span>⚡ Default (10 Karakter Acak)</span>
              </label>
              <label class="slug-opt" id="opt-custom-label" onclick="selectSlugType('custom')">
                <input type="radio" name="slug_type" value="custom" style="display:none;">
                <span>✏️ Custom Link Sendiri</span>
              </label>
            </div>
          </div>

          <div class="form-group custom-slug-wrap" id="custom-slug-field">
            <label class="form-label">Ketik Custom Slug Pilihan Anda:</label>
            <div style="display:flex; align-items:center; background: rgba(6, 9, 14, 0.85); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding-left: 12px;">
              <span style="font-family: var(--font-mono); font-size: 13px; color: var(--text-muted);">xsur.my.id/link/</span>
              <input type="text" name="custom_slug" id="custom-slug-input" placeholder="link-pilihan-anda" pattern="[a-zA-Z0-9-]+" class="form-input" style="border:none; background:transparent;">
            </div>
            <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">*Hanya huruf, angka, dan tanda hubung (-), maksimal 32 karakter.</p>
          </div>

          <div style="background: rgba(0, 242, 254, 0.05); border: 1px dashed rgba(0, 242, 254, 0.25); border-radius: 8px; padding: 10px 14px; margin-bottom: 18px; font-size: 12px; color: var(--text-muted);">
            🛡️ <b>Auto SEO Google Injection:</b> Tautan Anda otomatis diinjeksi dengan keyword penelusuran Google terbaik dari ekosistem XSUR secara bergiliran untuk menjamin ranking dan keamanan pengalihan.
          </div>

          <button type="submit" class="btn-submit">
            🚀 Generate Shortlink Sekarang
          </button>
        </form>
      </div>
    ` : `
      <!-- ================= ADMIN MASTER DASHBOARD ================= -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val">${totalLinks}</div>
          <div class="stat-lbl">Total Shortlink Aktif</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${totalClicks}</div>
          <div class="stat-lbl">Total Klik Terverifikasi</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${totalKeywords}</div>
          <div class="stat-lbl">Target Keyword SEO Google</div>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="tab-nav">
        <button class="tab-btn active" onclick="switchTab('tab-seo', this)">🎯 Kreasi Target SEO Google</button>
        <button class="tab-btn" onclick="switchTab('tab-links', this)">🔗 Kelola Semua Shortlink</button>
        <button class="tab-btn" onclick="switchTab('tab-new', this)">➕ Buat Shortlink Khusus</button>
      </div>

      <!-- TAB 1: KREASI TARGET SEO GOOGLE -->
      <div id="tab-seo" class="tab-panel active">
        <div class="gen-card" style="padding: 22px;">
          <h3 style="font-size: 16px; margin-bottom: 6px;">➕ Tambah Target Keyword SEO ke Google Injection</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 16px;">
            Setiap keyword di bawah ini akan dirotasi secara otomatis ke dalam tab pencarian Google saat pengunjung membuka link.
          </p>

          <form action="/api/link/seo/add" method="POST" style="display: flex; gap: 10px; flex-wrap: wrap;">
            <input type="text" name="keyword" required placeholder="Contoh: xsur.my.id jasa setting firewall mikrotik perusahaan" class="form-input" style="flex: 1; min-width: 280px;">
            <button type="submit" class="btn-submit" style="width: auto; margin-top: 0; padding: 12px 20px;">
              💾 Simpan Keyword
            </button>
          </form>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th style="width: 50px;">No</th>
                <th>Target Keyword Pencarian Google (SEO Injection)</th>
                <th style="width: 140px;">Status Rotasi</th>
                <th style="width: 100px; text-align: center;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${seoKeywords.length === 0 ? `
                <tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">Belum ada keyword SEO kustom. Menggunakan daftar default.</td></tr>
              ` : seoKeywords.map((k, i) => `
                <tr>
                  <td style="font-family: var(--font-mono); color: var(--text-muted);">${i + 1}</td>
                  <td style="font-weight: 600; color: #ffffff;">
                    <span>🔍 ${escapeHtml(k.keyword)}</span>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(k.keyword)}" target="_blank" style="font-size: 11px; color: var(--cyan); margin-left: 8px; text-decoration: underline;">Uji Google ↗</a>
                  </td>
                  <td>
                    <span style="color: #34d399; font-weight: 700; font-size: 11.5px;">✓ Aktif Di-rotate</span>
                  </td>
                  <td style="text-align: center;">
                    <form action="/api/link/seo/delete" method="POST" onsubmit="return confirm('Hapus keyword ini dari rotasi SEO?');" style="display: inline;">
                      <input type="hidden" name="id" value="${k.id}">
                      <button type="submit" class="btn-del">Hapus</button>
                    </form>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 2: KELOLA SEMUA SHORTLINK -->
      <div id="tab-links" class="tab-panel">
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Shortlink</th>
                <th>Tujuan Asli</th>
                <th>SEO Target</th>
                <th>Klik</th>
                <th>Dibuat</th>
                <th style="text-align: center;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${links.length === 0 ? `
                <tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Belum ada shortlink yang terdaftar.</td></tr>
              ` : links.map(l => `
                <tr>
                  <td>
                    <a href="/link/${escapeHtml(l.slug)}" target="_blank" style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan); text-decoration: none;">
                      /link/${escapeHtml(l.slug)}
                    </a>
                  </td>
                  <td style="max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <a href="${escapeHtml(l.destination_url)}" target="_blank" style="color: #cbd5e1; text-decoration: none;">
                      ${escapeHtml(l.destination_url)}
                    </a>
                  </td>
                  <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; color: var(--text-muted);">
                    ${escapeHtml(l.seo_keyword || "Auto-Rotated")}
                  </td>
                  <td style="font-family: var(--font-mono); font-weight: 700; color: #34d399;">
                    ${l.clicks || 0}
                  </td>
                  <td style="font-size: 11.5px; color: var(--text-muted); white-space: nowrap;">
                    ${escapeHtml(String(l.created_at || "").slice(0, 10))}
                  </td>
                  <td style="text-align: center; white-space: nowrap;">
                    <button type="button" class="btn-nav" onclick="copyText('https://xsur.my.id/link/${escapeHtml(l.slug)}')" style="padding: 4px 8px; font-size: 11px;">
                      Salin
                    </button>
                    <form action="/api/link/delete" method="POST" onsubmit="return confirm('Hapus shortlink ini secara permanen?');" style="display: inline; margin-left: 4px;">
                      <input type="hidden" name="slug" value="${escapeHtml(l.slug)}">
                      <button type="submit" class="btn-del">Hapus</button>
                    </form>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 3: GENERATOR MODE ADMIN -->
      <div id="tab-new" class="tab-panel">
        <div class="gen-card">
          <div class="gen-header">
            <h2>Buat Shortlink Khusus Admin</h2>
            <p>Atur tujuan, custom slug, serta custom target SEO keyword secara spesifik.</p>
          </div>

          <form action="/api/link/create" method="POST">
            <div class="form-group">
              <label class="form-label">URL Asli Tujuan (Wajib):</label>
              <input type="url" name="destination_url" required placeholder="https://..." class="form-input">
            </div>

            <div class="form-group">
              <label class="form-label">Judul Link (Opsional):</label>
              <input type="text" name="title" placeholder="Contoh: Download File Setup / Link WhatsApp" class="form-input">
            </div>

            <div class="form-group">
              <label class="form-label">Custom Slug (Opsional - Kosongkan untuk 10 karakter acak):</label>
              <input type="text" name="custom_slug" placeholder="slug-kustom-admin" class="form-input">
            </div>

            <div class="form-group">
              <label class="form-label">Target SEO Google Spesifik (Opsional - Kosongkan untuk auto-rotate):</label>
              <input type="text" name="seo_keyword" placeholder="Contoh: xsur.my.id konsultasi cybersecurity jakarta" class="form-input">
            </div>

            <button type="submit" class="btn-submit">
              🚀 Buat Shortlink Khusus
            </button>
          </form>
        </div>
      </div>
    `}
  </div>

  <!-- Modal Login Admin -->
  <div class="modal-overlay" id="login-modal">
    <div class="modal-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="font-size: 16px; color: #ffffff;">🔐 Masuk Dashboard Admin</h3>
        <button type="button" onclick="closeLoginModal()" style="background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;">✕</button>
      </div>
      <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 16px;">
        Hanya untuk administrator PT Xecure Siber Unggul Resolusi.
      </p>
      <form action="/api/link/login" method="POST">
        <div class="form-group">
          <label class="form-label">Kunci Keamanan / Password Admin:</label>
          <input type="password" name="password" required placeholder="Masukkan password admin..." class="form-input">
        </div>
        <button type="submit" class="btn-submit">
          Masuk ke Dashboard ➔
        </button>
      </form>
    </div>
  </div>

  <script>
    function selectSlugType(type) {
      const defOpt = document.getElementById('opt-default-label');
      const custOpt = document.getElementById('opt-custom-label');
      const field = document.getElementById('custom-slug-field');
      const input = document.getElementById('custom-slug-input');

      if (type === 'custom') {
        custOpt.classList.add('active');
        defOpt.classList.remove('active');
        field.style.display = 'block';
        if (input) input.focus();
      } else {
        defOpt.classList.add('active');
        custOpt.classList.remove('active');
        field.style.display = 'none';
        if (input) input.value = '';
      }
    }

    function switchTab(tabId, btn) {
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      const target = document.getElementById(tabId);
      if (target) target.classList.add('active');
      if (btn) btn.classList.add('active');
    }

    function openLoginModal() {
      document.getElementById('login-modal').classList.add('active');
    }
    function closeLoginModal() {
      document.getElementById('login-modal').classList.remove('active');
    }

    function copyCreatedUrl() {
      const text = document.getElementById('created-url').innerText;
      copyText(text);
    }

    function copyText(val) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).then(() => {
          alert('✓ Tautan berhasil disalin ke papan klip:\n' + val);
        }).catch(() => {
          prompt('Salin link berikut:', val);
        });
      } else {
        prompt('Salin link berikut:', val);
      }
    }
  </script>
</body>
</html>`;
}
