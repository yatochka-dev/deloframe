'use client'
import React, { useEffect, useState, useRef } from 'react'
import { calculateBuildingMetrics } from '@/app/(actions)'
import { useAction } from 'next-safe-action/hooks'
import useCalcStore, { ICalcStore, Param } from '@/stores/calc'
import { CategoryID } from '@/collections/Parameter'
import { CalculationOutput } from '@/app/(actions)/schemas'

function getParamsList(params: Record<CategoryID, Param[]>) {
  return Object.entries(params).map(([_key, value]) => {
    return {
      id: value[0].id,
      customAmount: value[0].customAmount,
    }
  })
}

const Output = () => {
  const { isPending, execute, result } = useAction(calculateBuildingMetrics)
  const latestState = useRef<ICalcStore>(null)

  const debounceTimeout = useRef<NodeJS.Timeout>(null)
  useEffect(() => {
    execute({
      params: getParamsList(useCalcStore.getState().params),
      width: useCalcStore.getState().initialInput.width,
      length: useCalcStore.getState().initialInput.length,
      stories: useCalcStore.getState().initialInput.stories,
    })

    const handleStateChange = (state: ICalcStore) => {
      const params = state.params

      clearTimeout(debounceTimeout.current ?? undefined)
      debounceTimeout.current = setTimeout(() => {
        execute({
          params: getParamsList(params),
          width: state.initialInput.width,
          length: state.initialInput.length,
          stories: state.initialInput.stories,
        })
      }, 300)
    }

    const unsubscribe = useCalcStore.subscribe((state) => {
      if (state !== latestState.current) {
        latestState.current = state
        handleStateChange(state)
      }
    })

    return () => {
      clearTimeout(debounceTimeout.current ?? undefined)
      unsubscribe()
    }
  }, [])

  return (
    <div>
      {isPending && <div>Calculating...</div>}
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}

export default Output
