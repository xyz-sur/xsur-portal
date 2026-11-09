// XSUR Link Shield & URL Shortener Engine
// Instan Zero-Delay Gateway, Public Shortlink Generator, dan Dashboard Admin dengan Proteksi Banned IP

import { SVG_HORIZONTAL, SVG_ICON } from "./logo.js";

export const DEFAULT_SEO_QUERIES = [
  // Prioritas Utama 1: Wilayah Pekanbaru Kota & Riau
  "xsur.my.id jasa setting wifi kantor mikrotik pekanbaru",
  "xsur.my.id jasa perbaikan jaringan internet kantor pekanbaru riau",
  "xsur.my.id jasa pasang access point ruijie unifi pekanbaru",
  "xsur.my.id jasa pembuatan website bisnis profesional pekanbaru",
  "xsur.my.id jasa pembuatan bot whatsapp otomatis pekanbaru",
  "xsur.my.id konsultan IT keamanan siber pekanbaru riau",
  "xsur.my.id solusi wifi kantor ruko cafe lemot pekanbaru",
  "xsur.my.id setting failover multi isp internet kantor pekanbaru",
  "xsur.my.id jasa recovery website kena hack malware pekanbaru",
  "xsur.my.id jasa setup server proxmox vps cloud pekanbaru",
  "xsur.my.id bang mansur IT expert konsultan siber pekanbaru riau",
  "xsur.my.id instalasi kabel lan jaringan komputer kantor pekanbaru",

  // Prioritas Utama 2: Wilayah Jakarta & Kota Besar (Bandung, Surabaya, Medan)
  "xsur.my.id jasa setting wifi kantor mikrotik jakarta",
  "xsur.my.id jasa audit cybersecurity penetration testing jakarta",
  "xsur.my.id konsultan cybersecurity perusahaan jakarta bandung surabaya",
  "xsur.my.id jasa pembuatan bot telegram gateway payment jakarta",
  "xsur.my.id jasa freelance coding programmer bang mansur jakarta",
  "xsur.my.id setting failover multi isp load balancing mikrotik",
  "xsur.my.id PT Xecure Siber Unggul Resolusi konsultan IT jakarta",
  "xsur.my.id solusi wifi lemot kantor ruko cafe pembagian bandwidth",
  "xsur.my.id jasa setting server proxmox vps cloud linux debian",
  "xsur.my.id optimasi kecepatan website skor pagespeed 100",
  "xsur.my.id jasa migrasi server hosting cpanel ke cloudflare vps"
];

export function getRandomSeoQuery() {
  return DEFAULT_SEO_QUERIES[Math.floor(Math.random() * DEFAULT_SEO_QUERIES.length)];
}

export function generateRandomSlug(length = 10) {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  let res = "";
  for (let i = 0; i < length; i++) {
    res += chars[bytes[i] % chars.length];
  }
  return res;
}

