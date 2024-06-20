'use client'

import { useEffect } from 'react'

// Animation Scripts
import '../animation/main'

import { GlobalStyle } from '@/styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

// Compoents
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Font
import { Plus_Jakarta_Sans } from 'next/font/google'

// Image
import Favicon from '../assets/images/favicon.png'
import { useRouter } from 'next/router'
import Script from 'next/script'

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (window.dataLayer != undefined) {
      window.dataLayer.push({
        event: "view_item",
        video_title: "video title de teste 01",
        origin_url: 'pagina de origin é home',
      });
    }
  }, [])

  return (
    <html lang="pt-BR">
      <head>
        <title>Leadster</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Webnars Landster" />
        <meta name="keywords" content="Webnars, Landster, landing page, marketing, chatboot, geraçao de leads, mídia paga, agências" />
        <meta name="author" content="Matheus Davy" />
        <link rel="shortcut icon" href={Favicon.src} type="image/x-icon" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P34C3MPP')  
          `}}
        />

      </head>
      <body className={PlusJakartaSans.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />

        </ThemeProvider>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P34C3MPP"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>

      </body>
    </html>

  )

}
