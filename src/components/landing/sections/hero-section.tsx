import type { FormEvent } from "react"
import { useState } from "react"

import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react"
import { motion } from "motion/react"

import { benefitItems } from "@/components/landing/data/landing-content"
import {
  cardReveal,
  cardsStagger,
  inViewProps,
  sectionReveal,
} from "@/components/landing/shared/motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [consumption, setConsumption] = useState("")

  const handleSimulationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedConsumption = consumption.trim()
    if (!normalizedConsumption) {
      return
    }

    const message = `Olá, equipe Solaris! Quero simular meu projeto de energia solar.

Meu consumo médio é de ${normalizedConsumption} kWh/mês.

Podem me enviar uma estimativa de economia e próximos passos?`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[min(88svh,44rem)] w-full overflow-hidden"
    >
      <img
        src="/solar.png"
        alt="Residência com painéis solares ao entardecer"
        className="absolute inset-0 size-full object-cover object-[center_40%]"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-white via-white/96 to-white/70 lg:via-white/92 lg:to-white/25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-t from-white/68 via-transparent to-transparent lg:from-white/20" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-10 pb-28 lg:flex-row lg:items-center lg:justify-between lg:pt-14 lg:pb-20"
        variants={sectionReveal}
        {...inViewProps}
      >
        <motion.div className="max-w-xl space-y-7" variants={cardReveal}>
          <p className="inline-flex rounded-full bg-[#0450E7]/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#033FC0] uppercase">
            Energia limpa, economia real
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Transforme o sol em <span className="text-[#0450E7]">economia</span>{" "}
            para sua casa ou empresa.
          </h1>
          <p className="max-w-lg text-lg text-zinc-800 sm:text-zinc-700">
            Soluções completas em energia solar fotovoltaica com tecnologia de
            ponta e instalação especializada.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button className="h-11 w-full rounded-lg bg-[#0450E7] px-6 text-sm font-semibold text-white hover:bg-[#033FC0] sm:w-auto">
              Solicite um orçamento <IconArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 w-full rounded-lg border-zinc-300/80 bg-white/90 px-5 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur-sm hover:bg-white hover:text-zinc-900 sm:w-auto"
            >
              <IconPlayerPlay className="size-4" /> Como funciona
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 w-full max-w-[22.5rem] shrink-0 rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:mt-0"
          variants={cardReveal}
        >
          <h2 className="text-xl font-bold text-zinc-900">
            Simule sua economia
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Veja quanto você pode economizar com energia solar!
          </p>
          <form onSubmit={handleSimulationSubmit}>
            <input
              className="mt-4 h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-800 shadow-sm outline-none placeholder:text-zinc-400 focus:border-[#0450E7] focus:ring-2 focus:ring-[#0450E7]/25"
              placeholder="Seu consumo médio (kWh/mês)"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              aria-label="Consumo médio em kWh por mês"
              value={consumption}
              onChange={(event) =>
                setConsumption(event.target.value.replace(/\D/g, ""))
              }
              required
            />
            <Button
              type="submit"
              className="mt-4 h-11 w-full rounded-lg bg-[#0450E7] text-sm font-semibold text-white hover:bg-[#033FC0]"
            >
              Simular agora
            </Button>
          </form>
        </motion.div>
      </motion.div>

      <div className="relative z-20 -mt-10 px-4 pb-6 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:pb-0">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/70 bg-white/85 px-5 py-5 sm:px-8 sm:py-6">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            variants={cardsStagger}
            {...inViewProps}
          >
            {benefitItems.map((item) => (
              <motion.article
                key={item.label}
                className="flex items-start gap-3"
                variants={cardReveal}
              >
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0450E7]/12">
                  <item.icon className="size-[1.125rem] text-[#0450E7]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-zinc-900">
                    {item.label}
                  </p>
                  <p className="text-sm leading-snug text-zinc-500">
                    {item.subtitle}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
