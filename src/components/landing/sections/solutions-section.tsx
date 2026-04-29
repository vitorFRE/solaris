import { motion } from "motion/react"

import { solutions } from "@/components/landing/data/landing-content"
import { cardReveal, cardsStagger, inViewProps, sectionReveal } from "@/components/landing/shared/motion"
import { SectionHeading } from "@/components/landing/shared/section-heading"

export function SolutionsSection() {
  return (
    <section id="projetos" className="relative w-full bg-zinc-50 py-16 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionReveal}
        {...inViewProps}
      >
        <SectionHeading
          eyebrow="Projetos realizados"
          title="Soluções para todos os tipos de clientes"
        />
        <div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={cardsStagger}
            {...inViewProps}
          >
            {solutions.map((solution) => (
              <motion.article
                key={solution.title}
                className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
                variants={cardReveal}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <img
                    src={solution.imageSrc}
                    alt={solution.imageAlt}
                    className="aspect-[16/11] w-full object-cover"
                  />
                  <div className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#16a34a] shadow-md">
                    <solution.icon className="size-5" stroke={1.5} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-zinc-900">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {solution.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
