// SEO Meta Tags & Rich Schema.org (JSON-LD) Generator for PT Xecure Siber Unggul Resolusi (xsur.my.id)

export function generateSeoTags(siteConfig) {
  const brandName = siteConfig.brand_name || "XSUR";
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const canonicalUrl = siteConfig.canonical_url || "https://xsur.my.id";
  const tagline = siteConfig.tagline || "Solusi IT Lengkap untuk Semua Kebutuhan Bisnis, Kantor, UMKM & Personal";
  
  const pageTitle = siteConfig.meta_title || `Solusi IT Lengkap: Jasa Setting WiFi, Pembuatan Website & Keamanan Sistem | ${brandName}`;
  const description = siteConfig.meta_description || siteConfig.meta_desc || "Solusi IT lengkap untuk semua: jasa setting WiFi kantor & MikroTik, pembuatan website & bot WhatsApp/Telegram, integrasi QRIS, dan pengamanan sistem anti-hack bergaransi.";
  const keywords = siteConfig.meta_keywords || siteConfig.keywords || "Jasa IT Jakarta, Jasa IT Indonesia, Solusi IT Kantor, Jasa Setting MikroTik, Jasa Pasang WiFi Kantor, Jasa Perbaikan Jaringan Internet, Jasa Pembuatan Website, Jasa Web Toko Online, Jasa Web Company Profile, Jasa Pembuatan Bot WhatsApp, Jasa Bot Telegram Bisnis, Jasa Keamanan Website, Jasa Pentest Web, Jasa Anti Hack, Jasa Integrasi QRIS, Pasang QRIS Otomatis, Jasa Setting Server Linux, Konsultan IT Indonesia, Bang Mansur, PT Xecure Siber Unggul Resolusi, XSUR, xsur.my.id";
  
  const ogTitle = siteConfig.og_title || `Solusi IT Lengkap untuk Semua: Jaringan, Website & Keamanan Sistem | ${brandName}`;
  const ogDescription = siteConfig.og_description || description;
  const ogImage = `${canonicalUrl}/og-banner.png`;
  const logoImage = `${canonicalUrl}/logo.png`;
  const googleVerification = siteConfig.google_site_verification || "";

  // Highly Structured Schema.org Graph for Google Top 10 Sitelinks, Knowledge Panel & Rich Snippets (Rating Stars & FAQ Accordion)
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
        "@id": `${canonicalUrl}#organization`,
        "name": companyName,
        "legalName": companyName,
        "alternateName": [
          brandName,
          "Xecure Siber",
          "PT XSUR",
          "Xecure Siber Unggul Resolusi",
          "XSUR Solusi IT Terpadu",
          "Konsultan IT Bang Mansur"
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
        "priceRange": "Rp",
        "currenciesAccepted": "IDR",
        "paymentAccepted": "Cash, Bank Transfer, QRIS",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. K.H. Mas Mansyur",
          "addressLocality": "Jakarta",
          "addressRegion": "DKI Jakarta",
          "postalCode": "10220",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -6.2088,
          "longitude": 106.8456
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "Country", "name": "Indonesia" },
          { "@type": "City", "name": "Jakarta" },
          { "@type": "City", "name": "Surabaya" },
          { "@type": "City", "name": "Bandung" },
          { "@type": "City", "name": "Medan" },
          { "@type": "City", "name": "Semarang" },
          { "@type": "AdministrativeArea", "name": "Seluruh Indonesia" }
        ],
        "sameAs": [
          "https://github.com/xyz-sur",
          "https://xyz-sur.github.io",
          "https://t.me/premium2in",
          "https://mail.xsur.my.id"
        ],
        "knowsAbout": [
          "Jasa Setting Jaringan WiFi & MikroTik Kantor",
          "Jasa Pembuatan Website Perusahaan & Toko Online",
          "Jasa Pembuatan Bot WhatsApp & Telegram Bisnis",
          "Jasa Integrasi Pembayaran QRIS Otomatis",
          "Audit Keamanan Website & Perlindungan Anti-Hack",
          "Setup Server Kantor Linux & Backup Otomatis",
          "Konsultasi IT, Bimbingan Coding & Asistensi Proyek",
          "Layanan Pengecekan IMEI Resmi Bea Cukai & Kemenperin"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support & Technical Consultation",
          "url": siteConfig.contact_telegram || "https://t.me/premium2in",
          "email": siteConfig.contact_email || "contact@xsur.my.id",
          "telephone": "+628****5554",
          "availableLanguage": ["Indonesian", "English"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Katalog Layanan Solusi IT Lengkap PT Xecure Siber Unggul Resolusi",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Setting & Perbaikan Jaringan WiFi Kantor (MikroTik / Cisco)",
                "description": "Solusi internet kantor lelet, pembagian kuota adil (QoS), koneksi cadangan otomatis (failover), dan VPN aman antar kantor cabang."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Pembuatan Website Perusahaan (Company Profile) & Toko Online",
                "description": "Pembuatan website modern, sangat cepat di HP, terdaftar di Google SEO, lengkap dengan domain dan email kantor resmi."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Pembuatan Bot Telegram & WhatsApp Otomatis untuk Bisnis",
                "description": "Asisten otomatis melayani pembeli 24 jam: balas chat otomatis, kirim notifikasi pesanan, dan cek pembayaran tanpa admin standby."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Integrasi Pembayaran QRIS Dinamis & Gateway Digital",
                "description": "Pemasangan pembayaran QRIS langsung di website/bot dengan verifikasi lunas otomatis tanpa cek mutasi manual."
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
                "name": "Jasa Setup Server Kantor, VPS & Backup Data Otomatis",
                "description": "Pemasangan server kantor Linux/Proxmox untuk sharing file dan backup harian ke cloud agar data tidak hilang terserang virus."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Konsultasi IT Privat, Bimbingan Coding & Asistensi Riset Komputer",
                "description": "Diskusi langsung bersama Bang Mansur untuk pemecahan masalah coding, perancangan arsitektur software, dan asistensi tugas/proyek IT."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Layanan Pengecekan IMEI & Validasi Telekomunikasi Resmi",
                "description": "Verifikasi legalitas nomor IMEI handphone di database resmi Kemenperin dan Bea Cukai agar sinyal operator aman."
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
          "https://t.me/premium2in"
        ],
        "knowsAbout": [
          "Jaringan Komputer & MikroTik",
          "Keamanan Siber & Anti-Hack",
          "Pembuatan Website & Toko Online",
          "Otomasi Bot WhatsApp & Telegram",
          "Integrasi Pembayaran QRIS"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        "url": canonicalUrl,
        "name": `${companyName} (${brandName})`,
        "alternateName": [brandName, "XSUR Portal", "xsur.my.id", "Solusi IT XSUR"],
        "publisher": {
          "@id": `${canonicalUrl}#organization`
        },
        "description": tagline,
        "inLanguage": ["id-ID", "en-US"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${canonicalUrl}/#projects`,
          "query-input": "required name=search_term_string"
        }
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
            "name": "Layanan Solusi IT",
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
            "name": "Hitung Biaya",
            "item": `${canonicalUrl}/#calculator`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Pertanyaan Umum (FAQ)",
            "item": `${canonicalUrl}/#faq`
          },
          {
            "@type": "ListItem",
            "position": 6,
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
              "text": "XSUR menyediakan solusi IT lengkap untuk semua kalangan (perkantoran, UMKM, toko, hingga personal): 1) Setting jaringan WiFi kantor & router MikroTik stabil anti-lelet, 2) Pembuatan website profil bisnis dan toko online modern terdaftar di Google, 3) Pembuatan bot WhatsApp dan Telegram otomatis jualan 24 jam, 4) Pengamanan website dari serangan hacker dan virus, 5) Pemasangan pembayaran QRIS otomatis langsung lunas, serta 6) Konsultasi IT dan bimbingan coding."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah layanan XSUR cocok untuk bisnis kecil, UMKM, atau kebutuhan pribadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sangat cocok. Layanan XSUR dirancang fleksibel untuk semua skala: mulai dari pemilik toko online/UMKM yang butuh bot auto-reply & pembayaran QRIS, perkantoran/kafe yang butuh WiFi stabil tanpa rebutan kuota, hingga mahasiswa/perorangan yang butuh konsultasi IT."
            }
          },
          {
            "@type": "Question",
            "name": "Siapa yang mengerjakan dan mengawasi setiap proyek di XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seluruh pengerjaan dipimpin langsung oleh Bang Mansur, praktisi IT senior dan profesional keamanan siber dengan pengalaman bertahun-tahun dalam menangani jaringan perkantoran, sistem otomasi bisnis, dan keamanan data."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah ada garansi untuk jasa setting jaringan atau pembuatan website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tentu ada. Setiap jasa dan sistem yang kami bangun dilengkapi dengan masa garansi pengerjaan dan pendampingan teknis. Jika terjadi kendala atau butuh penyesuaian setelah pengerjaan selesai, tim kami siap membantu perbaikan hingga tuntas."
            }
          },
          {
            "@type": "Question",
            "name": "Saya orang awam dan tidak paham IT, apakah sistemnya mudah digunakan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sangat mudah. Kami selalu merancang sistem yang ramah pengguna (user-friendly) agar bisa langsung dioperasikan oleh siapa saja tanpa perlu latar belakang teknis. Kami juga menyertakan panduan pemakaian singkat serta pendampingan langsung."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana cara memesan jasa atau berkonsultasi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anda cukup klik tombol WhatsApp atau Telegram yang tersedia di halaman ini. Ceritakan kendala atau kebutuhan Anda secara santai, dan kami akan memberikan saran solusi yang paling hemat, tepat sasaran, dan sesuai anggaran Anda."
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
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
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
    <meta property="og:image:alt" content="${companyName} (${brandName}) — Solusi IT Lengkap untuk Semua Kebutuhan">
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
