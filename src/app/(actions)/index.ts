'use server'
import { z } from 'zod'
import { storiesEnum } from '@/shared'
import { actionClient } from '@/lib/safe-action'
import { evaluate } from 'mathjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Module to handle building calculations.
 * Provides a schema for input validation and performs various calculations.
 */
const calculationSchema = z.object({
  width: z.number(),
  length: z.number(),
  stories: storiesEnum,
  params: z.object({
    id: z.number(),
    amount: z.number().optional(),
  }),
})

const outputSchema = z.object({
  buildingArea: z.number(),
  buildingAreaOneStory: z.number(),
  buildingAreaTwoStory: z.number(),
  usableAreaOneStory: z.number(),
  usableAreaTwoStory: z.number(),
  weight: z.number(),
  weightOnTheFoundation: z.number(),
  houseHeatLoss: z.number(),
  recommendedMinHeatingPower: z.number(),
  heatingCosts: z.number(),
  cost: z.number(),
  costPerSquareMeter: z.number(),
})

// Function to perform calculations based on the given dimensions and stories
export const calculateBuildingMetrics = actionClient
  .schema(calculationSchema)
  .outputSchema(outputSchema)
  .action(async ({ parsedInput }) => {
    const dimensions = {
      width: parsedInput.width,
      length: parsedInput.length,
      stories: parsedInput.stories,
    }

    const calculateMetric = (expression: string, values: typeof dimensions) => {
      try {
        return evaluate(expression, values)
      } catch (error) {
        // @todo - implement error handling: Handle potential errors from the evaluate function,
        // such as invalid expressions or types in the calculation.
        throw new Error(`Evaluation error: ${error}`)
      }
    }

    return {
      buildingArea: calculateMetric('(width/2+1)*(length/2+1)*stories', dimensions),
      buildingAreaOneStory: calculateMetric('(width/2+1)*(length/2+1)', dimensions),
      buildingAreaTwoStory: calculateMetric('(width/2+1)*(length/2+1)*2', dimensions),
      usableAreaOneStory: calculateMetric('(width/2+1)*(length/2+1)*0.5', dimensions),
      usableAreaTwoStory: calculateMetric('(width/2+1)*(length/2+1)*1.5', dimensions),
      weight: calculateMetric('(width/2+1)*(length/2+1)*stories*0.5', dimensions),
      weightOnTheFoundation: calculateMetric('(width/2+1)*(length/2+1)*0.5', dimensions),
      houseHeatLoss: calculateMetric('(width/2+1)*(length/2+1)*stories*0.5', dimensions),
      recommendedMinHeatingPower: calculateMetric(
        '(width/2+1)*(length/2+1)*stories*0.5',
        dimensions,
      ),
      heatingCosts: calculateMetric('(width/2+1)*(length/2+1)*stories*0.5', dimensions),
      cost: calculateMetric('(width/2+1)*(length/2+1)*stories*0.5', dimensions),
      costPerSquareMeter: calculateMetric('(width/2+1)*(length/2+1)*stories*0.5', dimensions),
    }
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
