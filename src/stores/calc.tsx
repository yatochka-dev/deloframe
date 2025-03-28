import {ParameterCat, ParameterData} from '@/collections/Parameter'
import { create } from 'zustand'


export const permissibleStoriesValues = [1, 2] as const

interface ICalcStore {
  initialInput: {
    stories: (typeof permissibleStoriesValues)[number]
    width: number
    length: number
  },
  params: Partial<Record<ParameterCat, ParameterData[]>>

  updateInitialInput: (input: Partial<ICalcStore['initialInput']>) => void
}

const useCalcStore = create<ICalcStore>()((set) => ({
  initialInput: {
    stories: 1,
    width: 10,
    length: 8,
  },
params: {
  roofing: [],
  foundation: [],
  'wall-structure': [],
  'floor-ceiling-structure': [],
  'roof-framing': [],
  'interior-finishing': [],
  windows: [],
  utilities: [],
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
