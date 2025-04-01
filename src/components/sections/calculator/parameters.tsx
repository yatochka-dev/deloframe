'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SwitchCalculationModeButton } from '@/components/sections/calculator/switch-calculation-mode-button'
import ParametersCategory from '@/components/sections/calculator/parameters-category'
import useCalcStore from '@/stores/calc'
import { z } from 'zod'
import { CategoryID, ParameterData } from '@/collections/Parameter'
import { Category } from '@/payload-types'

// Types
interface ParametersProps {
  parsedParamsMain: CategoryParameters
  parsedParamsOptional: CategoryParameters
  mandatoryCategories: Category[]
  optionalCategories: Category[]
}

type CategoryParameters = Record<CategoryID, ParameterData[]>

const ParametersCategorySchema = z.object({
  parsedParamsMain: z.record(
    z.number(),
    z.array(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    ),
  ),
  parsedParamsOptional: z.record(
    z.number(),
    z.array(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    ),
  ),
})

// Components
const CategorySection = ({
  title,
  categories,
  params,
  isMandatory,
}: {
  title: string
  categories: Category[]
  params: CategoryParameters
  isMandatory: boolean
}) => {
  const store = useCalcStore()

  return (
    <div className={'space-y-3'}>
      <h2 className={'text-xl font-bold'}>{title}</h2>
      <div className={'grid gap-4 grid-cols-3'}>
        {categories.map((category) => {
          if (isMandatory) {
            const paramId = params[category.id][0].id
            if (!store.params[category.id]?.length) {
              store.addParam({
                category: category.id,
                id: paramId,
                customAmount: undefined,
              })
            }
          }

          return (
            <Dialog key={`${category.id}-dialog-${category.name.toLowerCase()}`}>
              <DialogTrigger asChild>
                <Button className="cursor-pointer">{category.name}</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>
                  {category.name} - {category.id}
                </DialogTitle>
                <ParametersCategory params={params[category.id]} category={category} />
              </DialogContent>
            </Dialog>
          )
        })}
      </div>
    </div>
  )
}

const Parameters = ({
  mandatoryCategories,
  optionalCategories,
  parsedParamsMain,
  parsedParamsOptional,
}: ParametersProps) => {
  try {
    ParametersCategorySchema.parse({
      parsedParamsMain,
      parsedParamsOptional,
    })
  } catch (error) {
    console.error('Data validation failed:', error)
  }

  return (
    <div className="flex flex-col gap-4">
      <SwitchCalculationModeButton />
      <CategorySection
        title="Required categories"
        categories={mandatoryCategories}
        params={parsedParamsMain}
        isMandatory={true}
      />
      <CategorySection
        title="Optional categories"
        categories={optionalCategories}
        params={parsedParamsOptional}
        isMandatory={false}
      />
    </div>
  )
}

export default Parameters
