import { Card } from '@/components/ui/card'
import { Globe, Coins, Infinity, Languages, Settings, Shield, ArrowUpRight, Briefcase } from 'lucide-react'

const features = [
  {
    icon: Infinity,
    title: 'Números Gigantes',
    description: 'Suporte a números de até 10³⁹ (escala curta) ou 10⁷² (escala longa) usando BigInt.',
    href: 'https://github.com/lusofonia/extenso.js#usage',
    color: 'primary',
  },
  {
    icon: Languages,
    title: 'Dialetos do Português',
    description: 'Suporte completo para português do Brasil e de Portugal com diferenças regionais.',
    href: 'https://github.com/lusofonia/extenso.js#locales',
    color: 'blue',
  },
  {
    icon: Coins,
    title: 'Múltiplas Moedas',
    description: 'Suporte a 9 moedas: BRL, EUR, USD, AOA, CVE, XOF, MZN, STN, MOP.',
    href: 'https://github.com/lusofonia/extenso.js#currencies',
    color: 'orange',
  },
  {
    icon: Globe,
    title: 'Escalas Curta e Longa',
    description: 'Flexibilidade para usar a escala curta (Brasil) ou longa (Portugal) na escrita dos números.',
    href: 'https://github.com/lusofonia/extenso.js#scales',
    color: 'primary',
  },
  {
    icon: Settings,
    title: 'Altamente Configurável',
    description: 'Personalize gênero gramatical, separadores decimais e formatos de saída.',
    href: 'https://github.com/lusofonia/extenso.js#options',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Zero Dependências',
    description: 'Biblioteca leve e segura, sem dependências externas. Totalmente TypeScript.',
    href: 'https://github.com/lusofonia/extenso.js#installation',
    color: 'orange',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-[900px] relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Recursos Completos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-foreground">
            Poderoso e <span className="text-primary">Flexível</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Tudo que você precisa para trabalhar com números por extenso em português
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClassesMap = {
              primary: {
                bg: 'from-primary/5 to-transparent',
                border: 'border-primary/20 hover:border-primary/40',
                shadow: 'hover:shadow-primary/10',
                icon: 'bg-primary/10 border-primary/20',
                iconColor: 'text-primary',
                hoverText: 'group-hover:text-primary'
              },
              blue: {
                bg: 'from-blue-500/5 to-transparent',
                border: 'border-blue-500/20 hover:border-blue-500/40',
                shadow: 'hover:shadow-blue-500/10',
                icon: 'bg-blue-500/10 border-blue-500/20',
                iconColor: 'text-blue-600',
                hoverText: 'group-hover:text-blue-600'
              },
              orange: {
                bg: 'from-orange-500/5 to-transparent',
                border: 'border-orange-500/20 hover:border-orange-500/40',
                shadow: 'hover:shadow-orange-500/10',
                icon: 'bg-orange-500/10 border-orange-500/20',
                iconColor: 'text-orange-600',
                hoverText: 'group-hover:text-orange-600'
              }
            } as const
            const colorClasses = colorClassesMap[feature.color as keyof typeof colorClassesMap] ?? colorClassesMap.primary

            return (
              <a
                key={index}
                href={feature.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className={`p-8 h-full bg-gradient-to-br ${colorClasses.bg} border-2 ${colorClasses.border} hover:shadow-xl ${colorClasses.shadow} transition-all duration-500 group-hover:scale-[1.02] relative overflow-hidden`}>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all border ${colorClasses.icon}`}>
                        <Icon className={`h-7 w-7 ${colorClasses.iconColor}`} />
                      </div>
                      <ArrowUpRight className={`h-5 w-5 text-muted-foreground ${colorClasses.hoverText} transition-all group-hover:translate-x-1 group-hover:-translate-y-1`} />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 text-foreground transition-colors ${colorClasses.hoverText}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
