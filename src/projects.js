// Curated Professional Enterprise Projects & Classifications for PT Xecure Siber Unggul Resolusi

export const PROJECT_CATEGORIES = [
  { id: "all", label: "Semua Portofolio", icon: "🌐" },
  { id: "jasa", label: "Jasa & Layanan Enterprise", icon: "🛡️" },
  { id: "bot", label: "Bot & Otomasi Telegram", icon: "🤖" },
  { id: "pemrograman", label: "Pemrograman & API Gateway", icon: "💻" },
  { id: "telekomunikasi", label: "Telekomunikasi & CEIR", icon: "📡" }
];

export const DEFAULT_PROJECTS = [
  {
    id: 1,
    category: "jasa",
    category_label: "Jasa & Solusi Enterprise",
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    summary: "Audit keamanan aplikasi web, microservices API, dan server cloud sesuai standar OWASP Top 10 & NIST. Mengidentifikasi kerentanan zero-day, business logic flaw, dan penguatan benteng pertahanan.",
    badge: "TIER-1 AUDIT",
    tech_stack: ["OWASP", "Burp Suite Pro", "Cloudflare WAF", "Linux Hardening"],
    url: "#contact",
    target: "_self",
    is_featured: 1
  },
  {
    id: 2,
    category: "jasa",
    category_label: "Jasa & Solusi Enterprise",
    title: "MikroTik RouterOS Architecture & Distributed Tunneling",
    summary: "Perancangan topologi enterprise multi-WAN failover otomatis, dynamic routing BGP, traffic QoS, serta enkripsi OVPN dan WireGuard tunnel antar kantor cabang tanpa risiko tabrakan subnet IP internal.",
    badge: "ENTERPRISE NET",
    tech_stack: ["RouterOS v7", "OVPN Tunnel", "WireGuard", "BGP Failover", "QoS Tree"],
    url: "#contact",
    target: "_self",
    is_featured: 1
  },
  {
    id: 3,
    category: "jasa",
    category_label: "Jasa & Solusi Enterprise",
    title: "Private Cybersecurity Consultation & Digital Incident Forensics",
    summary: "Pendampingan privat penanganan insiden darurat siber, root cause analysis pasca insiden, audit integritas data, dan konsultasi riset komputasi tingkat lanjut bersama Bang Mansur (S2 Ilmu Komputer).",
    badge: "CONFIDENTIAL NDA",
    tech_stack: ["Incident Response", "Memory Forensics", "Packet Inspection", "S2 Academic"],
    url: "#contact",
    target: "_self",
    is_featured: 1
  },
  {
    id: 4,
    category: "bot",
    category_label: "Bot & Otomasi High-Throughput",
    title: "Distributed Telegram MTProto Automation Fleet",
    summary: "Arsitektur userbot multi-worker berskala tinggi dengan isolasi sesi MTProto via proxy rotasi, queue load balancer anti-flood, dan auto-sniffer percakapan cerdas tanpa terkena pembatasan spam Telegram.",
    badge: "HIGH-THROUGHPUT",
    tech_stack: ["Python", "Telethon MTProto", "Systemd Daemons", "Flood Mitigation"],
    url: "https://t.me/premium2in",
    target: "_blank",
    is_featured: 1
  },
  {
    id: 5,
    category: "bot",
    category_label: "Bot & Otomasi High-Throughput",
    title: "@cekceirbot — Automated CEIR Verification Engine",
    summary: "Bot Telegram audit telekomunikasi berkecepatan tinggi terhubung langsung ke official CeirGO API (5 format resmi: cek IMEI, Bea Cukai, validitas, riwayat, dan Iphossy) dengan payment flow atomik.",
    badge: "TELEGRAM BOT",
    tech_stack: ["Cloudflare Workers", "CeirGO Official API", "Dynamic QRIS", "CAS Lock"],
    url: "https://t.me/cekceirbot",
    target: "_blank",
    is_featured: 1
  },
  {
    id: 6,
    category: "pemrograman",
    category_label: "Pemrograman & API Gateway",
    title: "Aing PPOB & FinTech API Gateway",
    summary: "Infrastruktur transaksi produk digital, top-up pulsa, paket data, dan validasi akun massal dengan sistem mutasi perbankan otomatis, verifikasi QRIS dinamis, dan dashboard admin berproteksi Telegram 2FA OTP.",
    badge: "LIVE CORE API",
    tech_stack: ["Node.js", "Cloudflare Workers Edge", "REST API Gateway", "Telegram 2FA OTP"],
    url: "https://apiaing.msr.my.id",
    target: "_blank",
    is_featured: 1
  },
  {
    id: 7,
    category: "pemrograman",
    category_label: "Pemrograman & API Gateway",
    title: "WorkIt Enterprise Workflow & Encrypted Voucher Portal",
    summary: "Sistem platform terpusat pengelolaan alur kerja operasional terdistribusi, validasi voucher terenkripsi, serta otomasi pelaporan berkeamanan tinggi.",
    badge: "ENTERPRISE PORTAL",
    tech_stack: ["Cloudflare Workers", "D1 SQL Database", "SubtleCrypto", "Edge Caching"],
    url: "https://workit.msr.my.id",
    target: "_blank",
    is_featured: 1
  },
  {
    id: 8,
    category: "pemrograman",
    category_label: "Pemrograman & API Gateway",
    title: "XSUR Zero-Trust Edge Portal",
    summary: "Portal resmi PT Xecure Siber Unggul Resolusi dengan edge-rendered micro-architecture, integrasi D1, manajemen menu dinamis, dan pipeline CI/CD GitHub Actions terotomasi.",
    badge: "OFFICIAL PORTAL",
    tech_stack: ["Cloudflare Workers", "D1 SQL Database", "GitHub Actions CI/CD", "JSON-LD SEO"],
    url: "https://xsur.my.id",
    target: "_blank",
    is_featured: 1
  },
  {
    id: 9,
    category: "telekomunikasi",
    category_label: "Telekomunikasi & CEIR",
    title: "Platform Cek CEIR & Audit IMEI Bea Cukai",
    summary: "Platform audit integritas perangkat telekomunikasi resmi terhubung langsung ke database CEIR Bea Cukai dan Kemenperin dengan proteksi Compare-And-Swap (CAS) locking anti-double billing.",
    badge: "LIVE PLATFORM",
    tech_stack: ["CeirGO Ecosystem", "Cloudflare D1", "CAS Concurrency Lock", "QRIS Instan"],
    url: "https://cekimei.my.id",
    target: "_blank",
    is_featured: 1
  }
];
