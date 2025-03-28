import { evaluate, parse } from 'mathjs';
const CONSTANTS = {
  NO: "(0)",
  NOHEATLOSSATALL: {
    below9deg: {
      oneStory: "(0)",
      twoStory: "(0)",
      oneStoryPF: "(0)",
      twoStoryPF: "(0)",
    },
    below39deg: {
      oneStory: "(0)",
      twoStory: "(0)",
      oneStoryPF: "(0)",
      twoStoryPF: "(0)",
    },

  }
}

type floors = "oneStory" | "twoStory" | "oneStoryPF" | "twoStoryPF"
type ParameterCat =
    | 'foundation' // Фундамент
    | 'structure' // Конструкция
    | 'finishing' // Отделка
    | 'roofing' // Кровля
    | 'utilities' // Инженерные сети
    | 'windows'; // Окна

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
      heatLoss: CONSTANTS.NOHEATLOSSATALL,
    },
  },
  {
    name: "Свайно-Забивной",
    cat: "foundation",
    pricePer: 5500,
    weight: 240,
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
        oneStory: '(weight*amount)',
        oneStoryPF: '(0)',
        twoStory: '(weight*amount)',
        twoStoryPF: '(0)',
      },
      heatLoss: CONSTANTS.NOHEATLOSSATALL
    }
  },
  {
    cat: "roofing",
    name: "Металлочерепица",
    pricePer: 1000,
    weight: 15,
    heatLoss: 0,
    matrices: {
      amount: {
        oneStory: '(length+1)*(width+1)*125%',
        twoStory: '(length+1)*(width+1)*125%',
        oneStoryPF: '(length+1)*(width+1)*125%',
        twoStoryPF: '(length+1)*(width+1)*125%',
      },
      price: {
        oneStory: '(pricePer*amount)',
        twoStory: '(pricePer*amount)',
        oneStoryPF: '(pricePer*amount)',
        twoStoryPF: '(pricePer*amount)',
      },
      weight: {
        oneStory: '(weight*amount)',
        twoStory: '(weight*amount)',
        oneStoryPF: '(weight*amount)',
        twoStoryPF: '(weight*amount)',
      },
      heatLoss: CONSTANTS.NOHEATLOSSATALL

    }
  },
  {
    cat: "roofing",
    name: "Гибкая Битумная Черепица",
    pricePer: 2300,
    weight: 25,
    heatLoss: 0,
    matrices: {
      amount: {
        oneStory: '(length+1)*(width+1)*125%',
        twoStory: '(length+1)*(width+1)*125%',
        oneStoryPF: '(length+1)*(width+1)*125%',
        twoStoryPF: '(length+1)*(width+1)*125%',
      },
      price: {
        oneStory: '(pricePer*amount)',
        twoStory: '(pricePer*amount)',
        oneStoryPF: '(pricePer*amount)',
        twoStoryPF: '(pricePer*amount)',
      },
      weight: {
        oneStory: '(weight*amount)',
        twoStory: '(weight*amount)',
        oneStoryPF: '(weight*amount)',
        twoStoryPF: '(weight*amount)',
      },
      heatLoss: CONSTANTS.NOHEATLOSSATALL

    }
  }
]

function evaluateParameter(
    f: floors,
    length: number,
    width: number,
    p: Parameter,
) {
  // need to evaluate al matrices
  const vars = {
    length: length,
    width: width,
    pricePer: p.pricePer,
    weight: p.weight,
    heatLoss: p.heatLoss,
    amount: evaluate(p.matrices.amount[f], {
      length: 10,
      width: 8,
    })
  }

  return {
    amount: vars.amount,
    price: evaluate(p.matrices.price[f], vars),
    weight: evaluate(p.matrices.weight[f], vars),
    heatLoss9: evaluate(p.matrices.heatLoss.below9deg[f], vars),
    heatLoss39: evaluate(p.matrices.heatLoss.below39deg[f], vars),
  }
}

// console.log(evaluateParameter("oneStory", 10, 8, ParameterData[0]))
// console.log(evaluateParameter("oneStory", 10, 8, ParameterData[1]))
// console.log(evaluateParameter("oneStory", 10, 8, ParameterData[2]))
console.log(evaluateParameter("oneStory", 10, 8, ParameterData[3]))