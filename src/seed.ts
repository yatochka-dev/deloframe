import { getPayload } from 'payload'
import config from '@payload-config'

export default async function main() {
  const payload = await getPayload({
    config,
  })

  const allCategories = await payload.find({
    collection: 'categories',
    limit: 10000,
  })

  allCategories.docs.forEach((c) => {
    payload.create({
      collection: 'parameters',
      data: {
        category: c.id,
        name: `${c.name}`,
        // random number from 0 to .2
        heatLoss: Math.round(Math.random() * 0.2),
        weight: Math.round(Math.random() * 50),
        pricePer: Math.round(Math.random() * 5000),
        matrices: {
          amount: {
            oneStory: '(width/2+1)*(height/2+1)',
            twoStory: '(width/2+1)*(height/2+1)*2',
            oneStoryPF: '(width/2+1)*(height/2+1)',
            twoStoryPF: '(width/2+1)*(height/2+1)*2',
          },
          price: {
            oneStory: '(amount*price)',
            twoStory: '(amount*price)*2',
            oneStoryPF: '(amount*price)',
            twoStoryPF: '(amount*price)*2',
          },
          weight: {
            oneStory: '(amount*weight)',
            twoStory: '(amount*weight)*2',
            oneStoryPF: '(amount*weight)',
            twoStoryPF: '(amount*weight)*2',
          },
          heatLoss: {
            below9deg: {
              oneStory: '(amount*heatLoss)',
              twoStory: '(amount*heatLoss)*2',
              oneStoryPF: '(amount*heatLoss)',
              twoStoryPF: '(amount*heatLoss)*2',
            },
            below39deg: {
              oneStory: '(amount*heatLoss)',
              twoStory: '(amount*heatLoss)*2',
              oneStoryPF: '(amount*heatLoss)',
              twoStoryPF: '(amount*heatLoss)*2',
            },
          },
        },
      },
    })
  })
}

// main().then()
