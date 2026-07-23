import { siteConfig } from "@/lib/site";

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riga",
      addressCountry: "LV",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.x],
    knowsAbout: [
      "Next.js",
      "Laravel",
      "React",
      "TypeScript",
      "E-commerce",
      "PostgreSQL",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
