'use client'
import useCalcStore from '@/stores/calc'
import { Button } from '@/components/ui/button'
import { Calculator, SquareFunction } from 'lucide-react'
import React from 'react'
import { z } from 'zod'

// Define an enum for calculation modes
enum CalculationMode {
  Custom = 'Каст. ввод',
  Auto = 'Авто. ввод',
}

// Define a Zod schema for runtime validation of calculation state
const CalculationStateSchema = z.object({
  customConfig: z.boolean().default(false),
})

// Validation function
const validateCalculationState = (state: unknown) => {
  // @todo - implement error handling: Validate the state object following a potential state schema change or external manipulation.
  return CalculationStateSchema.parse(state)
}

export function SwitchCalculationModeButton() {
  // Validate the state on usage to ensure adherence to expected types
  const on = validateCalculationState(useCalcStore((s) => s))

  const toggle = useCalcStore((s) => s.switchConfig)

  return (
    <div className="flex justify-center items-center gap-2">
      <Button variant="default" className="cursor-pointer" onClick={toggle}>
        {on.customConfig ? (
          <div className="flex items-center gap-2">
            <Calculator /> {CalculationMode.Custom}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <SquareFunction /> {CalculationMode.Auto}
          </div>
        )}
      </Button>
      <p className="text-gray-500 text-sm">
        Click the button to toggle between different configuration modes for your calculations.
      </p>
    </div>
  )
}
