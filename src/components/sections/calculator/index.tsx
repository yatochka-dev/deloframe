'use client' // todo remove
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import InitialInputs from '@/components/sections/calculator/initial'
import useCalcStore from '@/stores/calc'
import Building from '@/components/sections/calculator/building'

interface CalculatorMainProps {}

const CalculatorMain = ({}: CalculatorMainProps) => {
  const calc = useCalcStore((s) => s.initialInput)

  return (
    <section
      id={'calc'}
      className={'min-h-screen h-full w-full flex justify-center px-20 container mx-auto py-32'}
    >
      <div className={'bg-card w-full p-4 rounded-md shadow-lg'}>
        <Tabs className={'w-full'} defaultValue={'main'}>
          <TabsList className={'w-full'}>
            <TabsTrigger value={'main'}>Main</TabsTrigger>
            <TabsTrigger value={'smeta'}>Smeta</TabsTrigger>
          </TabsList>

          <TabsContent value={'main'} className={'py-6 px-4'}>
            <div className={'w-1/2'}>
              <InitialInputs />
            </div>
            <div className={'w-1/2'}></div>
            {/*<Building stories={calc.stories }/>*/}
          </TabsContent>

          <TabsContent value={'smeta'} className={'py-6 px-4'}>
            Smeta
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default CalculatorMain
