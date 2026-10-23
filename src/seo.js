// SEO & Structured Data (JSON-LD) for PT Xecure Siber Unggul Resolusi (xsur.my.id)

export function generateSeoTags({ siteConfig, canonicalUrl }) {
  const companyName = siteConfig.company_name || "PT Xecure Siber Unggul Resolusi";
  const brandName = siteConfig.brand_name || "XSUR";
  const founderName = siteConfig.founder_name || "Bang Mansur";
  const tagline = siteConfig.tagline || "Enterprise Cybersecurity, Network Engineering & Scalable Automation";
  const description = `Portal resmi ${companyName} (${brandName}). Dipimpin oleh ${founderName} (S2 Magister Ilmu Komputer). Solusi enterprise: VAPT Cybersecurity, Enterprise MikroTik RouterOS, MTProto Bot Fleet, FinTech PPOB H2H Gateway, & Konsultasi IT Forensik.`;
  const keywords = [
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
          "Cybersecurity",
          "Web Application Penetration Testing",
          "MikroTik RouterOS",
          "High Concurrency Telegram Automation",
          "CEIR IMEI Telecommunication Verification",
          "FinTech Payment & H2H Gateways"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support & Technical Consultation",
          "url": siteConfig.contact_telegram || "https://t.me/msr77",
          "email": siteConfig.contact_email || "contact@xsur.my.id",
          "availableLanguage": ["Indonesian", "English"]
        }
      },
      {
        "@type": "Person",
        "@id": `${canonicalUrl}#founder`,
        "name": founderName,
        "alternateName": ["Mansur", "Bang Mansur IT", "Founder XSUR"],
        "jobTitle": "Founder & Chief Security Architect",
        "worksFor": {
          "@id": `${canonicalUrl}#organization`
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Magister Ilmu Komputer (S2 Computer Science)"
        },
        "image": siteConfig.founder_image || "https://i.ibb.co.com/LXK49TZc/unamed.png",
        "sameAs": [
          "https://github.com/xyz-sur",
          "https://xyz-sur.github.io"
        ],
        "knowsAbout": [
          "Cybersecurity & Penetration Testing",
          "Distributed Architecture",
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
            "name": "Layanan apa saja yang disediakan oleh XSUR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "XSUR melayani: 1) Cybersecurity & Pentest (VAPT), 2) Enterprise Network & MikroTik RouterOS, 3) Telegram Userbot Fleet & Automasi MTProto, 4) FinTech PPOB & QRIS Gateways, 5) Audit IMEI/CEIR Bea Cukai, serta 6) Konsultasi Khusus & Digital Forensics."
            }
          }
        ]
      }
    ]
  };

  return `
    <title>${brandName} — ${companyName} | Founder Bang Mansur</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="${founderName}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook / Telegram / WhatsApp -->
    <meta property="og:type" content="business.business">
    <meta property="og:title" content="${brandName} | ${companyName}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="${companyName}">
    <meta property="og:image" content="${canonicalUrl}/og-image.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${brandName} — ${companyName}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${canonicalUrl}/og-image.png">

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(schemaJsonLd)}
    </script>
  `;
}
