import { houseComponentCat } from '@/collections/Parameter'
import { create } from 'zustand'

export const permissibleStoriesValues = [1, 2] as const

interface ICalcStore {
  initialInput: {
    stories: (typeof permissibleStoriesValues)[number]
    width: number
    length: number
  }
  updateInitialInput: (input: Partial<ICalcStore['initialInput']>) => void

  customConfig: boolean
  switchConfig: () => void

  parameters: {
    houseComponents: Record<houseComponentCat, { id: number; customAmount?: number }[]>
    houseOptions: Partial<Record<houseComponentCat, { id: number; customAmount?: number }[]>>
  }
}

const useCalcStore = create<ICalcStore>()((set) => {
  return {
    initialInput: {
      stories: 1,
      width: 10,
      length: 8,
    },
    customConfig: false,

    parameters: {
      houseComponents: {
        foundation: [],
        external_walls: [],
        internal_walls: [],
        partitions: [],
        interfloor_slab: [],
        insulated_attic_slab: [],
        insulated_rafter_system: [],
        non_insulated_rafter_system: [],
        non_insulated_gable_walls: [],
        terrace: [],
        balcony: [],
        roof: [],
      },
      houseOptions: {},
    },

    switchConfig: () => {
      set((state) => {
        const uniqueHouseComponents: Record<string, unknown[]> = {}
        Object.entries(state.parameters.houseComponents).forEach(([key, value]) => {
          uniqueHouseComponents[key] = value.length > 1 ? [value[0]] : value
        })

        const uniqueHouseOptions: Record<string, unknown[]> = {}
        Object.entries(state.parameters.houseOptions).forEach(([key, value]) => {
          uniqueHouseOptions[key] = value.length > 1 ? [value[0]] : value
        })

        return {
          customConfig: !state.customConfig,
          parameters: {
            houseComponents: {
              ...state.parameters.houseComponents,
              ...uniqueHouseComponents,
            },
            houseOptions: {
              ...state.parameters.houseOptions,
              ...uniqueHouseOptions,
            },
          },
        }
      })
    },
    updateInitialInput: (input) =>
      set((state) => ({
        initialInput: {
          ...state.initialInput,
          ...input,
        },
      })),
  }
})

export default useCalcStore
export type { ICalcStore }
