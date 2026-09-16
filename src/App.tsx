import { useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'

const isPrivacyPage = window.location.pathname.replace(/\/$/, '') === '/politica-de-privacidade'

export default function App() {
  useEffect(() => {
    const socialImages = document.querySelectorAll<HTMLMetaElement>(
      'meta[property="og:image"], meta[name="twitter:image"]',
    )
    socialImages.forEach((meta) => {
      meta.content = `${window.location.origin}/og.jpg`
    })

    if (!isPrivacyPage) {
      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (canonical) canonical.href = `${window.location.origin}/`
    }
  }, [])

  return isPrivacyPage ? <PrivacyPage /> : <HomePage />
}
