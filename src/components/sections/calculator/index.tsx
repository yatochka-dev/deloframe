import React from 'react'
import InitialInputs from '@/components/sections/calculator/initial'
import Parameters from '@/components/sections/calculator/parameters'
import { fetchParameters } from '@/lib/fetchParameters'
import { LocaleCode } from '@payload-config'
import Building from '@/components/sections/calculator/building'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
export default async function CalculatorMain({ locale }: { locale: LocaleCode }) {
  const data = await fetchParameters(locale)

  return (
    <section
      id="calc"
      className="min-h-screen h-full w-full flex justify-center px-5 mx-auto py-16"
    >
      <div className="bg-card w-full p-4 flex rounded-md shadow-lg">
        <div className="w-1/2">
          <InitialInputs />
          <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent className={'max-h-[85vh]'}>
              <DrawerHeader>
                <DrawerTitle>Advanced Configuration</DrawerTitle>
                <DrawerDescription>Not for beginners</DrawerDescription>
              </DrawerHeader>

              <div className="px-4 overflow-y-auto max-h-[calc(85vh-180px)]">
                <div className="max-md:px-2 md:container mx-auto py-5">
                  <Parameters {...data} />
                </div>
              </div>

              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline" className={'w-full'}>
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="w-1/2 max-w-1/2">
          <Building />
        </div>
      </div>
    </section>
  )
}
