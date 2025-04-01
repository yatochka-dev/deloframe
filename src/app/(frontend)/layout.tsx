import React from 'react'
import './../globals.css'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ThemeProvider } from '@/components/theme-provider.component'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/sidebar/index'
import { headers } from 'next/headers'
import NextTopLoader from 'nextjs-toploader'

// const tinos = Tinos({
//   subsets: ['cyrillic'],
//   weight: ['400', '700'],
// })

export const metadata = {
  // add desc @todo
  title: 'Volkov App',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/*<NextTopLoader color={'red'} />*/}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*<Header globals={globals} />*/}
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
