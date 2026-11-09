// SEO Meta Tags & Rich Schema.org (JSON-LD) Generator for PT Xecure Siber Unggul Resolusi (xsur.my.id)

export function generateSeoTags(siteConfig) {
  const brandName = siteConfig.brand_name || "XSUR";
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const canonicalUrl = siteConfig.canonical_url || "https://xsur.my.id";
  const tagline = siteConfig.tagline || "Solusi Jaringan Internet Kantor, Pembuatan Website & Keamanan Sistem Bisnis";
  
  const pageTitle = siteConfig.meta_title || `${companyName} (${brandName}) — Solusi IT, Jaringan & Keamanan Sistem | ${founderName}`;
  const description = siteConfig.meta_description || siteConfig.meta_desc || "Jasa IT profesional untuk bisnis dan kantor: setting WiFi kantor & MikroTik stabil, pembuatan website & bot WhatsApp/Telegram, integrasi pembayaran QRIS otomatis, dan pengamanan sistem anti-hack bersama Bang Mansur, praktisi IT berpengalaman.";
  const keywords = siteConfig.meta_keywords || siteConfig.keywords || "Jasa Setting MikroTik, Jasa Pasang WiFi Kantor, Jasa Pembuatan Website, Jasa Bot WhatsApp, Jasa Bot Telegram, Jasa Keamanan Website, Jasa Pentest Web, Jasa Integrasi QRIS, Konsultan IT Indonesia, Bang Mansur, XSUR, xsur.my.id";
  
  const ogTitle = siteConfig.og_title || `${companyName} (${brandName}) — Solusi IT, Jaringan & Keamanan Sistem Bisnis`;
  const ogDescription = siteConfig.og_description || description;
  const ogImage = `${canonicalUrl}/og-banner.png`;
  const logoImage = `${canonicalUrl}/logo.png`;
  const googleVerification = siteConfig.google_site_verification || "";

  // Highly Structured Schema.org Graph for Google Rich Snippets, Sitelinks & Knowledge Panel
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Corporation", "ProfessionalService"],
        "@id": `${canonicalUrl}#organization`,
        "name": companyName,
        "legalName": companyName,
        "alternateName": [
          brandName,
          "Xecure Siber",
          "PT XSUR",
          "Xecure Siber Unggul Resolusi",
          "XSUR IT Solution"
        ],
        "url": canonicalUrl,
        "logo": {
          "@type": "ImageObject",
          "url": logoImage,
          "width": 400,
          "height": 400
        },
        "image": {
          "@type": "ImageObject",
          "url": ogImage,
          "width": 1200,
          "height": 400
        },
        "founder": {
          "@id": `${canonicalUrl}#founder`
        },
        "description": description,
        "telephone": "+628****5554",
        "email": siteConfig.contact_email || "contact@xsur.my.id",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jakarta",
          "addressCountry": "ID"
        },
        "areaServed": [
          { "@type": "Country", "name": "Indonesia" },
          { "@type": "AdministrativeArea", "name": "Global" }
        ],
        "sameAs": [
          "https://github.com/xyz-sur",
          "https://xyz-sur.github.io",
          "https://t.me/cspremium2in",
          "https://mail.xsur.my.id"
        ],
        "knowsAbout": [
          "Jasa Setting Jaringan WiFi & MikroTik Kantor",
          "Jasa Pembuatan Website & Toko Online",
          "Jasa Pembuatan Bot WhatsApp & Telegram Bisnis",
          "Integrasi Sistem Pembayaran QRIS Otomatis",
          "Audit Keamanan Website & Perlindungan Anti-Hack",
          "Setup Server Kantor Linux & Backup Otomatis",
          "Konsultasi IT & Asistensi Pemrograman Coding",
          "Layanan Pengecekan IMEI Resmi Bea Cukai & Kemenperin"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support & Technical Consultation",
          "url": siteConfig.contact_telegram || "https://t.me/cspremium2in",
          "email": siteConfig.contact_email || "contact@xsur.my.id",
          "telephone": "+628****5554",
          "availableLanguage": ["Indonesian", "English"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Katalog Layanan Jasa IT PT Xecure Siber Unggul Resolusi",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Setting & Perbaikan Jaringan WiFi Kantor (MikroTik / Cisco)",
                "description": "Mengatasi internet kantor lelet, pembagian bandwidth adil (QoS), koneksi cadangan otomatis (failover), dan VPN antar kantor cabang."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Audit & Pengamanan Website dari Serangan Hacker (Anti-Hack)",
                "description": "Pemeriksaan celah keamanan website dan toko online sebelum dibobol hacker, perlindungan data pelanggan, dan perbaikan situs yang diretas."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Pembuatan Bot Telegram & WhatsApp Otomatis untuk Bisnis",
                "description": "Asisten otomatis 24 jam untuk melayani pembeli, cek status pesanan, notifikasi transaksi instan, dan auto-reply chat."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Integrasi Pembayaran QRIS Otomatis & Gateway Digital",
                "description": "Pemasangan pembayaran QRIS langsung di website/bot dengan status lunas otomatis tanpa cek mutasi manual."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Pembuatan Website Perusahaan (Company Profile) & Toko Online",
                "description": "Pembuatan website cepat, desain elegan ramah HP, dan terdaftar resmi di Google agar bisnis Anda mudah ditemukan."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Konsultasi IT Privat, Bimbingan Coding & Asistensi Riset Komputer",
                "description": "Diskusi langsung bersama Bang Mansur untuk pemecahan masalah coding, perancangan arsitektur software, dan asistensi proyek IT."
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": `${canonicalUrl}#founder`,
        "name": founderName,
        "alternateName": ["Mansur", "Bang Mansur IT", "Founder XSUR", "Praktisi IT"],
        "jobTitle": siteConfig.founder_title || "Founder & Praktisi Teknologi Informasi",
        "worksFor": {
          "@id": `${canonicalUrl}#organization`
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": siteConfig.founder_edu || "Praktisi & Konsultan Teknologi Informasi"
        },
        "image": siteConfig.founder_image || "https://i.ibb.co.com/LXK49TZc/unamed.png",
        "sameAs": [
          "https://github.com/xyz-sur",
          "https://xyz-sur.github.io",
          "https://t.me/cspremium2in"
        ],
        "knowsAbout": [
          "Jaringan Komputer & MikroTik",
          "Keamanan Siber & Anti-Hack",
          "Otomasi Bot & Software Engineering",
          "Riset Teknologi Informasi"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        "url": canonicalUrl,
        "name": `${companyName} (${brandName})`,
        "alternateName": [brandName, "XSUR Portal", "xsur.my.id"],
        "publisher": {
          "@id": `${canonicalUrl}#organization`
        },
        "description": tagline,
        "inLanguage": ["id-ID", "en-US"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": canonicalUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Layanan & Portofolio",
            "item": `${canonicalUrl}/#projects`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Keunggulan Layanan",
            "item": `${canonicalUrl}/#standards`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Pertanyaan Umum (FAQ)",
            "item": `${canonicalUrl}/#faq`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Konsultasi & Kontak",
            "item": `${canonicalUrl}/#contact`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Layanan apa saja yang disediakan oleh PT Xecure Siber Unggul Resolusi (XSUR)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kami melayani setting jaringan WiFi kantor & router MikroTik agar internet stabil tanpa lelet, pembuatan website profil bisnis dan toko online, pembuatan bot WhatsApp dan Telegram otomatis untuk jualan 24 jam, pengamanan website dari serangan hacker, pemasangan pembayaran QRIS otomatis, serta konsultasi IT dan bimbingan pemrograman/coding."
            }
          },
          {
            "@type": "Question",
            "name": "Siapa yang mengerjakan dan mengawasi setiap proyek di XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seluruh pengerjaan dipimpin langsung oleh Bang Mansur, praktisi IT senior dan profesional keamanan siber dengan pengalaman bertahun-tahun dalam menangani jaringan perkantoran, sistem otomasi, dan keamanan data."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah ada garansi untuk jasa setting jaringan atau pembuatan sistem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tentu ada. Setiap jasa dan sistem yang kami bangun dilengkapi dengan masa garansi pengerjaan dan pendampingan teknis. Jika terjadi kendala atau butuh penyesuaian setelah pengerjaan selesai, kami siap membantu perbaikan hingga normal kembali."
            }
          },
          {
            "@type": "Question",
            "name": "Saya orang awam dan tidak paham IT, apakah sistemnya mudah digunakan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sangat mudah. Kami selalu merancang sistem yang ramah pengguna (user-friendly) agar bisa langsung dioperasikan oleh siapa saja. Kami juga menyediakan panduan penggunaan singkat yang jelas serta pelatihan bagi Anda atau staf Anda."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah data dan sistem bisnis saya dijamin kerahasiaannya?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pasti 100% aman. Kami menjunjung tinggi integritas privasi klien. Seluruh proyek dapat disertai dengan Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) resmi sehingga data perusahaan Anda terjamin aman dan tidak akan dibagikan ke pihak mana pun."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana cara memesan jasa atau berkonsultasi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anda cukup klik tombol WhatsApp atau Telegram yang tersedia di halaman ini. Ceritakan kendala atau kebutuhan Anda secara santai, dan kami akan memberikan saran solusi yang paling hemat, tepat sasaran, dan sesuai kebutuhan Anda."
            }
          }
        ]
      }
    ]
  };

  return `
    <title>${pageTitle}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="${founderName}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${canonicalUrl}">
    ${googleVerification ? `<meta name="google-site-verification" content="${googleVerification}">` : ''}
    <meta name="msvalidate.01" content="A559E66F438B8603FDBDA9EC760A8128">

    <!-- Open Graph / Facebook / Telegram / WhatsApp / LinkedIn -->
    <meta property="og:type" content="business.business">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDescription}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="${companyName}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:secure_url" content="${ogImage}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="400">
    <meta property="og:image:alt" content="${companyName} (${brandName}) — Solusi IT, Jaringan &amp; Keamanan Sistem">
    <meta property="og:locale" content="id_ID">
    <meta property="og:locale:alternate" content="en_US">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${ogTitle}">
    <meta name="twitter:description" content="${ogDescription}">
    <meta name="twitter:image" content="${ogImage}">
    <meta name="twitter:image:alt" content="${companyName} (${brandName})">

    <!-- Mobile & Search Engine Directives -->
    <meta name="theme-color" content="#07090e">
    <meta name="apple-mobile-web-app-title" content="${brandName}">
    <meta name="application-name" content="${brandName}">
    <meta name="format-detection" content="telephone=no">
    <meta name="geo.region" content="ID-JK">
    <meta name="geo.placename" content="Jakarta, Indonesia">
    <link rel="alternate" hreflang="id" href="${canonicalUrl}">
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">

    <!-- Schema.org Rich JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(schemaJsonLd)}
    </script>
  `;
}
