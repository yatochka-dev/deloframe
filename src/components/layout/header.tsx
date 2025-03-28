'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { ModeToggle as ThemeToggle } from '@/components/theme-toggle.component'
import { Setting } from '@/payload-types'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  globals: Setting
}

export function Header({ globals }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full h-14 shadow-md transition-all duration-300 backdrop-blur-md backdrop-saturate-150 ${
        scrolled ? 'bg-background/70 shadow-sm' : 'bg-background/60'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{globals.sitename}</h2>
        <Navigation />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ContactButton phone={globals.phone} callus={globals.callus} />
        </div>
      </div>
    </header>
  )
}

function Navigation() {
  return <></>
}

function _NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
    >
      {children}
    </a>
  )
}

function ContactButton({ phone, callus }: { phone: string; callus: string }) {
  return (
    <Button asChild={true} variant={'default'}>
      <a href={`tel:${phone}`}>
        <Phone size={18} />
        <span className="hidden sm:inline">{callus}</span>
      </a>
    </Button>
  )
}
