export default function Head() {
  return (
    <>
      <meta
        name="google-site-verification"
        content="ojrMCa-WpK0Vy08VcOeDGmV6KMrBtlUueQNTUqZs8To"
      />
      <title>Pradeep Shah - IT Support Engineer & Cybersecurity Enthusiast</title>
      <meta
        name="description"
        content="Pradeep Shah — a passionate Full Stack Developer and Cybersecurity Enthusiast sharing insights on modern web technologies, IT support, and digital security. Explore my projects, blogs, and tutorials designed to help you grow in the tech world"
      />
      <meta
        name="keywords"
        content="Pradeep Shah, Engineer, IT Support Engineer, Cybersecurity, Cybersecurity Enthusiast, IT troubleshooting services, Microsoft 365 setup, Network troubleshooting"
      />
      <meta name="author" content="Pradeep Shah" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Pradeep Shah - IT Support Engineer & Cybersecurity Enthusiast" />
      <meta property="og:description" content="Pradeep Shah is an IT Support Engineer and Cybersecurity Enthusiast offering IT troubleshooting services, Microsoft 365 setup, and network troubleshooting." />
      <meta property="og:image" content="/profile.jpg" />
      <meta property="og:url" content="https://pradeepshahportfolio.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pradeep Shah - IT Support Engineer & Cybersecurity Enthusiast" />
      <meta name="twitter:description" content="Pradeep Shah is an IT Support Engineer and Cybersecurity Enthusiast offering IT troubleshooting services, Microsoft 365 setup, and network troubleshooting." />
      <meta name="twitter:image" content="/profile.jpg" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Pradeep Shah",
            "jobTitle": "IT Support Engineer & Cybersecurity Enthusiast",
            "url": "https://pradeepshahportfolio.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/ipradeepshah/",
              "https://www.facebook.com/ipradeepshah/",
              "https://www.instagram.com/i_pradeepshah/",
              "https://x.com/i_pradeepshah"
            ],
            "image": "/profile.jpg",
            "description": "Pradeep Shah is an IT Support Engineer and Cybersecurity Enthusiast offering IT troubleshooting services, Microsoft 365 setup, and network troubleshooting.",
            "knowsAbout": [
              "IT Support",
              "Cybersecurity",
              "Microsoft 365",
              "Network Troubleshooting",
              "Computer Engineering",
              "Full Stack Development",
              "Open Source Contribution"
            ]
          })
        }}
      />
    </>
  );
}
