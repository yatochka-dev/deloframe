import { CategoryID } from '@/collections/Parameter'
import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

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
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`cat-${categoryId}-${parameterId}`}
        checked={isChecked}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={`cat-${categoryId}-${parameterId}`}>
        #{parameterId} - {parameterName}
      </Label>
    </div>
  )
}
