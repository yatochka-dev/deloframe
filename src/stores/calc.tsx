import { houseComponentCat, houseOptionCat, ParameterCat } from '@/collections/Parameter'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

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

  params: Record<
    ParameterCat,
    {
      id: number
      customAmount?: number
    }[]
  >
  addParam: (param: { category: ParameterCat; id: number; customAmount?: number }) => void
  removeParam: (param: { category: ParameterCat; id: number }) => void
}

const useCalcStore = create<ICalcStore>()(
  persist(
    (set) => ({
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
      customConfig: false,
      switchConfig: () =>
        set((state) => ({
          customConfig: !state.customConfig,
        })),

      params: {},
      addParam: (param) => {
        set((state) => ({
          params: {
            ...state.params,
            [param.category]: state.customConfig
              ? [
                  ...state.params[param.category],
                  {
                    id: param.id,
                    customAmount: param.customAmount,
                  },
                ]
              : [
                  {
                    id: param.id,
                    customAmount: param.customAmount,
                  },
                ],
          },
        }))
      },
      removeParam: (param) => {
        set((state) => {
          const categoryParams = (state.params[param.category] ?? []) as { id: number }[]
          return {
            params: {
              ...state.params,
              [param.category]: categoryParams.filter((p) => p.id !== param.id),
            },
          }
        })
      },
    }),
    {
      name: 'calc-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCalcStore
export type { ICalcStore }
