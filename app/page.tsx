import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Support } from '@/components/support'
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
      <Support />
      <Features />
      <UseCases />
      <Installation />
      <CtaFidalgo />
      <Footer />
    </main>
  )
}
