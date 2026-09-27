import { company, companyLinks, navigation } from '../data/company'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__rule" />
      <div className="container footer__main">
        <div className="footer__brand-block">
          <a href="/" aria-label="Distribuidora Robaski — início"><Logo /></a>
          <p>{company.name}</p>
          <span>Desde {company.foundationYear}.</span>
          <div className="footer__legal">
            <p>{company.name} — {company.legalName}</p>
            <p>CNPJ {company.taxId}</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Navegação do rodapé">
          <p className="footer__label">Navegação</p>
          {navigation.filter((item) => item.href !== '#diferenciais').map((item) => (
            <a key={item.href} href={`/${item.href}`}>{item.label}</a>
          ))}
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </nav>

        <div className="footer__contact">
          <p className="footer__label">Contato</p>
          <a href={companyLinks.phone}>{company.phoneDisplay}</a>
          <a href={companyLinks.email}>{company.email}</a>
          <address>
            {company.address.street}<br />
            Bairro {company.address.neighborhood}<br />
            {company.address.postalLabel}
          </address>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 {company.name}. Todos os direitos reservados.</p>
        <p>Desenvolvido por <span>Loomee</span></p>
      </div>
    </footer>
  )
}
