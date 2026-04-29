import {
  IconBolt,
  IconBoltOff,
  IconBuilding,
  IconClipboardList,
  IconHome,
  IconLeaf,
  IconShieldCheck,
  IconSolarPanel,
  IconTool,
} from "@tabler/icons-react"
import type React from "react"

type IconComponent = React.ComponentType<{
  className?: string
  stroke?: string | number
}>

export const navItems: Array<{ href: string; label: string }> = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Soluções" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#projetos-reais", label: "Projetos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export const footerNavLinks = navItems

export const footerSolutionLinks = ["Residencial", "Comercial", "Industrial", "Rural"]

export const benefitItems: Array<{
  label: string
  subtitle: string
  icon: IconComponent
}> = [
  {
    label: "Até 95%",
    subtitle: "de economia na sua conta de luz",
    icon: IconBolt,
  },
  {
    label: "Retorno do investimento",
    subtitle: "de 2 a 5 anos",
    icon: IconShieldCheck,
  },
  {
    label: "Energia limpa e renovável",
    subtitle: "Sustentável e infinita",
    icon: IconLeaf,
  },
  {
    label: "Valorização do seu imóvel",
    subtitle: "Mais valor de mercado",
    icon: IconHome,
  },
]

export const differentials: Array<{
  title: string
  text: string
  icon: IconComponent
}> = [
  {
    title: "Economia garantida",
    text: "Reduza os custos com energia e organize o pagamento em condições que fazem sentido para você.",
    icon: IconBolt,
  },
  {
    title: "Energia sustentável",
    text: "Produza energia limpa e contribua para um futuro mais responsável com o meio ambiente.",
    icon: IconLeaf,
  },
  {
    title: "Valorização do imóvel",
    text: "Imóveis com sistema solar costumam ter mais apelo e valor percebido no mercado.",
    icon: IconHome,
  },
  {
    title: "Baixa manutenção",
    text: "Equipamentos robustos, operação estável e suporte quando você precisar.",
    icon: IconShieldCheck,
  },
]

export const steps: Array<{
  title: string
  text: string
  icon: IconComponent
}> = [
  {
    title: "Análise",
    text: "Entendemos seu consumo e apresentamos a melhor estratégia para o seu caso.",
    icon: IconClipboardList,
  },
  {
    title: "Projeto",
    text: "Dimensionamos painéis, inversores e integrações com segurança e normas vigentes.",
    icon: IconSolarPanel,
  },
  {
    title: "Instalação",
    text: "Equipe especializada executa a obra com cuidado e prazos combinados.",
    icon: IconTool,
  },
  {
    title: "Economia",
    text: "Você passa a gerar energia e reduzir a conta mês após mês.",
    icon: IconBoltOff,
  },
]

export const solutions = [
  {
    title: "Residencial",
    text: "Conforto e economia para sua família, com projeto sob medida.",
    icon: IconHome,
    imageSrc:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casa residencial com painéis solares no telhado",
  },
  {
    title: "Comercial",
    text: "Reduza custos fixos e melhore a previsibilidade do seu negócio.",
    icon: IconBuilding,
    imageSrc:
      "https://images.unsplash.com/photo-1595437193398-f24279553f4f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Telhado de prédio comercial com instalação fotovoltaica",
  },
  {
    title: "Industrial",
    text: "Alta demanda energética com foco em desempenho e retorno.",
    icon: IconTool,
    imageSrc:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Planta industrial com painéis solares",
  },
  {
    title: "Rural",
    text: "Soluções para propriedades rurais, irrigação e operações no campo.",
    icon: IconLeaf,
    imageSrc:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fazenda com painéis solares em área rural",
  },
]
