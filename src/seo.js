// SEO Meta Tags & Rich Schema.org (JSON-LD) Generator for PT Xecure Siber Unggul Resolusi (xsur.my.id)

export function generateSeoTags(siteConfig) {
  const brandName = siteConfig.brand_name || "XSUR";
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const canonicalUrl = siteConfig.canonical_url || "https://xsur.my.id";
  const tagline = siteConfig.tagline || "Rekayasa Pertahanan Siber, Jaringan Terdistribusi & Otomasi Skala Tinggi";
  
  const pageTitle = siteConfig.meta_title || `${companyName} (${brandName}) — Keamanan Siber & MikroTik Enterprise | ${founderName}`;
  const description = siteConfig.meta_description || siteConfig.meta_desc || "Portal resmi PT Xecure Siber Unggul Resolusi (XSUR). Layanan audit penetrasi VAPT OWASP, arsitektur MikroTik enterprise multi-WAN, bot Telegram MTProto & CEIR oleh Bang Mansur, M.Kom.";
  const keywords = siteConfig.meta_keywords || siteConfig.keywords || "PT Xecure Siber Unggul Resolusi, XSUR, xsur.my.id, Bang Mansur, Mansur, Keamanan Siber Indonesia, Jasa Pentest Web API, Vulnerability Assessment Indonesia, Konsultan MikroTik Enterprise, RouterOS BGP OVPN, Bot Telegram MTProto, Cek CEIR IMEI Audit, PPOB H2H Gateway, XSUR Webmail, Cloudflare Edge Worker, Digital Forensics";
  
  const ogTitle = siteConfig.og_title || `${companyName} (${brandName}) — Cyber Defense & MikroTik Enterprise`;
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
          "XSUR Enterprise"
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
        "telephone": "+62857100055554",
        "email": siteConfig.contact_email || "contact@xsur.my.id",
        "priceRange": "$$$",
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
          "Cybersecurity & Penetration Testing (VAPT)",
          "Web, Mobile & API Security Audits",
          "Enterprise MikroTik RouterOS & Multi-WAN Failover",
          "High Concurrency Telegram MTProto Bot Fleet",
          "CEIR IMEI Telecommunication Verification",
          "FinTech Payment & H2H QRIS Gateways",
          "Digital Incident Forensics & Investigation",
          "Cloudflare Workers & Distributed Edge Architecture"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support & Technical Consultation",
          "url": siteConfig.contact_telegram || "https://t.me/cspremium2in",
          "email": siteConfig.contact_email || "contact@xsur.my.id",
          "telephone": "+62857100055554",
          "availableLanguage": ["Indonesian", "English"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Katalog Layanan Enterprise PT Xecure Siber Unggul Resolusi",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vulnerability Assessment & Penetration Testing (VAPT)",
                "description": "Audit penetrasi menyeluruh pada aplikasi web, mobile, API microservices, dan infrastruktur cloud sesuai standar OWASP Top 10 dan NIST CSF."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Arsitektur MikroTik RouterOS Enterprise & Distributed Multi-WAN",
                "description": "Perancangan topologi enterprise multi-WAN failover otomatis, dynamic routing BGP, OVPN cloud tunneling, dan manajemen bandwidth cerdas."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Armada Otomasi Bot Telegram MTProto Skala Tinggi",
                "description": "Pengembangan userbot MTProto multi-worker dengan load balancing, rotasi proxy anti-flood, dan auto-broadcast cerdas."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Platform Verifikasi Telekomunikasi CEIR & IMEI Bea Cukai",
                "description": "Integrasi audit IMEI resmi Kemenperin dan Bea Cukai melalui gateway bot Telegram @cekceirbot."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "XSUR Private Webmail & Disposable Temp Mail Suite",
                "description": "Platform email korporat mandiri dan generator email sementara multi-domain berbasis Cloudflare Workers edge (mail.xsur.my.id)."
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": `${canonicalUrl}#founder`,
        "name": founderName,
        "alternateName": ["Mansur", "Bang Mansur IT", "Founder XSUR", "Chief Security Architect"],
        "jobTitle": siteConfig.founder_title || "Founder & Chief Security Architect",
        "worksFor": {
          "@id": `${canonicalUrl}#organization`
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": siteConfig.founder_edu || "Magister Ilmu Komputer (S2 Computer Science)"
        },
        "image": siteConfig.founder_image || "https://i.ibb.co.com/LXK49TZc/unamed.png",
        "sameAs": [
          "https://github.com/xyz-sur",
          "https://xyz-sur.github.io",
          "https://t.me/cspremium2in"
        ],
        "knowsAbout": [
          "Cybersecurity & Penetration Testing",
          "Distributed Systems Architecture",
          "Enterprise Network Routing & MikroTik",
          "Reverse Engineering & Digital Forensics"
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
            "name": "Portofolio & Solusi",
            "item": `${canonicalUrl}/#projects`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Standar Siber & Kepatuhan",
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
            "name": "Konsultasi Teknis",
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
            "name": "Apa itu PT Xecure Siber Unggul Resolusi (XSUR)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PT Xecure Siber Unggul Resolusi (XSUR) adalah startup teknologi dan firma keamanan siber berbadan hukum yang didirikan oleh Bang Mansur. XSUR menyatukan keahlian praktis lapangan dan riset akademik dalam bidang audit keamanan (VAPT), infrastruktur jaringan MikroTik RouterOS enterprise, sistem otomasi bot MTProto terdistribusi, serta gateway FinTech dan telekomunikasi CEIR."
            }
          },
          {
            "@type": "Question",
            "name": "Siapa Founder dan Chief Security Architect di balik XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Founder dan Chief Security Architect XSUR adalah Bang Mansur, praktisi IT senior, profesional keamanan siber, dan lulusan S2 Magister Ilmu Komputer dengan spesialisasi rekayasa sistem terdistribusi, dynamic routing enterprise, dan reverse engineering."
            }
          },
          {
            "@type": "Question",
            "name": "Layanan dan spesialisasi apa saja yang disediakan oleh PT Xecure Siber Unggul Resolusi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "XSUR menyediakan 5 pilar spesialisasi enterprise: 1) Vulnerability Assessment & Penetration Testing (VAPT OWASP Top 10), 2) Arsitektur Jaringan MikroTik RouterOS Multi-WAN & OVPN Cloud Tunneling, 3) Otomasi High-Throughput Telegram MTProto Userbot Fleet, 4) Integrasi Gateway Telekomunikasi CEIR & IMEI Bea Cukai (@cekceirbot), serta 5) XSUR Webmail & Disposable Temp Mail Suite (mail.xsur.my.id)."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana metodologi audit keamanan siber (VAPT) yang diterapkan oleh XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Audit VAPT XSUR menggabungkan simulasi penyerangan black-box, gray-box, dan white-box yang mengacu pada standar global OWASP Top 10, NIST Cybersecurity Framework (CSF), dan SANS Top 25. Setiap temuan diverifikasi secara mendalam untuk mencegah false positive dan dilengkapi dokumen rekomendasi remediasi teknis yang dapat langsung dieksekusi tim developer."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah XSUR melayani perancangan jaringan MikroTik enterprise dan multi-WAN antar kantor cabang?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, XSUR berpengalaman menangani perancangan core routing MikroTik RouterOS v7, failover otomatis multi-WAN BGP/OSPF, interkoneksi secure tunnel (WireGuard / OpenVPN) site-to-site tanpa tabrakan subnet IP lokal, serta alokasi bandwidth cerdas berbasis QoS Simple Queue / Queue Tree."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana cara melakukan konsultasi teknis atau memulai kerjasama proyek dengan XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anda dapat menghubungi Bang Mansur secara langsung melalui Telegram resmi di @cspremium2in atau @jasangiklan, WhatsApp di nomor +62 857-1000-55554, atau email resmi ke contact@xsur.my.id. Seluruh diskusi dapat disertai Non-Disclosure Agreement (NDA) untuk menjamin kerahasiaan penuh proyek Anda."
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
    <meta property="og:image:alt" content="${companyName} (${brandName}) — Pertahanan Siber &amp; MikroTik Enterprise">
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
