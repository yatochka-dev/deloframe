import type { Parameter } from '@/payload-types'
import { z } from 'zod'
import { decode, storiesEnum } from '@/shared'
import { evaluate } from 'mathjs'
import { Param } from '@/stores/calc'
import { getPayload } from 'payload'
import config from '@payload-config'

interface ParsedParameterData {
  amount: number
  weight: number
  heatLoss9: number
  heatLoss39: number
  price: number
}

async function parseParameter(
  data: Parameter,
  input: {
    stories: z.infer<typeof storiesEnum>
    width: number
    length: number
    customAmount?: number
  },
): Promise<ParsedParameterData> {
  const story = decode[input.stories]
  const amount =
    input.customAmount ??
    evaluate(data.matrices.amount[story], {
      width: input.width,
      length: input.length,
      height: input.length,
    })
  const symbols = {
    amount: amount,
    width: input.width,
    length: input.length,
    height: input.length,
    price: data.pricePer,
    weight: data.weight,
    heatLoss: data.heatLoss,
  }
  return {
    amount: amount,
    weight: evaluate(data.matrices.weight[story], symbols),
    heatLoss9: evaluate(data.matrices.heatLoss.below9deg[story], symbols),
    heatLoss39: evaluate(data.matrices.heatLoss.below39deg[story], symbols),
    price: evaluate(data.matrices.price[story], symbols),
  }
}

export default async function parseParameters(
  params: Param[],
  input: {
    length: number
    width: number
    stories: z.infer<typeof storiesEnum>
  },
) {
  const res: ParsedParameterData[] = []
  const payload = await getPayload({ config })
  let i = 0
  const documents = await payload.find({
    collection: 'parameters',
    limit: params.length,
    where: {
      id: {
        in: params.map((p) => p.id),
      },
    },
  })
  for (const param of documents.docs) {
    const customAmount = params[i].customAmount
    res.push(
      await parseParameter(param, {
        ...input,
        customAmount: customAmount,
      }),
    )
    i++
  }

  return {
    list: res,
    totalWeight: res.reduce((acc, cur) => acc + cur.weight, 0),
    totalHeatLoss9: res.reduce((acc, cur) => acc + cur.heatLoss9, 0),
    totalHeatLoss39: res.reduce((acc, cur) => acc + cur.heatLoss39, 0),
    totalPrice: res.reduce((acc, cur) => acc + cur.price, 0),
  }
}
