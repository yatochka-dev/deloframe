'use client'

import React from 'react'
import { CategoryID, ParameterData } from '@/collections/Parameter'
import useCalcStore from '@/stores/calc'
import { Category } from '@/payload-types'
import { ParameterItem } from '@/components/sections/calculator/parameter-category-item'
import { ZodError } from 'zod'

/**
 * @module ParametersCategory
 * Represents a category of parameters with checkbox inputs to modify the store state.
 */

interface ParametersCategoryProps {
  params: ParameterData[]
  category: Category
}

enum CheckboxState {
  Checked,
  Unchecked,
}

const ParametersCategory: React.FC<ParametersCategoryProps> = ({ params, category }) => {
  const store = useCalcStore()

  /** Handles changes to the checkbox state, updating the store accordingly. */
  const handleCheckboxChange = (
    parameterId: number,
    checked: CheckboxState,
    categoryId: CategoryID,
  ) => {
    try {
      if (checked === CheckboxState.Checked) {
        store.addParam({
          category: categoryId,
          id: parameterId,
          customAmount: undefined,
        })
      } else {
        store.removeParam({
          category: categoryId,
          id: parameterId,
          isMandatory: category.isMandatory,
        })
      }
    } catch (error) {
      // Error handling placeholder: Implement detailed error handling appropriate for store operations
      console.error('Error updating checkbox state:', error)
    }
  }

  return (
    <div className="space-y-3">
      {params.map(({ id, name, category: paramCategory }) => (
        <ParameterItem
          key={`cat-${paramCategory.id}-${id}`}
          parameterId={id}
          parameterName={name}
          categoryId={paramCategory.id}
          isChecked={store.params[category.id]?.some((param) => param.id === id)}
          onCheckedChange={(checked) =>
            handleCheckboxChange(
              id,
              checked ? CheckboxState.Checked : CheckboxState.Unchecked,
              paramCategory.id,
            )
          }
        />
      ))}
    </div>
  )
}

export default ParametersCategory
