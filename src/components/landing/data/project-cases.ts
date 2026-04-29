export type ProjectCase = {
  id: string
  title: string
  location: string
  imageSrc: string
  imageAlt: string
  systemKwp: string
  beforeBill: string
  afterBill: string
  monthlySavings: string
  savingsPercent: string
  savingsFiveYears: string
  savingsTenYears: string
  paybackYears: string
}

export const projectCases: ProjectCase[] = [
  {
    id: "residencial-sp",
    title: "Residencial — telhado cerâmico",
    location: "Zona Sul, São Paulo — SP",
    imageSrc:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Residência com painéis solares no telhado",
    systemKwp: "8,2 kWp",
    beforeBill: "R$ 780/mês",
    afterBill: "R$ 95/mês",
    monthlySavings: "R$ 685",
    savingsPercent: "88%",
    savingsFiveYears: "R$ 41 mil",
    savingsTenYears: "R$ 82 mil",
    paybackYears: "3,5 anos",
  },
  {
    id: "comercial-campinas",
    title: "Comercial — loja de varejo",
    location: "Campinas — SP",
    imageSrc:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Telhado comercial com instalação fotovoltaica",
    systemKwp: "35 kWp",
    beforeBill: "R$ 4.200/mês",
    afterBill: "R$ 410/mês",
    monthlySavings: "R$ 3.790",
    savingsPercent: "90%",
    savingsFiveYears: "R$ 227 mil",
    savingsTenYears: "R$ 455 mil",
    paybackYears: "2,8 anos",
  },
  {
    id: "rural-interior",
    title: "Rural — bombeamento e irrigação",
    location: "Interior — MG",
    imageSrc:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Propriedade rural com painéis solares",
    systemKwp: "12 kWp",
    beforeBill: "R$ 1.950/mês",
    afterBill: "R$ 210/mês",
    monthlySavings: "R$ 1.740",
    savingsPercent: "89%",
    savingsFiveYears: "R$ 104 mil",
    savingsTenYears: "R$ 209 mil",
    paybackYears: "3,2 anos",
  },
]
