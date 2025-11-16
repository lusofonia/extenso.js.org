import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Installation } from '@/components/installation'
import { UseCases } from '@/components/use-cases'
import { CtaFidalgo } from '@/components/cta-fidalgo'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Installation />
      <CtaFidalgo />
      <Footer />
    </main>
  )
}
