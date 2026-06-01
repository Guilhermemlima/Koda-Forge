'use client'

import { useEffect } from 'react'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {children}
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5542991250274?text=Ol%C3%A1!%20Vi%20o%20site%20da%20KodaForge%20e%20tenho%20interesse%20em%20um%20or%C3%A7amento."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        {/* WhatsApp SVG oficial */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.827.737 5.48 2.027 7.788L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.766-1.847l-.486-.29-5.002 1.19 1.24-4.86-.317-.499A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.874c-.398-.2-2.352-1.16-2.717-1.292-.365-.133-.63-.2-.895.2-.266.4-1.028 1.292-1.26 1.558-.232.266-.465.3-.863.1-.398-.2-1.682-.62-3.204-1.978-1.184-1.057-1.984-2.363-2.216-2.762-.232-.4-.025-.616.175-.815.18-.179.398-.466.598-.7.2-.232.266-.4.4-.664.133-.266.066-.5-.033-.7-.1-.2-.895-2.16-1.226-2.958-.322-.776-.65-.67-.895-.682l-.762-.013c-.266 0-.697.1-1.062.5-.365.4-1.394 1.362-1.394 3.32s1.428 3.852 1.627 4.118c.2.266 2.81 4.29 6.808 6.016.951.41 1.693.655 2.271.84.954.304 1.823.261 2.51.158.765-.113 2.352-.962 2.684-1.89.332-.928.332-1.723.232-1.89-.1-.166-.365-.266-.763-.465z"/>
        </svg>
      </a>
    </>
  )
}
