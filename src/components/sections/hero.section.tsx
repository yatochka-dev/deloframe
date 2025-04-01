import Image from 'next/image'
import { Button } from '@/components/ui/button'

import BG from '@/app/../../public/bg.jpg'
import BlurText from '@/components/ui/animations/BlurText/BlurText'
import ScrollTo from '@/components/ui/scroll-to'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
}

export function HeroSection({ title, subtitle, ctaText }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex justify-center">
      <div className="absolute flex-col gap-5 inset-0 z-20 flex items-center justify-center container mx-auto text-center">
        <div className="flex max-w-3xl">
          <BlurText className="text-3xl font-bold justify-center" text={title} direction="top" />
        </div>
        <div className="flex max-w-2xl">
          <BlurText
            className="text-xl justify-center"
            text={subtitle}
            direction="bottom"
            delay={200}
          />
        </div>
        <div>
          <Button asChild className={'cursor-pointer'}>
            <ScrollTo to={'calculator'} smooth={true} duration={500}>
              {ctaText}
            </ScrollTo>
          </Button>
        </div>
        <div className={'max-w-sm max-h-10 hidden sr-only'}>
          <Image
            src={BG}
            alt="Background image"
            // Adjusted Image Class
            // layout="fill" // Added layout="fill" for responsive image
          />
        </div>
      </div>
    </section>
  )
}
