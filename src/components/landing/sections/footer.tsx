import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMapPin,
  IconSolarPanel,
} from "@tabler/icons-react"

import { footerNavLinks, footerSolutionLinks } from "@/components/landing/data/landing-content"

export function Footer() {
  return (
    <footer id="contato" className="scroll-mt-24 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-900">
              <IconSolarPanel className="size-8 text-[#0450E7]" stroke={1.5} />
              <span className="font-bold tracking-tight">
                <span className="block text-sm uppercase">Solaris</span>
                <span className="block text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
                  Energia Solar
                </span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600">
              Energia limpa, economia real e atendimento especializado em cada etapa do seu
              projeto.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5511999999999"
                className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-[#0450E7] transition-colors hover:bg-zinc-50"
                aria-label="WhatsApp"
              >
                <IconBrandWhatsapp className="size-5" />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="size-5" />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="size-5" />
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold text-zinc-900">Navegação</p>
            <ul className="space-y-2 text-sm text-zinc-600">
              {footerNavLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <a href={item.href} className="hover:text-[#0450E7]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold text-zinc-900">Soluções</p>
            <ul className="space-y-2 text-sm text-zinc-600">
              {footerSolutionLinks.map((label) => (
                <li key={label}>
                  <a href="#projetos" className="hover:text-[#0450E7]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-sm font-bold text-zinc-900">Informações</p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>(11) 99999-9999</li>
                <li>contato@solaris.com.br</li>
                <li className="flex gap-2">
                  <IconMapPin className="mt-0.5 size-4 shrink-0 text-[#0450E7]" />
                  <span>Av. Exemplo, 1000 — São Paulo, SP</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold tracking-wider text-zinc-400 uppercase">
                Certificações
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-500">
                <span className="rounded border border-zinc-200 px-3 py-2">ABSOLAR</span>
                <span className="rounded border border-zinc-200 px-3 py-2">ANEEL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-6">
        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Solaris Energia Solar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
