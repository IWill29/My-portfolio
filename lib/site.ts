export const siteConfig = {
  name: "Agnis Kulakovs",
  title: "Agnis Kulakovs | Full Stack Developer",
  description:
    "Portfolio of Agnis Kulakovs — Full Stack Developer from Riga, Latvia. E-commerce, Laravel, Next.js, React, and freelance web development projects.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://agnisweb.dev",
  locale: "en_US",
  email: "agnis.kulakovs@gmail.com",
  location: "Riga, Latvia",
  keywords: [
    "Agnis Kulakovs",
    "Full Stack Developer",
    "Web Developer Latvia",
    "Laravel Developer",
    "Next.js Developer",
    "E-commerce Developer",
    "Freelance Developer Riga",
    "Portfolio",
  ],
  links: {
    github: "https://github.com/IWill29",
    x: "https://x.com/AgnisKulak15614",
  },
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ??
    "EmvZ-P1ni679R1ywSJc3pBqCq-3kRDCXmyk7a2RicFM",
} as const;
