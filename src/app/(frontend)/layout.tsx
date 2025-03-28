import React from 'react'
import './../globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ThemeProvider } from '@/components/theme-provider.component'
import { Tinos } from 'next/font/google'
const tinos = Tinos({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })

  const globals = await payload.findGlobal({
    slug: 'settings',
  })

  return (
    <html lang="en" suppressHydrationWarning className={tinos.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header globals={globals} />
          <main className={'min-h-screen'}>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
