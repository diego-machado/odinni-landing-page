import Image from "next/image";

import { BenefitCarousel } from "@/components/BenefitCarousel";
import { benefitCarouselSlides } from "@/lib/benefit-carousel";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Odinni">
          <span className="brand-mark">o</span>
          <span>odinni</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegacao principal">
          <a href="#how-it-works">Como funciona</a>
          <a href="#pricing">Planos</a>
          <a href="#footer">Contato</a>
        </nav>
        <a className="nav-cta" href="#pricing">
          Testar gratis
        </a>
        <button className="menu-button" type="button" aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <h1>Sua viagem inteira, organizada em uma timeline inteligente.</h1>
            <p>
              Roteiros, voos, hospedagem, vouchers, documentos e gastos em um so
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
              Quem ama viajar sabe: o problema nao e sonhar com o destino. O
              problema e transformar esse sonho em uma jornada organizada, sem
              perder tempo, dinheiro e informacoes importantes no caminho.
            </p>
          </article>

          <article className="goodbye-card">
            <h2>Com a Odinni voce diz adeus a:</h2>
            <ul>
              <li>Informacoes espalhadas em varios sites e apps</li>
              <li>Comparacao manual de precos</li>
              <li>Risco de perder promocoes e melhores condicoes</li>
              <li>Falta de personalizacao ao montar a sua viagem</li>
              <li>Tempo demais investido em pesquisa.</li>
            </ul>
          </article>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="video-section">
            <div className="section-title split-title">
              <h2>Veja como a Odinni funciona na pratica!</h2>
              <p>
                A Odinni foi pensada para simplificar desde a organizacao
                inicial ate o acompanhamento da viagem em tempo real. Tudo
                acontece de forma integrada, visual e facil de consultar.
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
                  aria-label="Reproduzir video"
                >
                  ▶
                </button>
              </div>

              <div className="steps">
                <article>
                  <span>1</span>
                  <h3>Voce informa os dados da viagem</h3>
                  <p>
                    Destino, datas, preferencias, orcamento e contexto da
                    jornada. A partir disso, a experiencia comeca a ser
                    estruturada com mais inteligencia e personalizacao.
                  </p>
                </article>
                <article>
                  <span>2</span>
                  <h3>A plataforma organiza tudo pra voce</h3>
                  <p>
                    A Odinni centraliza montagem de roteiros, mapas, voos,
                    hospedagem, vouchers, documentos oficiais e controle
                    financeiro em uma mesma estrutura.
                  </p>
                </article>
                <article>
                  <span>3</span>
                  <h3>Tudo ganha visualizacao clara</h3>
                  <p>
                    Em vez de dados soltos, voce passa a enxergar sua viagem em
                    uma linha do tempo logica, acessivel e facil de acompanhar.
                  </p>
                </article>
                <article>
                  <span>4</span>
                  <h3>Voce viaja com mais controle e menos atrito</h3>
                  <p>
                    As informacoes ficam reunidas em um ambiente pensado para
                    consulta rapida, tomada de decisao e acompanhamento da
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
              deixa de ser um quebra-cabeca!
            </h2>
            <p>
              Mais do que organizar informacoes, a Odinni muda a forma como voce
              vive o planejamento da viagem. O resultado e uma experiencia mais
              leve, pratica e segura.
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
            o
          </div>
          <h2>
            Escolha o plano ideal para
            <br />a sua forma de viajar
          </h2>
          <div className="pricing-grid">
            <article className="plan-card">
              <h3>Essencial</h3>
              <p>
                Para quem quer sair do caos e comecar a organizar a viagem de
                forma inteligente.
              </p>
              <strong>
                R$ 9,90 <span>mensal</span>
              </strong>
              <ul>
                <li>Organizacao central da jornada</li>
                <li>Acesso a uma experiencia mais pratica</li>
                <li>Entrada acessivel para planejar</li>
                <li>Assistente de viagem com IA</li>
              </ul>
              <a href="#footer">Assinar agora</a>
            </article>
            <article className="plan-card featured">
              <span className="popular">Mais popular</span>
              <h3>Planejador</h3>
              <p>
                Para quem quer mais profundidade, mais inteligencia e mais
                dominio sobre cada etapa da viagem.
              </p>
              <strong>
                R$ 9,90 <span>mensal</span>
              </strong>
              <ul>
                <li>Mais recursos para quem planeja com frequencia</li>
                <li>Melhor estrutura para acompanhar detalhes</li>
                <li>
                  Ideal para quem quer transformar planejamento em processo
                </li>
                <li>Assistente de viagem com IA</li>
              </ul>
              <a href="#footer">Assinar agora</a>
            </article>
            <article className="plan-card">
              <h3>Explorer</h3>
              <p>
                Para quem quer a experiencia mais completa da Odinni e leva
                gestao de viagem a serio.
              </p>
              <strong>
                R$ 9,90 <span>mensal</span>
              </strong>
              <ul>
                <li>Camada mais completa da plataforma</li>
                <li>Mais possibilidades para jornadas complexas</li>
                <li>Mais controle para quem viaja com maxima autonomia</li>
                <li>Assistente de viagem com IA</li>
              </ul>
              <a href="#footer">Assinar agora</a>
            </article>
          </div>
        </section>

        <section className="social-faq section" id="faq">
          <div className="instagram-block">
            <h2>
              Siga nosso Instagram
              <br />e acompanhe tudo!
            </h2>
            <div className="insta-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="faq-list">
            <details open>
              <summary>O que a Odinni organiza em uma viagem?</summary>
              <p className="faq-panel">
                A Odinni foi pensada para centralizar roteiros, mapas, voos,
                hospedagem, vouchers, documentos oficiais e controle financeiro
                em uma timeline unica.
              </p>
            </details>
            <details>
              <summary>A Odinni serve so para viajantes solo?</summary>
              <p className="faq-panel">
                Serve para viajantes solo, casais, familias e grupos pequenos.
              </p>
            </details>
            <details>
              <summary>
                A plataforma tem inteligencia artificial desde o inicio?
              </summary>
              <p className="faq-panel">
                Sim. A IA atua como assistente para organizar e priorizar
                informacoes.
              </p>
            </details>
            <details>
              <summary>Qual e o principal diferencial da Odinni?</summary>
              <p className="faq-panel">
                A combinacao de planejamento, timeline, documentos e gastos no
                mesmo lugar.
              </p>
            </details>
            <details>
              <summary>Quanto custa para comecar?</summary>
              <p className="faq-panel">
                Os planos do esboco partem de R$ 9,90 mensais.
              </p>
            </details>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="testimonial-track">
            <article>
              <div className="avatar avatar-1" />
              <div className="stars">★★★★★</div>
              <h3>Camille Farias</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article>
              <div className="avatar avatar-2" />
              <div className="stars">★★★★★</div>
              <h3>Carlos Costa</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article>
              <div className="avatar avatar-3" />
              <div className="stars">★★★★★</div>
              <h3>Diego Machado</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article>
              <div className="avatar avatar-2" />
              <div className="stars">★★★★★</div>
              <h3>Carlos Costa</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article>
              <div className="avatar avatar-3" />
              <div className="stars">★★★★★</div>
              <h3>Diego Machado</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </div>
        </section>

        <section className="tickets section">
          <div className="ticket-banner">
            <h2>
              Adquira aqui os ingressos para as melhores atracoes do mundo todo!
            </h2>
            <span>Em breve</span>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-brand">
          <a className="brand" href="#hero">
            <span className="brand-mark">o</span>
            <span>odinni</span>
          </a>
          <p>Viagem inteligente</p>
        </div>
        <div>
          <h3>Links rapidos</h3>
          <a href="#hero">Home</a>
          <a href="#pricing">Planos</a>
          <a href="#faq">Perguntas Frequentes</a>
          <a href="#footer">Como funciona</a>
        </div>
        <div>
          <h3>Contatos</h3>
          <p>48 99999-1234</p>
          <p>email@email.com</p>
          <p>55.555.555/0001-55</p>
        </div>
        <form className="newsletter">
          <h3>Newsletter</h3>
          <label htmlFor="newsletter-email">
            <span>Insira seu e-mail aqui</span>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Insira seu e-mail aqui"
              autoComplete="email"
            />
          </label>
          <button type="submit">Inscrever</button>
        </form>
      </footer>
    </>
  );
}
