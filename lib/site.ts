export const siteConfig = {
  name: "Odinni",
  title: "Odinni | App de planejamento de viagem em timeline inteligente",
  description:
    "Planeje viagens com o app Odinni: timeline inteligente com roteiros, voos, hospedagem, vouchers e documentos num só lugar. Menos caos, mais clareza para viajar pelo Brasil e pelo mundo.",
  locale: "pt_BR",
  language: "pt-BR",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.odinni.com.br",
  twitterHandle: undefined as string | undefined,
  /** Perfis públicos (Organization.sameAs / marca nas redes). */
  sameAs: ["https://www.instagram.com/odinni.app/"] as const,
  /** Imagem padrão para Open Graph / Twitter Cards (path em `public/`). */
  ogImage: {
    url: "/assets/phone-header.jpg",
    width: 1440,
    height: 716,
    alt: "Odinni — planejamento de viagem em timeline com roteiros, voos e documentos reunidos",
  },
  keywords: [
    "Odinni",
    "app de viagem",
    "planejamento de viagem",
    "organizar viagem",
    "roteiro de viagem",
    "timeline de viagem",
    "documentos de viagem",
    "vouchers viagem",
    "gestão de viagem",
    "montar roteiro",
    "viagem Brasil",
  ],
  contact: {
    phone: "+55 48 99999-1234",
    email: "email@email.com",
  },
} as const;
