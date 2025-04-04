'use client'
import React, { useEffect, useRef } from 'react'
import { calculateBuildingMetrics } from '@/app/(actions)'
import { useAction } from 'next-safe-action/hooks'
import useCalcStore, { ICalcStore, Param } from '@/stores/calc'
import { CategoryID } from '@/collections/Parameter'
import OutputField from '@/components/sections/calculator/output-field'
import { Calculator } from '@/payload-types'

function getParamsList(params: Record<CategoryID, Param[]>) {
  return Object.entries(params).map(([_key, value]) => {
    return {
      id: value[0].id,
      customAmount: value[0].customAmount,
    }
  })
}

const Output = ({ settings }: { settings: Calculator }) => {
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
      {!!result.data && (
        <div className={'flex flex-col gap-4 my-4 w-full'}>
          <div className={'flex w-full flex-row gap-2 '}>
            <OutputField
              value={result.data?.buildingArea}
              label={settings.main.output.buildingArea}
              isPending={isPending}
            />
            <OutputField
              value={result.data?.usableArea}
              label={settings.main.output.usableArea}
              isPending={isPending}
            />
          </div>
          <div className={'flex w-full flex-row gap-2 '}>
            <OutputField
              value={result.data?.weight}
              label={settings.main.output.buildingWeight}
              isPending={isPending}
            />
            <OutputField
              value={result.data?.weightOnTheFoundation}
              label={settings.main.output.weightOnTheFoundation}
              isPending={isPending}
            />
          </div>
          <div className={'flex w-full flex-row gap-2 '}>
            <OutputField
              value={result.data?.houseHeatLoss}
              label={settings.main.output.heatLoss}
              isPending={isPending}
            />
            <OutputField
              value={result.data?.recommendedMinHeatingPower}
              label={settings.main.output.minHeatingPower}
              isPending={isPending}
            />
            <OutputField
              value={result.data?.heatingCosts}
              label={settings.main.output.heatingCosts}
              isPending={isPending}
            />
          </div>
          <div className={'flex w-full flex-row gap-2 '}>
            <OutputField
              value={result.data?.cost}
              label={settings.main.output.price}
              isPending={isPending}
            />
            <OutputField
              value={result.data?.costPerSquareMeter}
              label={settings.main.output.pricePerSq2}
              isPending={isPending}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Output
