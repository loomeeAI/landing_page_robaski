export const company = {
  name: 'Distribuidora Robaski',
  shortName: 'Robaski',
  foundationYear: 1995,
  business: 'Comércio Atacadista',
  phoneDisplay: '+55 51 99988-3684',
  phoneHref: 'tel:+5551999883684',
  whatsappNumber: '5551999883684',
  whatsappMessage:
    'Olá! Vim através do site da Distribuidora Robaski e gostaria de mais informações.',
  email: 'edsonrobaski@gmail.com',
  address: {
    street: 'R. Cristóvão Colombo, 201',
    neighborhood: 'Piratini',
    city: 'Sapucaia do Sul',
    state: 'RS',
    country: 'Brasil',
    postalLabel: 'Sapucaia do Sul - RS',
  },
  socialLinks: {} as Record<string, string>,
} as const

const fullAddress = `${company.address.street}, ${company.address.neighborhood}, ${company.address.city} - ${company.address.state}, ${company.address.country}`

export const companyLinks = {
  whatsapp: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`,
  email: `mailto:${company.email}`,
  phone: company.phoneHref,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
} as const
