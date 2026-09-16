import { companyLinks } from '../data/company'
import { Logo } from './Logo'

type HeaderProps = {
  privacyPage?: boolean
}

export function Header({ privacyPage = false }: HeaderProps) {
  const homePrefix = privacyPage ? '/' : ''

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="header__brand" href="/" aria-label="Distribuidora Robaski — início">
          <Logo />
        </a>
        <nav className="header__nav" aria-label="Navegação principal">
          <a href={`${homePrefix}#empresa`}>Empresa</a>
          <a href={`${homePrefix}#atuacao`}>Atuação</a>
          <a href={`${homePrefix}#contato`}>Contato</a>
        </nav>
        <a
          className="button button--header"
          href={companyLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a Distribuidora Robaski pelo WhatsApp"
        >
          Falar no WhatsApp
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}
