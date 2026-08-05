import { ArrowRight, Code2, Rocket, Users, CheckCircle, Award, Target } from 'lucide-react'
import Link from 'next/link'

export function CtaFidalgo() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: 'oklch(0.30 0.12 165)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'oklch(0.45 0.15 165)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'oklch(0.5 0.18 165)' }} />

      <div className="container mx-auto max-w-[900px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="h-4 w-4" style={{ color: 'oklch(0.75 0.20 165)' }} />
              <span className="text-sm font-medium" style={{ color: 'oklch(0.85 0.08 165)' }}>Soluções Profissionais</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Precisa de suporte em <span style={{ color: 'oklch(0.75 0.20 165)' }}>software</span>?
            </h2>
            
            <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto" style={{ color: 'oklch(0.85 0.08 165)' }}>
              A <strong className="text-white">Fidalgo IT Solutions</strong> é especializada em desenvolvimento de software sob medida, 
              consultoria técnica e soluções inovadoras para empresas que buscam excelência tecnológica.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105">
                <Code2 className="h-12 w-12 mx-auto mb-4" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <p className="text-lg font-semibold text-white mb-2">Desenvolvimento</p>
                <p className="text-sm" style={{ color: 'oklch(0.75 0.05 165)' }}>Software customizado para suas necessidades</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105">
                <Rocket className="h-12 w-12 mx-auto mb-4" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <p className="text-lg font-semibold text-white mb-2">Consultoria</p>
                <p className="text-sm" style={{ color: 'oklch(0.75 0.05 165)' }}>Expertise técnica especializada</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105">
                <Users className="h-12 w-12 mx-auto mb-4" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <p className="text-lg font-semibold text-white mb-2">Suporte</p>
                <p className="text-sm" style={{ color: 'oklch(0.75 0.05 165)' }}>Acompanhamento contínuo do projeto</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-5 w-5" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.85 0.08 165)' }}>Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Award className="h-5 w-5" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.85 0.08 165)' }}>Qualidade Premium</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Target className="h-5 w-5" style={{ color: 'oklch(0.75 0.20 165)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.85 0.08 165)' }}>Foco em Resultados</span>
              </div>
            </div>

            <Link 
              href="https://fidalgoitsolutions.com.br" 
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-xl"
              style={{ 
                backgroundColor: 'oklch(0.75 0.20 165)', 
                color: 'oklch(0.20 0.10 165)'
              }}
            >
              Conheça a Fidalgo IT Solutions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
