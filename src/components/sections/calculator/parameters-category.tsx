'use client'

import React from 'react'
import { CategoryID, ParameterData } from '@/collections/Parameter'
import useCalcStore from '@/stores/calc'
import { Category } from '@/payload-types'
import { ParameterItem } from '@/components/sections/calculator/parameter-category-item'

/**
 * @module ParametersCategory
 * Represents a category of parameters with checkbox inputs to modify the store state.
 */

interface ParametersCategoryProps {
  params: ParameterData[]
  category: Category
}

const ParametersCategory: React.FC<ParametersCategoryProps> = ({ params, category }) => {
  const store = useCalcStore()

  /** Handles changes to the checkbox state, updating the store accordingly. */
  const handleCheckboxChange = (parameterId: number, checked: boolean, categoryId: CategoryID) => {
    if (checked) {
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
          onCheckedChange={(checked) => handleCheckboxChange(id, checked, paramCategory.id)}
        />
      ))}
    </div>
  )
}

export default ParametersCategory
