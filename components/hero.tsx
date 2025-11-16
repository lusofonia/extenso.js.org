import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Sparkles, Star, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: 'oklch(0.30 0.12 165)' }}>
      {/* Grid pattern de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(oklch(0.45 0.15 165) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.45 0.15 165) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl" 
           style={{ backgroundColor: 'oklch(0.45 0.15 165)' }} />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full opacity-15 blur-3xl" 
           style={{ backgroundColor: 'oklch(0.5 0.18 165)' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge com estilo moderno */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm text-sm font-medium mb-4" 
               style={{ backgroundColor: 'oklch(0.38 0.12 165)', color: 'oklch(0.90 0.05 165)' }}>
            <Sparkles className="h-4 w-4" />
            <span>v2.1.0</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Open Source</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Zero Dependências</span>
          </div>
          
          {/* Logo principal com efeito especial */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">
              <span className="text-white">Extenso</span>
              <span className="inline-flex items-baseline">
                <span style={{ color: 'oklch(0.75 0.20 165)' }}>.js</span>
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-medium text-pretty leading-relaxed" 
               style={{ color: 'oklch(0.85 0.08 165)' }}>
              Números por extenso com JavaScript
            </p>
          </div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty leading-relaxed" 
             style={{ color: 'oklch(0.75 0.05 165)' }}>
            Uma biblioteca avançada para escrever números por extenso em português. 
            Suporte a <span className="font-semibold text-white">BigInt</span>, múltiplas <span className="font-semibold text-white">moedas</span>, <span className="font-semibold text-white">dialetos</span> e <span className="font-semibold text-white">escalas</span>.
          </p>

          {/* CTAs com estilo sofisticado */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="gap-2 text-base font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" 
              style={{ 
                backgroundColor: 'oklch(0.75 0.20 165)', 
                color: 'oklch(0.20 0.10 165)'
              }}
              asChild
            >
              <Link href="https://github.com/lusofonia/extenso.js#readme" target="_blank">
                Ler a documentação
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-base font-semibold px-8 py-6 rounded-xl border-2 backdrop-blur-sm hover:scale-105 transition-all" 
              style={{ 
                borderColor: 'oklch(0.75 0.20 165)', 
                backgroundColor: 'oklch(0.35 0.12 165 / 0.5)',
                color: 'white'
              }}
              asChild
            >
              <Link href="https://github.com/lusofonia/extenso.js/archive/2.1.0.zip" target="_blank">
                <Download className="h-5 w-5" />
                Download (v2.1.0)
              </Link>
            </Button>
          </div>

          {/* Comando de instalação com estilo destacado */}
          

          <div className="pt-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center gap-3">
                <Star className="h-10 w-10" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <div>
                  <div className="text-3xl font-bold text-white">+275</div>
                  <div className="text-sm mt-1" style={{ color: 'oklch(0.70 0.05 165)' }}>Stars no GitHub</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Download className="h-10 w-10" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <div>
                  <div className="text-3xl font-bold text-white">+1,1mi</div>
                  <div className="text-sm mt-1" style={{ color: 'oklch(0.70 0.05 165)' }}>Downloads</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Users className="h-10 w-10" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <div>
                  <div className="text-3xl font-bold text-white">+10</div>
                  <div className="text-sm mt-1" style={{ color: 'oklch(0.70 0.05 165)' }}>Contribuidores</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Zap className="h-10 w-10" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <div>
                  <div className="text-3xl font-bold text-white">0</div>
                  <div className="text-sm mt-1" style={{ color: 'oklch(0.70 0.05 165)' }}>Dependências</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
