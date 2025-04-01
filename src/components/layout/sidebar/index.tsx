'use client'
import {
  Calculator,
  Calendar,
  ChevronDown,
  Globe,
  Home,
  LayoutDashboard,
  Moon,
  Sun,
} from 'lucide-react'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Link as ScrollTo } from 'react-scroll'
import { changeUserLocale } from '@/app/(actions)'
import { Setting } from '@/payload-types'

// Menu configuration

// Language configuration
const languageOptions = [
  { code: 'he', name: 'עברית' },
  { code: 'ru', name: 'Русский' },
] as const

// Theme configuration
const themeOptions = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Calendar },
]

interface AppSidebarProps {
  showDashboard: boolean
  sidebarSettings: Setting
}

export function AppSidebar({ sidebarSettings, showDashboard }: AppSidebarProps) {
  const { setTheme } = useTheme()

  const menuItems = [
    { title: sidebarSettings.homeLink, url: 'hero', icon: Home },
    { title: sidebarSettings.calculatorLink, url: 'calculator', icon: Calculator },
  ]

  const handleLanguageChange = async (langCode: (typeof languageOptions)[number]['code']) => {
    // @todo - implement error handling: Errors may occur when changing user locale. Include retry logic or fallback options.
    console.log(`Language changed to: ${langCode}`)
    await changeUserLocale(langCode)
  }

  const handleThemeChange = (theme: string) => {
    // @todo - implement error handling: Consider invalid theme values and ensure setTheme handles these gracefully.
    console.log(`Theme changed to: ${theme}`)
    setTheme(theme)
  }

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <ScrollTo to={item.url} smooth duration={500}>
            <item.icon />
            <span>{item.title}</span>
          </ScrollTo>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))

  const renderLanguageOptions = () =>
    languageOptions.map((lang) => (
      <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
        {lang.name}
      </DropdownMenuItem>
    ))

  const renderThemeOptions = () =>
    themeOptions.map((theme) => (
      <DropdownMenuItem key={theme.value} onClick={() => handleThemeChange(theme.value)}>
        <theme.icon />
        <span>{theme.label}</span>
      </DropdownMenuItem>
    ))

  return (
    <Sidebar variant="inset" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{sidebarSettings.primaryGroup}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems()}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{sidebarSettings.secondaryGroup}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer">
                      <Globe />
                      <span>{sidebarSettings.languageSwitcher}</span>
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-[--radix-dropdown-menu-trigger-width]"
                  >
                    {renderLanguageOptions()}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer">
                      <Calendar />
                      <span>{sidebarSettings.themeSwitcher}</span>
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-[--radix-dropdown-menu-trigger-width]"
                  >
                    {renderThemeOptions()}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {showDashboard && (
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/admin">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      )}
    </Sidebar>
  )
}
