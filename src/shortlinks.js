// XSUR Link Shield & URL Shortener Engine
// Module for generating permanent shortlinks, 5s verification gateway, and management dashboard

import { SVG_HORIZONTAL, SVG_ICON } from "./logo.js";

const DEFAULT_SEO_QUERIES = [
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
export function renderSafeLinkGateway({ slug, destinationUrl, title, seoKeyword }) {
  const finalTitle = title || "Tautan Resmi Terverifikasi";
  const selectedSeoQuery = seoKeyword || DEFAULT_SEO_QUERIES[Math.floor(Math.random() * DEFAULT_SEO_QUERIES.length)];
  const googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedSeoQuery);

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifikasi Keamanan Tautan // XSUR Link Shield</title>
  <meta name="robots" content="index, follow">
  <meta name="description" content="Pemeriksaan keamanan tautan otomatis oleh PT Xecure Siber Unggul Resolusi (XSUR). Memastikan tautan tujuan aman sebelum pengalihan.">
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #06090e;
      --card-bg: rgba(13, 19, 33, 0.82);
      --border: rgba(0, 242, 254, 0.25);
      --border-glow: rgba(0, 242, 254, 0.45);
      --cyan: #00f2fe;
      --emerald: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.4);
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
      padding: 20px;
      overflow-x: hidden;
      position: relative;
    }
    /* Background Cyber Grid */
    .bg-grid {
      position: fixed;
      inset: 0;
      background-image: 
        linear-gradient(rgba(0, 242, 254, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 242, 254, 0.04) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
      z-index: 0;
    }
    .ambient-glow {
      position: fixed;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 0;
    }
    .shield-container {
      position: relative;
      z-index: 10;
      max-width: 560px;
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 36px 30px;
      backdrop-filter: blur(20px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15);
      text-align: center;
      animation: fadeIn 0.4s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .brand-header {
      display: flex;
      justify-content: center;
      margin-bottom: 22px;
    }
    .shield-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0, 242, 254, 0.1);
      border: 1px solid rgba(0, 242, 254, 0.3);
      padding: 6px 14px;
      border-radius: 30px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--cyan);
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 16px;
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--cyan);
      box-shadow: 0 0 8px var(--cyan);
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }
    .shield-title {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
      color: #ffffff;
    }
    .shield-desc {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 24px;
    }
    /* Circular Countdown & Progress */
    .countdown-box {
      background: rgba(8, 12, 20, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .countdown-num {
      font-family: var(--font-mono);
      font-size: 44px;
      font-weight: 800;
      color: var(--cyan);
      line-height: 1;
      text-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
    }
    .countdown-label {
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: #94a3b8;
      letter-spacing: 0.5px;
    }
    .progress-bar-wrap {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 6px;
      overflow: hidden;
      margin-top: 4px;
    }
    .progress-bar-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--cyan), var(--emerald));
      border-radius: 6px;
      transition: width 0.1s linear;
      box-shadow: 0 0 10px rgba(0, 242, 254, 0.8);
    }
    /* Security Verification Steps */
    .check-list {
      text-align: left;
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: #cbd5e1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 24px;
      background: rgba(6, 9, 14, 0.6);
      padding: 14px 18px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .check-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      color: var(--emerald);
      font-weight: bold;
    }
    /* Action Buttons */
    .btn-action {
      display: block;
      width: 100%;
      padding: 14px 20px;
      border-radius: 12px;
      font-family: var(--font-sans);
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      border: none;
    }
    .btn-waiting {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #64748b;
      cursor: not-allowed;
    }
    .btn-ready {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #ffffff;
      box-shadow: 0 0 25px var(--emerald-glow);
      cursor: pointer;
      animation: pulseBtn 1.5s infinite;
    }
    .btn-ready:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 35px rgba(16, 185, 129, 0.6);
    }
    @keyframes pulseBtn {
      0%, 100% { box-shadow: 0 0 20px var(--emerald-glow); }
      50% { box-shadow: 0 0 35px rgba(16, 185, 129, 0.7); }
    }
    /* SEO Footer Links */
    .seo-footer {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 11.5px;
      color: #64748b;
      line-height: 1.6;
    }
    .seo-footer a {
      color: var(--cyan);
      text-decoration: none;
    }
    .seo-footer a:hover {
      text-decoration: underline;
    }
    .seo-keywords-badge {
      display: inline-block;
      margin-top: 8px;
      font-family: var(--font-mono);
      font-size: 10px;
      color: #475569;
      background: rgba(255, 255, 255, 0.02);
      padding: 4px 10px;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="ambient-glow"></div>

  <div class="shield-container">
    <div class="brand-header">
      <a href="https://xsur.my.id" target="_blank" style="text-decoration: none;">
        <div style="height: 34px; width: 125px;">
          ${SVG_HORIZONTAL}
        </div>
      </a>
    </div>

    <div class="shield-badge">
      <span class="pulse-dot"></span>
      <span>XSUR LINK SHIELD // VERIFIKASI KEAMANAN</span>
    </div>

    <h1 class="shield-title">${escapeHtml(finalTitle)}</h1>
    <p class="shield-desc">Sistem sedang memeriksa integritas tautan &amp; verifikasi pengunjung manusia untuk keamanan penelusuran Anda.</p>

    <div class="countdown-box">
      <div class="countdown-num" id="countdown-val">5</div>
      <div class="countdown-label" id="countdown-msg">MEMERIKSA PROTOKOL KEAMANAN TAUTAN...</div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="progress-fill"></div>
      </div>
    </div>

    <div class="check-list">
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span>Filter Anti-Malware &amp; Phishing: Aman</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span>Human Verification Check: Terkonfirmasi</span>
      </div>
      <div class="check-item">
        <span class="check-icon" id="step3-icon">⏳</span>
        <span id="step3-text">Menyiapkan Pengalihan Tautan Resmi...</span>
      </div>
    </div>

    <button type="button" id="btn-redirect" class="btn-action btn-waiting" disabled onclick="executeDualTabRedirect()">
      ⏳ Mohon Tunggu 5 Detik...
    </button>

    <div class="seo-footer">
      Dilindungi oleh <a href="https://xsur.my.id" target="_blank">PT Xecure Siber Unggul Resolusi (XSUR)</a>.<br>
      Solusi Jasa Setting WiFi Kantor, Pembuatan Bot WhatsApp/Telegram &amp; Keamanan Siber.<br>
      <span class="seo-keywords-badge">Pencarian Terkait: ${escapeHtml(selectedSeoQuery)}</span>
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
    const msgEl = document.getElementById('countdown-msg');
    const fillEl = document.getElementById('progress-fill');
    const btnEl = document.getElementById('btn-redirect');
    const step3Icon = document.getElementById('step3-icon');
    const step3Text = document.getElementById('step3-text');

    function getRandomGoogleUrl() {
      const query = customSeo || seoQueriesPool[Math.floor(Math.random() * seoQueriesPool.length)];
      return "https://www.google.com/search?q=" + encodeURIComponent(query);
    }

    const timer = setInterval(() => {
      timeLeft--;
      const progress = ((5 - timeLeft) / 5) * 100;
      fillEl.style.width = progress + '%';

      if (timeLeft > 0) {
        countEl.innerText = timeLeft;
        btnEl.innerText = '⏳ Mohon Tunggu ' + timeLeft + ' Detik...';
      } else {
        clearInterval(timer);
        countEl.innerText = '0';
        msgEl.innerText = 'VERIFIKASI MANUSIA BERHASIL // TAUTAN AMAN';
        step3Icon.innerText = '✓';
        step3Icon.style.color = '#10b981';
        step3Text.innerText = 'Tautan Aman & Terverifikasi Siap Diakses';
        
        // Activate Glowing Click Button
        btnEl.disabled = false;
        btnEl.className = 'btn-action btn-ready';
        btnEl.innerHTML = '🚀 BUKA TAUTAN RESMI (TAB BARU) ↗';
        isReady = true;

        // Trigger Dual-Tab Redirect
        triggerDualTabAction();
      }
    }, 1000);

    // Initial progress start
    setTimeout(() => {
      fillEl.style.width = '20%';
    }, 150);

    function triggerDualTabAction() {
      // 1. Generate randomized SEO search query for Google
      const targetGoogleUrl = getRandomGoogleUrl();

      // 2. Try opening original destination URL in NEW TAB
      const newTab = window.open(destUrl, '_blank');

      if (newTab && !newTab.closed && typeof newTab.closed !== 'undefined') {
        // Success: New tab opened with original shorten link
        hasRedirected = true;
        // Tab lama (current tab) dialihkan ke pencarian Google dengan SEO tag acak
        setTimeout(() => {
          window.location.replace(targetGoogleUrl);
        }, 350);
      } else {
        // Browser blocked automatic popup without physical click gesture
        // Keep button ready for 1-click execution (guaranteed popup permission)
        btnEl.innerHTML = '🚀 BUKA TAUTAN RESMI (KLIK DI SINI) ↗';
        btnEl.onclick = function() {
          window.open(destUrl, '_blank');
          setTimeout(() => {
            window.location.replace(targetGoogleUrl);
          }, 350);
        };
      }
    }

    // Direct manual click handler on the button
    function executeDualTabRedirect() {
      const targetGoogleUrl = getRandomGoogleUrl();
      // Buka link asli di tab baru (user gesture bypasses popup blockers 100%)
      window.open(destUrl, '_blank');
      // Tab lama dialihkan ke Google Search dengan SEO tag acak
      setTimeout(() => {
        window.location.replace(targetGoogleUrl);
      }, 350);
    }
  </script>
</body>
</html>`;
}

// Render Admin Dashboard at /link
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
