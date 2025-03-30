import React from 'react'
import { HeroSection } from '@/components/sections/hero.section'
import CalculatorMain from '@/components/sections/calculator'
import Section from '@/components/ui/section'
// Ensure 'react-scroll' is installed and correctly imported, or consider removing
// or replacing this import if 'Element' or 'Section' is not defined in 'react-scroll'.

export default function HomePage() {
  return (
    <>
      <Section name={'hero'}>
        <HeroSection
          title={"Hello, I'm Philip"}
          subtitle={
            'Web & app development, bots, and automation—custom solutions tailored for you.'
          }
          ctaText={'View My Work'}
          ctaLink={'#'}
          backgroundImage={'/bg.jpg'}
        />
      </Section>
      <Section name={'calculator'}>
        <CalculatorMain />
      </Section>
    </>
  )
}
