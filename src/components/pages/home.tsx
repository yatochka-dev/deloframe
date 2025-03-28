import React from 'react'
import { HeroSection } from '@/components/sections/hero.section'
import CalculatorMain from '@/components/sections/calculator'

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={"Hello, I'm Philip"}
        subtitle={'Web & app development, bots, and automation—custom solutions tailored for you.'}
        ctaText={'View My Work'}
        ctaLink={'#'}
        backgroundImage={'/bg.jpg'}
      />
      <CalculatorMain />
    </>
  )
}
