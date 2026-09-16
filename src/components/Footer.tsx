import { company, companyLinks } from '../data/company'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__main">
        <div className="footer__brand-block">
          <a href="/" aria-label="Distribuidora Robaski — início">
            <Logo inverse />
          </a>
          <p>{company.name}</p>
          <span>Desde {company.foundationYear}.</span>
        </div>

        <div className="footer__contact">
          <p className="footer__label">Contato</p>
          <a href={companyLinks.phone}>{company.phoneDisplay}</a>
          <a href={companyLinks.email}>{company.email}</a>
          <address>
            {company.address.street}<br />
            {company.address.neighborhood}, {company.address.postalLabel}
          </address>
        </div>

        <nav className="footer__nav" aria-label="Navegação do rodapé">
          <p className="footer__label">Navegação</p>
          <a href="/#inicio">Início</a>
          <a href="/#empresa">Empresa</a>
          <a href="/#contato">Contato</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 {company.name}. Todos os direitos reservados.</p>
        <p>Desenvolvido por <span>Loomee</span></p>
      </div>
    </footer>
  )
}
