import type { MouseEvent } from "react"

import { IconBrandWhatsapp, IconMenu2, IconSolarPanel } from "@tabler/icons-react"

import { navItems } from "@/components/landing/data/landing-content"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type HeaderProps = {
  activeHref?: string
}

export function Header({ activeHref = "#inicio" }: HeaderProps) {
  const headerNavItems = navItems.filter(
    (item) => item.href !== "#contato" && item.href !== "#vantagens" && item.href !== "#projetos"
  )

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return
    }

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-6">
        <a
          href="#inicio"
          onClick={(event) => handleNavClick(event, "#inicio")}
          className="flex shrink-0 items-center gap-3 text-zinc-900"
        >
          <span className="flex size-11 items-center justify-center rounded-xl bg-[#22c55e]/12 text-[#16a34a]">
            <IconSolarPanel className="size-6" stroke={1.5} />
          </span>
          <span className="leading-tight font-bold tracking-tight">
            <span className="block text-base uppercase">Solaris</span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              Energia Solar
            </span>
          </span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Principal"
        >
          {headerNavItems.map((item) => {
            const isActive = item.href === activeHref
            return (
              <a
                key={`${item.href}-${item.label}`}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={cn(
                  "relative pt-4 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900",
                  isActive && "text-zinc-900"
                )}
              >
                {isActive ? (
                  <span
                    className="absolute top-0 right-0 left-0 h-0.5 rounded-full bg-[#16a34a]"
                    aria-hidden
                  />
                ) : null}
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-zinc-800"
          >
            <IconBrandWhatsapp className="size-5 text-[#16a34a]" />
            <span className="hidden lg:inline">(11) 99999-9999</span>
          </a>

          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size="icon-sm" className="lg:hidden" />}
            >
              <IconMenu2 />
              <span className="sr-only">Abrir menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-[84%] max-w-xs">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-6 pt-4" aria-label="Menu mobile">
                {headerNavItems.map((item) => (
                  <SheetClose
                    key={`${item.href}-${item.label}-mobile`}
                    render={
                      <a
                        href={item.href}
                        onClick={(event) => handleNavClick(event, item.href)}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                          item.href === activeHref && "bg-muted"
                        )}
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto px-6 pb-6">
                <Button
                  render={<a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" />}
                  className="h-11 w-full rounded-lg px-4 text-sm font-semibold"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
