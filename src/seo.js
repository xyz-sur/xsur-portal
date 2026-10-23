// SEO & Structured Data (JSON-LD) for PT Xecure Siber Unggul Resolusi (xsur.my.id)

export function generateSeoTags({ siteConfig, canonicalUrl }) {
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const brandName = siteConfig.brand_name || "XSUR";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const tagline = siteConfig.tagline || "Enterprise Cybersecurity, Network Engineering & Scalable Automation";
  
  const pageTitle = siteConfig.meta_title || `${brandName} — ${companyName} | Founder ${founderName}`;
  const description = siteConfig.meta_description || `Portal resmi ${companyName} (${brandName}). Dipimpin oleh ${founderName} (S2 Magister Ilmu Komputer). Solusi enterprise: VAPT Cybersecurity, Enterprise MikroTik RouterOS, MTProto Bot Fleet, FinTech PPOB H2H Gateway, & Konsultasi IT Forensik.`;
  const keywords = siteConfig.meta_keywords || [
    "Bang Mansur",
    "Mansur",
    "PT Xecure Siber Unggul Resolusi",
    "XSUR",
    "xsur.my.id",
    "Cybersecurity Specialist Indonesia",
    "Jasa Pentest Web API",
    "Vulnerability Assessment Indonesia",
    "Konsultan MikroTik Enterprise",
    "RouterOS BGP OVPN",
    "Arsitek Telegram Bot",
    "MTProto Fleet Automation",
    "Cek CEIR IMEI Audit",
    "PPOB H2H Gateway",
    "Cloudflare Workers Edge",
    "Digital Forensics Indonesia",
    "Startup Cybersecurity Indonesia"
  ].join(", ");

  const ogTitle = siteConfig.og_title || pageTitle;
  const ogDescription = siteConfig.og_description || description;
  const ogImage = siteConfig.og_image || `${canonicalUrl}/logo.svg`;
  const googleVerification = siteConfig.google_site_verification || "";

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        "name": companyName,
        "alternateName": [brandName, "Xecure Siber", "PT XSUR"],
        "url": canonicalUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${canonicalUrl}/logo.svg`,
          "width": 1200,
          "height": 400
        },
        "founder": {
          "@id": `${canonicalUrl}#founder`
        },
        "description": description,
        "areaServed": [
          { "@type": "Country", "name": "Indonesia" },
          { "@type": "AdministrativeArea", "name": "Global" }
        ],
        "knowsAbout": [
          "Cybersecurity & Penetration Testing",
          "Web & API Security Audits",
          "Enterprise MikroTik RouterOS & Multi-WAN",
          "High Concurrency Telegram MTProto Bot Fleet",
          "CEIR IMEI Telecommunication Verification",
          "FinTech Payment & H2H QRIS Gateways",
          "Digital Incident Forensics & Investigation"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support & Technical Consultation",
          "url": siteConfig.contact_telegram || "https://t.me/premium2in",
          "email": siteConfig.contact_email || "contact@xsur.my.id",
          "availableLanguage": ["Indonesian", "English"]
        }
      },
      {
        "@type": "Person",
        "@id": `${canonicalUrl}#founder`,
        "name": founderName,
        "alternateName": ["Mansur", "Bang Mansur IT", "Founder XSUR"],
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
          "https://xyz-sur.github.io"
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
        "name": `${brandName} - ${companyName}`,
        "publisher": {
          "@id": `${canonicalUrl}#organization`
        },
        "description": tagline
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
              "text": "PT Xecure Siber Unggul Resolusi (XSUR) adalah startup teknologi dan firma keamanan siber yang didirikan oleh Bang Mansur. XSUR menyatukan keahlian praktis dan riset akademik dalam bidang audit keamanan (VAPT), infrastruktur jaringan MikroTik/Cloudflare, sistem otomasi bot terdistribusi, serta gateway FinTech."
            }
          },
          {
            "@type": "Question",
            "name": "Siapa Founder di balik PT Xecure Siber Unggul Resolusi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Founder XSUR adalah Bang Mansur, praktisi IT senior, profesional keamanan siber, dan lulusan S2 Magister Ilmu Komputer dengan spesialisasi sistem terdistribusi, routing enterprise, dan reverse engineering."
            }
          },
          {
            "@type": "Question",
            "name": "Layanan dan proyek apa saja yang disediakan oleh XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "XSUR melayani empat klasifikasi spesialisasi enterprise: 1) Jasa & Solusi Cyber Defense (VAPT & Konsultasi MikroTik), 2) Bot & Otomasi High-Throughput (MTProto Userbot Fleet & @cekceirbot), 3) Pemrograman & API Gateway (Aing PPOB H2H & WorkIt Portal), serta 4) Audit Telekomunikasi CEIR & IMEI Bea Cukai."
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
    
    <!-- Open Graph / Facebook / Telegram / WhatsApp -->
    <meta property="og:type" content="business.business">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDescription}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="${companyName}">
    <meta property="og:image" content="${ogImage}">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${ogTitle}">
    <meta name="twitter:description" content="${ogDescription}">
    <meta name="twitter:image" content="${ogImage}">

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(schemaJsonLd)}
    </script>
  `;
}
