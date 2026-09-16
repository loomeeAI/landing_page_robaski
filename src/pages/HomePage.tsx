import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { company, companyLinks } from '../data/company'

const services = [
  {
    number: '01',
    title: 'Atendimento comercial',
    description:
      'Comunicação direta e prática para entender cada demanda e fornecer as informações necessárias.',
  },
  {
    number: '02',
    title: 'Distribuição',
    description:
      'Atuação no comércio atacadista com processos voltados à organização e à continuidade da operação.',
  },
  {
    number: '03',
    title: 'Entregas',
    description:
      'A atividade de distribuição é apoiada por uma estrutura operacional preparada para realizar entregas.',
  },
]

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--gold">Distribuidora Robaski <span>•</span> Desde 1995</p>
              <h1 id="hero-title">Distribuição que move negócios <em>desde 1995.</em></h1>
              <p className="hero__lead">
                Experiência, organização e compromisso no comércio atacadista, com atendimento a partir de Sapucaia do Sul/RS.
              </p>
              <div className="hero__actions">
                <a className="button button--gold" href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
                  Falar no WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <a className="button button--text-light" href="#empresa">
                  Conhecer a Robaski <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="hero__seal">
                <span>DESDE</span>
                <strong>1995</strong>
                <small>SAPUCAIA DO SUL • RS</small>
              </div>
              <div className="hero__line hero__line--one" />
              <div className="hero__line hero__line--two" />
              <div className="hero__square" />
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Informações principais">
          <div className="container trust-strip__inner">
            <div><strong>Desde 1995</strong><span>Uma história de trabalho</span></div>
            <div><strong>Mais de 30 anos</strong><span>de experiência</span></div>
            <div><strong>Comércio Atacadista</strong><span>Atuação comercial</span></div>
            <div><strong>Sapucaia do Sul / RS</strong><span>Onde estamos</span></div>
          </div>
        </section>

        <section className="section about" id="empresa" aria-labelledby="about-title">
          <div className="container about__inner">
            <div className="section-heading">
              <p className="eyebrow">Nossa trajetória</p>
              <h2 id="about-title">Experiência construída ao longo de décadas.</h2>
            </div>
            <div className="about__content">
              <p className="about__lead">
                A Distribuidora Robaski atua desde 1995 no comércio atacadista.
              </p>
              <p>
                Com uma trajetória construída ao longo de mais de três décadas, a empresa mantém seu foco em uma operação organizada, atendimento próximo e distribuição eficiente.
              </p>
              <div className="about__signature">
                <span aria-hidden="true" />
                <p><strong>{company.name}</strong><br />{company.address.postalLabel}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section operation" id="atuacao" aria-labelledby="operation-title">
          <div className="container">
            <div className="operation__header">
              <div className="section-heading">
                <p className="eyebrow">Nossa atuação</p>
                <h2 id="operation-title">Uma operação feita para distribuir.</h2>
              </div>
              <p>
                Uma estrutura comercial e operacional voltada ao dia a dia da distribuição atacadista.
              </p>
            </div>
            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.number}>
                  <span className="service__number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contato" aria-labelledby="contact-title">
          <div className="contact__accent" aria-hidden="true" />
          <div className="container contact__inner">
            <div className="contact__copy">
              <p className="eyebrow eyebrow--gold">Entre em contato</p>
              <h2 id="contact-title">Fale com a Robaski.</h2>
              <p>Entre em contato com nossa equipe para informações comerciais e atendimento.</p>
              <a className="button button--gold" href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
                Chamar no WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__top">
                <p className="contact-card__label">Distribuidora Robaski</p>
                <span>Desde 1995</span>
              </div>
              <address>
                <p>
                  <span>Endereço</span>
                  {company.address.street}<br />
                  {company.address.neighborhood}<br />
                  {company.address.postalLabel}
                </p>
              </address>
              <div className="contact-card__details">
                <p>
                  <span>WhatsApp</span>
                  <a href={companyLinks.whatsapp} target="_blank" rel="noreferrer">{company.phoneDisplay}</a>
                </p>
                <p>
                  <span>E-mail</span>
                  <a href={companyLinks.email}>{company.email}</a>
                </p>
              </div>
              <a className="map-link" href={companyLinks.maps} target="_blank" rel="noreferrer">
                Ver localização <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a
        className="floating-whatsapp"
        href={companyLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a Distribuidora Robaski no WhatsApp"
      >
        <span className="floating-whatsapp__dot" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  )
}
