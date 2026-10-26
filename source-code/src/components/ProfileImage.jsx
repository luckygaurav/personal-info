import { useState } from 'react'

export default function ProfileImage({ src, initials, className = '' }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-electric/60 via-[#20214a] to-aqua/40 ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt="Lucky Gaurav"
          className="h-full w-full object-cover object-center mix-blend-luminosity transition duration-700 hover:scale-105 hover:mix-blend-normal"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_25%,#8b72ff,transparent_34%),radial-gradient(circle_at_75%_80%,#24baa9,transparent_30%),#111429]">
          <span className="font-display text-5xl font-bold tracking-[-0.1em] text-white/90">{initials}</span>
        </div>
      )}
      <div className="absolute inset-0 border border-white/15" />
      <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
        Portrait / 02
      </div>
    </div>
  )
}
