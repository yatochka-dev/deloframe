import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import { AppSidebar } from '@/components/layout/sidebar'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'
import { localesEnum } from '@/shared'

// Module-level docstring:
// LocaleLayout component sets up the layout for a locale-specific page, handling sidebar configuration
// and user authentication status to display relevant content.

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const parsedParams = await params
  const locale = localesEnum.parse(parsedParams.locale)
  const requestHeaders = await headers()
  const payloadData = await getPayload({ config })

  const sidebarSettings = await payloadData.findGlobal({
    slug: 'settings',
    locale,
  })

  const authStatus = await payloadData.auth({
    headers: requestHeaders,
  })

  return (
    <>
      <AppSidebar
        sidebarSettings={sidebarSettings}
        showDashboard={authStatus.user?.roles?.includes('admin') ?? false}
      />
      <SidebarInset>
        <main className={'min-h-screen flex justify-center flex-col w-full p-2'}>
          {children}
          <SidebarTrigger />
        </main>
      </SidebarInset>
    </>
  )
}
