import { Card } from '@/components/ui/card'
import { FileText, CreditCard, GraduationCap, Building2, ArrowRight } from 'lucide-react'

const useCases = [
  {
    icon: FileText,
    title: 'Documentos Jurídicos',
    description: 'Contratos, escrituras e documentos formais que exigem valores por extenso.',
    example: 'R$ 150.000,00',
    result: 'cento e cinquenta mil reais',
    color: 'emerald',
  },
  {
    icon: CreditCard,
    title: 'Sistema Financeiro',
    description: 'Cheques, notas fiscais, recibos e comprovantes de transações bancárias.',
    example: '1.234,56',
    result: 'mil duzentos e trinta e quatro vírgula cinquenta e seis',
    color: 'blue',
  },
  {
    icon: GraduationCap,
    title: 'Aplicações Educativas',
    description: 'Ferramentas de aprendizado para ensinar matemática e português.',
    example: '42',
    result: 'quarenta e dois',
    color: 'orange',
  },
  {
    icon: Building2,
    title: 'Sistemas Administrativos',
    description: 'ERPs, sistemas de gestão e aplicações corporativas que precisam de formatação de valores.',
    example: '999.999',
    result: 'novecentos e noventa e nove mil e novecentos e noventa e nove',
    color: 'violet',
  },
]

export function UseCases() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ 
      background: 'linear-gradient(to bottom, oklch(0.96 0.015 60), oklch(0.94 0.02 70), oklch(0.98 0.01 50))'
    }}>
      {/* Background base layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.95_0.03_60),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.96_0.025_70),transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(oklch(0.5_0.1_0)_1px, transparent_1px),
                         linear-gradient(90deg, oklch(0.5_0.1_0)_1px, transparent_1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-neutral-900">
            Casos de uso
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-balance">
            Perfeito para aplicações financeiras, educativas e administrativas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            const colorClasses = {
              emerald: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300 hover:shadow-emerald-100',
              blue: 'bg-blue-50 border-blue-200 hover:border-blue-300 hover:shadow-blue-100',
              orange: 'bg-orange-50 border-orange-200 hover:border-orange-300 hover:shadow-orange-100',
              violet: 'bg-violet-50 border-violet-200 hover:border-violet-300 hover:shadow-violet-100',
            }[useCase.color]
            
            const iconColorClasses = {
              emerald: 'bg-emerald-500 text-white',
              blue: 'bg-blue-500 text-white',
              orange: 'bg-orange-500 text-white',
              violet: 'bg-violet-500 text-white',
            }[useCase.color]

            const exampleColorClasses = {
              emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700',
              blue: 'bg-blue-500/10 border-blue-500/20 text-blue-700',
              orange: 'bg-orange-500/10 border-orange-500/20 text-orange-700',
              violet: 'bg-violet-500/10 border-violet-500/20 text-violet-700',
            }[useCase.color]

            return (
              <Card 
                key={index} 
                className={`p-8 transition-all duration-300 hover:shadow-xl group border ${colorClasses}`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColorClasses} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-neutral-900">{useCase.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
