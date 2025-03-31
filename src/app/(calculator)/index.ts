'use server'
import { z } from 'zod'
import { storiesEnum } from '@/shared'
import { actionClient } from '@/lib/safe-action'
import { evaluate } from 'mathjs'
import { fetchParameters } from '@/lib/fetchParameters'

const schema = z.object({
  width: z.number(),
  length: z.number(),
  stories: storiesEnum,
  params: z.object({
    id: z.number(),
    amount: z.number().optional(),
  }),
})

export const calculate = actionClient
  .schema(schema)
  .outputSchema(
    z.object({
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
    }),
  )
  .action(async ({ parsedInput }) => {
    const vars = {
      width: parsedInput.width,
      length: parsedInput.length,
      stories: parsedInput.stories,
    }
    return {
      buildingArea: evaluate('(width/2+1)*(length/2+1)*stories', vars),
      buildingAreaOneStory: evaluate('(width/2+1)*(length/2+1)', vars),
      buildingAreaTwoStory: evaluate('(width/2+1)*(length/2+1)*2', vars),
      usableAreaOneStory: evaluate('(width/2+1)*(length/2+1)*0.5', vars),
      usableAreaTwoStory: evaluate('(width/2+1)*(length/2+1)*1.5', vars),
      weight: evaluate('(width/2+1)*(length/2+1)*stories*0.5', vars),
      weightOnTheFoundation: evaluate('(width/2+1)*(length/2+1)*0.5', vars),
      houseHeatLoss: evaluate('(width/2+1)*(length/2+1)*stories*0.5', vars),
      recommendedMinHeatingPower: evaluate('(width/2+1)*(length/2+1)*stories*0.5', vars),
      heatingCosts: evaluate('(width/2+1)*(length/2+1)*stories*0.5', vars),
      cost: evaluate('(width/2+1)*(length/2+1)*stories*0.5', vars),
      costPerSquareMeter: evaluate('(width/2+1)*(length/2+1)*stories*0.5', vars),
    }
  })

export const getParameters = actionClient.action(async () => {
  return await fetchParameters()
})
