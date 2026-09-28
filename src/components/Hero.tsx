import { useState } from 'react'
import { company, companyLinks } from '../data/company'
import './Hero.css'

function LogisticsIllustration() {
  return (
    <svg className="robaski-hero__illustration" viewBox="0 0 680 580" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hero-platform" x1="180" y1="210" x2="510" y2="490" gradientUnits="userSpaceOnUse">
          <stop stopColor="#27251e" /><stop offset="1" stopColor="#10100f" />
        </linearGradient>
        <linearGradient id="hero-roof" x1="218" y1="180" x2="480" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#454239" /><stop offset="1" stopColor="#1c1c19" />
        </linearGradient>
        <linearGradient id="hero-gold" x1="354" y1="265" x2="510" y2="215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#aa791e" /><stop offset="0.5" stopColor="#e6ba50" /><stop offset="1" stopColor="#f3d780" />
        </linearGradient>
        <linearGradient id="hero-side" x1="210" y1="220" x2="354" y2="370" gradientUnits="userSpaceOnUse">
          <stop stopColor="#39362d" /><stop offset="1" stopColor="#1b1b18" />
        </linearGradient>
        <radialGradient id="hero-light">
          <stop stopColor="#d6a62a" stopOpacity="0.16" /><stop offset="1" stopColor="#d6a62a" stopOpacity="0" />
        </radialGradient>
        <pattern id="hero-grid" width="80" height="46" patternUnits="userSpaceOnUse">
          <path d="M0 0 80 46M80 0 0 46" stroke="#c9ab63" strokeOpacity="0.07" strokeWidth="0.7" />
        </pattern>
        <g id="hero-parcel">
          <path d="m0 0 26-15L52 0 26 15Z" fill="#ebc76b" stroke="#f1d994" strokeWidth="0.6" />
          <path d="M0 0v30l26 15V15Z" fill="#987329" stroke="#d4ad51" strokeWidth="0.6" />
          <path d="m26 15 26-15v30L26 45Z" fill="#c39436" stroke="#e1b753" strokeWidth="0.6" />
          <path d="m10-6 26 15v12l7-4V5L17-10Z" fill="#f7df9c" opacity="0.7" />
          <path d="m6 22 10 6m-10-2 7 4" stroke="#e9cd87" strokeWidth="1.3" />
        </g>
      </defs>

      <ellipse cx="365" cy="330" rx="315" ry="225" fill="url(#hero-light)" />
      <path d="M20 307 342 121 662 306 342 492Z" fill="url(#hero-grid)" />

      {/* Routes are an illustration of the operation, not live delivery data. */}
      <g stroke="#846d32" strokeWidth="1" strokeLinejoin="round">
        <path d="m35 284 118-68 89 51m-55-91 133-77 270 156v119l-122 71" strokeOpacity="0.4" />
        <path d="m64 386 141 82 81-47m153-268 147 85 62-36M77 327v76l109 63" strokeOpacity="0.3" />
        <path d="m50 290 123-71 148 85 141-81 153 88" strokeOpacity="0.7" />
        <path className="robaski-hero__route robaski-hero__route--one" d="m50 290 123-71 148 85 141-81 153 88" stroke="#f0c451" strokeWidth="2" pathLength="100" />
      </g>

      {/* Layered isometric base. */}
      <path d="m109 341 238-138 257 148v15L366 504 109 356Z" fill="#11110f" stroke="#4d4125" />
      <path d="m109 341 238-138 257 148-238 138Z" fill="url(#hero-platform)" stroke="#77613a" />
      <path d="m109 351 257 148 238-138" stroke="#bd943c" strokeOpacity="0.35" />
      <path d="m132 341 215-124 234 134-215 124Z" stroke="#9e8650" strokeOpacity="0.16" />
      <path d="m180 349 174 101 207-119" stroke="#090909" strokeWidth="27" />
      <path d="m180 349 174 101 207-119" stroke="#b09558" strokeOpacity="0.45" strokeDasharray="7 9" />
      <path className="robaski-hero__route robaski-hero__route--two" d="m180 349 174 101 207-119" stroke="#f0c451" strokeWidth="2" pathLength="100" />

      {/* Warehouse: graphite roof, warm metal facade and loading bays. */}
      <path d="m207 300 146-84 150 87-146 84Z" fill="#080808" opacity="0.7" />
      <path d="M210 201 354 284v97l-144-83Z" fill="url(#hero-side)" stroke="#665636" />
      <path d="m354 284 144-83v97l-144 83Z" fill="url(#hero-gold)" stroke="#e0b550" />
      <path d="m210 201 144-83 144 83-144 83Z" fill="url(#hero-roof)" stroke="#a68a46" />
      <path d="m210 197 144-83 144 83v8l-144 83-144-83Z" fill="#282720" stroke="#b89a53" />
      <path d="m210 197 144-83 144 83-144 83Z" fill="url(#hero-roof)" stroke="#c4a357" />
      <g stroke="#928465" strokeOpacity="0.3">
        <path d="m228 187 144 83m-126-94 144 83m-126-93 144 83m-126-94 144 83m-126-93 144 83m-126-94 144 83m-126-93 144 83" />
        <path d="m225 221 0 78m17-68v78m17-68v78m17-68v78m17-68v78m17-68v78m17-68v78" />
      </g>
      <path d="m272 183 63-36 68 39-63 36Z" fill="#171918" stroke="#6b6758" />
      <path d="m277 183 58-33 62 36-57 33Z" fill="#41443c" />
      <path d="m287 177 62 36m-49-44 62 36m-49-43 62 36m-72 1 58-33" stroke="#929280" strokeOpacity="0.45" />
      <path d="m365 314 29-17v59l-29 17Zm43-25 29-17v59l-29 17Zm43-25 29-17v59l-29 17Z" fill="#151613" stroke="#8d6a25" />
      <g stroke="#6f6e59" strokeOpacity="0.55">
        <path d="m368 322 23-13m-23 22 23-13m-23 22 23-13m-23 22 23-13m20-27 23-13m-23 22 23-13m-23 22 23-13m-23 22 23-13m20-27 23-13m-23 22 23-13m-23 22 23-13m-23 22 23-13" />
      </g>
      <path d="m361 305 131-76" stroke="#fbdf97" strokeOpacity="0.55" />
      <text transform="matrix(.866 -.5 0 1 376 291)" fill="#302614" fontFamily="Barlow Condensed, sans-serif" fontSize="19" fontWeight="700" letterSpacing="3">ROBASKI</text>
      <path d="m226 254 46 26v25l-46-26Z" fill="#111310" stroke="#65634b" />
      <path d="m249 267 0 24m-23-26 46 26" stroke="#767253" />

      {/* Goods awaiting distribution. */}
      <g transform="translate(162 302) scale(.65)"><use href="#hero-parcel" /></g>
      <g transform="translate(193 320) scale(.65)"><use href="#hero-parcel" /></g>
      <g transform="translate(193 297) scale(.65)"><use href="#hero-parcel" /></g>
      <g transform="translate(230 342) scale(.5)"><use href="#hero-parcel" /></g>

      {/* Delivery truck, with a restrained suspension movement. */}
      <g transform="translate(431 350)">
        <path d="m-7 40 49-28 73 42-49 28Z" fill="#030303" opacity="0.7" />
        <g className="robaski-hero__truck">
          <path d="m0 0 39-23 52 30-39 23Z" fill="#dfc47b" stroke="#e5cf98" />
          <path d="M0 0v43l52 30V30Z" fill="#a38136" stroke="#cda74f" />
          <path d="m52 30 39-23v43L52 73Z" fill="#e0b64e" stroke="#edcc7a" />
          <path d="m6 11 40 23v27L6 38Z" fill="#bd9846" />
          <path d="m8 29 32 18" stroke="#e8cc80" strokeWidth="2" />
          <path d="m13 18 25 14" stroke="#6b5323" strokeWidth="4" />
          <path d="m52 51 24-14 24 14v26L76 91 52 77Z" fill="#c89e3d" stroke="#e6bd5e" />
          <path d="m52 51 24-14 24 14-24 14Z" fill="#f0d58d" />
          <path d="m79 68 17-10v13L79 81Z" fill="#242a26" stroke="#f4d889" />
          <path d="m55 58 16 9v13l-16-9Z" fill="#272b25" />
          <path d="m79 85 17-10" stroke="#ffe8a8" strokeWidth="3" />
          <ellipse cx="14" cy="52" rx="6" ry="9" transform="rotate(-24 14 52)" fill="#0a0a09" stroke="#8f815f" strokeWidth="2" />
          <ellipse cx="63" cy="81" rx="6" ry="9" transform="rotate(-24 63 81)" fill="#0a0a09" stroke="#8f815f" strokeWidth="2" />
        </g>
      </g>

      {/* Elevated parcel connects the commercial and delivery stages. */}
      <path d="m116 196 0 80" stroke="#d6a62a" strokeDasharray="2 5" strokeOpacity="0.4" />
      <ellipse className="robaski-hero__parcel-shadow" cx="116" cy="276" rx="27" ry="13" fill="#d6a62a" fillOpacity="0.1" />
      <g transform="translate(90 180)"><g className="robaski-hero__parcel"><use href="#hero-parcel" /></g></g>
      <g fill="#f0c451">
        <circle cx="50" cy="290" r="3" /><circle cx="615" cy="311" r="3" />
        <circle cx="187" cy="176" r="2" /><circle cx="468" cy="445" r="2" />
      </g>
      <g stroke="#f0c451" strokeOpacity="0.5">
        <path d="M65 138h10m-5-5v10M555 165h10m-5-5v10M287 508h10m-5-5v10" />
      </g>
      <g className="robaski-hero__diagram-label" fill="#aaa38e">
        <text x="66" y="160">01 / COMERCIAL</text>
        <text x="390" y="89">02 / DISTRIBUIÇÃO</text>
        <text x="503" y="472">03 / ENTREGA</text>
      </g>
      <path d="m400 99-27 16m175 347-23-14" stroke="#a38a48" strokeOpacity="0.5" />
    </svg>
  )
}

