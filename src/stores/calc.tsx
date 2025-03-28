import {ParameterCat, ParameterData} from '@/collections/Parameter'
import { create } from 'zustand'


export const permissibleStoriesValues = [1, 2] as const

interface ICalcStore {
  initialInput: {
    stories: (typeof permissibleStoriesValues)[number]
    width: number
    length: number
  },
  customConfig: boolean,
  switchConfig: () => void,
  params: Partial<Record<ParameterCat, {
    items: {
        id: ParameterData['id'],
        customAmount?: number,
      }[]

  }>>

  updateInitialInput: (input: Partial<ICalcStore['initialInput']>) => void
}

const useCalcStore = create<ICalcStore>()((set) => ({
  initialInput: {
    stories: 1,
    width: 10,
    length: 8,
  },
  customConfig: false,
  switchConfig: () => {
    set((state) => ({
      customConfig: !state.customConfig,
    }))
  },
params: {
  roofing: {
    items: []
  },
  foundation: {
    items: []
  },
  'wall-structure': {
    items: []
  },
  'floor-ceiling-structure': {
    items: []
  },
  'roof-framing': {
    items: []
  },
  'interior-finishing': {
    items: []
  },
  windows: {
    items: []
  },
  utilities: {
    items: []
  },
},
  updateInitialInput: (input) =>
    set((state) => ({
      initialInput: {
        ...state.initialInput,
        ...input,
      },
    })),
}))

export default useCalcStore
export type { ICalcStore }
