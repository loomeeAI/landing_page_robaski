export const company = {
  name: 'Distribuidora Robaski',
  shortName: 'Robaski',
  legalName: 'EDSON RONALDO ROBASKI',
  taxId: '00.746.618/0001-03',
  foundationYear: 1995,
  business: 'Comércio Atacadista',
  phoneDisplay: '+55 51 99988-3684',
  phoneHref: 'tel:+5551999883684',
  whatsappNumber: '5551999883684',
  whatsappMessage:
    'Olá! Vim através do site da Distribuidora Robaski e gostaria de mais informações.',
  email: 'edson@robaski.com.br',
  address: {
    street: 'Rua Cristóvão Colombo, 201, térreo',
    neighborhood: 'Piratini',
    city: 'Sapucaia do Sul',
    state: 'RS',
    country: 'Brasil',
    postalCode: '93216-130',
    postalLabel: 'Sapucaia do Sul/RS — CEP 93216-130',
  },
} as const

export const site = {
  canonicalOrigin: 'https://robaski.com.br',
  socialImagePath: '/robaski-compartilhamento-2026.jpg',
} as const

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Robaski', href: '#empresa' },
  { label: 'Operação', href: '#operacao' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
] as const

const fullAddress = `${company.address.street}, ${company.address.neighborhood}, ${company.address.city} - ${company.address.state}, ${company.address.country}`

export const companyLinks = {
  whatsapp: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`,
  email: `mailto:${company.email}`,
  phone: company.phoneHref,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
} as const
