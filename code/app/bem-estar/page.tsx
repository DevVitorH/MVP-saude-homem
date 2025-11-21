'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Utensils, Dumbbell, Moon, Leaf } from 'lucide-react'

export default function WellnessPage() {
  const topics = [
    {
      icon: Utensils,
      title: 'Nutrição',
      items: [
        { heading: 'Proteína Adequada', description: 'Essencial para manutenção muscular. Incluir em cada refeição: frango, peixe, ovos, legumes, laticínios.' },
        { heading: 'Gorduras Saudáveis', description: 'Abacate, azeite, peixes gordurosos (ômega-3). Evitar excesso de gordura saturada.' },
        { heading: 'Fibras e Vegetais', description: 'Reduzem inflamação, melhoram saúde cardiovascular. Mínimo 5 porções diárias.' },
        { heading: 'Hidratação', description: 'Pelo menos 8 copos de água por dia. Crucial para energia, cognição e saúde renal.' },
      ],
    },
    {
      icon: Dumbbell,
      title: 'Exercício Físico',
      items: [
        { heading: 'Resistência (Musculação)', description: '3x por semana, 30-45 minutos. Fortalece ossos, músculos e metabolismo.' },
        { heading: 'Cardio', description: '150 minutos moderados ou 75 intensos por semana. Caminhada, corrida, natação.' },
        { heading: 'Flexibilidade', description: 'Alongamento e ioga melhoram mobilidade e reduzem lesões.' },
        { heading: 'Consistência', description: 'Mais importante que intensidade. Encontre atividades que você goste e mantenha regularidade.' },
      ],
    },
    {
      icon: Moon,
      title: 'Qualidade do Sono',
      items: [
        { heading: 'Duração Ideal', description: '7-9 horas por noite para adultos. Afeta hormônios, imunidade e saúde mental.' },
        { heading: 'Rotina Regular', description: 'Durma e acorde no mesmo horário, mesmo nos fins de semana.' },
        { heading: 'Ambiente Apropriado', description: 'Quarto escuro, fresco, silencioso. Evite telas 1-2 horas antes de dormir.' },
        { heading: 'Hábitos Saudáveis', description: 'Evite cafeína à noite, exercite-se durante o dia, minimize estresse.' },
      ],
    },
    {
      icon: Leaf,
      title: 'Hábitos Diários',
      items: [
        { heading: 'Reduzir Estresse', description: 'Meditação, respiration profunda, caminhadas na natureza. Impacto direto na saúde cardiovascular.' },
        { heading: 'Conexões Sociais', description: 'Relacionamentos significativos melhoram saúde mental e longevidade.' },
        { heading: 'Evitar Tabaco', description: 'Aumenta riscos de câncer, doenças cardíacas. Benefícios começam imediatamente após parar.' },
        { heading: 'Moderação no Álcool', description: 'Máximo 2 drinks por dia. Consumo excessivo danifica fígado, coração e cognição.' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Bem-Estar Integral
            </h1>
            <p className="text-muted-foreground">
              Alimentação, exercício, sono e hábitos saudáveis para uma vida plena
            </p>
          </div>

          {/* Main Grid */}
          <div className="space-y-12">
            {topics.map((topic, topicIdx) => {
              const Icon = topic.icon
              return (
                <div key={topicIdx}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {topic.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {topic.items.map((item, idx) => (
                      <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-foreground mb-2">
                          {item.heading}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary */}
          <Card className="mt-12 p-8 bg-accent/5 border-accent/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              A Jornada para o Bem-Estar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bem-estar integral não acontece da noite para o dia. Comece pequeno: escolha uma área para melhorar esta semana. Depois, adicione outra. Consistência é a chave. Seu corpo e mente agradecerão cada decisão positiva que você tomar hoje. Lembre-se, você merece estar bem.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