export function Hero() {
  const [motionPaused, setMotionPaused] = useState(false)

  return (
    <section className={`robaski-hero${motionPaused ? ' robaski-hero--paused' : ''}`} id="inicio" aria-labelledby="hero-title">
      <div className="robaski-hero__ambient" aria-hidden="true" />
      <div className="container robaski-hero__inner">
        <div className="robaski-hero__copy">
          <p className="robaski-hero__eyebrow"><span aria-hidden="true" /> Tradição que segue em movimento</p>
          <h1 id="hero-title">
            <span>Distribuição</span>
            <span>que <em>move</em></span>
            <span>negócios<span className="robaski-hero__period">.</span></span>
          </h1>
          <p className="robaski-hero__lead">
            Há mais de três décadas, a Robaski conecta operação comercial, logística e entrega para atender seus clientes com agilidade, compromisso e proximidade.
          </p>
          <div className="robaski-hero__actions">
            <a className="button button--gold robaski-hero__cta" href={companyLinks.whatsapp} target="_blank" rel="noreferrer">
              Falar no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="robaski-hero__discover" href="#empresa">Conhecer a Robaski <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <figure className="robaski-hero__visual" aria-label="Ilustração de um centro de distribuição com mercadorias, caminhão e rotas conectando a operação comercial à entrega.">
          <div className="robaski-hero__visual-heading" aria-hidden="true"><span>Da origem ao destino</span><span>R / 1995</span></div>
          <LogisticsIllustration />
          <figcaption className="robaski-hero__caption"><span className="robaski-hero__caption-line" aria-hidden="true" /> Uma operação. Muitas conexões.</figcaption>
        </figure>

        <div className="robaski-hero__foot">
          <div className="robaski-hero__heritage"><strong>30<span>+</span></strong><p>Anos de história.<br /><span>Compromisso em cada entrega.</span></p></div>
          <p className="robaski-hero__origin"><span className="robaski-hero__origin-dot" aria-hidden="true" />{company.address.city} / {company.address.state}<span>Desde {company.foundationYear}</span></p>
          <button className="robaski-hero__motion" type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused((paused) => !paused)}>
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">{motionPaused ? <path d="m5 3 7 5-7 5Z" /> : <path d="M4 3h3v10H4Zm5 0h3v10H9Z" />}</svg>
            <span>{motionPaused ? 'Retomar animação' : 'Pausar animação'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
