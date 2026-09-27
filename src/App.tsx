import { useEffect } from 'react'
import { site } from './data/company'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'

const isPrivacyPage = window.location.pathname.replace(/\/$/, '') === '/politica-de-privacidade'

const homeMetadata = {
  title: 'Distribuidora Robaski | Distribuição e Comércio Atacadista',
  description: 'Distribuidora Robaski. Desde 1995 atuando no comércio atacadista, distribuição e atendimento comercial a partir de Sapucaia do Sul, RS.',
}

export default function App() {
  useEffect(() => {
    const pageUrl = `${site.canonicalOrigin}${isPrivacyPage ? '/politica-de-privacidade' : '/'}`
    const socialImageUrl = `${site.canonicalOrigin}${site.socialImagePath}`
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = pageUrl

    document.querySelectorAll<HTMLMetaElement>('meta[property="og:image"], meta[property="og:image:secure_url"], meta[name="twitter:image"]').forEach((meta) => {
      meta.content = socialImageUrl
    })
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.content = pageUrl

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
