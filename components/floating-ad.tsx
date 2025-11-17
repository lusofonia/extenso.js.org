'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Instagram, Minimize2, Rocket, Sparkles, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function FloatingDeployAd() {
  const [isVisible, setIsVisible] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isDelayComplete, setIsDelayComplete] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const mediaQuery = typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)') : null

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    if (mediaQuery) {
      setIsDesktop(mediaQuery.matches)
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handleChange)
      } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(handleChange)
      }
    }

    return () => {
      if (mediaQuery) {
        if (typeof mediaQuery.removeEventListener === 'function') {
          mediaQuery.removeEventListener('change', handleChange)
        } else if (typeof mediaQuery.removeListener === 'function') {
          mediaQuery.removeListener(handleChange)
        }
      }
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDelayComplete(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (isDesktop && isDelayComplete) {
      requestAnimationFrame(() => setHasEntered(true))
    } else {
      setHasEntered(false)
    }
  }, [isDesktop, isDelayComplete])

  if (!isDesktop || !isDelayComplete) {
    return null
  }

  if (isCollapsed) {
    return (
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg shadow-primary/30 transition hover:scale-105"
          aria-label="Reabrir oferta de deploy da Fidalgo IT Solutions"
        >
          <Rocket className="h-4 w-4" />
          Fidalgo IT Solutions
        </button>
      </div>
    )
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-50 w-64 pointer-events-none transition-all duration-500 ease-out opacity-0 translate-y-4 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
      data-visible={hasEntered}
    >
      <article className="pointer-events-auto rounded-2xl border border-border/70 bg-card/95 text-card-foreground shadow-2xl shadow-primary/10 backdrop-blur-xl p-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle at top right, color-mix(in srgb, var(--primary) 20%, transparent), transparent 55%)',
          }}
        />
        <div className="absolute -bottom-6 -right-6 size-24 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        <div className="relative flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-[gray]">
            Anúncio
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsCollapsed(true)}
              className="rounded-full border border-border/60 bg-background/70 p-1 text-muted-foreground transition hover:text-foreground"
              aria-label="Minimizar banner de deploy"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-3 space-y-3 text-left">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Rocket className="h-5 w-5" />
            </div>
            <p className="text-base font-bold leading-tight">
              Fidalgo IT Solutions, sua consultoria especializada em DevOps.
            </p>
          </div>

          <Button
            asChild
            className="w-full h-10 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link
              href="https://fidalgoitsolutions.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Falar agora
            </Link>
          </Button>

          <div className="flex items-center justify-center text-[10px] text-muted-foreground">
            <Link
              href="https://instagram.com/fidalgoitsolutions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary/80"
            >
              <Instagram className="h-3 w-3" />
              Siga-nos no Instagram
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

