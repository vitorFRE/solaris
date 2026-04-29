type SectionHeadingProps = {
  eyebrow: string
  title: string
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
      <p className="text-[11px] font-bold tracking-[0.18em] text-[#0450E7] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