function getDomainFromUrl(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.hostname;
  } catch (e) {
    return String(urlStr).replace(/^https?:\/\//i, "").split("/")[0] || "external-link";
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

// =========================================================================
// 1. GATEWAY INSTAN TANPA JEDA / WAKTU TUNGGU (0 DETIK) + SEO INJECTION
// =========================================================================
export function renderSafeLinkGateway({ slug, destinationUrl, title, seoKeyword }) {
  const targetDomain = getDomainFromUrl(destinationUrl);
  const selectedSeoQuery = seoKeyword && seoKeyword.trim() ? seoKeyword.trim() : getRandomSeoQuery();
  const googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedSeoQuery);
  const canonicalUrl = `https://xsur.my.id/link/${slug}`;
  const displayTitle = title && title.trim() ? title.trim() : `Mengarahkan ke ${targetDomain}`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(displayTitle)} - XSUR Link Shield</title>
  <meta name="robots" content="index, follow">
  <meta name="description" content="Pemeriksaan keamanan tautan resmi XSUR. Pengalihan cepat dan aman ke ${escapeHtml(targetDomain)}.">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/svg+xml" href="/logo.svg">

  <!-- Background SEO Google Prefetch & Prerender -->
  <link rel="prefetch" href="${googleSearchUrl}">
  <link rel="prerender" href="${googleSearchUrl}">

  <!-- Schema.org JSON-LD for Google Indexing -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${escapeHtml(displayTitle)}",
    "url": "${canonicalUrl}",
    "description": "Verifikasi tautan aman dan terpercaya PT Xecure Siber Unggul Resolusi",
    "publisher": {
      "@type": "Organization",
      "name": "PT Xecure Siber Unggul Resolusi",
      "url": "https://xsur.my.id"
    }
  }
  </script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #06090f;
      color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      text-align: center;
    }
    .wrapper {
      max-width: 360px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Minimalist Pulse Ring (Ultra Ringan) */
    .pulse-ring {
      width: 48px;
      height: 48px;
      border: 3px solid rgba(0, 242, 254, 0.2);
      border-top-color: #00f2fe;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      margin-bottom: 18px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Spoiler Domain Preview Ringkas */
    .spoiler-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(14, 23, 42, 0.9);
      border: 1px solid rgba(0, 242, 254, 0.25);
      padding: 5px 12px;
      border-radius: 16px;
      font-size: 13px;
      font-family: monospace;
      color: #38bdf8;
      margin-bottom: 12px;
    }
    .spoiler-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 6px #10b981;
    }

    .status-msg {
      font-size: 14px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 4px;
    }
    .status-sub {
      font-size: 11.5px;
      color: #64748b;
      margin-bottom: 18px;
    }

    /* Tombol Instan */
    .btn-action {
      background: linear-gradient(135deg, #00f2fe, #0ea5e9);
      color: #06090f;
      padding: 10px 22px;
      border-radius: 8px;
      font-size: 13.5px;
      font-weight: 800;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: none;
      box-shadow: 0 4px 14px rgba(0, 242, 254, 0.25);
      transition: transform 0.1s;
    }
    .btn-action:active {
      transform: scale(0.98);
    }

    .footer-note {
      margin-top: 24px;
      font-size: 11px;
      color: #475569;
    }
    .footer-note a {
      color: #64748b;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="pulse-ring"></div>

    <div class="spoiler-pill">
      <span class="spoiler-dot"></span>
      <span>🌐 ${escapeHtml(targetDomain)}</span>
    </div>

    <div class="status-msg">Mengarahkan ke tautan tujuan...</div>
    <div class="status-sub">Injeksi keamanan & SEO Google aktif</div>

    <a href="${escapeHtml(destinationUrl)}" class="btn-action" id="btn-manual" onclick="executeDualAction(event)">
      🚀 Buka Tautan Sekarang ↗
    </a>

    <div class="footer-note">
      <a href="https://xsur.my.id" target="_blank">XSUR Link Shield</a>
    </div>
  </div>

  <script>
    const destUrl = ${JSON.stringify(destinationUrl)};
    const googleUrl = ${JSON.stringify(googleSearchUrl)};

    // 1. Eksekusi Injeksi SEO Google di background segera saat halaman dimuat
    try {
      const beacon = new Image();
      beacon.src = googleUrl;
    } catch(e) {}
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(googleUrl);
      }
    } catch(e) {}

    let redirected = false;

    // 2. Eksekusi Dual-Action (Tab Baru: Google Search SEO, Tab Aktif: URL Tujuan)
    function executeDualAction(e) {
      if (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
      }
      if (redirected) return;
      redirected = true;

      // Tab Baru: Buka Google Search SEO secara langsung via user gesture
      try {
        window.open(googleUrl, '_blank');
      } catch(err) {}

      // Tab Ini: Alihkan langsung ke URL Tujuan secara sinkron
      window.location.href = destUrl;
    }

    // 3. Tangani Klik di Mana Saja pada Layar (1-Tap Full Screen Trigger)
    document.addEventListener('click', function(e) {
      if (redirected) return;
      if (e.target.closest('.footer-note')) return;
      executeDualAction(e);
    });

    // 4. Fallback Auto-Redirect setelah 2.5 detik jika tidak ada interaksi klik
    setTimeout(function() {
      if (!redirected) {
        redirected = true;
        window.location.href = destUrl;
      }
    }, 2500);
  </script>
