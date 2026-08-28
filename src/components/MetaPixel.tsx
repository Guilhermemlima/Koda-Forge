'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

/* Pixel da KodaForge. Não é segredo — o ID fica visível no HTML de qualquer
   site que usa o pixel —, então vale como padrão e o deploy funciona sem
   depender de configuração na Vercel. A variável de ambiente ainda tem
   prioridade, para apontar outro pixel sem mexer no código. */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '1634037228353876'

/* Só dispara em build de produção. Assim o `npm run dev` do dia a dia não
   entra como visita nos relatórios do Meta. */
const ENABLED = process.env.NODE_ENV === 'production' && !!PIXEL_ID

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[] }
    _fbq?: unknown
  }
}

export default function MetaPixel() {
  const pathname = usePathname()
  const firstLoad = useRef(true)

  useEffect(() => {
    if (!ENABLED) return

    /* O snippet base já dispara um PageView no carregamento. Este efeito
       cobre a navegação client-side do Next, que troca de página sem
       recarregar o script — sem isso, só a primeira página seria contada. */
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    window.fbq?.('track', 'PageView')
  }, [pathname])

  if (!ENABLED) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
        `}
      </Script>

      {/* Conta o visitante que navega com JavaScript desligado */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}

/** Dispara um evento nomeado do Meta (Lead, Contact, etc.). */
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (!ENABLED) return
  window.fbq?.('track', event, params)
}
