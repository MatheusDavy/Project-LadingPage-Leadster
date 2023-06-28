'use client'

// Animation Scripts
import '../animation/main'

import { GlobalStyle } from '@/styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

// Compoents
import Header from '@/components/Header'

// Font
import { Plus_Jakarta_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

// Image
import Favicon from '../assets/images/favicon.png'

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
  return (
    <html lang="en">
      <head>
        <title>Leadster</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Webnars Landster" />
        <meta name="keywords" content="Webnars, Landster, landing page, marketing, chatboot, geraçao de leads, mídia paga, agências" />
        <meta name="author" content="Matheus Davy" />

        <link rel="shortcut icon" href={Favicon.src} type="image/x-icon" />
      </head>
      <body className={PlusJakartaSans.className}>
        <ThemeProvider theme={theme}>

          <Header />
          {children}
          <Footer />
          <GlobalStyle />

        </ThemeProvider>
      </body>
    </html>
  )
}
