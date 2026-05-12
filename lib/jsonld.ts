import { siteConfig } from "@/lib/site";

const faqItems = [
  {
    question: "O que a Odinni organiza em uma viagem?",
    answer:
      "A Odinni foi pensada para centralizar roteiros, mapas, voos, hospedagem, vouchers, documentos oficiais e controle financeiro em uma timeline unica.",
  },
  {
    question: "A Odinni serve so para viajantes solo?",
    answer: "Serve para viajantes solo, casais, familias e grupos pequenos.",
  },
  {
    question: "A plataforma tem inteligencia artificial desde o inicio?",
    answer:
      "Sim. A IA atua como assistente para organizar e priorizar informacoes.",
  },
  {
    question: "Qual e o principal diferencial da Odinni?",
    answer:
      "A combinacao de planejamento, timeline, documentos e gastos no mesmo lugar.",
  },
  {
    question: "Quanto custa para comecar?",
    answer: "Os planos do esboco partem de R$ 9,90 mensais.",
  },
] as const;

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
        mainEntity: faqItems.map((item) => ({
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
