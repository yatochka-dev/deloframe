import React from 'react'
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
import { SwitchCalculationModeButton } from '@/components/sections/calculator/switch-calculation-mode-button'

interface ParametersDrawerProps {
  children: React.ReactNode
}

const ParametersDrawer = ({ children }: ParametersDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full my-4 cursor-pointer">Open</Button>
      </DrawerTrigger>
      <DrawerContent className={'max-h-[85vh]'}>
        <DrawerHeader>
          <DrawerTitle>Advanced Configuration</DrawerTitle>
          <DrawerDescription>Not for beginners</DrawerDescription>
        </DrawerHeader>
        <div className={'max-md:px-2 container mx-auto'}>
          <SwitchCalculationModeButton />
        </div>
        <div className="px-4 overflow-y-auto max-h-[calc(85vh-180px)]">
          <div className="max-md:px-2 md:container mx-auto py-5">{children}</div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" className={'w-full'}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ParametersDrawer
