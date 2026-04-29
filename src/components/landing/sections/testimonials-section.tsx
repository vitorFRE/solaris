import { IconQuote, IconStarFilled } from "@tabler/icons-react"
import { motion } from "motion/react"

import { testimonials } from "@/components/landing/data/testimonials"
import { cardReveal, cardsStagger, inViewProps, sectionReveal } from "@/components/landing/shared/motion"
import { SectionHeading } from "@/components/landing/shared/section-heading"

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-24 w-full bg-zinc-50 py-16 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionReveal}
        {...inViewProps}
      >
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={cardsStagger}
          {...inViewProps}
        >
          {testimonials.map((item) => (
            <motion.figure
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm"
              variants={cardReveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <IconQuote className="size-9 text-[#0450E7]/35" stroke={1.25} aria-hidden />
              <blockquote className="mt-4 grow text-sm leading-relaxed text-zinc-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-zinc-100 pt-5">
                <div className="flex gap-0.5" aria-label={`${item.rating} de 5 estrelas`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <IconStarFilled
                      key={i}
                      className="size-4 shrink-0 text-[#eab308]"
                      stroke={1.5}
                    />
                  ))}
                </div>
                <p className="mt-3 font-bold text-zinc-900">{item.name}</p>
                <p className="text-xs font-medium text-zinc-500">
                  {item.role} · {item.city}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
