'use server'
import { z } from 'zod'
import { actionClient } from '@/lib/safe-action'
import { evaluate } from 'mathjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { calculationSchema, outputSchema } from '@/app/(actions)/schemas'
import { fetchCalculatorSettings } from '@/app/(actions)/util'
import parseParameters from './parseParameters'

// Function to perform calculations based on the given dimensions and stories
export const calculateBuildingMetrics = actionClient
  .schema(calculationSchema)
  .outputSchema(outputSchema)
  .action(async ({ parsedInput }) => {
    const cleanStories = parsedInput.stories.replace('pf', '')

    const twoStories: boolean = parsedInput.stories === '2'
    const settings = await fetchCalculatorSettings()

    const parsedParams = await parseParameters(parsedInput.params, {
      length: parsedInput.length,
      width: parsedInput.width,
      stories: parsedInput.stories,
    })

    const calculateMetric = (expression: string, values: typeof dimensions) => {
      try {
        return evaluate(expression, values)
      } catch (error) {
        // @todo - implement error handling: Handle potential errors from the evaluate function,
        // such as invalid expressions or types in the calculation.
        throw new Error(`Evaluation error: ${error} ${expression}`)
      }
    }

    const dimensions = {
      width: parsedInput.width,
      length: parsedInput.length,
      stories: cleanStories,
      totalParameterWeight: parsedParams.totalWeight,
      totalParameterHeatLoss: parsedParams.totalHeatLoss9,
      totalParameterHeatLoss39: parsedParams.totalHeatLoss39,
      totalParameterPrice: parsedParams.totalPrice,
    }
    return {
      buildingArea: calculateMetric(
        twoStories
          ? settings.formulas.buildingArea.twoStories
          : settings.formulas.buildingArea.oneStory,
        dimensions,
      ),
      usableArea: calculateMetric(
        twoStories
          ? settings.formulas.usableArea.twoStories
          : settings.formulas.usableArea.oneStory,
        dimensions,
      ),
      weight: calculateMetric(settings.formulas.weight, dimensions),
      weightOnTheFoundation: calculateMetric(settings.formulas.weightOnTheFoundation, dimensions),
      houseHeatLoss: calculateMetric(settings.formulas.houseHeatLoss, dimensions),
      recommendedMinHeatingPower: calculateMetric(
        settings.formulas.recommendedMinHeatingPower,
        dimensions,
      ),
      heatingCosts: calculateMetric(settings.formulas.heatingCosts, dimensions),
      cost: dimensions.totalParameterPrice,
      costPerSquareMeter: calculateMetric(settings.formulas.costPerSquareMeter, dimensions),
    } as z.infer<typeof outputSchema>
  })

/**
 * Module to manage locale changes for internationalization.
 * Handles the setting of locale cookies and page redirection.
 */
export const changeUserLocale = actionClient
  .schema(z.enum(['he', 'ru']))
  .action(async ({ parsedInput }) => {
    const cookieStore = await cookies()

    // Set the 'locale' and 'NEXT_LOCALE' cookies
    cookieStore.set('locale', parsedInput, { maxAge: 31622400 }) // 1 year
    cookieStore.set('NEXT_LOCALE', parsedInput, { maxAge: 31622400 }) // 1 year

    redirect(`/${parsedInput}`)
  })
