import { landingFaqItems } from "@/lib/landing-faq";
import { siteConfig } from "@/lib/site";

export function buildJsonLdGraph() {
  const orgId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const faqId = `${siteConfig.url}/#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            contactType: "customer support",
            areaServed: "BR",
            availableLanguage: ["Portuguese"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": orgId },
        inLanguage: siteConfig.language,
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/`,
        url: `${siteConfig.url}/`,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        inLanguage: siteConfig.language,
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: landingFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
