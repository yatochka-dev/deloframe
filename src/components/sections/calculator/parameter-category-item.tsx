import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import useCalcStore from '@/stores/calc'
import { CategoryID } from '@/collections/Parameter'

/**
 * @module ParameterItem
 * Handles the rendering of a single parameter item capable of toggling and custom amount input.
 */

// Strictly typed interface for ParameterItemProps
interface ParameterItemProps {
  parameterId: number
  parameterName: string
  categoryId: CategoryID
  isChecked: boolean
  onCheckedChange: (checked: boolean) => void
}

// Parameter component adhering to the SRP, dedicated to handling rendering and interaction logic.
export const ParameterItem: React.FC<ParameterItemProps> = ({
  parameterId,
  parameterName,
  categoryId,
  isChecked,
  onCheckedChange,
}) => {
  // Zustand store hooks
  const customConfigEnabled = useCalcStore((s) => s.customConfig)
  const changeParamAmount = useCalcStore((s) => s.changeParamAmount)

  // Error handling placeholder: Ensure amount is a valid number
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value)
    if (isNaN(value)) {
      // Handle input error (invalid number)
      changeParamAmount({
        category: categoryId,
        id: parameterId,
        customAmount: undefined,
      }) // To be replaced with user feedback
    } else {
      changeParamAmount({
        category: categoryId,
        id: parameterId,
        customAmount: value,
      })
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-2">
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
          type="number"
          placeholder="Custom amount"
          className="justify-end w-36"
          min={0}
          step={1}
          onChange={handleAmountChange}
        />
      )}
    </div>
  )
}
