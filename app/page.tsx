import Image from "next/image";

import { BenefitCarousel } from "@/components/BenefitCarousel";
import { SiteHeader } from "@/components/SiteHeader";
import { benefitCarouselSlides } from "@/lib/benefit-carousel";
import { landingFaqItems } from "@/lib/landing-faq";

const testimonialSlides = [
  {
    name: "Camille Farias",
    imageSrc: "/assets/social/user-03.png",
    quote:
      "Eu ficava exausta pulando de aba em aba: voo aqui, hotel lá, passeio em outro... Agora centralizo tudo no Odinni e planejo sem surtar. Que paz! Vale muito a pena!",
  },
  {
    name: "Carlos Costa",
    imageSrc: "/assets/social/user-02.jpg",
    quote:
      "Na hora da viagem ficar procurando os documentos, reservas, mapas era um caos. Agora resolvo tudo em um lugar só. A Odinni é a ferramenta pra quem não tem tempo para perder.",
  },
  {
    name: "Camila Matos",
    imageSrc: "/assets/social/user-04.jpeg",
    quote: `Constumo viajar pelo menos duas vezes no ano, e o meu grande desafio é orquestrar tudo: ver vídeos no YouTube, titkok com dicas, e cotar em alguns sites de hotéis e passagens, e isso leva alguns dias.
Com o Odinni, além de ser intuitivo e prático, consegui os roteiros com a minha cara, além das dicas de restaurante e horários dos passeios. Massa demais. 

Super recomendo e continuarei contratando, pq viajar é tudo de bom!`,
  },
  {
    name: "Daniela Leandro",
    imageSrc: "/assets/social/user-05.jpeg",
    quote:
      "Usei a Odinni para fazer o roteiro de minha última viagem e adorei, me poupou inúmeras buscas em sites e conversas com o Chat. Consegui montar o roteiro completo, com todos os links, em um único lugar de forma muita intuitiva, rápida e fácil. Aprovadíssima!!",
  },
  {
    name: "Diego Machado",
    imageSrc: "/assets/social/user-01.jpg",
    quote:
      "A Odinni transformou minha forma de viajar. Agora tenho roteiro, reservas, mapas e documentos organizados em uma experiência muito mais clara.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <h1>Sua viagem inteira, organizada em uma timeline inteligente.</h1>
            <p>
              Roteiros, voos, hospedagem, vouchers, documentos e gastos em um só
              lugar, com mais agilidade e menos estresse.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#pricing">
                Assine agora <span className="cta-icon">↗</span>
              </a>
              <a className="button secondary" href="#how-it-works">
                Ver como funciona
              </a>
            </div>
          </div>
        </section>

        <section className="problem section" id="problem">
          <article className="stress-card">
            <h2>
              Mais tempo pra planejar,
              <br />
              <span>menos estresse</span> pra viajar!
            </h2>
            <p>
              Quem ama viajar sabe: o problema não é sonhar com o destino. O
              problema é transformar esse sonho em uma jornada organizada, sem
              perder tempo, dinheiro e informações importantes no caminho.
            </p>
          </article>

          <article className="goodbye-card">
            <h2>Com a Odinni você diz adeus a:</h2>
            <ul>
              <li>Informações espalhadas em vários sites e apps</li>
              <li>Comparação manual de preços</li>
              <li>Risco de perder promoções e melhores condições</li>
              <li>Falta de personalização ao montar a sua viagem</li>
              <li>Tempo demais investido em pesquisa.</li>
            </ul>
          </article>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="video-section">
            <div className="section-title split-title">
              <h2>Veja como a Odinni funciona na prática!</h2>
              <p>
                A Odinni foi pensada para simplificar desde a organização
                inicial até o acompanhamento da viagem em tempo real. Tudo
                acontece de forma integrada, visual e fácil de consultar.
              </p>
            </div>

            <div className="video-shell">
              <div className="video-card">
                <div className="video-person">
                  <div className="head" />
                  <div className="body-shape" />
                  <div className="mic" />
                </div>
                <button
                  className="play-button"
                  type="button"
                  aria-label="Reproduzir vídeo"
                >
                  ▶
                </button>
              </div>

              <div className="steps">
                <article>
                  <span>1</span>
                  <h3>Você informa os dados da viagem</h3>
                  <p>
                    Destino, datas, preferências, orçamento e contexto da
                    jornada. A partir disso, a experiência começa a ser
                    estruturada com mais inteligência e personalização.
                  </p>
                </article>
                <article>
                  <span>2</span>
                  <h3>A plataforma organiza tudo pra você</h3>
                  <p>
                    A Odinni centraliza montagem de roteiros, mapas, voos,
                    hospedagem, vouchers, documentos oficiais e controle
                    financeiro em uma mesma estrutura.
                  </p>
                </article>
                <article>
                  <span>3</span>
                  <h3>Tudo ganha visualização clara</h3>
                  <p>
                    Em vez de dados soltos, você passa a enxergar sua viagem em
                    uma linha do tempo lógica, acessível e fácil de acompanhar.
                  </p>
                </article>
                <article>
                  <span>4</span>
                  <h3>Você viaja com mais controle e menos atrito</h3>
                  <p>
                    As informações ficam reunidas em um ambiente pensado para
                    consulta rápida, tomada de decisão e acompanhamento da
                    jornada em tempo real.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits section" id="benefits">
          <div className="section-title centered">
            <h2>
              Tudo muda <span>quando sua viagem dos sonhos</span>
              <br />
              deixa de ser um quebra-cabeça!
            </h2>
            <p>
              Mais do que organizar informações, a Odinni muda a forma como você
              vive o planejamento da viagem. O resultado é uma experiência mais
              leve, prática e segura.
            </p>
          </div>

          <BenefitCarousel>
            {benefitCarouselSlides.map((slide) => (
              <article key={slide.src} className="benefit-card">
                <div className="benefit-image">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    // fill?
                    // sizes?="(max-width: 760px) 230px, (max-width: 980px) 250px, clamp(250px, 22vw, 310px)"
                    width={310}
                    height={350}
                    className="benefit-image-photo"
                    draggable={false}
                  />
                </div>
                <h3 className="benefit-caption">{slide.caption}</h3>
                <p>{slide.text}</p>
              </article>
            ))}
          </BenefitCarousel>
        </section>

        <section className="pricing" id="pricing">
          <div className="pricing-mark" aria-hidden="true">
            <Image
              src="/assets/logo-redondo.png"
              alt=""
              width={300}
              height={300}
              className="pricing-mark-img"
            />
          </div>
          <h2>
            Escolha o plano ideal para
            <br />a sua forma de viajar
          </h2>
          <div className="pricing-grid">
            <article className="plan-card featured">
              <h3>Essencial</h3>
              <p>
                Roteiros e informações reunidos para viajar sem perder o foco no
                básico.
              </p>
              <strong>
                R$ 9,90 <span>/mês</span>
              </strong>
              <ul>
                <li>Roteiros ilimitados</li>
                <li>Centralização de informações</li>
                <li>Armazenamento de documentos</li>
                <li>Acesso simples durante a viagem</li>
                <li>Links não clicáveis</li>
                <li>Sem alertas</li>
                <li>Sem colaboração</li>
              </ul>
              <a href="#footer">Assinar agora</a>
            </article>
            <article className="plan-card">
              <span className="popular">Mais popular</span>
              <h3>Planejador</h3>
              <p>
                Mais praticidade com links rápidos, alertas de voo e colaboração
                leve entre duas pessoas.
              </p>
              <strong>
                R$ 19,90 <span>/mês</span>
              </strong>
              <ul>
                <li>Tudo do Essencial</li>
                <li>
                  Links clicáveis (acesso rápido a reservas, mapas e ingressos)
                </li>
                <li>Integração com documentações oficiais (Sherpa)</li>
                <li>Alertas de voo</li>
                <li>Listas do que levar para cada viagem</li>
                <li>Colaboração (básica) com 1 usuário adicional</li>
                <li>Comentários no roteiro</li>
              </ul>
              <a href="#footer">Em breve</a>
            </article>
            <article className="plan-card">
              <h3>Explorer</h3>
              <p>
                Tudo para viagens em grupo, com edição conjunta e visão sobre
                clima e imprevistos.
              </p>
              <strong>
                R$ 29,90 <span>/mês</span>
              </strong>
              <ul>
                <li>Tudo do Planejador</li>
                <li>Até 5 usuários</li>
                <li>
                  Edição colaborativa: votação de lugares, divisão de tarefas e
                  divisão de gastos
                </li>
                <li>Alertas de clima no destino</li>
                <li>Alertas de cancelamento, atraso e overbooking</li>
                <li>Controle de gastos (TravelSpend)</li>
                <li>Rede de afiliados (descontos e benefícios — em breve)</li>
              </ul>
              <a href="#footer">Em breve</a>
            </article>
          </div>
        </section>

        <section className="social-faq section" id="faq">
          <div className="instagram-block">
            <h2>
              Siga nosso Instagram
              <br />e acompanhe tudo!
            </h2>
            <div>
              <div
                className="elfsight-app-5632d7e2-d23e-4bdd-99cc-d3f774361b5b"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>

          <div className="faq-list">
            {landingFaqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p className="faq-panel">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="testimonial-track">
            {testimonialSlides.map((slide, index) => (
              <article key={`testimonial-${index}`}>
                <div className="avatar">
                  <Image
                    src={slide.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 75vw, 220px"
                    className="avatar-photo"
                  />
                </div>
                <div className="stars" aria-hidden="true">
                  ★★★★★
                </div>
                <h3>{slide.name}</h3>
                <p>{slide.quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tickets section">
          <div className="ticket-banner">
            <h2>
              Adquira aqui os ingressos para as melhores atrações do mundo todo!
            </h2>
            <span>Em breve</span>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-brand">
          <a
            className="brand brand-footer-logo"
            href="#hero"
            aria-label="Odinni"
          >
            <Image
              src="/assets/logo-branco.png"
              alt=""
              width={400}
              height={100}
              className="brand-footer-logo-img"
              sizes="(max-width: 760px) 160px, 200px"
            />
          </a>
        </div>
        <div>
          <h3>Links rápidos</h3>
          <a href="#hero">Home</a>
          <a href="#pricing">Planos</a>
          <a href="#faq">Perguntas Frequentes</a>
          <a href="#footer">Como funciona</a>
        </div>
        <div>
          <h3>Contatos</h3>
          <p>48 99999-1234</p>
          <p>odinni.app@gmail.com</p>
          <p>00.000.000/0001-00</p>
        </div>
      </footer>
    </>
  );
}
