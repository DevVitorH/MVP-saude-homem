'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

interface Category {
  id: string
  title: string
  icon: string
  articles: Article[]
}

interface Article {
  id: string
  title: string
  summary: string
  links: { label: string; url: string }[]
}

const categories: Category[] = [
  {
    id: 'comuns',
    title: 'Doenças Masculinas Comuns',
    icon: '🔬',
    articles: [
      {
        id: 'prostate',
        title: 'Hiperplasia Prostática Benigna (HPB)',
        summary:
          'A próstata aumenta naturalmente com a idade. Conheça os sintomas, opções de tratamento e quando procurar ajuda médica.',
        links: [
          { label: 'Informações da Mayo Clinic', url: 'https://www.mayoclinic.org' },
          { label: 'Guia de Saúde do Homem', url: 'https://www.saude.gov.br' },
        ],
      },
      {
        id: 'ed',
        title: 'Disfunção Erétil',
        summary:
          'Compreenda as causas físicas e psicológicas, opções de tratamento modernas e quando buscar apoio profissional.',
        links: [
          { label: 'American Urological Association', url: 'https://www.auanet.org' },
        ],
      },
      {
        id: 'cancer',
        title: 'Câncer de Próstata',
        summary:
          'Informações sobre detecção precoce, fatores de risco, PSA e quando fazer exames preventivos.',
        links: [
          { label: 'Instituto Nacional do Câncer', url: 'https://www.inca.gov.br' },
        ],
      },
    ],
  },
  {
    id: 'prevencao',
    title: 'Prevenção e Cuidados Gerais',
    icon: '🛡️',
    articles: [
      {
        id: 'prev-cancer',
        title: 'Prevenção do Câncer de Próstata',
        summary:
          'Estilo de vida, alimentação e exames preventivos para reduzir riscos. Recomendações por faixa etária.',
        links: [
          { label: 'Sociedade Brasileira de Urologia', url: 'https://www.sbu.org.br' },
        ],
      },
      {
        id: 'cardiovascular',
        title: 'Saúde Cardiovascular',
        summary:
          'Doença cardíaca é a principal causa de morte em homens. Conheça fatores de risco e prevenção.',
        links: [
          { label: 'Sociedade Brasileira de Cardiologia', url: 'https://www.cardiologia.org.br' },
        ],
      },
      {
        id: 'checkup',
        title: 'Checkups Recomendados por Idade',
        summary:
          'Exames essenciais em cada faixa etária para manutenção da saúde e detecção precoce.',
        links: [
          { label: 'Recomendações de Prevenção', url: 'https://www.saude.gov.br' },
        ],
      },
    ],
  },
  {
    id: 'bem-estar',
    title: 'Dicas de Bem-Estar',
    icon: '💪',
    articles: [
      {
        id: 'nutricao',
        title: 'Nutrição para Homens',
        summary:
          'Alimentos que promovem saúde hormonal, energia e vitalidade. Suplementos recomendados e evitar.',
        links: [
          { label: 'Associação Brasileira de Nutrição', url: 'https://www.abn.org.br' },
        ],
      },
      {
        id: 'exercicio',
        title: 'Exercício Físico e Resistência',
        summary:
          'Rotinas de treino recomendadas para saúde cardiovascular, músculos e metabolismo.',
        links: [
          { label: 'Colégio Brasileiro de Educação Física', url: 'https://www.cbef.org.br' },
        ],
      },
      {
        id: 'sono',
        title: 'Qualidade do Sono',
        summary:
          'Por que o sono é crucial para a saúde hormonal. Estratégias para melhorar qualidade do repouso.',
        links: [
          { label: 'Sociedade Brasileira de Sono', url: 'https://www.sbsono.org.br' },
        ],
      },
      {
        id: 'saude-sexual',
        title: 'Saúde Sexual e Reprodutiva',
        summary:
          'Informações sobre contracepção, ITS, libido e relacionamento saudável.',
        links: [
          { label: 'Clínica de Saúde Sexual', url: 'https://www.saude.gov.br' },
        ],
      },
    ],
  },
  {
    id: 'habitos',
    title: 'Hábitos Saudáveis para o Dia a Dia',
    icon: '✨',
    articles: [
      {
        id: 'estresse',
        title: 'Gestão de Estresse',
        summary:
          'Técnicas práticas para reduzir estresse, ansiedade e melhorar saúde mental.',
        links: [
          { label: 'Conselho Federal de Psicologia', url: 'https://www.cfp.org.br' },
        ],
      },
      {
        id: 'hidratacao',
        title: 'Hidratação e Saúde',
        summary:
          'Importância de manter-se hidratado. Quantidade recomendada e impacto na saúde geral.',
        links: [
          { label: 'Conselho Federal de Medicina', url: 'https://www.cfm.org.br' },
        ],
      },
      {
        id: 'alcool',
        title: 'Consumo Responsável de Álcool',
        summary:
          'Impactos do álcool na saúde, limites seguros e como buscar ajuda quando necessário.',
        links: [
          { label: 'Associação Brasileira de Psiquiatria', url: 'https://www.abp.org.br' },
        ],
      },
      {
        id: 'tabaco',
        title: 'Deixar de Fumar',
        summary:
          'Benefícios imediatos e de longo prazo. Recursos e apoio para deixar o tabagismo.',
        links: [
          { label: 'Instituto Nacional do Câncer - Tabagismo', url: 'https://www.inca.gov.br' },
        ],
      },
    ],
  },
]

export default function BibliotecaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('comuns')

  const activeCategory = categories.find(c => c.id === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Biblioteca Confiável
            </h1>
            <p className="text-muted-foreground">
              Informações verificadas sobre saúde masculina, prevenção e bem-estar
            </p>
          </div>

          {/* Category Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedCategory === category.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">
                  {category.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Articles */}
          {activeCategory && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                {activeCategory.title}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {activeCategory.articles.map(article => (
                  <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {article.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-lg transition-colors text-sm font-medium"
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
