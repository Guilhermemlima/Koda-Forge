const TECHS = ['React', 'Next.js', 'WordPress', 'Shopify', 'Figma', 'Tailwind', 'Node.js', 'Vercel']

export default function LogosStrip() {
  return (
    <section id="logos">
      <div className="container">
        <p className="logos-label">Tecnologias que dominamos</p>
        <div className="logos-track">
          {TECHS.map((t) => (
            <span key={t} className="logo-item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
