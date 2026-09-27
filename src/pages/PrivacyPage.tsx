import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { company, companyLinks } from '../data/company'

export function PrivacyPage() {
  useEffect(() => {
    const title = `Política de Privacidade | ${company.name}`
    const description = `Política de privacidade do site institucional da ${company.name}.`
    document.title = title
    document.querySelectorAll<HTMLMetaElement>('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => {
      meta.content = description
    })
    document.querySelectorAll<HTMLMetaElement>('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => {
      meta.content = title
    })
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header privacyPage />
      <main id="conteudo" className="privacy">
        <section className="privacy__hero">
          <div className="privacy__arc" aria-hidden="true" />
          <div className="container privacy__hero-inner">
            <p className="eyebrow eyebrow--gold">Transparência</p>
            <h1>Política de <em>Privacidade</em></h1>
            <p>Informações claras sobre o funcionamento deste site e os canais de contato da Distribuidora Robaski.</p>
          </div>
        </section>

        <article className="container privacy__content">
          <p className="privacy__updated">Última atualização: 27 de setembro de 2026.</p>
          <p className="privacy__intro">A {company.name} respeita a privacidade de seus clientes, parceiros e visitantes e busca tratar dados pessoais de forma transparente e compatível com a legislação aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais — LGPD.</p>

          <section>
            <h2><span>01</span> Quem é responsável pelo tratamento dos dados</h2>
            <p>O responsável pelas informações tratadas no contexto deste site e do atendimento da empresa é:</p>
            <address className="privacy__company-data">
              <strong>{company.name}</strong><br />
              Razão social: {company.legalName}<br />
              CNPJ: {company.taxId}<br />
              Endereço: {company.address.street}, bairro {company.address.neighborhood}, {company.address.postalLabel}<br />
              Contato: <a href={companyLinks.email}>{company.email}</a>
            </address>
          </section>

          <section>
            <h2><span>02</span> Dados que podem ser utilizados</h2>
            <p>Dependendo da forma de contato e dos serviços utilizados, poderão ser tratados dados fornecidos voluntariamente pelo usuário, como nome, telefone, empresa, endereço de e-mail e informações enviadas durante uma solicitação ou conversa.</p>
            <p>No atendimento realizado pelo WhatsApp, também poderão ser processadas as informações necessárias para identificação do contato, encaminhamento da conversa e manutenção do atendimento, incluindo o número de telefone, nome apresentado no WhatsApp e conteúdo das mensagens trocadas.</p>
            <p>Nesta versão, o site não possui formulários, criação de contas, área restrita, analytics, pixels de publicidade ou banco de dados próprio para armazenar informações de visitantes. Informações técnicas básicas, como endereço IP e registros de acesso, podem ser processadas pelo serviço de hospedagem para disponibilizar e proteger o site. Arquivos de tipografia são carregados pelo Google Fonts, que também poderá processar dados técnicos necessários a esse acesso.</p>
          </section>

          <section>
            <h2><span>03</span> Para que os dados são utilizados</h2>
            <p>Os dados poderão ser utilizados para responder solicitações de contato, prestar atendimento, fornecer informações sobre produtos e serviços, organizar comunicações comerciais solicitadas pelo usuário, dar continuidade a negociações ou relacionamentos comerciais, manter registros necessários do atendimento, garantir a segurança e o funcionamento dos serviços e cumprir obrigações legais ou regulatórias quando aplicável.</p>
          </section>

          <section>
            <h2><span>04</span> Atendimento pelo WhatsApp e Interattiva Connect</h2>
            <p>A {company.name} poderá utilizar o WhatsApp como um de seus canais de atendimento.</p>
            <p>Para possibilitar a comunicação e a gestão dessas conversas, poderão ser utilizados serviços disponibilizados pelo WhatsApp e pela Meta, além da plataforma Interattiva Connect e de outros fornecedores de tecnologia estritamente necessários à operação. Esses serviços poderão processar determinadas informações necessárias para envio, recebimento, organização e gerenciamento das mensagens.</p>
            <p>A utilização dessas plataformas estará sujeita também aos respectivos termos e políticas de privacidade dos fornecedores envolvidos.</p>
          </section>

          <section>
            <h2><span>05</span> Compartilhamento de informações</h2>
            <p>Os dados poderão ser compartilhados somente quando necessário para a prestação dos serviços ou o funcionamento dos canais de atendimento, inclusive com fornecedores de infraestrutura e tecnologia utilizados pela empresa.</p>
            <p>No contexto do WhatsApp, poderão participar desse tratamento empresas responsáveis pela infraestrutura do WhatsApp e da Meta, bem como a Interattiva Connect quando utilizada para operacionalizar o atendimento.</p>
            <p>A {company.name} não comercializa dados pessoais.</p>
          </section>

          <section>
            <h2><span>06</span> Conservação dos dados</h2>
            <p>Os dados serão mantidos somente durante o período necessário para cumprir as finalidades para as quais foram coletados, atender obrigações legais ou regulatórias, preservar registros necessários à operação e permitir o exercício regular de direitos.</p>
            <p>Os períodos de conservação podem variar de acordo com a natureza das informações e a finalidade do tratamento.</p>
          </section>

          <section>
            <h2><span>07</span> Direitos do titular</h2>
            <p>Nos termos da legislação aplicável, o titular poderá solicitar, quando cabível, confirmação sobre a existência de tratamento de seus dados, acesso, correção de informações incompletas ou desatualizadas, informações sobre compartilhamentos realizados e eliminação ou interrupção de determinados tratamentos quando permitidos pela legislação.</p>
            <p>Solicitações relacionadas à privacidade podem ser encaminhadas para <a href={companyLinks.email}>{company.email}</a>.</p>
          </section>

          <section>
            <h2><span>08</span> Interrupção de comunicações</h2>
            <p>Caso uma pessoa não queira mais receber determinadas comunicações da {company.name}, poderá solicitar a interrupção diretamente durante o atendimento pelo WhatsApp ou pelo e-mail <a href={companyLinks.email}>{company.email}</a>.</p>
          </section>

          <section>
            <h2><span>09</span> Segurança</h2>
            <p>A {company.name} busca adotar medidas técnicas e administrativas compatíveis com sua operação para proteger informações contra acesso não autorizado, perda, alteração ou divulgação indevida.</p>
            <p>Nenhum sistema conectado à internet pode garantir segurança absoluta, razão pela qual as medidas adotadas poderão ser continuamente revisadas e aprimoradas.</p>
          </section>

          <section>
            <h2><span>10</span> Alterações nesta Política</h2>
            <p>Esta Política de Privacidade poderá ser atualizada para acompanhar mudanças nos serviços, tecnologias utilizadas ou requisitos legais.</p>
            <p>A versão mais recente permanecerá disponível neste site com a respectiva data de atualização.</p>
          </section>

          <section>
            <h2><span>11</span> Contato</h2>
            <p>Para dúvidas relacionadas a esta Política de Privacidade ou ao tratamento de dados pessoais:</p>
            <address className="privacy__company-data">
              <strong>{company.name}</strong><br />
              {company.legalName}<br />
              CNPJ: {company.taxId}<br />
              E-mail: <a href={companyLinks.email}>{company.email}</a><br />
              Endereço: {company.address.street}, bairro {company.address.neighborhood}, {company.address.postalLabel}
            </address>
          </section>

          <a className="privacy__back" href="/">← Voltar para o início</a>
        </article>
      </main>
      <Footer />
    </>
  )
}
