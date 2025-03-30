import { CategoryID } from '@/collections/Parameter'
import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import useCalcStore from '@/stores/calc'
import { Input } from '@/components/ui/input'

/**
 * @module ParameterItem
 * A single checkbox item representing a parameter.
 */
interface ParameterItemProps {
  parameterId: number
  parameterName: string
  categoryId: CategoryID
  isChecked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const ParameterItem: React.FC<ParameterItemProps> = ({
  parameterId,
  parameterName,
  categoryId,
  isChecked,
  onCheckedChange,
}) => {
  const customConfigEnabled = useCalcStore((s) => s.customConfig)
  const changeParamAmount = useCalcStore((s) => s.changeParamAmount)

  return (
    <div className="flex items-center justify-between">
      <div className={'flex space-x-2'}>
        <Checkbox
          id={`cat-${categoryId}-${parameterId}`}
          checked={isChecked}
          onCheckedChange={onCheckedChange}
        />
        <Label htmlFor={`cat-${categoryId}-${parameterId}`}>
          #{parameterId} - {parameterName}
        </Label>
      </div>

      {customConfigEnabled && (
        <Input
          type={'number'}
          placeholder={'Custom amount'}
          className={'justify-end w-36'}
          min={0}
          step={1}
          onChange={(e) => {
            changeParamAmount({
              category: categoryId,
              id: parameterId,
              customAmount: parseFloat(e.target.value),
            })
          }}
        ></Input>
      )}
    </div>
  )
}
