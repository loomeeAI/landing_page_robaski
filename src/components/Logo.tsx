import { company } from '../data/company'

type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={`brand${compact ? ' brand--compact' : ''}`}>
      <img
        className="brand__image"
        src="/assets/robaski-logo.png"
        alt={company.name}
        width="936"
        height="328"
      />
    </span>
  )
}