</body>
</html>`;
}

// =========================================================================
// 2. HALAMAN GENERATOR PUBLIK (/link) - IKON SAMAR LOGIN ADMIN
// =========================================================================
export function renderPublicLinkPage({ createdSlug = "", error = "", success = "" }) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shortener URL Instan // XSUR Link Shield</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070a12;
      --card-bg: rgba(14, 20, 36, 0.95);
      --border: rgba(0, 242, 254, 0.22);
      --cyan: #00f2fe;
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
      justify-content: space-between;
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
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text);
    }
    
    /* Ikon gembok samar di pojok kanan atas - orang biasa tidak asal klik */
    .subtle-admin-btn {
      color: #334155;
      padding: 8px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s, opacity 0.2s;
      text-decoration: none;
      opacity: 0.5;
    }
    .subtle-admin-btn:hover {
      color: #94a3b8;
      opacity: 1;
    }
    
    .container {
      max-width: 580px;
      width: 100%;
      margin: 36px auto;
      padding: 0 16px;
    }

    .alert {
      padding: 12px 16px;
      border-radius: 10px;
      font-size: 13.5px;
      margin-bottom: 20px;
    }
    .alert-error {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 63, 94, 0.35);
      color: #fb7185;
    }
    .alert-success {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
    }

    .result-card {
      background: linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(16, 185, 129, 0.12));
      border: 1px solid rgba(0, 242, 254, 0.45);
      border-radius: 14px;
      padding: 22px;
      margin-bottom: 24px;
      text-align: center;
      box-shadow: 0 8px 30px rgba(0, 242, 254, 0.15);
    }
    .result-title {
      font-size: 16px;
      font-weight: 800;
      color: var(--cyan);
      margin-bottom: 6px;
    }
    .result-link-box {
      background: rgba(6, 9, 14, 0.9);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 14px;
      margin: 12px 0;
      font-family: var(--font-mono);
      font-size: 14px;
      color: #ffffff;
      word-break: break-all;
    }
    .result-btns {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .form-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    }
    .form-head {
      margin-bottom: 22px;
      text-align: center;
    }
    .form-head h1 {
      font-size: 21px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .form-head p {
      font-size: 13px;
      color: var(--text-muted);
    }

    .form-group {
      margin-bottom: 18px;
    }
    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 7px;
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

    .slug-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 8px;
    }
    .slug-tab-btn {
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(6, 9, 14, 0.6);
      border-radius: 8px;
      padding: 10px;
      font-size: 12.5px;
      color: #cbd5e1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .slug-tab-btn.active {
      border-color: var(--cyan);
      background: rgba(0, 242, 254, 0.08);
      color: var(--cyan);
      font-weight: 700;
    }

    .custom-box {
      margin-top: 10px;
      display: none;
    }
    .custom-input-wrap {
      display: flex;
      align-items: center;
      background: rgba(6, 9, 14, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding-left: 12px;
    }
    .custom-prefix {
      font-family: var(--font-mono);
      font-size: 12.5px;
      color: var(--text-muted);
    }
    .custom-input {
      flex: 1;
      background: transparent;
      border: none;
      padding: 12px 10px;
      font-size: 13.5px;
      color: #ffffff;
      outline: none;
    }

    .info-box {
      background: rgba(0, 242, 254, 0.04);
      border: 1px dashed rgba(0, 242, 254, 0.2);
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 20px;
      font-size: 11.5px;
      color: var(--text-muted);
      line-height: 1.5;
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
    }

    .btn-tool {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      padding: 7px 14px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
    }
    .btn-tool-cyan {
      background: var(--cyan);
      border-color: var(--cyan);
      color: #050b14;
    }

    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #475569;
    }
    .footer a {
      color: #64748b;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="/link" class="brand">
      <div style="height: 26px; width: 95px;">
        ${SVG_HORIZONTAL}
      </div>
      <span style="font-size: 12px; font-weight: 800; color: var(--cyan); letter-spacing: 0.5px;">SHORTENER</span>
    </a>
    
    <!-- Ikon samar masuk dashboard admin - tidak ada teks mencolok -->
    <a href="/link/dashboard" class="subtle-admin-btn" title="System Settings" aria-label="Settings">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    </a>
  </nav>

  <div class="container">
    ${error ? `<div class="alert alert-error">⚠️ ${escapeHtml(error)}</div>` : ""}
    ${success ? `<div class="alert alert-success">✓ ${escapeHtml(success)}</div>` : ""}

    ${createdSlug ? `
      <div class="result-card">
        <div class="result-title">🎉 Shortlink Berhasil Dibuat!</div>
        <p style="font-size: 12px; color: var(--text-muted);">Tautan Anda aktif seketika tanpa jeda tunggu dengan proteksi keamanan & SEO Google.</p>
        <div class="result-link-box" id="res-link-text">https://xsur.my.id/link/${escapeHtml(createdSlug)}</div>
        <div class="result-btns">
          <button type="button" class="btn-tool btn-tool-cyan" onclick="copyResult()">📋 Salin Link</button>
          <a href="/link/${escapeHtml(createdSlug)}" target="_blank" class="btn-tool">↗ Coba Buka</a>
        </div>
      </div>
    ` : ""}

    <div class="form-card">
      <div class="form-head">
        <h1>Buat Shortlink Baru</h1>
        <p>Bebas diakses siapapun — format otomatis 10 karakter atau custom.</p>
      </div>

      <form action="/api/link/create" method="POST">
        <div class="form-group">
          <label class="form-label">Tautan Asli Tujuan:</label>
          <input type="url" name="destination_url" required placeholder="https://..." class="form-input">
        </div>

        <div class="form-group">
          <label class="form-label">Format Shortlink (Slug):</label>
          <div class="slug-tabs">
            <label class="slug-tab-btn active" id="btn-opt-def" onclick="setSlugType('default')">
              <input type="radio" name="slug_type" value="default" checked style="display:none;">
              <span>⚡ Default (10 Karakter)</span>
            </label>
            <label class="slug-tab-btn" id="btn-opt-cust" onclick="setSlugType('custom')">
              <input type="radio" name="slug_type" value="custom" style="display:none;">
              <span>✏️ Custom Link</span>
            </label>
          </div>

          <div class="custom-box" id="custom-wrap">
            <div class="custom-input-wrap">
              <span class="custom-prefix">xsur.my.id/link/</span>
              <input type="text" name="custom_slug" id="custom-slug-box" placeholder="pilihan-anda" pattern="[a-zA-Z0-9-]+" class="custom-input">
            </div>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">*Gunakan huruf, angka, atau tanda hubung (-).</p>
          </div>
        </div>

        <div class="info-box">
          🛡️ <b>SEO Google Otomatis:</b> Setiap shortlink otomatis dirotasi dengan target pencarian SEO Google wilayah Pekanbaru & kota besar tanpa jeda waktu tunggu pengunjung.
        </div>

        <button type="submit" class="btn-submit">
          🚀 Buat Shortlink Sekarang
        </button>
      </form>
    </div>
  </div>

  <footer class="footer">
    Dilindungi oleh <a href="https://xsur.my.id" target="_blank">PT Xecure Siber Unggul Resolusi</a>
  </footer>

  <script>
    function setSlugType(type) {
      const defBtn = document.getElementById('btn-opt-def');
      const custBtn = document.getElementById('btn-opt-cust');
      const wrap = document.getElementById('custom-wrap');
      const inp = document.getElementById('custom-slug-box');

      if (type === 'custom') {
        custBtn.classList.add('active');
        defBtn.classList.remove('active');
        wrap.style.display = 'block';
        if (inp) inp.focus();
      } else {
        defBtn.classList.add('active');
        custBtn.classList.remove('active');
        wrap.style.display = 'none';
        if (inp) inp.value = '';
      }
    }

    function copyResult() {
      const text = document.getElementById('res-link-text').innerText;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          alert('✓ Tautan berhasil disalin: ' + text);
        }).catch(() => {
          prompt('Salin link ini:', text);
        });
      } else {
        prompt('Salin link ini:', text);
      }
    }
  </script>
</body>
</html>`;
}

