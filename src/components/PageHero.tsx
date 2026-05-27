interface Props {
  tag:      string
  title:    string
  subtitle: string
}

export default function PageHero({ tag, title, subtitle }: Props) {
  return (
    <div className="page-hero">
      <div className="container">
        <span className="tag">{tag}</span>
        <h1 className="page-hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="page-hero-sub">{subtitle}</p>
      </div>
    </div>
  )
}
