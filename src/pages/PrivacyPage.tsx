import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { company, companyLinks } from '../data/company'

export function PrivacyPage() {
  useEffect(() => {
    const defaultTitle = document.title
    document.title = `Política de Privacidade | ${company.name}`
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = `${window.location.origin}/politica-de-privacidade`
    return () => {
      document.title = defaultTitle
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header privacyPage />
      <main id="conteudo" className="privacy">
        <section className="privacy__hero">
          <div className="container privacy__hero-inner">
            <p className="eyebrow eyebrow--gold">Transparência</p>
            <h1>Política de Privacidade</h1>
            <p>Informações claras sobre o funcionamento deste site e os canais de contato da Distribuidora Robaski.</p>
          </div>
        </section>

        <article className="container privacy__content">
          <p className="privacy__updated">Última atualização: 16 de setembro de 2026.</p>

          <section>
            <h2>1. Sobre este site</h2>
            <p>
              Este é o site institucional da {company.name}. Ele apresenta informações sobre a empresa e oferece links para contato por WhatsApp, telefone e e-mail. Nesta versão, o site não possui formulários, criação de contas, área restrita ou banco de dados próprio para armazenar informações de visitantes.
            </p>
          </section>

          <section>
            <h2>2. Dados e navegação</h2>
            <p>
              O site não solicita dados pessoais diretamente e não utiliza ferramentas próprias de análise de comportamento ou publicidade. Informações técnicas básicas, como endereço IP e registros de acesso, podem ser processadas temporariamente pelo serviço de hospedagem para disponibilizar e proteger o site, conforme as práticas desse fornecedor.
            </p>
          </section>

          <section>
            <h2>3. Contato por WhatsApp, telefone ou e-mail</h2>
            <p>
              Ao escolher entrar em contato, você será direcionado ao WhatsApp, ao aplicativo de telefone ou ao seu serviço de e-mail. As informações enviadas nesses canais são fornecidas por você e tratadas para responder à sua solicitação e manter a comunicação comercial quando necessário.
            </p>
            <p>
              Esses serviços possuem suas próprias políticas e condições de uso. Recomendamos consultá-las para entender como cada plataforma trata seus dados.
            </p>
          </section>

          <section>
            <h2>4. Links externos</h2>
            <p>
              Este site contém links para serviços externos, como WhatsApp e Google Maps. Ao acessar esses links, o tratamento de informações passa a seguir as regras do respectivo serviço.
            </p>
          </section>

          <section>
            <h2>5. Atualizações desta política</h2>
            <p>
              Esta política poderá ser atualizada se novas funcionalidades, formulários, ferramentas de análise ou integrações forem adicionados ao site. A data da versão mais recente será informada no início desta página.
            </p>
          </section>

          <section>
            <h2>6. Fale conosco</h2>
            <p>
              Em caso de dúvidas sobre esta política ou sobre o contato realizado com a empresa, fale com a {company.name} pelo e-mail <a href={companyLinks.email}>{company.email}</a> ou pelo WhatsApp <a href={companyLinks.whatsapp} target="_blank" rel="noreferrer">{company.phoneDisplay}</a>.
            </p>
          </section>

          <a className="privacy__back" href="/">← Voltar para o início</a>
        </article>
      </main>
      <Footer />
    </>
  )
}
