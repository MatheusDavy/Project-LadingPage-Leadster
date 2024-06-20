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
    if (typeof window !== 'undefined') {
      if (window.dataLayer !== undefined) {
        window.dataLayer.push({
          event: "video_start",
          video_title: "video title de teste 01",
        });
      }
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

        {/* GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQ7NDJ16WE"></script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-FQ7NDJ16WE');
          `}}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5JV3Q796');
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

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JV3Q796"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>

      </body>
    </html>

  )

}
