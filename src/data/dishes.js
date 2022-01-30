const defaultPath = './img/dishes/'

export default [ 
  {
    name: "Peixe Grelhado",
    description: "Fresquinho do mar e direto para o forno!",
    src:  `${defaultPath}grilled_fish.png`,
    size: "Pequeno",
    type: "Comum",
    ingredients: [
      "Peixe"
    ]
  },
  {
    name: "Pipoca",
    description: "Pipoca! Pipoca! Pipoca!",
    src: `${defaultPath}popcorn.png`,
    size: "Lanchinho",
    type: "Comum",
    ingredients: [
      "Milho"
    ]
  }
]