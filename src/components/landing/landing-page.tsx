import { useEffect, useMemo, useState } from "react"

import { IconBrandWhatsapp } from "@tabler/icons-react"
import { motion } from "motion/react"

import { navItems } from "@/components/landing/data/landing-content"
import { AboutSection } from "@/components/landing/sections/about-section"
import { CtaSection } from "@/components/landing/sections/cta-section"
import { DifferentialsSection } from "@/components/landing/sections/differentials-section"
import { Footer } from "@/components/landing/sections/footer"
import { Header } from "@/components/landing/sections/header"
import { HeroSection } from "@/components/landing/sections/hero-section"
import { ProjectCasesSection } from "@/components/landing/sections/project-cases-section"
import { SolutionsSection } from "@/components/landing/sections/solutions-section"
import { StepsSection } from "@/components/landing/sections/steps-section"
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section"

export function LandingPage() {
  const [activeHref, setActiveHref] = useState("#inicio")
  const sectionIds = useMemo(
    () =>
      Array.from(
        new Set(
          navItems
            .map((item) => item.href)
            .filter((href) => href.startsWith("#"))
            .map((href) => href.slice(1))
        )
      ),
    []
  )

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (!visibleEntries.length) {
          return
        }

        const topVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0]
        const sectionId = topVisible.target.getAttribute("id")
        if (sectionId) {
          setActiveHref(`#${sectionId}`)
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <div className="min-h-screen bg-white text-zinc-700 antialiased">
      <Header activeHref={activeHref} />

      <HeroSection />

      <DifferentialsSection />
      <StepsSection />
      <AboutSection />
      <SolutionsSection />
      <ProjectCasesSection />
      <TestimonialsSection />

      <CtaSection />

      <Footer />

      <div className="fixed right-4 bottom-8 z-50 lg:right-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#0450E7]/50"
          animate={{ scale: [1, 1.6, 2], opacity: [0, 0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#0450E7]/40"
          animate={{ scale: [1, 1.8, 2.4], opacity: [0, 0.35, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.7 }}
        />
        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noreferrer"
          aria-label="Falar no WhatsApp"
          className="relative flex size-14 items-center justify-center rounded-full bg-[#0450E7] text-white shadow-[0_16px_40px_-16px_rgba(4,80,231,0.9)] transition-transform hover:scale-105"
          animate={{
            y: [0, -3, 0],
            boxShadow: [
              "0 16px 40px -16px rgba(4,80,231,0.9)",
              "0 20px 44px -14px rgba(4,80,231,0.95)",
              "0 16px 40px -16px rgba(4,80,231,0.9)",
            ],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <IconBrandWhatsapp className="size-7" />
        </motion.a>
      </div>
    </div>
  )
}
