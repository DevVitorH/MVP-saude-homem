'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Brain, Heart, MessageCircle } from 'lucide-react'

export default function TabusPage() {
  const topics = [
    {
      id: 'mental',
      icon: Brain,
      title: 'Saúde Mental Masculina',
      sections: [
        {
          heading: 'Por Que é Importante?',
          content: 'Homens tendem a buscar menos ajuda para problemas de saúde mental. A depressão, ansiedade e suicídio são desafios reais que merecem atenção.',
        },
        {
          heading: 'Sinais de Alerta',
          content: 'Mudanças no sono, irritabilidade, desinteresse em atividades, dificuldade de concentração, comportamentos de risco aumentado.',
        },
        {
          heading: 'Procurando Ajuda',
          content: 'Psicólogos, psiquiatras e grupos de apoio oferecem recursos valiosos. Não há vergonha em buscar apoio profissional para sua saúde mental.',
        },
      ],
    },
    {
      id: 'prostata',
      icon: Heart,
      title: 'Câncer de Próstata',
      sections: [
        {
          heading: 'Importância da Detecção Precoce',
          content: 'Câncer de próstata é curável quando detectado no estágio inicial. O diagnóstico precoce aumenta significativamente as chances de sucesso no tratamento.',
        },
        {
          heading: 'Quando Fazer Exames?',
          content: 'Homens acima de 50 anos (ou 45 se houver histórico familiar) devem conversar com seu médico sobre PSA e toque retal para avaliação de risco.',
        },
        {
          heading: 'Reduzindo Riscos',
          content: 'Alimentação saudável, exercício regular, peso adequado, redução de gordura saturada e aumento de licopeno (tomate) ajudam na prevenção.',
        },
      ],
    },
    {
      id: 'sexual',
      icon: MessageCircle,
      title: 'Disfunção Erétil e Andropausa',
      sections: [
        {
          heading: 'Disfunção Erétil',
          content: 'É mais comum do que parece e geralmente tem causa física ou psicológica tratável. Pode ser sinal de problemas cardiovasculares que merecem avaliação.',
        },
        {
          heading: 'Causes',
          content: 'Estresse, ansiedade, depressão, problemas vasculares, diabetes, hipertensão e efeitos colaterais de medicamentos são causas comuns.',
        },
        {
          heading: 'Tratamento',
          content: 'Medicamentos, terapia sexual, aconselhamento e mudanças no estilo de vida são opções eficazes. Converse com seu médico sobre as melhores soluções.',
        },
      ],
    },
    {
      id: 'andropausa',
      icon: Heart,
      title: 'Menopausa Masculina (Andropausa)',
      sections: [
        {
          heading: 'O que é?',
          content: 'Redução gradual de testosterona em homens a partir dos 30 anos. Enquanto as mulheres têm menopausa abrupta, homens têm declínio mais lento.',
        },
        {
          heading: 'Sintomas',
          content: 'Fadiga, queda de libido, dificuldade de ereção, perda muscular, ganho de peso, irritabilidade, problemas de concentração.',
        },
        {
          heading: 'Manejo',
          content: 'Estilo de vida (exercício, sono, nutrição), terapia de reposição hormonal quando indicada, e suporte psicológico quando necessário.',
        },
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
              Quebrando Tabus da Saúde Masculina
            </h1>
            <p className="text-muted-foreground">
              Temas importantes que merecem ser discutidos abertamente, sem julgamentos
            </p>
          </div>

          {/* Intro Message */}
          <Card className="p-8 bg-primary/5 border-primary/20 mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Saúde é um direito de todos. Conversar abertamente sobre saúde mental, próstata, disfunção erétil e outros temas é essencial para uma vida plena. Este espaço oferece informações confiáveis para que você possa tomar decisões informadas sobre sua saúde e bem-estar, sempre com apoio profissional quando necessário.
            </p>
          </Card>

          {/* Topics */}
          <div className="space-y-12">
            {topics.map(topic => {
              const Icon = topic.icon
              return (
                <div key={topic.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {topic.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topic.sections.map((section, idx) => (
                      <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-foreground mb-3">
                          {section.heading}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Support Section */}
          <Card className="mt-12 p-8 bg-secondary/5 border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Buscando Apoio?
            </h2>
            <p className="text-muted-foreground mb-4">
              Se você está enfrentando desafios com sua saúde, considere:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">→</span>
                <span>Consultar seu médico de confiança para uma avaliação completa</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">→</span>
                <span>Procurar um terapeuta ou psicólogo para questões emocionais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">→</span>
                <span>Participar de grupos de apoio comunitários</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">→</span>
                <span>Conversar com amigos e família de forma aberta</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">→</span>
                <span>Acessar linhas de prevenção ao suicídio (188 no Brasil)</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
