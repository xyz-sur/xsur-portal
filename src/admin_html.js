// Admin UI for PT Xecure Siber Unggul Resolusi (xsur.my.id/admin)
import { SVG_HORIZONTAL, SVG_ICON } from "./logo.js";
import { PROJECT_CATEGORIES, DEFAULT_PROJECTS } from "./projects.js";

export function renderAdminPage({ isAuthenticated, menus = [], siteConfig = {}, projects = DEFAULT_PROJECTS, errorMsg }) {
  if (!isAuthenticated) {
    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Access Control — PT Xecure Siber Unggul Resolusi</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,${encodeURIComponent(SVG_ICON)}">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #07090e;
      --card-bg: rgba(14, 18, 27, 0.85);
      --border: rgba(255, 255, 255, 0.08);
      --cyan: #00f2fe;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg); color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif;
      min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px;
      background-image: radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.1), transparent 50%);
    }
    .login-card {
      width: 100%; max-width: 420px; background: var(--card-bg); border: 1px solid var(--border);
      border-radius: 18px; padding: 36px 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.7);
      backdrop-filter: blur(16px); text-align: center;
    }
    .login-logo { width: 140px; margin: 0 auto 20px; }
    .login-title { font-size: 20px; font-weight: 800; margin-bottom: 6px; }
    .login-sub { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; }
    .form-group { text-align: left; margin-bottom: 20px; }
    .form-label { display: block; font-size: 12px; font-family: 'JetBrains Mono', monospace; color: var(--cyan); margin-bottom: 8px; }
    .form-input {
      width: 100%; padding: 13px 16px; border-radius: 10px; background: #080b11;
      border: 1px solid var(--border); color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 14px;
      outline: none; transition: border-color 0.2s;
    }
    .form-input:focus { border-color: var(--cyan); box-shadow: 0 0 12px rgba(0, 242, 254, 0.2); }
    .btn-submit {
      width: 100%; padding: 13px; border-radius: 10px; border: none; font-weight: 700;
      background: linear-gradient(135deg, #00f2fe, #0077fe); color: #000; font-size: 14px;
      cursor: pointer; transition: all 0.2s;
    }
    .btn-submit:hover { opacity: 0.95; transform: translateY(-1px); }
    .alert-err {
      background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171;
      padding: 10px 14px; border-radius: 8px; font-size: 12.5px; margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="login-card">
    <div class="login-logo">${SVG_ICON}</div>
    <h1 class="login-title">Admin Access Control</h1>
    <p class="login-sub">PT Xecure Siber Unggul Resolusi Gateway</p>
    ${errorMsg ? `<div class="alert-err">${errorMsg}</div>` : ''}
    <form method="POST" action="/api/admin/login">
      <div class="form-group">
        <label class="form-label">MASTER SECURITY KEY</label>
        <input type="password" name="password" class="form-input" placeholder="Masukkan password admin..." required autofocus>
      </div>
      <button type="submit" class="btn-submit">VERIFIKASI &amp; MASUK</button>
    </form>
    <div style="margin-top: 24px;">
      <a href="/" style="font-size: 12px; color: #64748b; text-decoration: none;">&larr; Kembali ke Beranda XSUR</a>
    </div>
  </div>
</body>
</html>`;
  }

  // Authenticated Admin Dashboard
  const parentMenus = menus.filter(m => !m.parent_id);

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard — PT Xecure Siber Unggul Resolusi</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,${encodeURIComponent(SVG_ICON)}">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #07090e;
      --card-bg: rgba(14, 18, 27, 0.9);
      --border: rgba(255, 255, 255, 0.08);
      --cyan: #00f2fe;
      --cyan-dim: rgba(0, 242, 254, 0.12);
      --text: #f1f5f9;
      --text-muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif; min-height: 100vh; }
    .container { max-width: 1220px; margin: 0 auto; padding: 24px; }
    
    /* Topbar */
    .topbar {
      border-bottom: 1px solid var(--border); background: #080b11; padding: 14px 24px;
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
    }
    .brand-wrap { display: flex; align-items: center; gap: 12px; }
    .brand-wrap svg { height: 32px; width: auto; }
    .btn-logout {
      background: transparent; border: 1px solid #334155; color: #94a3b8; padding: 7px 14px;
      border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; text-decoration: none;
    }
    .btn-logout:hover { border-color: #ef4444; color: #ef4444; }

    /* Tabs */
    .tabs-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 24px 0 20px; border-bottom: 1px solid var(--border); }
    .tabs { display: inline-flex; gap: 8px; padding-bottom: 10px; }
    .tab-btn {
      background: transparent; border: none; font-size: 13.5px; font-weight: 700; color: #64748b;
      padding: 9px 16px; border-radius: 8px; cursor: pointer; transition: all 0.2s; white-space: nowrap;
    }
    .tab-btn:hover { color: #fff; background: rgba(255,255,255,0.04); }
    .tab-btn.active { background: var(--cyan-dim); color: var(--cyan); }

    /* Cards */
    .card {
      background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px;
      padding: 24px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
    .card-title { font-size: 18px; font-weight: 800; color: #fff; }

    /* Table */
    .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
    th { text-align: left; padding: 12px 14px; color: #64748b; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; border-bottom: 1px solid var(--border); }
    td { padding: 14px; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
    tr:hover td { background: rgba(255, 255, 255, 0.02); }
    
    .badge { font-family: 'JetBrains Mono', monospace; font-size: 10px; padding: 3px 8px; border-radius: 6px; font-weight: 700; }
    .badge.parent { background: rgba(0, 242, 254, 0.15); color: var(--cyan); border: 1px solid rgba(0, 242, 254, 0.3); }
    .badge.sub { background: rgba(148, 163, 184, 0.15); color: #cbd5e1; }

    /* Form */
    .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .form-group { margin-bottom: 16px; }
    .form-label { display: block; font-size: 12px; font-family: 'JetBrains Mono', monospace; color: #cbd5e1; margin-bottom: 6px; }
    .form-input, .form-select, .form-textarea {
      width: 100%; padding: 10px 14px; border-radius: 8px; background: #080b11;
      border: 1px solid var(--border); color: #fff; font-size: 13.5px; outline: none;
    }
    .form-textarea { min-height: 80px; font-family: 'JetBrains Mono', monospace; line-height: 1.5; resize: vertical; }
    .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--cyan); }
    
    .btn-action {
      background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px 12px;
      border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;
    }
    .btn-action:hover { background: #334155; }
    .btn-action.del:hover { background: #dc2626; border-color: #dc2626; }
    
    .btn-add {
      background: linear-gradient(135deg, #00f2fe, #0077fe); color: #000; border: none;
      padding: 10px 18px; border-radius: 8px; font-weight: 700; font-size: 13.5px; cursor: pointer;
    }

    /* Google Search Preview Card */
    .serp-card {
      background: #202124; border: 1px solid #3c4043; border-radius: 12px; padding: 18px 20px;
      margin-top: 14px; max-width: 650px; font-family: Arial, sans-serif;
    }
    .serp-url { font-size: 12px; color: #bdc1c6; display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
    .serp-title { font-size: 18px; color: #8ab4f8; text-decoration: none; font-weight: 400; line-height: 1.3; }
    .serp-desc { font-size: 13.5px; color: #bdc1c6; line-height: 1.5; margin-top: 6px; }

    /* Modal */
    .modal-backdrop {
      position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
      display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px;
    }
    .modal-backdrop.open { display: flex; }
    .modal {
      background: #0d121c; border: 1px solid var(--border); border-radius: 16px;
      width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto; padding: 26px; box-shadow: 0 20px 40px rgba(0,0,0,0.8);
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="brand-wrap">
      <div style="height: 32px; width: 110px;">${SVG_HORIZONTAL}</div>
      <span style="font-size: 12px; font-family: 'JetBrains Mono', monospace; color: var(--cyan); border-left: 1px solid var(--border); padding-left: 12px;">ADMIN CONTROL</span>
    </div>
    <div style="display: flex; align-items: center; gap: 12px;">
      <a href="/" target="_blank" class="btn-logout" style="border-color: var(--cyan); color: var(--cyan);">&rarr; Lihat Web Live</a>
      <form method="POST" action="/api/admin/logout" style="display: inline;">
        <button type="submit" class="btn-logout">Logout</button>
      </form>
    </div>
  </div>

  <div class="container">
    <div class="tabs-wrapper">
      <div class="tabs">
        <button class="tab-btn active" onclick="switchTab(this, 'menus')">📋 Navigasi &amp; Dropdown Menu</button>
        <button class="tab-btn" onclick="switchTab(this, 'seo')">🎯 Pengaturan SEO Google</button>
        <button class="tab-btn" onclick="switchTab(this, 'projects')">🚀 Portofolio &amp; Proyek</button>
        <button class="tab-btn" onclick="switchTab(this, 'config')">⚙️ Profil Perusahaan &amp; Kontak</button>
      </div>
    </div>

    <!-- Tab 1: Menus Manager -->
    <div id="tab-menus" class="tab-content">
      <div class="card">
        <div class="card-head">
          <div>
            <h2 class="card-title">Struktur Navigasi &amp; Link Dropdown</h2>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
              Atur tombol navbar, dropdown menu, tautan blog pribadi (<code style="color:var(--cyan)">xyz-sur.github.io</code>), produk, maupun anchor section.
            </p>
          </div>
          <button class="btn-add" onclick="openAddModal()">+ Tambah Menu Baru</button>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Urutan</th>
                <th>Label / Judul</th>
                <th>URL Tujuan</th>
                <th>Tipe</th>
                <th>Target</th>
                <th>Badge</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${menus.map(m => `
                <tr>
                  <td style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--cyan);">${m.sort_order}</td>
                  <td>
                    <strong style="color: #fff;">${m.parent_id ? '&nbsp;&nbsp;&bull;&nbsp;' : ''}${m.label}</strong>
                    ${m.description ? `<div style="font-size: 11.5px; color: #64748b;">${m.description}</div>` : ''}
                  </td>
                  <td><code style="font-size: 12px; color: #94a3b8;">${m.url}</code></td>
                  <td>
                    ${m.is_dropdown ? `<span class="badge parent">DROPDOWN</span>` : (m.parent_id ? `<span class="badge sub">SUB-MENU</span>` : `<span class="badge">REGULAR</span>`)}
                  </td>
                  <td style="font-family: 'JetBrains Mono', monospace; font-size: 12px;">${m.target}</td>
                  <td>${m.badge ? `<span class="badge" style="background:rgba(255,255,255,0.1);">${m.badge}</span>` : '-'}</td>
                  <td>
                    <button class="btn-action" onclick='editMenu(${JSON.stringify(m)})'>Edit</button>
                    <button class="btn-action del" onclick="deleteMenu(${m.id})">Hapus</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 2: SEO Management -->
    <div id="tab-seo" class="tab-content" style="display: none;">
      <div class="card">
        <div class="card-head">
          <div>
            <h2 class="card-title">Pengaturan SEO &amp; Mesin Pencari Google</h2>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
              Optimalkan ranking pencarian Google untuk <strong>Bang Mansur</strong>, <strong>PT Xecure Siber Unggul Resolusi</strong>, dan proyek-proyek terkait.
            </p>
          </div>
        </div>

        <form id="form-seo" onsubmit="saveSeoConfig(event)">
          <div class="form-grid">
            <div class="form-group" style="grid-column: 1 / -1;">
              <label class="form-label">META TITLE GOOGLE (PAGE TITLE)</label>
              <input type="text" name="meta_title" id="seo-input-title" class="form-input" 
                value="${siteConfig.meta_title || 'PT Xecure Siber Unggul Resolusi — Cyber Defense &amp; Scalable Automation | Founder Bang Mansur'}" 
                oninput="updateSerpPreview()" required>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label class="form-label">META DESCRIPTION (DESKRIPSI SNIPPET GOOGLE)</label>
              <textarea name="meta_description" id="seo-input-desc" class="form-textarea" 
                oninput="updateSerpPreview()" required>${siteConfig.meta_description || 'Portal resmi PT Xecure Siber Unggul Resolusi (XSUR). Dipimpin oleh Bang Mansur (S2 Magister Ilmu Komputer). Solusi enterprise: VAPT Cybersecurity, Enterprise MikroTik RouterOS, MTProto Bot Fleet, FinTech PPOB H2H Gateway, &amp; Konsultasi IT Forensik.'}</textarea>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label class="form-label">META KEYWORDS (KATA KUNCI UTAMA PENCARIAN)</label>
              <textarea name="meta_keywords" class="form-textarea" placeholder="Pisahkan dengan koma...">${siteConfig.meta_keywords || 'Bang Mansur, Mansur, PT Xecure Siber Unggul Resolusi, XSUR, xsur.my.id, Cybersecurity Specialist Indonesia, Jasa Pentest Web API, Vulnerability Assessment Indonesia, Konsultan MikroTik Enterprise, RouterOS BGP OVPN, Arsitek Telegram Bot, MTProto Fleet Automation, Cek CEIR IMEI Audit, PPOB H2H Gateway, Cloudflare Workers Edge, Digital Forensics Indonesia'}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">OPENGRAPH TITLE (SHARE SOCIAL)</label>
              <input type="text" name="og_title" class="form-input" value="${siteConfig.og_title || 'XSUR | PT Xecure Siber Unggul Resolusi'}">
            </div>

            <div class="form-group">
              <label class="form-label">OPENGRAPH IMAGE URL (THUMBNAIL)</label>
              <input type="text" name="og_image" class="form-input" value="${siteConfig.og_image || 'https://xsur.my.id/logo.svg'}">
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label class="form-label">GOOGLE SITE VERIFICATION (SEARCH CONSOLE TOKEN)</label>
              <input type="text" name="google_site_verification" class="form-input" placeholder="Contoh: gv-abc123xyz-code..." value="${siteConfig.google_site_verification || ''}">
            </div>
          </div>

          <!-- Live Google Search Engine Preview -->
          <div style="margin-top: 20px;">
            <label class="form-label">SIMULASI TAMPILAN GOOGLE SEARCH SNIPPET (LIVE PREVIEW)</label>
            <div class="serp-card">
              <div class="serp-url">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span>https://xsur.my.id</span>
              </div>
              <div class="serp-title" id="serp-title-preview">PT Xecure Siber Unggul Resolusi — Cyber Defense &amp; Scalable Automation</div>
              <div class="serp-desc" id="serp-desc-preview">Portal resmi PT Xecure Siber Unggul Resolusi (XSUR). Dipimpin oleh Bang Mansur (S2 Magister Ilmu Komputer)...</div>
            </div>
          </div>

          <div style="margin-top: 24px;">
            <button type="submit" class="btn-add">SIMPAN PENGATURAN SEO</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Tab 3: Projects Manager -->
    <div id="tab-projects" class="tab-content" style="display: none;">
      <div class="card">
        <div class="card-head">
          <div>
            <h2 class="card-title">Portofolio &amp; Layanan Terklasifikasi</h2>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
              Hanya proyek profesional skala enterprise yang ditampilkan (Jasa, Bot Telegram, Pemrograman Web/API, Telekomunikasi).
            </p>
          </div>
          <button class="btn-add" onclick="openAddProjectModal()">+ Tambah Proyek</button>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Judul Proyek / Layanan</th>
                <th>Badge</th>
                <th>Tech Stack</th>
                <th>Link Tujuan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${projects.map(p => `
                <tr>
                  <td><span class="badge parent">${p.category.toUpperCase()}</span></td>
                  <td>
                    <strong style="color: #fff;">${p.title}</strong>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 3px; max-width: 380px;">${p.summary}</div>
                  </td>
                  <td><span class="badge" style="background:rgba(255,255,255,0.1);">${p.badge || '-'}</span></td>
                  <td style="font-family:'JetBrains Mono', monospace; font-size: 11px; color:#cbd5e1;">${Array.isArray(p.tech_stack) ? p.tech_stack.join(', ') : p.tech_stack}</td>
                  <td><code style="font-size: 11.5px; color: var(--cyan);">${p.url}</code></td>
                  <td>
                    <button class="btn-action" onclick='editProject(${JSON.stringify(p)})'>Edit</button>
                    <button class="btn-action del" onclick="deleteProject(${p.id})">Hapus</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 4: Site Profile Config -->
    <div id="tab-config" class="tab-content" style="display: none;">
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Profil Perusahaan &amp; Kontak Resmi</h2>
        </div>
        <form id="form-config" onsubmit="saveConfig(event)">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">NAMA PERUSAHAAN</label>
              <input type="text" name="company_name" class="form-input" value="${siteConfig.company_name || 'PT Xecure Siber Unggul Resolusi'}">
            </div>
            <div class="form-group">
              <label class="form-label">NAMA BRAND</label>
              <input type="text" name="brand_name" class="form-input" value="${siteConfig.brand_name || 'XSUR'}">
            </div>
            <div class="form-group">
              <label class="form-label">TAGLINE UTAMA</label>
              <input type="text" name="tagline" class="form-input" value="${siteConfig.tagline || 'High-Tier Cybersecurity, Network Engineering &amp; Scalable Automation'}">
            </div>
            <div class="form-group">
              <label class="form-label">NAMA FOUNDER</label>
              <input type="text" name="founder_name" class="form-input" value="${siteConfig.founder_name || 'Bang Mansur'}">
            </div>
            <div class="form-group">
              <label class="form-label">GELAR / PENDIDIKAN FOUNDER</label>
              <input type="text" name="founder_edu" class="form-input" value="${siteConfig.founder_edu || 'Master of Computer Science (S2 Magister Ilmu Komputer)'}">
            </div>
            <div class="form-group">
              <label class="form-label">URL FOTO FOUNDER (ANONIM B&amp;W)</label>
              <input type="text" name="founder_image" class="form-input" value="${siteConfig.founder_image || 'https://i.ibb.co.com/LXK49TZc/unamed.png'}">
            </div>
            <div class="form-group">
              <label class="form-label">WHATSAPP DIRECT LINK</label>
              <input type="text" name="contact_whatsapp" class="form-input" value="${siteConfig.contact_whatsapp || 'https://wa.me/6285156176433'}">
            </div>
            <div class="form-group">
              <label class="form-label">TELEGRAM DIRECT LINK</label>
              <input type="text" name="contact_telegram" class="form-input" value="${siteConfig.contact_telegram || 'https://t.me/msr77'}">
            </div>
            <div class="form-group">
              <label class="form-label">EMAIL PERUSAHAAN</label>
              <input type="text" name="contact_email" class="form-input" value="${siteConfig.contact_email || 'contact@xsur.my.id'}">
            </div>
          </div>
          <div style="margin-top: 20px;">
            <button type="submit" class="btn-add">SIMPAN PROFIL PERUSAHAAN</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Add/Edit Menu -->
  <div id="menu-modal" class="modal-backdrop">
    <div class="modal">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 id="modal-title" style="font-size: 18px; font-weight: 800; color: #fff;">Tambah Menu Baru</h3>
        <button onclick="closeModal()" style="background: none; border: none; color: #64748b; font-size: 20px; cursor: pointer;">&times;</button>
      </div>
      <form id="form-menu" onsubmit="saveMenu(event)">
        <input type="hidden" name="id" id="m-id">
        <div class="form-group">
          <label class="form-label">PARENT MENU (Kosongkan jika Menu Utama)</label>
          <select name="parent_id" id="m-parent" class="form-select">
            <option value="">-- Menu Utama (Navbar Top Level) --</option>
            ${parentMenus.map(p => `<option value="${p.id}">${p.label}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">LABEL / JUDUL MENU</label>
          <input type="text" name="label" id="m-label" class="form-input" placeholder="Contoh: Blog Riset / Cek CEIR" required>
        </div>
        <div class="form-group">
          <label class="form-label">URL TUJUAN</label>
          <input type="text" name="url" id="m-url" class="form-input" placeholder="Contoh: https://xyz-sur.github.io atau #projects" required>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">TARGET KLIK</label>
            <select name="target" id="m-target" class="form-select">
              <option value="_self">Tab yang Sama (_self)</option>
              <option value="_blank">Tab Baru (_blank)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">URUTAN (SORT ORDER)</label>
            <input type="number" name="sort_order" id="m-sort" class="form-input" value="1" required>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">BADGE (OPSIONAL)</label>
            <input type="text" name="badge" id="m-badge" class="form-input" placeholder="Contoh: Live, Hot, Baru">
          </div>
          <div class="form-group">
            <label class="form-label">APAKAH DROPDOWN PARENT?</label>
            <select name="is_dropdown" id="m-is-dropdown" class="form-select">
              <option value="0">Bukan (Link Biasa)</option>
              <option value="1">Ya, Memiliki Sub-Menu</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">DESKRIPSI SUB-MENU (OPSIONAL)</label>
          <input type="text" name="description" id="m-desc" class="form-input" placeholder="Deskripsi singkat di bawah judul submenu">
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 24px;">
          <button type="button" onclick="closeModal()" class="btn-action">Batal</button>
          <button type="submit" class="btn-add">Simpan Menu</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Modal Add/Edit Project -->
  <div id="project-modal" class="modal-backdrop">
    <div class="modal">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 id="proj-modal-title" style="font-size: 18px; font-weight: 800; color: #fff;">Tambah Proyek Enterprise</h3>
        <button onclick="closeProjectModal()" style="background: none; border: none; color: #64748b; font-size: 20px; cursor: pointer;">&times;</button>
      </div>
      <form id="form-project" onsubmit="saveProject(event)">
        <input type="hidden" name="id" id="p-id">
        <div class="form-group">
          <label class="form-label">KLASIFIKASI KATEGORI</label>
          <select name="category" id="p-cat" class="form-select" required>
            <option value="jasa">🛡️ Jasa &amp; Layanan Enterprise</option>
            <option value="bot">🤖 Bot &amp; Otomasi Telegram</option>
            <option value="pemrograman">💻 Pemrograman &amp; API Gateway</option>
            <option value="telekomunikasi">📡 Telekomunikasi &amp; CEIR</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">JUDUL PROYEK</label>
          <input type="text" name="title" id="p-title" class="form-input" placeholder="Contoh: Aing PPOB & FinTech API Gateway" required>
        </div>
        <div class="form-group">
          <label class="form-label">RINGKASAN PROYEK</label>
          <textarea name="summary" id="p-summary" class="form-textarea" placeholder="Deskripsi profesional tentang teknologi dan manfaat..." required></textarea>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">BADGE STATUS</label>
            <input type="text" name="badge" id="p-badge" class="form-input" placeholder="Contoh: LIVE API / ENTERPRISE">
          </div>
          <div class="form-group">
            <label class="form-label">URUTAN (SORT)</label>
            <input type="number" name="sort_order" id="p-sort" class="form-input" value="1" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">TECH STACK (PISAHKAN DENGAN KOMA)</label>
          <input type="text" name="tech_stack" id="p-tech" class="form-input" placeholder="Contoh: Cloudflare Workers, Node.js, REST API">
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">URL TUJUAN</label>
            <input type="text" name="url" id="p-url" class="form-input" placeholder="https://... atau #contact" required>
          </div>
          <div class="form-group">
            <label class="form-label">TARGET KLIK</label>
            <select name="target" id="p-target" class="form-select">
              <option value="_blank">Tab Baru (_blank)</option>
              <option value="_self">Tab yang Sama (_self)</option>
            </select>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 24px;">
          <button type="button" onclick="closeProjectModal()" class="btn-action">Batal</button>
          <button type="submit" class="btn-add">Simpan Proyek</button>
        </div>
      </form>
    </div>
  </div>

  <script>
    function switchTab(btn, name) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      const target = document.getElementById('tab-' + name);
      if (target) target.style.display = 'block';
    }

    function updateSerpPreview() {
      const t = document.getElementById('seo-input-title').value;
      const d = document.getElementById('seo-input-desc').value;
      document.getElementById('serp-title-preview').innerText = t || 'PT Xecure Siber Unggul Resolusi';
      document.getElementById('serp-desc-preview').innerText = d || 'Portal resmi XSUR...';
    }
    // init preview
    updateSerpPreview();

    function openAddModal() {
      document.getElementById('modal-title').innerText = 'Tambah Menu Baru';
      document.getElementById('form-menu').reset();
      document.getElementById('m-id').value = '';
      document.getElementById('menu-modal').classList.add('open');
    }

    function editMenu(item) {
      document.getElementById('modal-title').innerText = 'Edit Menu: ' + item.label;
      document.getElementById('m-id').value = item.id;
      document.getElementById('m-parent').value = item.parent_id || '';
      document.getElementById('m-label').value = item.label;
      document.getElementById('m-url').value = item.url;
      document.getElementById('m-target').value = item.target || '_self';
      document.getElementById('m-sort').value = item.sort_order || 0;
      document.getElementById('m-badge').value = item.badge || '';
      document.getElementById('m-is-dropdown').value = item.is_dropdown ? '1' : '0';
      document.getElementById('m-desc').value = item.description || '';
      document.getElementById('menu-modal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('menu-modal').classList.remove('open');
    }

    async function saveMenu(e) {
      e.preventDefault();
      const form = e.target;
      const data = {
        id: form.id.value ? parseInt(form.id.value) : null,
        parent_id: form.parent_id.value ? parseInt(form.parent_id.value) : null,
        label: form.label.value,
        url: form.url.value,
        target: form.target.value,
        sort_order: parseInt(form.sort_order.value),
        badge: form.badge.value,
        is_dropdown: parseInt(form.is_dropdown.value),
        description: form.description.value
      };

      const res = await fetch('/api/admin/menus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Menu berhasil disimpan!');
        location.reload();
      } else {
        const err = await res.json();
        alert('Gagal menyimpan menu: ' + (err.error || 'Terjadi kesalahan'));
      }
    }

    async function deleteMenu(id) {
      if (!confirm('Yakin ingin menghapus menu ini?')) return;
      const res = await fetch('/api/admin/menus/' + id, { method: 'DELETE' });
      if (res.ok) {
        location.reload();
      } else {
        alert('Gagal menghapus menu.');
      }
    }

    // Projects Manager
    function openAddProjectModal() {
      document.getElementById('proj-modal-title').innerText = 'Tambah Proyek Enterprise';
      document.getElementById('form-project').reset();
      document.getElementById('p-id').value = '';
      document.getElementById('project-modal').classList.add('open');
    }

    function editProject(item) {
      document.getElementById('proj-modal-title').innerText = 'Edit Proyek: ' + item.title;
      document.getElementById('p-id').value = item.id;
      document.getElementById('p-cat').value = item.category;
      document.getElementById('p-title').value = item.title;
      document.getElementById('p-summary').value = item.summary;
      document.getElementById('p-badge').value = item.badge || '';
      document.getElementById('p-sort').value = item.sort_order || 1;
      document.getElementById('p-tech').value = Array.isArray(item.tech_stack) ? item.tech_stack.join(', ') : (item.tech_stack || '');
      document.getElementById('p-url').value = item.url;
      document.getElementById('p-target').value = item.target || '_blank';
      document.getElementById('project-modal').classList.add('open');
    }

    function closeProjectModal() {
      document.getElementById('project-modal').classList.remove('open');
    }

    async function saveProject(e) {
      e.preventDefault();
      const form = e.target;
      const data = {
        id: form.id.value ? parseInt(form.id.value) : null,
        category: form.category.value,
        title: form.title.value,
        summary: form.summary.value,
        badge: form.badge.value,
        sort_order: parseInt(form.sort_order.value),
        tech_stack: form.tech_stack.value,
        url: form.url.value,
        target: form.target.value
      };

      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Proyek berhasil disimpan!');
        location.reload();
      } else {
        const err = await res.json();
        alert('Gagal menyimpan proyek: ' + (err.error || 'Terjadi kesalahan'));
      }
    }

    async function deleteProject(id) {
      if (!confirm('Hapus proyek ini dari katalog?')) return;
      const res = await fetch('/api/admin/projects/' + id, { method: 'DELETE' });
      if (res.ok) {
        location.reload();
      } else {
        alert('Gagal menghapus proyek.');
      }
    }

    async function saveSeoConfig(e) {
      e.preventDefault();
      const form = e.target;
      const data = {};
      new FormData(form).forEach((v, k) => data[k] = v);

      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Pengaturan SEO Google berhasil disimpan & aktif!');
        location.reload();
      } else {
        alert('Gagal menyimpan pengaturan SEO.');
      }
    }

    async function saveConfig(e) {
      e.preventDefault();
      const form = e.target;
      const data = {};
      new FormData(form).forEach((v, k) => data[k] = v);

      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Pengaturan profil perusahaan berhasil disimpan!');
        location.reload();
      } else {
        alert('Gagal menyimpan pengaturan.');
      }
    }
  </script>
</body>
</html>`;
}
