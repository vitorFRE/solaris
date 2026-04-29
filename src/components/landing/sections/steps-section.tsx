import { Fragment } from "react"

import { IconChevronRight } from "@tabler/icons-react"
import { motion } from "motion/react"

import { steps } from "@/components/landing/data/landing-content"
import { cardReveal, cardsStagger, inViewProps, sectionReveal } from "@/components/landing/shared/motion"
import { SectionHeading } from "@/components/landing/shared/section-heading"

export function StepsSection() {
  return (
    <section id="como-funciona" className="w-full bg-zinc-50 py-16 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionReveal}
        {...inViewProps}
      >
        <SectionHeading eyebrow="Como funciona" title="Do sol para sua casa em 4 passos" />
        <motion.div
          className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-2"
          variants={cardsStagger}
          {...inViewProps}
        >
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <motion.article
                className="flex flex-1 flex-col items-center text-center"
                variants={cardReveal}
              >
                <div className="relative">
                  <div className="flex size-[4.5rem] items-center justify-center rounded-full border-2 border-[#bbf7d0] bg-white shadow-sm">
                    <step.icon className="size-7 text-[#16a34a]" stroke={1.5} />
                  </div>
                  <span className="absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-[#16a34a] text-xs font-bold text-white shadow">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-zinc-900">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-zinc-600">
                  {step.text}
                </p>
              </motion.article>
              {index < steps.length - 1 ? (
                <IconChevronRight
                  className="hidden size-6 shrink-0 self-center text-zinc-300 lg:mt-10 lg:block"
                  stroke={1.5}
                  aria-hidden
                />
              ) : null}
            </Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
