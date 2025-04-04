import { CategoryID } from '@/collections/Parameter'
import { CategoryParameters } from '@/lib/fetchParameters'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Category } from '@/payload-types'
import { storiesEnum } from '@/shared'
import { z } from 'zod'

// Store to hold calculations related configurations and operations

export type permissibleStoriesValues = z.infer<typeof storiesEnum>

interface InitialInput {
  stories: permissibleStoriesValues
  width: number
  length: number
}

export interface Param {
  id: number
  customAmount?: number
}

interface ICalcStore {
  initialInput: InitialInput
  updateInitialInput: (input: Partial<InitialInput>) => void
  customConfig: boolean
  switchConfig: () => void
  params: Record<CategoryID, Param[]>
  addParam: (param: { category: CategoryID; id: number; customAmount?: number }) => void
  removeParam: (param: { category: CategoryID; id: number; isMandatory: boolean }) => void
  changeParamAmount: (param: { category: CategoryID; id: number; customAmount?: number }) => void
  resetInitialValues: (mainParams: CategoryParameters, categories: Category[]) => void
}

function verifyParams(params: Record<CategoryID, Param[]>) {
  const newParams: Partial<Record<CategoryID, Param[]>> = {}
  for (const key of Object.keys(params).map((k) => parseInt(k)) as CategoryID[]) {
    const value = params[key] as Param[]
    if (value.length > 1) {
      newParams[key] = value.slice(0, 1)
    } else {
      newParams[key] = value
    }
  }
  return newParams as Record<CategoryID, Param[]>
}

const useCalcStore = create<ICalcStore>()(
  persist(
    (set) => ({
      initialInput: { stories: '1', width: 10, length: 8 },

      updateInitialInput: (input) =>
        set((state) => ({
          initialInput: {
            ...state.initialInput,
            ...input,
          },
        })),

      // Toggles the custom configuration setting
      customConfig: false,
      switchConfig: () =>
        set((state) => {
          // if new state is false, verify that each category has only one parameter
          const newState = !state.customConfig

          if (!newState) {
            return {
              params: verifyParams(state.params),
              customConfig: newState,
            }
          }

          return {
            customConfig: newState,
          }
        }),

      params: {},

      // Adds a parameter to the given category
      addParam: (param) => {
        set((state) => {
          const categoryParams = state.params[param.category] || []
          const newParam = {
            id: param.id,
            customAmount: param.customAmount,
          }
          return {
            params: {
              ...state.params,
              [param.category]: state.customConfig ? [...categoryParams, newParam] : [newParam],
            },
          }
        })
      },

      // Removes a parameter by id from the given category
      removeParam: (param) => {
        set((state) => {
          const categoryParams = state.params[param.category] || []
          // check if parameter is the only one in the category and if it's mandatory
          if (categoryParams.length === 1 && param.isMandatory) {
            return state
          }

          return {
            params: {
              ...state.params,
              [param.category]: categoryParams.filter((p) => p.id !== param.id),
            },
          }
        })
      },

      changeParamAmount: (param) => {
        set((state) => {
          const categoryParams = state.params[param.category] || []
          const newParam = {
            id: param.id,
            customAmount: param.customAmount,
          }
          return {
            params: {
              ...state.params,
              [param.category]: state.customConfig
                ? [...categoryParams.filter((p) => p.id !== param.id), newParam]
                : [newParam],
            },
          }
        })
      },
      resetInitialValues: (mainParams, categories) => {
        const params: Record<CategoryID, Param[]> = {}
        for (const category of categories) {
          const p = mainParams[category.id][0]
          params[category.id] = [
            {
              id: p.id as number,
              customAmount: undefined,
            },
          ]
        }
        set({
          initialInput: {
            stories: '1',
            width: 10,
            length: 8,
          },
          customConfig: false,
          params: params,
        })
      },
    }),

    {
      // Persistent storage using local storage as the backing store
      name: 'calc-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCalcStore
export type { ICalcStore }
