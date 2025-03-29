import { houseComponents, houseOptions } from '@/collections/Parameter'
import { getPayload } from 'payload'
import config from "@payload-config"

const cts = [
  ...houseComponents,
  ...houseOptions
]

export default async function main() {
  const payload = await getPayload({
    config
  })

  cts.forEach(c => {
    payload.create({
      collection: "parameters",
       data: {
        cat: c.value,
         name:`${c}-${c.label}`,
         isUtil: houseOptions.includes(c),
         // random number from 0 to .2
         heatLoss: Math.random() * .2,
         weight: (Math.random() * 50),
         pricePer: (Math.random() * 5000),
         matrices: {
          amount: {
            oneStory: "(width/2+1)*(height/2+1)",
            twoStory: "(width/2+1)*(height/2+1)*2",
            oneStoryPF: "(width/2+1)*(height/2+1)",
            twoStoryPF: "(width/2+1)*(height/2+1)*2",
          },
           price: {
            oneStory: "(amount*price)",
            twoStory: "(amount*price)*2",
            oneStoryPF: "(amount*price)",
            twoStoryPF: "(amount*price)*2",
          },
           weight: {
            oneStory: "(amount*weight)",
            twoStory: "(amount*weight)*2",
            oneStoryPF: "(amount*weight)",
            twoStoryPF: "(amount*weight)*2",
          },
           heatLoss: {
            below9deg: {
              oneStory: "(amount*heatLoss)",
              twoStory: "(amount*heatLoss)*2",
              oneStoryPF: "(amount*heatLoss)",
              twoStoryPF: "(amount*heatLoss)*2",
            },
            below39deg: {
              oneStory: "(amount*heatLoss)",
              twoStory: "(amount*heatLoss)*2",
              oneStoryPF: "(amount*heatLoss)",
              twoStoryPF: "(amount*heatLoss)*2",
            },
          }
         }



       }
    })
  })

}
