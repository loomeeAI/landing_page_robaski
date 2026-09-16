import { useEffect, useState } from 'react'
import { companyLinks, navigation } from '../data/company'
import { Logo } from './Logo'

type HeaderProps = {
  privacyPage?: boolean
}

export function Header({ privacyPage = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const homePrefix = privacyPage ? '/' : ''

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={`site-header${menuOpen ? ' site-header--open' : ''}`}>
      <div className="container header__inner">
        <a className="header__brand" href="/" aria-label="Distribuidora Robaski — início">
          <Logo compact />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={`${homePrefix}${item.href}`}>{item.label}</a>
          ))}
        </nav>

        <a
          className="button button--header"
          href={companyLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Falar com a Robaski <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
          <div className="container mobile-nav__inner">
            {navigation.map((item, index) => (
              <a key={item.href} href={`${homePrefix}${item.href}`} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
              </a>
            ))}
            <a className="mobile-nav__cta" href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
              Falar com a Robaski <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
