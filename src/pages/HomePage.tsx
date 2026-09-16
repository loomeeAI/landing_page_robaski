import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { company, companyLinks } from '../data/company'

const operationSteps = [
  { number: '01', title: 'Relacionamento comercial', text: 'Proximidade para compreender demandas e manter uma comunicação direta.' },
  { number: '02', title: 'Organização dos pedidos', text: 'Atenção às informações que dão sequência ao fluxo da operação.' },
  { number: '03', title: 'Distribuição', text: 'Processos conectados para conduzir cada pedido até a etapa logística.' },
  { number: '04', title: 'Logística', text: 'Organização de rotas e etapas para manter a distribuição em movimento.' },
  { number: '05', title: 'Entrega', text: 'O compromisso que conclui a operação e fortalece cada parceria.' },
] as const

const logisticsPrinciples = [
  { title: 'Compromisso', text: 'Responsabilidade em cada etapa da operação.' },
  { title: 'Agilidade', text: 'Uma operação organizada para manter o fluxo da distribuição.' },
  { title: 'Qualidade', text: 'Atenção aos processos e à experiência de atendimento.' },
  { title: 'Parceria', text: 'Relações comerciais construídas com proximidade e confiança.' },
] as const

const commercialPillars = [
  { number: '01', title: 'Representação comercial', text: 'Relacionamento e presença na condução de cada negociação.' },
  { number: '02', title: 'Atendimento', text: 'Comunicação próxima para orientar e dar sequência às demandas.' },
  { number: '03', title: 'Distribuição', text: 'Integração entre a operação comercial e a etapa de entrega.' },
] as const

