import { IconMapPin, IconSolarPanel, IconUsers } from "@tabler/icons-react"

const stats = [
  {
    value: "+500",
    label: "Projetos realizados",
    icon: IconSolarPanel,
  },
  {
    value: "+2 MW",
    label: "De potência instalada",
    icon: IconMapPin,
  },
  {
    value: "+98%",
    label: "Clientes satisfeitos",
    icon: IconUsers,
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="space-y-6">
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#0450E7] uppercase">
            Sobre nós
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Especialistas em energia solar fotovoltaica
          </h2>
          <p className="text-zinc-600">
            A Solaris Energia Solar reúne experiência de campo e engenharia para entregar
            projetos que combinam desempenho, segurança e retorno financeiro — do
            residencial ao industrial.
          </p>
          <p className="text-zinc-600">
            Nosso processo é transparente: diagnóstico, proposta clara, instalação
            cuidadosa e suporte após a conexão. Você acompanha cada etapa com uma equipe
            próxima e comprometida com o resultado.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4"
              >
                <s.icon className="size-5 text-[#0450E7]" stroke={1.5} />
                <p className="mt-3 text-xl font-bold text-zinc-900">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=85"
            alt="Telhado industrial com painéis solares"
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[26rem]"
          />
          <div className="absolute bottom-4 left-4 max-w-[18rem] rounded-xl bg-zinc-900/90 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-sm">
            <p className="font-semibold">Empresa local</p>
            <p className="mt-1 text-xs leading-relaxed text-white/85">
              Atendemos toda a região com agilidade e qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
