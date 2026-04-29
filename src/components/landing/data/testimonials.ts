export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  city: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "A conta despencou desde o primeiro mês após a homologação. A equipe explicou cada etapa e o retorno saiu como previsto no estudo.",
    name: "Mariana Costa",
    role: "Residencial",
    city: "São Paulo, SP",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Precisávamos previsibilidade de custo fixo. Hoje o financeiro sabe quanto entra de energia e conseguimos reinvestir a diferença na loja.",
    name: "Ricardo Almeida",
    role: "Comercial",
    city: "Campinas, SP",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Instalação no sítio para bomba e irrigação. Antes a conta era um problema sazonal; agora o sistema paga a si mesmo e ainda sobra economia.",
    name: "João Pedro Ferreira",
    role: "Rural",
    city: "Uberaba, MG",
    rating: 5,
  },
]
