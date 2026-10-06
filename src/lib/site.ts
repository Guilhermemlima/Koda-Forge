/* Dados do site usados em mais de um lugar (metadata, sitemap, robots,
   schema.org, rodapé). Antes a URL e o telefone estavam repetidos em vários
   arquivos, o que é como o banner de promoção ficou desatualizado. */

export const SITE_URL = 'https://kodaforge.com.br'

export const PHONE_DISPLAY = '(42) 99125-0274'
/** Formato E.164, exigido por links tel: e pelo schema.org */
export const PHONE_E164 = '+5542991250274'
export const PHONE_HREF = `tel:${PHONE_E164}`

export const WHATSAPP_NUMBER = '5542991250274'
export const EMAIL = 'kodaforge2026@gmail.com'

export const CITY = 'Guarapuava'
export const STATE = 'PR'

/* Endereço. Dados do CEP 85010-280, conferidos no ViaCEP e na BrasilAPI.

   STREET_NUMBER vazio é decisão, não pendência: publicamos rua, bairro e
   CEP, que já bastam para o Google entender a região, sem expor o número.
   O mapa mostra o trecho da rua em vez de um ponto exato — é o esperado.
   Se um dia houver endereço comercial, basta preencher a constante que o
   endereço visível, o schema.org e o mapa se ajustam sozinhos. */
export const STREET = 'Rua Presidente Getúlio Vargas'
export const STREET_NUMBER = ''
export const NEIGHBORHOOD = 'Centro'
export const POSTAL_CODE = '85010-280'
export const GEO = { lat: -25.39048, lng: -51.46541 }

/** Linha do endereço como o visitante lê. */
export const ADDRESS_LINE = [STREET, STREET_NUMBER].filter(Boolean).join(', ')

/** Endereço completo, para o schema.org e para a busca do mapa. */
export const ADDRESS_FULL =
  `${ADDRESS_LINE} - ${NEIGHBORHOOD}, ${CITY} - ${STATE}, ${POSTAL_CODE}`

/** Incorporação do Google Maps. O output=embed dispensa chave de API. */
export const MAPS_EMBED_URL =
  `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_FULL)}&output=embed`

/** Link para abrir o mapa fora do site. */
export const MAPS_LINK =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_FULL)}`

/** Todas as rotas públicas. Alimenta o sitemap. */
export const ROUTES = [
  { path: '/',             priority: 1.0,  changeFrequency: 'weekly'  },
  { path: '/servicos',     priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/precos',       priority: 0.9,  changeFrequency: 'weekly'  },
  { path: '/portfolio',    priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/contato',      priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/comparativo',  priority: 0.7,  changeFrequency: 'monthly' },
  { path: '/depoimentos',  priority: 0.6,  changeFrequency: 'monthly' },
  { path: '/faq',          priority: 0.6,  changeFrequency: 'monthly' },
  { path: '/indicacao',    priority: 0.6,  changeFrequency: 'monthly' },
  { path: '/blog',         priority: 0.7,  changeFrequency: 'weekly'  },
  { path: '/blog/por-que-seu-negocio-em-guarapuava-precisa-de-um-site-profissional', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/blog/5-sinais-de-que-seu-site-esta-perdendo-clientes',                   priority: 0.6, changeFrequency: 'yearly' },
  { path: '/portfolio/moraes-concreto-e-fundacoes',                                  priority: 0.5, changeFrequency: 'yearly' },
  { path: '/politica-de-privacidade', priority: 0.3, changeFrequency: 'yearly' },
] as const
