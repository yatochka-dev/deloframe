import React from 'react'
import './../globals.css'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ThemeProvider } from '@/components/theme-provider.component'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/sidebar/index'
import { headers } from 'next/headers'

// const tinos = Tinos({
//   subsets: ['cyrillic'],
//   weight: ['400', '700'],
// })

export const metadata = {
  // add desc @todo
  title: 'Volkov App',
}

// @todo use shadcn sidebar instead of header

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const h = await headers()
  const payload = await getPayload({ config })

  const globals = await payload.findGlobal({
    slug: 'settings',
  })

  const auth = await payload.auth({
    headers: h,
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*<Header globals={globals} />*/}
          <SidebarProvider>
            <AppSidebar showDashboard={auth.user?.roles?.includes('admin') ?? false} />

            <main className={'min-h-screen flex justify-center flex-col w-full '}>
              <div className={'m-4 p-2 bg-accent rounded-md'}>
                <SidebarTrigger />
                {children}
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
