'use server'
import { z } from 'zod'
import { storiesEnum } from '@/shared'
import { actionClient } from '@/lib/safe-action'
import { evaluate } from 'mathjs'
import { getPayload } from 'payload'
import config from '@payload-config'
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
  .outputSchema(z.number())
  .action(async ({ parsedInput }) => {
    const vars = {
      width: parsedInput.width,
      length: parsedInput.length,
      stories: parsedInput.stories,
    }
    return evaluate('(width/2+1)*(length/2+1)*stories', vars)
  })

export const getParameters = actionClient.action(async () => {
  return await fetchParameters()
})
