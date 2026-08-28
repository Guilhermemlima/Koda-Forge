'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

/* O ID vem de variável de ambiente. Sem ela o componente não renderiza nada,
   então em desenvolvimento e em preview não se polui a conta do Meta com
   acessos que não são de visitantes reais. */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

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
    if (!PIXEL_ID) return

    /* O snippet base já dispara um PageView no carregamento. Este efeito
       cobre a navegação client-side do Next, que troca de página sem
       recarregar o script — sem isso, só a primeira página seria contada. */
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    window.fbq?.('track', 'PageView')
  }, [pathname])

  if (!PIXEL_ID) return null

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
  if (!PIXEL_ID) return
  window.fbq?.('track', event, params)
}
