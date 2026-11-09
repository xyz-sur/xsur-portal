// Curated Professional IT Services & Practical Indonesian Portfolios for PT Xecure Siber Unggul Resolusi

export const PROJECT_CATEGORIES = [
  { id: "all", label: "Semua Layanan & Proyek", icon: "🌐" },
  { id: "jaringan", label: "Setting WiFi & Jaringan", icon: "📶" },
  { id: "keamanan", label: "Keamanan Web & Anti-Hack", icon: "🛡️" },
  { id: "otomasi", label: "Bot WA & Telegram", icon: "🤖" },
  { id: "software", label: "Website & Pembayaran QRIS", icon: "💻" },
  { id: "konsultasi", label: "Konsultasi IT & Bimbingan", icon: "🎓" }
];

export const DEFAULT_PROJECTS = [
  {
    id: 1,
    category: "jaringan",
    category_label: "Setting WiFi & Jaringan",
    title: "Jasa Setting & Perbaikan Jaringan WiFi Kantor (MikroTik / Cisco)",
    summary: "Mengatasi koneksi internet kantor lelet atau sering putus. Pengaturan pembagian kecepatan adil (QoS agar rapat online/kasir lancar tanpa lag), penggabungan 2 provider internet (anti-mati lampu), serta koneksi aman antar kantor cabang.",
    badge: "LAYANAN UTAMA",
    tech_stack: ["MikroTik RouterOS", "Manajemen Bandwidth", "WiFi Kantor Stabil", "VPN Antar Cabang"],
    url: "#contact",
    target: "_self",
    is_featured: 1,
    sort_order: 1
  },
  {
    id: 2,
    category: "keamanan",
    category_label: "Keamanan Web & Anti-Hack",
    title: "Jasa Audit & Pengamanan Website dari Serangan Hacker (Anti-Hack)",
    summary: "Pemeriksaan menyeluruh celah keamanan website toko online dan sistem kantor sebelum dibobol hacker, perlindungan data pelanggan dari kebocoran, serta perbaikan sistem yang pernah terkena retas atau virus.",
    badge: "KEAMANAN SIBER",
    tech_stack: ["Cek Celah Keamanan", "Proteksi Anti-Serangan", "Pencegahan Kebocoran Data", "Standar OWASP"],
    url: "#contact",
    target: "_self",
    is_featured: 1,
    sort_order: 2
  },
  {
    id: 3,
    category: "otomasi",
    category_label: "Bot WA & Telegram",
    title: "Jasa Pembuatan Bot Telegram & WhatsApp Otomatis untuk Bisnis",
    summary: "Sistem asisten otomatis yang melayani pelanggan 24 jam nonstop: membalas pertanyaan pelanggan, mengirimkan notifikasi pesanan otomatis, cek status pembayaran, dan promosi tanpa perlu admin terus-menerus standby di depan HP.",
    badge: "OTOMASI 24 JAM",
    tech_stack: ["Bot Telegram Bisnis", "WhatsApp Otomatis", "Auto-Reply Cerdas", "Notifikasi Instan"],
    url: "https://t.me/cspremium2inbot",
    target: "_blank",
    is_featured: 1,
    sort_order: 3
  },
  {
    id: 4,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Jasa Integrasi Pembayaran QRIS Otomatis & Gateway Digital",
    summary: "Pemasangan sistem pembayaran QRIS langsung di website atau bot Anda (BCA, Mandiri, BRI, DANA, GoPay, ShopeePay) dengan verifikasi lunas otomatis dalam hitungan detik tanpa perlu cek mutasi manual.",
    badge: "PEMBAYARAN INSTAN",
    tech_stack: ["QRIS Dinamis", "Verifikasi Otomatis", "Terima Semua Bank", "Laporan Keuangan"],
    url: "https://qiospay-automation.mansyurj168.workers.dev",
    target: "_blank",
    is_featured: 1,
    sort_order: 4
  },
  {
    id: 5,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Jasa Pembuatan Website Perusahaan (Company Profile) & Toko Online",
    summary: "Pembuatan website bisnis yang cepat, elegan, sangat nyaman dibuka di HP, dan terdaftar resmi di Google agar bisnis Anda mudah ditemukan dan dipercaya oleh calon pelanggan baru.",
    badge: "WEB BISNIS",
    tech_stack: ["Website Modern", "Tampil di Google", "Desain Responsif HP", "Domain & Email Kantor"],
    url: "https://xsur.my.id",
    target: "_blank",
    is_featured: 1,
    sort_order: 5
  },
  {
    id: 6,
    category: "jaringan",
    category_label: "Setting WiFi & Jaringan",
    title: "Jasa Setup Server Kantor, VPS & Backup Data Otomatis (Anti-Ransomware)",
    summary: "Instalasi server komputer kantor untuk penyimpanan file bersama karyawan, lengkap dengan backup otomatis harian ke cloud agar data aman dari risiko komputer rusak atau virus.",
    badge: "SERVER KANTOR",
    tech_stack: ["Server Kantor", "Virtualisasi Server", "Backup Otomatis Cloud", "Pencegahan Data Hilang"],
    url: "#contact",
    target: "_self",
    is_featured: 1,
    sort_order: 6
  },
  {
    id: 7,
    category: "konsultasi",
    category_label: "Konsultasi IT & Bimbingan",
    title: "Konsultasi IT Privat, Bimbingan Coding & Asistensi Riset Komputer",
    summary: "Sesi diskusi langsung bersama Bang Mansur untuk pemecahan masalah coding, perancangan arsitektur software, solusi error rumit, dan asistensi tugas akhir/proyek IT.",
    badge: "MENTORING AHLI",
    tech_stack: ["Konsultasi IT Privat", "Solusi Error Coding", "Arsitektur Software", "Bimbingan Proyek"],
    url: "#contact",
    target: "_self",
    is_featured: 1,
    sort_order: 7
  },
  {
    id: 8,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Layanan Pengecekan IMEI & Validasi Telekomunikasi Resmi (@cekceirbot)",
    summary: "Platform pengecekan legalitas status nomor IMEI handphone secara instan terhubung langsung ke database resmi Bea Cukai dan Kemenperin untuk memastikan handphone Anda aman dan sinyal tidak terblokir.",
    badge: "CEIR RESMI",
    tech_stack: ["Verifikasi Status Sinyal", "Bea Cukai RI", "Cek Status Sinyal", "Bot @cekceirbot"],
    url: "https://cekimei.my.id",
    target: "_blank",
    is_featured: 1,
    sort_order: 8
  },
  {
    id: 9,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Sistem Penjualan Pulsa, Paket Data & Pembayaran Tagihan Listrik (PPOB H2H)",
    summary: "Aplikasi server distributor pulsa murah, kuota all operator, token PLN prabayar, pembayaran PDAM, BPJS, dan voucher game online yang berjalan otomatis 24 jam dengan harga server tangan pertama.",
    badge: "SERVER PULSA",
    tech_stack: ["Server Pulsa Otomatis", "Token Listrik PLN", "Top-Up Game", "Jalur H2H 24 Jam"],
    url: "https://apiaing.msr.my.id",
    target: "_blank",
    is_featured: 1,
    sort_order: 9
  },
  {
    id: 10,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Layanan Email Kantor Resmi dengan Domain Sendiri (@perusahaan.com)",
    summary: "Sistem email bisnis profesional menggunakan nama domain perusahaan Anda sendiri, aman dari email spam dan penipuan, serta mudah dibuka di smartphone, Gmail, maupun aplikasi Outlook.",
    badge: "EMAIL BISNIS",
    tech_stack: ["Email Resmi Kantor", "Perlindungan Anti-Spam", "Akses Webmail Cepat", "Mail Server Terproteksi"],
    url: "https://mail.xsur.my.id",
    target: "_blank",
    is_featured: 1,
    sort_order: 10
  },
  {
    id: 11,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Sistem Manajemen Tugas Karyawan & Laporan Operasional (WorkIt)",
    summary: "Aplikasi web sederhana untuk memantau tugas harian karyawan, pembagian voucher digital, dan rekap laporan kerja tim secara terpusat tanpa ribet menggunakan pencatatan kertas manual.",
    badge: "SISTEM KERJA",
    tech_stack: ["Manajemen Tugas Tim", "Laporan Kerja Digital", "WorkIt Portal", "Efisiensi Kantor"],
    url: "https://workit.msr.my.id",
    target: "_blank",
    is_featured: 1,
    sort_order: 11
  },
  {
    id: 12,
    category: "software",
    category_label: "Website & Pembayaran QRIS",
    title: "Platform Billboard Iklan Digital & Promosi Sponsor (PixelAds)",
    summary: "Etalase billboard digital interaktif untuk mempromosikan produk UMKM, brand sponsor, dan banner iklan usaha Anda dengan sistem pemilihan posisi dan pembayaran QRIS instan.",
    badge: "IKLAN DIGITAL",
    tech_stack: ["Billboard Digital", "Promosi Usaha", "pixelads.xsur.my.id", "Pembayaran QRIS"],
    url: "https://pixelads.xsur.my.id",
    target: "_blank",
    is_featured: 1,
    sort_order: 12
  }
];
