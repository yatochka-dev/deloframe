import React from 'react'
import { z } from 'zod'
import { getPayload } from 'payload'
import config, { LocaleCode } from '@payload-config'
import Section from '@/components/ui/section'
import { HeroSection } from '@/components/sections/hero.section'
import CalculatorMain from '@/components/sections/calculator'

/**
 * Retrieves hero section data based on the locale.
 * @param payload - The payload client instance
 * @param locale - The locale string
 * @returns The hero section data
 */
async function fetchHeroSection(locale: LocaleCode) {
  const payload = await getPayload({ config })
  try {
    return await payload.findGlobal({
      slug: 'herosection',
      locale,
    })
  } catch (error) {
    // @todo - implement error handling: Handle potential network or data retrieval failures which could disrupt loading the hero section.
    console.error('Failed to fetch hero section:', error)
    return null
  }
}

/**
 * The Landing page component responsible for rendering the landing sections.
 * @param params - Promise of parameters containing locale data
 * @returns The JSX.Element of the landing page
 */
export default async function Landing({ params }: { params: Promise<{ locale: string }> }) {
  const localeParams = await params
  const locale = z.enum(['he', 'ru']).default('ru').parse(localeParams.locale)
  const hero = await fetchHeroSection(locale)

  return (
    <div dir={localeParams.locale === 'he' ? 'rtl' : 'ltr'}>
      <Section name="hero">
        {hero ? (
          <HeroSection title={hero.title} subtitle={hero.subtitle} ctaText={hero.cta} />
        ) : (
          <p>Hero section could not be loaded.</p>
        )}
      </Section>
      <Section name="calculator">
        <CalculatorMain locale={locale} />
      </Section>
    </div>
  )
}
