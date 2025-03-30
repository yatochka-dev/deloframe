import { getPayload } from 'payload'
import config from '@payload-config'
import { CategoryID, ParameterData } from '@/collections/Parameter'
import { Category } from '@/payload-types'

/**
 * Fetches parameters from the parameters collection and organizes them by category.
 *
 * @returns An object containing main and optional parameters categorized by their respective categories.
 */
export const fetchParameters = async () => {
  try {
    const payload = await getPayload({ config })

    const params = await payload.find({
      collection: 'parameters',
      limit: 10000,
    })
    const paramDocs = params.docs as ParameterData[]
    const mandatoryCategories = await payload.find({
      collection: 'categories',
      limit: 10000,
      where: {
        isMandatory: {
          equals: true,
        },
      },
    })

    const optionalCategories = await payload.find({
      collection: 'categories',
      limit: 10000,
      where: {
        isMandatory: {
          equals: false,
        },
      },
    })
    // @todo - implement error handling: Validate the response for potential errors from the payload API.

    const mainParams = filterParamsByUtilFlag(paramDocs, true)
    const optionalParams = filterParamsByUtilFlag(paramDocs, false)

    return {
      parsedParamsMain: categorizeParameters(mainParams),
      parsedParamsOptional: categorizeParameters(optionalParams),

      mandatoryCategories: mandatoryCategories.docs as Category[],
      optionalCategories: optionalCategories.docs as Category[],
    }
  } catch (error) {
    // @todo - implement error handling: Handle the error appropriately, considering the possible failure points.
    console.error('Failed to fetch parameters', error)
    return {
      parsedParamsMain: {},
      parsedParamsOptional: {},
      mandatoryCategories: [],
      optionalCategories: [],
    }
  }
}

/**
 * Filters parameters based on the utility flag.
 *
 * @param params The list of parameters to filter.
 * @param isUtilFlag The utility flag to filter by.
 * @returns A filtered array of parameters.
 */
const filterParamsByUtilFlag = (params: ParameterData[], isUtilFlag: boolean): ParameterData[] => {
  return params.filter((param) => param.category.isMandatory === isUtilFlag)
}

/**
 * Groups parameters by their category.
 *
 * @param params The parameters to categorize.
 * @returns A record of parameters grouped by category.
 */
const categorizeParameters = (params: ParameterData[]): Record<CategoryID, ParameterData[]> => {
  return params.reduce((acc: Record<CategoryID, ParameterData[]>, param: ParameterData) => {
    const category = param.category.id
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(param)
    return acc
  }, {})
}
