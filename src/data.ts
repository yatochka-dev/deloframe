import { evaluate, parse } from 'mathjs';
type floors = "oneStory" | "twoStory" | "oneStoryPF" | "twoStoryPF"
type ParameterCat =
  | 'foundation'
  | 'binding-strip'
  | 'external-wall'
  | 'inner-wall'
  | 'floor-overlap'
  | 'ME-overlap'
  | 'HCH-ceiling'
  | 'rafter-system'
  | 'double-layer-GKL'
  | 'roof'
  | 'wiring'
  | 'windows'

type FORMULA = string
type STATIC = number

interface Parameter {
  name: string
  cat: ParameterCat
  pricePer: STATIC
  weight: STATIC
  heatLoss: STATIC

  matrices: {
    amount: {
     [key in floors]: FORMULA
    }
    price: {
      [key in floors]: FORMULA
    }
    weight: {
      [key in floors]: FORMULA
    }
    heatLoss: {
      below9deg: {
        [key in floors]: FORMULA
      }
      below39deg: {
        [key in floors]: FORMULA
      }
    }
  }
}

const ParameterData: Parameter[] = [
  {
    cat: 'foundation',
    name: 'Свайно-Винтовой',
    pricePer: 5000,
    weight: 65,
    heatLoss: 0,
    matrices: {
      amount: {
        oneStory: '(length/2+1)*(width/2+1)',
        twoStory: '(length/2+1)*(width/2+1)',
        oneStoryPF: '0',
        twoStoryPF: '0',
      },
      price: {
        oneStory: '(pricePer*amount)',
        twoStory: '(pricePer*amount)',
        oneStoryPF: '(pricePer*amount)',
        twoStoryPF: '(pricePer*amount)',
      },
      weight: {
        oneStory: '(0)',
        oneStoryPF: '(0)',
        twoStory: '(weight*amount)',
        twoStoryPF: '(0)',
      },
      heatLoss: {
        below9deg: {
          oneStory: '(0)',
          twoStory: '(0)',
          oneStoryPF: '(0)',
          twoStoryPF: '(0)',
        },
        below39deg: {
          oneStory: '(0)',
          twoStory: '(0)',
          oneStoryPF: '(0)',
          twoStoryPF: '(0)',
        },
      },
    },
  },
]

const p = ParameterData[0]

function evaluateParameter(
    f: floors,
    length: number,
    width: number,
    parameter: Parameter,
) {
  // need to evaluate al matrices
  const vars = {
    length: length,
    width: width,
    pricePer: p.pricePer,
    weight: p.weight,
    heatLoss: p.heatLoss,
    amount: evaluate(p.matrices.amount.oneStory, {
      length: 10,
      width: 8,
    })
  }

  return {
    amount: vars.amount,
    price: evaluate(parameter.matrices.price[f], vars),
    weight: evaluate(parameter.matrices.weight[f], vars),
    heatLoss9: evaluate(parameter.matrices.heatLoss.below9deg[f], vars),
    heatLoss39: evaluate(parameter.matrices.heatLoss.below39deg[f], vars),
  }
}

console.log(evaluateParameter("oneStory", 10, 8, p))