const culturePrinciples = ['Foco', 'Organização', 'Evolução', 'Trabalho em equipe'] as const

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.4-1.7a12 12 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.4Zm-8.3 18.2h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.3-.4.3-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6L9 7c-.2-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2.8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4l-.7-.3Z" />
    </svg>
  )
}

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__linework" aria-hidden="true"><span /><span /><span /></div>
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--gold">Distribuidora Robaski <span>•</span> Desde 1995</p>
              <h1 id="hero-title">Distribuição que <em>move</em> negócios.</h1>
              <p className="hero__lead">
                Há mais de três décadas, a Robaski conecta operação comercial, logística e entrega para atender seus clientes com agilidade, compromisso e proximidade.
              </p>
              <div className="hero__actions">
                <a className="button button--gold" href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
                  Falar no WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <a className="button button--link" href="#empresa">
                  Conhecer a Robaski <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero__graphic" role="img" aria-label="Mais de 30 anos de história">
              <div className="hero__orbit hero__orbit--outer" />
              <div className="hero__orbit hero__orbit--inner" />
              <div className="hero__year">
                <span>Desde</span>
                <strong>1995</strong>
                <small>Tradição em movimento</small>
              </div>
              <p className="hero__vertical">Comércio atacadista · Sapucaia do Sul/RS</p>
            </div>
          </div>
          <div className="hero__scroll" aria-hidden="true"><span /> Continue</div>
        </section>

        <section className="trust-strip" aria-label="Informações principais">
          <div className="container trust-strip__inner">
            <p>Desde 1995</p><span />
            <p>Comércio atacadista</p><span />
            <p>Logística e distribuição</p><span />
            <p>Sapucaia do Sul / RS</p>
          </div>
        </section>

        <section className="section about" id="empresa" aria-labelledby="about-title">
          <div className="container about__inner">
            <div className="section-heading">
              <p className="eyebrow">A Robaski</p>
              <h2 id="about-title">Uma trajetória construída <em>em movimento.</em></h2>
            </div>
            <div className="about__content">
              <p className="about__lead">
                A {company.name} atua desde {company.foundationYear} no comércio atacadista, construindo sua trajetória através de uma operação comercial próxima, organizada e comprometida com cada etapa da distribuição.
              </p>
              <p>
                Da relação com clientes à logística de entrega, a empresa mantém o foco em eficiência, evolução constante e confiança nas relações comerciais.
              </p>
              <div className="about__marker">
                <span>30+</span>
                <p>anos de uma história construída com trabalho e continuidade.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section operation" id="operacao" aria-labelledby="operation-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Nossa operação</p>
                <h2 id="operation-title">Da venda à entrega, <em>cada etapa importa.</em></h2>
              </div>
              <p>Uma sequência coordenada para manter a operação comercial e logística em movimento.</p>
            </div>

            <ol className="operation-flow">
              {operationSteps.map((step) => (
                <li key={step.number}>
                  <span className="operation-flow__number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section logistics" id="diferenciais" aria-labelledby="logistics-title">
          <div className="logistics__route" aria-hidden="true" />
          <div className="container logistics__inner">
            <div className="logistics__intro">
              <p className="eyebrow eyebrow--gold">Logística Robaski</p>
              <h2 id="logistics-title">Entrega é <em>prioridade.</em></h2>
              <p className="logistics__lead">Uma distribuição eficiente depende de organização, agilidade e compromisso em cada rota.</p>
              <p>A operação da Robaski mantém a entrega como uma etapa central da relação com seus clientes.</p>
            </div>

            <div className="principles">
              {logisticsPrinciples.map((principle, index) => (
                <article className="principle" key={principle.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-statement" aria-label="Compromisso da Robaski">
          <div className="brand-statement__arc" aria-hidden="true" />
          <div className="container brand-statement__inner">
            <p>Mais que entregar produtos,</p>
            <h2>entregamos <em>confiança</em><br />e parceria.</h2>
          </div>
        </section>

        <section className="section commercial" aria-labelledby="commercial-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Atendimento comercial</p>
                <h2 id="commercial-title">Relacionamento próximo em <em>cada negociação.</em></h2>
              </div>
              <p>A Robaski conta com uma operação comercial voltada ao relacionamento e atendimento de seus clientes, conectando representação, atendimento e distribuição.</p>
            </div>
            <div className="commercial__grid">
              {commercialPillars.map((pillar) => (
                <article key={pillar.number}>
                  <span>{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="culture" aria-labelledby="culture-title">
          <div className="container culture__inner">
            <div>
              <p className="eyebrow eyebrow--gold">Nossa forma de fazer</p>
              <h2 id="culture-title">Evoluir faz parte da nossa operação.</h2>
              <p>Disciplina, trabalho em equipe e melhoria contínua fazem parte da forma como a Robaski conduz sua operação.</p>
            </div>
            <ul>
              {culturePrinciples.map((principle, index) => (
                <li key={principle}><span>{String(index + 1).padStart(2, '0')}</span>{principle}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact" id="contato" aria-labelledby="contact-title">
          <div className="container contact__inner">
            <div className="contact__copy">
              <p className="eyebrow eyebrow--gold">Contato</p>
              <h2 id="contact-title">Vamos <em>conversar?</em></h2>
              <p>Entre em contato com a Distribuidora Robaski para informações comerciais e atendimento.</p>
              <div className="contact__actions">
                <a className="button button--gold" href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
                  Chamar no WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <a className="button button--outline" href={companyLinks.maps} target="_blank" rel="noreferrer">
                  Ver localização <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__heading">
                <p>{company.name}</p><span>Desde {company.foundationYear}</span>
              </div>
              <dl>
                <div><dt>Endereço</dt><dd>{company.address.street}<br />{company.address.neighborhood}<br />{company.address.postalLabel}</dd></div>
                <div><dt>Telefone / WhatsApp</dt><dd><a href={companyLinks.whatsapp} target="_blank" rel="noreferrer">{company.phoneDisplay}</a></dd></div>
                <div><dt>E-mail</dt><dd><a href={companyLinks.email}>{company.email}</a></dd></div>
              </dl>
              <a className="contact-card__map" href={companyLinks.maps} target="_blank" rel="noreferrer">Abrir no Google Maps <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a className="floating-whatsapp" href={companyLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="Chamar a Distribuidora Robaski no WhatsApp">
        <WhatsAppIcon /><span>WhatsApp</span>
      </a>
    </>
  )
}
