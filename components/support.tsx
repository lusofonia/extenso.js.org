import { Heart, QrCode, Coffee, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Support() {
  return (
    <section className="py-12 px-4" style={{ backgroundColor: 'oklch(0.98 0.03 85)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texto à esquerda */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <h2 className="text-xl font-bold text-foreground">Apoie o projeto</h2>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              O Extenso.js é criado e mantido por <Link href="https://www.linkedin.com/in/matheusalvesbrx/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Matheus Alves</Link> e utilizado como vitrine para a <Link href="https://fidalgoitsolutions.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Fidalgo IT Solutions</Link>.
            </p>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Como o projeto é open source e não gera lucro direto, sua doação ajuda a manter o foco e a evolução das ferramentas. Qualquer valor é bem-vindo!
            </p>
          </div>

          {/* Botões à direita */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              asChild
              className="gap-2 px-4 py-3 h-auto bg-white text-foreground border-2 border-white/20 hover:bg-white/90 rounded-lg text-sm"
            >
              <Link href="https://nubank.com.br/cobrar/193y02/67a7cf95-b24c-4a98-95b2-9ce5daf03e2c" target="_blank" rel="noopener noreferrer">
                <QrCode className="h-4 w-4" />
                <span>Pix</span>
              </Link>
            </Button>
            
            <Button
              asChild
              className="gap-2 px-4 py-3 h-auto bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 rounded-lg text-sm"
            >
              <Link href="https://www.paypal.com/donate/?hosted_button_id=3TPLED2TF5874" target="_blank" rel="noopener noreferrer">
                <Coffee className="h-4 w-4" />
                <span>PayPal</span>
              </Link>
            </Button>
            
            <Button
              asChild
              className="gap-2 px-4 py-3 h-auto bg-foreground text-background border-2 border-foreground hover:bg-foreground/90 rounded-lg text-sm"
            >
              <Link href="https://github.com/sponsors/theuves" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span>GitHub Sponsor</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
