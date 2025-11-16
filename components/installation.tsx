'use client'

import { Card } from '@/components/ui/card'
import { Copy, Check, Terminal, Zap, Code2 } from 'lucide-react'
import { useState } from 'react'

export function Installation() {
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const handleCopy = (text: string, type: 'install' | 'code') => {
    navigator.clipboard.writeText(text)
    if (type === 'install') {
      setCopiedInstall(true)
      setTimeout(() => setCopiedInstall(false), 2000)
    } else {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  return (
    <section id="installation" className="relative py-24 px-4 overflow-hidden" style={{ 
      background: 'linear-gradient(to bottom, oklch(0.99_0.005_80), oklch(0.97_0.015_200), oklch(0.99_0.005_80))'
    }}>
      {/* Background base layer with blue tones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.98_0.02_220),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.97_0.018_200),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.98_0.012_210),transparent_60%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(oklch(0.5_0.1_0)_1px, transparent_1px),
                         linear-gradient(90deg, oklch(0.5_0.1_0)_1px, transparent_1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }} />
      
      {/* Additional gradient overlay for smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            Comece em segundos
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Instale com seu gerenciador de pacotes favorito e comece a converter números em palavras imediatamente
          </p>
        </div>

        {/* Installation Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Instalação</h3>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Card className="relative bg-[#1e1e1e] border-zinc-800 overflow-hidden gap-0 py-0">
              <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                
                <button
                  onClick={() => handleCopy('npm install extenso', 'install')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors text-xs text-zinc-300"
                >
                  {copiedInstall ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <div className="p-6">
                <pre>
                  <code className="text-sm">
                    <span className="text-green-400">$</span>{' '}
                    <span className="text-blue-400">npm install</span>{' '}
                    <span className="text-yellow-300">extenso</span>
                  </code>
                </pre>
              </div>
            </Card>
          </div>
        </div>

        {/* Usage Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20">
              <Code2 className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Uso Básico</h3>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Card className="relative bg-[#1e1e1e] border-zinc-800 overflow-hidden py-0">
              <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  
                </div>
                <button
                  onClick={() => handleCopy(`import extenso from 'extenso'\n\n// Número simples\nextenso('42')\n// => 'quarenta e dois'\n\n// Valor monetário\nextenso('1234.56', { mode: 'currency' })\n// => 'mil duzentos e trinta e quatro reais e cinquenta e seis centavos'\n\n// Dialeto de Portugal\nextenso('16', { locale: 'pt' })\n// => 'dezasseis'`, 'code')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors text-xs text-zinc-300"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <div className="p-6 py-6">
                <pre className="overflow-x-auto">
                  <code className="text-sm leading-relaxed">
                    <span className="text-purple-400">import</span>{' '}
                    <span className="text-yellow-300">extenso</span>{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-green-400">{`'extenso'`}</span>
                    {'\n\n'}
                    <span className="text-zinc-500">{'// Número simples'}</span>
                    {'\n'}
                    <span className="text-yellow-300">extenso</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-green-400">{`'42'`}</span>
                    <span className="text-zinc-400">)</span>
                    {'\n'}
                    <span className="text-zinc-500">{`// => 'quarenta e dois'`}</span>
                    {'\n\n'}
                    <span className="text-zinc-500">{'// Valor monetário'}</span>
                    {'\n'}
                    <span className="text-yellow-300">extenso</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-green-400">{`'1234.56'`}</span>
                    <span className="text-zinc-400">, {'{ '}</span>
                    <span className="text-blue-300">mode</span>
                    <span className="text-zinc-400">: </span>
                    <span className="text-green-400">{`'currency'`}</span>
                    <span className="text-zinc-400">{' })'}</span>
                    {'\n'}
                    <span className="text-zinc-500">{`// => 'mil duzentos e trinta e quatro reais e cinquenta e seis centavos'`}</span>
                    {'\n\n'}
                    <span className="text-zinc-500">{'// Dialeto de Portugal'}</span>
                    {'\n'}
                    <span className="text-yellow-300">extenso</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-green-400">{`'16'`}</span>
                    <span className="text-zinc-400">, {'{ '}</span>
                    <span className="text-blue-300">locale</span>
                    <span className="text-zinc-400">: </span>
                    <span className="text-green-400">{`'pt'`}</span>
                    <span className="text-zinc-400">{' })'}</span>
                    {'\n'}
                    <span className="text-zinc-500">{`// => 'dezasseis'`}</span>
                  </code>
                </pre>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick tips */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-primary font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-1 text-foreground">Zero Configuração</h4>
            <p className="text-sm text-muted-foreground">Funciona out-of-the-box sem setup adicional</p>
          </div>
          <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <span className="text-accent font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-1 text-foreground">TypeScript Nativo</h4>
            <p className="text-sm text-muted-foreground">Tipos completos e autocompletar no editor</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <span className="text-secondary font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-1 text-foreground">100% Testado</h4>
            <p className="text-sm text-muted-foreground">Cobertura completa de testes unitários</p>
          </div>
        </div>
      </div>
    </section>
  )
}
