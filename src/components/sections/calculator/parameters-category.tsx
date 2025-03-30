'use client'
import React from 'react'
import { ParameterCat, ParameterData } from '@/collections/Parameter'
import useCalcStore from '@/stores/calc'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
interface ParametersCategoryProps {
  params: ParameterData[]
  isOptional?: boolean
}

const ParametersCategory = (props: ParametersCategoryProps) => {
  const params = props.params
  console.log(params)
  const isCustomConfig = useCalcStore((s) => s.customConfig)
  const store = useCalcStore()
  return (
    <div className={'hello'}>
      <RadioGroup
        onValueChange={(newValue) => {
          const category = newValue.split('-')[1] as ParameterCat
          const id = parseInt(newValue.split('-')[2])
          store.addParam({
            category: category,
            id: id,
            customAmount: undefined,
          })
        }}
        defaultValue={`cat-${params[0].category}-${params[0].id}`}
      >
        {params.map((parameter) => (
          <div
            key={`cat-${parameter.category}-${parameter.id}`}
            className={'flex items-center space-x-2'}
          >
            <RadioGroupItem
              value={`cat-${parameter.category}-${parameter.id}`}
              id={`cat-${parameter.category}-${parameter.id}`}
            />
            <Label htmlFor={`cat-${parameter.category}-${parameter.id}`}>
              #{parameter.id} - {parameter.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default ParametersCategory
