import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import BG from '@/app/../../public/bg.jpg'
import BlurText from '@/components/ui/animations/BlurText/BlurText'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full">
      <div className="absolute flex-col gap-5 inset-0 z-20 flex items-center justify-center container mx-auto text-center">
        <div className="flex max-w-5xl">
          <BlurText
            className="text-5xl font-bold justify-center"
            text="Строим теплые экологичные каркасные дома под отделку по всей Сибири"
            direction="top"
          />
        </div>
        <div className="flex max-w-2xl">
          <BlurText
            className="text-3xl justify-center"
            text="Каждому покупателю домокомплекта проект конструкции - Бесплатно!"
            direction="bottom"
          />
        </div>
        <div>
          <Button size="lg" asChild>
            <a href="#calc">Расчитать стоимость</a>
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
