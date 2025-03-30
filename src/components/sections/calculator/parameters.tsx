'use client'
import { CategoryID, ParameterData } from '@/collections/Parameter'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SwitchCalculationModeButton } from '@/components/sections/calculator/switch-calculation-mode-button'
import ParametersCategory from '@/components/sections/calculator/parameters-category'
import useCalcStore from '@/stores/calc'
import { Category } from '@/payload-types'

interface ParametersProps {
  parsedParamsMain: Record<CategoryID, ParameterData[]>
  parsedParamsOptional: Record<CategoryID, ParameterData[]>
  mandatoryCategories: Category[]
  optionalCategories: Category[]
}

const Parameters = ({
  mandatoryCategories,
  optionalCategories,
  parsedParamsMain,
  parsedParamsOptional,
}: ParametersProps) => {
  const store = useCalcStore()
  return (
    <div className="flex flex-col gap-4">
      <SwitchCalculationModeButton />

      <div className={'space-y-3'}>
        <h2 className={'text-xl font-bold'}>Required categories</h2>
        <div className={'grid gap-4 grid-cols-3'}>
          {mandatoryCategories.map((category) => {
            const paramId = (parsedParamsMain[category.id][0] as ParameterData).id
            if (
              store.params[category.id] === undefined ||
              (store.params[category.id] &&
                (store.params[category.id] as { id: number }[]).length === 0)
            ) {
              store.addParam({
                category: category.id,
                id: paramId,
                customAmount: undefined,
              })
            }
            return (
              <Dialog key={`${category.id}-dialog-${category.name.toLowerCase()}`}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="cursor-pointer">
                    {category.name}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>
                    {category.name} - {category.id}
                  </DialogTitle>
                  <ParametersCategory params={parsedParamsMain[category.id]} category={category} />
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
      <div className={'space-y-3'}>
        <h2 className={'text-xl font-bold'}>Optional categories</h2>
        <div className={'grid gap-4 grid-cols-3'}>
          {optionalCategories.map((category) => {
            // const paramId = (optionalParams[category.value as ParameterCat][0] as ParameterData).id
            // if (
            //   store.params[category.value as ParameterCat] === undefined ||
            //   (store.params[category.value as ParameterCat] &&
            //     (store.params[category.value as ParameterCat] as { id: number }[]).length === 0)
            // ) {
            //   store.addParam({
            //     category: category.value as ParameterCat,
            //     id: paramId,
            //     customAmount: undefined,
            //   })
            // } @todo Im not sure if this is needed
            return (
              <Dialog key={`${category.id}-dialog-${category.name.toLowerCase()}`}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="cursor-pointer">
                    {category.name}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>
                    {category.name} - {category.id}
                  </DialogTitle>
                  <ParametersCategory
                    category={category}
                    params={parsedParamsOptional[category.id]}
                  />
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Parameters
