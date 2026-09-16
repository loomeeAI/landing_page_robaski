import { useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'

const isPrivacyPage = window.location.pathname.replace(/\/$/, '') === '/politica-de-privacidade'

const homeMetadata = {
  title: 'Distribuidora Robaski | Distribuição e Comércio Atacadista',
  description: 'Distribuidora Robaski. Desde 1995 atuando no comércio atacadista, distribuição e atendimento comercial a partir de Sapucaia do Sul, RS.',
}

export default function App() {
  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = `${window.location.origin}${isPrivacyPage ? '/politica-de-privacidade' : '/'}`

    document.querySelectorAll<HTMLMetaElement>('meta[property="og:image"], meta[name="twitter:image"]').forEach((meta) => {
      meta.content = `${window.location.origin}/og.jpg`
    })

    if (!isPrivacyPage) {
      document.title = homeMetadata.title
      document.querySelectorAll<HTMLMetaElement>('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => {
        meta.content = homeMetadata.title
      })
      document.querySelectorAll<HTMLMetaElement>('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => {
        meta.content = homeMetadata.description
      })
    }
  }, [])

  return isPrivacyPage ? <PrivacyPage /> : <HomePage />
}
