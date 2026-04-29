import { IconArrowDownRight, IconSolarPanel } from "@tabler/icons-react"
import { motion } from "motion/react"

import { projectCases } from "@/components/landing/data/project-cases"
import { cardReveal, inViewProps, sectionReveal } from "@/components/landing/shared/motion"
import { SectionHeading } from "@/components/landing/shared/section-heading"
import { cn } from "@/lib/utils"

export function ProjectCasesSection() {
  return (
    <section id="projetos-reais" className="scroll-mt-24 w-full bg-white py-16 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionReveal}
        {...inViewProps}
      >
        <SectionHeading
          eyebrow="Projetos reais"
          title="Resultados que aparecem na conta de luz"
        />
        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-sm leading-relaxed text-zinc-600">
          Exemplos ilustrativos com base em consumidores típicos: valores antes e depois da
          microgeração, economia mensal e projeção ao longo dos anos.
        </p>
        <div className="flex flex-col gap-12 lg:gap-16">
          {projectCases.map((project, index) => (
            <motion.article
              key={project.id}
              className={cn(
                "grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12",
                index % 2 === 1 &&
                  "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
              )}
              variants={cardReveal}
              {...inViewProps}
            >
              <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 shadow-sm">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[20rem]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0450E7]/12 px-3 py-1 text-xs font-semibold text-[#033FC0]">
                    <IconSolarPanel className="size-3.5" stroke={1.75} />
                    {project.systemKwp}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">{project.location}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  {project.title}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4">
                    <p className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
                      Antes
                    </p>
                    <p className="mt-1 text-lg font-bold text-zinc-900">{project.beforeBill}</p>
                    <p className="mt-0.5 text-xs text-zinc-600">média da fatura</p>
                  </div>
                  <div className="rounded-xl border border-[#bfdbfe]/80 bg-[#eff6ff]/80 p-4">
                    <p className="text-[11px] font-bold tracking-wider text-[#033FC0] uppercase">
                      Agora
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#166534]">{project.afterBill}</p>
                    <p className="mt-0.5 text-xs text-zinc-600">após o solar</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-end gap-2 rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm">
                  <IconArrowDownRight className="size-5 shrink-0 text-[#0450E7]" stroke={1.5} />
                  <div>
                    <p className="text-sm font-medium text-zinc-600">Economia mensal estimada</p>
                    <p className="text-2xl font-bold text-zinc-900">{project.monthlySavings}</p>
                    <p className="text-xs text-zinc-500">
                      ~{project.savingsPercent} vs. a fatura anterior típica
                    </p>
                  </div>
                </div>
                <dl className="grid gap-3 rounded-2xl border border-zinc-200/80 bg-white p-5 text-sm shadow-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-medium text-zinc-500">Em 5 anos</dt>
                    <dd className="mt-1 font-bold text-zinc-900">{project.savingsFiveYears}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-zinc-500">Em 10 anos</dt>
                    <dd className="mt-1 font-bold text-zinc-900">{project.savingsTenYears}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-zinc-500">Payback</dt>
                    <dd className="mt-1 font-bold text-zinc-900">{project.paybackYears}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
