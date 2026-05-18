import { landingFaqItems } from "@/lib/landing-faq";
import { siteConfig } from "@/lib/site";

export function buildJsonLdGraph() {
  const orgId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const webPageId = `${siteConfig.url}/#webpage`;
  const faqId = `${siteConfig.url}/#faq`;
  const softwareId = `${siteConfig.url}/#software`;

  const logoUrl = `${siteConfig.url}/assets/logo.png`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: logoUrl,
        description: siteConfig.description,
        sameAs: [...siteConfig.sameAs],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            contactType: "customer support",
            areaServed: "BR",
            availableLanguage: ["pt-BR", "Portuguese"],
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
        "@id": webPageId,
        url: `${siteConfig.url}/`,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        inLanguage: siteConfig.language,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.ogImage.url}`,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          caption: siteConfig.ogImage.alt,
        },
        mainEntity: { "@id": faqId },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${siteConfig.url}/#faq`,
        isPartOf: { "@id": webPageId },
        mainEntity: landingFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: `${siteConfig.name} — app de viagem`,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android, iOS",
        description: siteConfig.description,
        url: siteConfig.url,
        publisher: { "@id": orgId },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "9.90",
          highPrice: "29.90",
          priceCurrency: "BRL",
          offerCount: 3,
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#pricing`,
        },
      },
    ],
  };
}
