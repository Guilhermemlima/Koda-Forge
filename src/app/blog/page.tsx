import type { Metadata } from 'next'
import Link from 'next/link'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — KodaForge',
  description: 'Dicas, estratégias e insights sobre criação de sites, SEO e marketing digital para negócios em Guarapuava e em todo o Brasil.',
}

const POSTS = [
  {
    slug: 'por-que-seu-negocio-em-guarapuava-precisa-de-um-site-profissional',
    title: 'Por que seu negócio em Guarapuava precisa de um site profissional em 2026',
    date: '2 jun. 2026',
    readTime: '5 min de leitura',
    category: 'Estratégia Digital',
    excerpt: 'A presença digital já não é opcional — é o canal principal de captação de clientes. Saiba por que negócios locais que investem em sites profissionais saem na frente da concorrência.',
  },
  {
    slug: '5-sinais-de-que-seu-site-esta-perdendo-clientes',
    title: '5 sinais de que seu site está perdendo clientes para a concorrência',
    date: '10 jun. 2026',
    readTime: '4 min de leitura',
    category: 'Conversão',
    excerpt: 'Lentidão, design desatualizado, falta de CTA e SEO mal configurado são os erros mais comuns. Veja como identificá-los e corrigi-los antes que custam mais vendas.',
  },
]

export default function BlogPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Blog"
        title="Conteúdo que ajuda<br/>seu negócio a crescer"
        subtitle="Dicas práticas sobre sites, SEO e marketing digital — direto ao ponto, sem enrolação."
      />

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <article key={post.slug} className="blog-card reveal">
                <div className="blog-cover" />
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-link">Ler artigo →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </ClientLayout>
  )
}
