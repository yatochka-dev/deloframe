import { z } from 'zod'
import { storiesEnum } from '@/shared'

export type CalculationOutput = z.infer<typeof outputSchema>
/**
 * Module to handle building calculations.
 * Provides a schema for input validation and performs various calculations.
 */
export const calculationSchema = z.object({
  width: z.number(),
  length: z.number(),
  stories: storiesEnum,
  params: z.array(
    z.object({
      id: z.number(),
      customAmount: z.number().optional(),
    }),
  ),
})
export const outputSchema = z.object({
  buildingArea: z.number(),
  usableArea: z.number(),
  weight: z.number(),
  weightOnTheFoundation: z.number(),
  houseHeatLoss: z.number(),
  recommendedMinHeatingPower: z.number(),
  heatingCosts: z.number(),
  cost: z.number(),
  costPerSquareMeter: z.number(),
})
