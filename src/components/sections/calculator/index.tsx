import React from 'react'
import InitialInputs from '@/components/sections/calculator/initial'
import Parameters from '@/components/sections/calculator/parameters'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { fetchParameters } from '@/lib/fetchParameters'
import { notFound } from 'next/navigation'

export default async function CalculatorMain() {
  const data = await fetchParameters()

  return (
    <section
      id="calc"
      className="min-h-screen h-full w-full flex justify-center px-5 container mx-auto py-16"
    >
      <div className="bg-card w-full p-4 flex rounded-md shadow-lg">
        <div className="w-1/2">
          <InitialInputs />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="cursor-pointer">
                Изменить конфигурацию
              </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[75%] overflow-scroll">
              <DialogTitle>Конфигуратор</DialogTitle>
              <Parameters {...data} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-1/2">{/*<Building stories={calc.stories }/>*/}</div>
      </div>
    </section>
  )
}