// =========================================================================
// 3. FORM LOGIN ADMIN DENGAN PERINGATAN 3X SALAH = BANNED 1 JAM
// =========================================================================
export function renderAdminLoginForm({ error = "" }) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Admin // XSUR Link Shield</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #070a12;
      color: #f8fafc;
      font-family: system-ui, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .card {
      max-width: 380px;
      width: 100%;
      background: rgba(14, 20, 36, 0.95);
      border: 1px solid rgba(0, 242, 254, 0.25);
      border-radius: 16px;
      padding: 30px 24px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    }
    h1 { font-size: 18px; margin-bottom: 6px; color: #ffffff; }
    p { font-size: 12px; color: #94a3b8; margin-bottom: 20px; }
    .alert {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 63, 94, 0.35);
      color: #fb7185;
      padding: 12px;
      border-radius: 8px;
      font-size: 12px;
      margin-bottom: 16px;
      line-height: 1.4;
      text-align: left;
    }
    .security-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(244, 63, 94, 0.08);
      border: 1px solid rgba(244, 63, 94, 0.25);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 11px;
      color: #fb7185;
      margin-bottom: 16px;
    }
    .form-input {
      width: 100%;
      background: #06090f;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      padding: 12px;
      font-size: 14px;
      color: #ffffff;
      outline: none;
      margin-bottom: 16px;
    }
    .form-input:focus { border-color: #00f2fe; }
    .btn-submit {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #00f2fe, #0ea5e9);
      border: none;
      border-radius: 8px;
      color: #050b14;
      font-size: 14px;
      font-weight: 800;
      cursor: pointer;
    }
    .back-link {
      display: inline-block;
      margin-top: 18px;
      font-size: 12px;
      color: #64748b;
      text-decoration: none;
    }
    .back-link:hover { color: #00f2fe; }
  </style>
</head>
<body>
  <div class="card">
    <div style="height: 28px; width: 100px; margin: 0 auto 16px auto;">
      ${SVG_HORIZONTAL}
    </div>
    <h1>🔐 Dashboard Admin</h1>
    <p>Masukkan kunci keamanan untuk mengakses manajemen SEO & Shortlink.</p>

    <div class="security-badge">
      <span>🛡️ Proteksi: Maks 3x Salah → Banned IP 1 Jam & Alert Telegram</span>
    </div>

    ${error ? `<div class="alert">⚠️ ${escapeHtml(error)}</div>` : ""}

    <form action="/api/link/login" method="POST">
      <input type="password" name="password" required placeholder="Password Admin..." class="form-input">
      <button type="submit" class="btn-submit">Masuk ke Dashboard ➔</button>
    </form>

    <a href="/link" class="back-link">← Kembali ke Form Shortener</a>
  </div>
</body>
</html>`;
}

// =========================================================================
// 4. DASHBOARD ADMIN LENGKAP (SEO PEKANBARU/JAKARTA & SHORTLINK MANAGEMENT)
// =========================================================================
export function renderAdminLinkDashboard({ links = [], seoKeywords = [], error = "", success = "" }) {
  const totalClicks = links.reduce((acc, l) => acc + (l.clicks || 0), 0);
  const totalLinks = links.length;
  const totalKeywords = seoKeywords.length;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Admin // XSUR Link Shield</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070a12;
      --card-bg: rgba(14, 20, 36, 0.95);
      --border: rgba(0, 242, 254, 0.22);
      --cyan: #00f2fe;
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
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text);
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-nav {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: var(--text);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 600;
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
      max-width: 1040px;
      margin: 28px auto 0 auto;
      padding: 0 16px;
    }

    .alert {
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 13.5px;
      margin-bottom: 20px;
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
      padding: 16px 20px;
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
      font-size: 13.5px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .tab-btn.active {
      color: var(--cyan);
      border-bottom-color: var(--cyan);
    }
    .tab-panel { display: none; }
    .tab-panel.active { display: block; }

    .panel-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 22px;
      margin-bottom: 20px;
    }
    .form-input {
      background: rgba(6, 9, 14, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 11px 14px;
      font-size: 13.5px;
      color: #ffffff;
      outline: none;
    }
    .form-input:focus { border-color: var(--cyan); }
    .btn-submit {
      padding: 11px 18px;
      background: linear-gradient(135deg, var(--cyan), #0ea5e9);
      border: none;
      border-radius: 8px;
      color: #050b14;
      font-size: 13.5px;
      font-weight: 800;
      cursor: pointer;
    }

    .table-wrap {
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
    tr:hover td { background: rgba(255, 255, 255, 0.02); }

    .btn-del {
      background: rgba(244, 63, 94, 0.12);
      border: 1px solid rgba(244, 63, 94, 0.3);
      color: #fb7185;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11.5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="/link/dashboard" class="brand">
      <div style="height: 26px; width: 95px;">
        ${SVG_HORIZONTAL}
      </div>
      <span style="font-size: 12px; font-weight: 800; color: var(--cyan); letter-spacing: 0.5px;">ADMIN DASHBOARD</span>
    </a>
    <div class="nav-actions">
      <a href="/link" class="btn-nav">🌐 Halaman Pengguna</a>
      <a href="/api/link/logout" class="btn-nav" style="border-color: rgba(244, 63, 94, 0.4); color: #fb7185;">🚪 Keluar</a>
    </div>
  </nav>

  <div class="container">
    ${error ? `<div class="alert alert-error">⚠️ ${escapeHtml(error)}</div>` : ""}
    ${success ? `<div class="alert alert-success">✓ ${escapeHtml(success)}</div>` : ""}

    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-val">${totalKeywords}</div>
        <div class="stat-lbl">Target SEO Google Aktif</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${totalLinks}</div>
        <div class="stat-lbl">Total Shortlink Dibuat</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${totalClicks}</div>
        <div class="stat-lbl">Total Klik Terverifikasi</div>
      </div>
    </div>

    <!-- Tab Bar -->
    <div class="tab-nav">
      <button class="tab-btn active" onclick="switchTab('tab-seo', this)">🎯 Target SEO (Pekanbaru & Kota Besar)</button>
      <button class="tab-btn" onclick="switchTab('tab-links', this)">🔗 Semua Shortlink</button>
      <button class="tab-btn" onclick="switchTab('tab-create', this)">➕ Buat Shortlink Admin</button>
    </div>

    <!-- TAB 1: KREASI SEO GOOGLE -->
    <div id="tab-seo" class="tab-panel active">
      <div class="panel-card">
        <h3 style="font-size: 15px; margin-bottom: 6px; color:#ffffff;">➕ Tambah Target Pencarian SEO Google</h3>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px;">
          Kata kunci di bawah otomatis dirotasi untuk mengoptimalkan peringkat Google wilayah <b>Pekanbaru</b> & <b>Jakarta</b>.
        </p>

        <form action="/api/link/seo/add" method="POST" style="display: flex; gap: 10px; flex-wrap: wrap;">
          <input type="text" name="keyword" required placeholder="Contoh: xsur.my.id jasa setting wifi kantor mikrotik pekanbaru" class="form-input" style="flex: 1; min-width: 280px;">
          <select name="priority" class="form-input" style="width: 140px;">
            <option value="2">Pekanbaru (Utama)</option>
            <option value="1">Jakarta / Kota Besar</option>
          </select>
          <button type="submit" class="btn-submit">💾 Simpan Target</button>
        </form>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width: 45px;">No</th>
              <th>Keyword Pencarian Google (SEO Rotator)</th>
              <th style="width: 140px;">Prioritas Wilayah</th>
              <th style="width: 90px; text-align: center;">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${seoKeywords.length === 0 ? `
              <tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada target SEO khusus.</td></tr>
            ` : seoKeywords.map((k, i) => `
              <tr>
                <td style="font-family: var(--font-mono); color: var(--text-muted);">${i + 1}</td>
                <td style="font-weight: 600; color: #ffffff;">
                  <span>🔍 ${escapeHtml(k.keyword)}</span>
                  <a href="https://www.google.com/search?q=${encodeURIComponent(k.keyword)}" target="_blank" style="font-size: 11px; color: var(--cyan); margin-left: 8px; text-decoration: underline;">Uji Google ↗</a>
                </td>
                <td>
                  ${(k.weight >= 2 || (k.keyword || "").includes("pekanbaru")) ?
                    `<span style="color: #38bdf8; font-weight: 700; font-size: 11px; background: rgba(56, 189, 248, 0.1); padding: 3px 8px; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.3);">📍 Pekanbaru</span>` :
                    `<span style="color: #cbd5e1; font-weight: 600; font-size: 11px; background: rgba(255, 255, 255, 0.05); padding: 3px 8px; border-radius: 12px;">🏙️ Kota Besar</span>`
                  }
                </td>
                <td style="text-align: center;">
                  <form action="/api/link/seo/delete" method="POST" onsubmit="return confirm('Hapus keyword SEO ini?');" style="display: inline;">
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

    <!-- TAB 2: SEMUA SHORTLINK -->
    <div id="tab-links" class="tab-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Shortlink</th>
              <th>Tautan Asli Tujuan</th>
              <th>SEO Target</th>
              <th>Klik</th>
              <th>Dibuat</th>
              <th style="text-align: center;">Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${links.length === 0 ? `
              <tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada shortlink terdaftar.</td></tr>
            ` : links.map(l => `
              <tr>
                <td>
                  <a href="/link/${escapeHtml(l.slug)}" target="_blank" style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan); text-decoration: none;">
                    /link/${escapeHtml(l.slug)}
                  </a>
                </td>
                <td style="max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  <a href="${escapeHtml(l.destination_url)}" target="_blank" style="color: #cbd5e1; text-decoration: none;">
                    ${escapeHtml(l.destination_url)}
                  </a>
                </td>
                <td style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; color: var(--text-muted);">
                  ${escapeHtml(l.seo_keyword || "Auto-Rotate (Pekanbaru/Jakarta)")}
                </td>
                <td style="font-family: var(--font-mono); font-weight: 700; color: #34d399;">
                  ${l.clicks || 0}
                </td>
                <td style="font-size: 11px; color: var(--text-muted); white-space: nowrap;">
                  ${escapeHtml(String(l.created_at || "").slice(0, 10))}
                </td>
                <td style="text-align: center; white-space: nowrap;">
                  <button type="button" class="btn-nav" onclick="copyText('https://xsur.my.id/link/${escapeHtml(l.slug)}')" style="padding: 3px 8px; font-size: 11px;">Salin</button>
                  <form action="/api/link/delete" method="POST" onsubmit="return confirm('Hapus shortlink ini?');" style="display: inline; margin-left: 4px;">
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

    <!-- TAB 3: GENERATOR ADMIN -->
    <div id="tab-create" class="tab-panel">
      <div class="panel-card" style="max-width: 540px; margin: 0 auto;">
        <h3 style="font-size: 16px; margin-bottom: 6px; color:#ffffff;">Buat Shortlink Khusus Admin</h3>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 16px;">
          Tentukan custom slug dan target keyword SEO spesifik jika diinginkan.
        </p>

        <form action="/api/link/create" method="POST">
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 6px;">URL Asli Tujuan (Wajib):</label>
            <input type="url" name="destination_url" required placeholder="https://..." class="form-input" style="width: 100%;">
          </div>

          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 6px;">Custom Slug (Opsional - Kosongkan untuk 10 karakter acak):</label>
            <input type="text" name="custom_slug" placeholder="slug-kustom" class="form-input" style="width: 100%;">
          </div>

          <div style="margin-bottom: 18px;">
            <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 6px;">Target SEO Google Spesifik (Opsional - Kosongkan untuk rotasi otomatis Pekanbaru/Jakarta):</label>
            <input type="text" name="seo_keyword" placeholder="Contoh: xsur.my.id jasa setting wifi kantor pekanbaru" class="form-input" style="width: 100%;">
          </div>

          <button type="submit" class="btn-submit" style="width: 100%;">
            🚀 Buat Shortlink Admin
          </button>
        </form>
      </div>
    </div>
  </div>

  <script>
    function switchTab(id, btn) {
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      const target = document.getElementById(id);
      if (target) target.classList.add('active');
      if (btn) btn.classList.add('active');
    }

    function copyText(val) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).then(() => {
          alert('✓ Tautan disalin:\n' + val);
        }).catch(() => {
          prompt('Salin link:', val);
        });
      } else {
        prompt('Salin link:', val);
      }
    }
  </script>
</body>
</html>`;
}

// Wrapper backward compatibility
export function renderLinkDashboard({ isAuthenticated, links = [], seoKeywords = [], createdSlug = "", error = "", success = "" }) {
  if (isAuthenticated) {
    return renderAdminLinkDashboard({ links, seoKeywords, error, success });
  } else {
    return renderPublicLinkPage({ createdSlug, error, success });
  }
}
