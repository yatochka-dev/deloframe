import { create } from 'zustand'

export const permissibleStoriesValues = [1, 2] as const

interface ICalcStore {
  initialInput: {
    stories: (typeof permissibleStoriesValues)[number]
    width: number
    length: number
  }

  updateInitialInput: (input: Partial<ICalcStore['initialInput']>) => void
}

const useCalcStore = create<ICalcStore>()((set) => ({
  initialInput: {
    stories: 1,
    width: 10,
    length: 8,
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
