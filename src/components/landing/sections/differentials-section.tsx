import { motion } from "motion/react"

import { differentials } from "@/components/landing/data/landing-content"
import { cardReveal, cardsStagger, inViewProps, sectionReveal } from "@/components/landing/shared/motion"
import { SectionHeading } from "@/components/landing/shared/section-heading"

export function DifferentialsSection() {
  return (
    <section id="vantagens" className="w-full bg-white py-16 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionReveal}
        {...inViewProps}
      >
        <SectionHeading
          eyebrow="Por que escolher energia solar?"
          title="Vantagens que fazem a diferença"
        />
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardsStagger}
          {...inViewProps}
        >
          {differentials.map((item) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm"
              variants={cardReveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#0450E7]/12 text-[#0450E7]">
                <item.icon className="size-6" stroke={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
