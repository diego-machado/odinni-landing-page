export const siteConfig = {
  name: "Odinni",
  title: "Odinni | Viagem em timeline inteligente",
  description:
    "Organize viagens em uma timeline inteligente: roteiros, voos, hospedagem, vouchers, documentos e gastos em um só lugar.",
  locale: "pt_BR",
  language: "pt-BR",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.odinni.com.br",
  twitterHandle: undefined as string | undefined,
  contact: {
    phone: "+55 48 99999-1234",
    email: "email@email.com",
  },
} as const;
