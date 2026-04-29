import { IconArrowRight, IconCalculator } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full bg-linear-to-r from-[#033FC0] via-[#0450E7] to-[#2563EB] py-12 lg:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex max-w-2xl flex-col gap-4 text-center md:flex-row md:items-center md:text-left">
          <span className="mx-auto flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 md:mx-0">
            <IconCalculator className="size-8 text-white" stroke={1.5} aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Pronto para começar a economizar?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">
              Solicite um orçamento gratuito e descubra quanto você pode economizar com
              energia solar.
            </p>
          </div>
        </div>
        <Button className="h-12 shrink-0 rounded-lg bg-[#facc15] px-8 text-sm font-bold text-zinc-900 shadow-md hover:bg-[#fde047]">
          Solicitar orçamento gratuito <IconArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  )
}
