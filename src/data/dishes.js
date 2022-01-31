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
  },
  {
    name: "Curry de Peixe",
    description: "O cheiro é absolutamente maravilhoso. E por horas também!",
    src: `${defaultPath}fish_curry.png`,
    size: "Médio",
    type: "Exotico",
    ingredients: [
      "Peixe",
      "Grao"
    ]
  },
  {
    name: "Torta de Frutas Vermelhas",
    description: "O favorito de um jantar.",
    src: `${defaultPath}berry_pie.png`,
    size: "Pequeno",
    type: "Sobremesa",
    ingredients: [
      "Baga",
      "Farinha"
    ]
  },
]