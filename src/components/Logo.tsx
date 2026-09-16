import { useState } from 'react'
import { company } from '../data/company'

type LogoProps = {
  inverse?: boolean
}

export function Logo({ inverse = false }: LogoProps) {
  const [imageUnavailable, setImageUnavailable] = useState(false)

  return (
    <span className={`brand ${inverse ? 'brand--inverse' : ''}`}>
      {!imageUnavailable && (
        <img
          className="brand__image"
          src="/assets/robaski-logo.png"
          alt={company.name}
          width="190"
          height="62"
          onError={() => setImageUnavailable(true)}
        />
      )}
      {imageUnavailable && (
        <span className="brand__fallback" aria-label={company.name}>
          <span className="brand__mark" aria-hidden="true">R</span>
          <span className="brand__words">
            <strong>ROBASKI</strong>
            <small>DISTRIBUIDORA</small>
          </span>
        </span>
      )}
    </span>
  )
}
