'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { AlertTriangle, Shield, Briefcase, AlertCircle } from 'lucide-react'

export default function OccupationalHealthPage() {
  const risks = [
    {
      icon: AlertTriangle,
      title: 'Lesão por Esforço Repetitivo (LER)',
      description: 'Afeta principalmente trabalhos de digitação, montagem e movimentos repetitivos',
      prevention: 'Pausas regulares, alongamento, postura correta, equipamentos ergonômicos',
    },
    {
      icon: AlertCircle,
      title: 'Problemas Respiratórios',
      description: 'Exposição a poeiras, gases, químicos em ambientes sem proteção adequada',
      prevention: 'Uso de respiradores, ventilação, monitoramento periódico da função pulmonar',
    },
    {
      icon: Shield,
      title: 'Perda Auditiva',
      description: 'Exposição prolongada a ruído acima de níveis seguros',
      prevention: 'Protetor auricular, monitoramento de ruído, audiometria anual',
    },
    {
      icon: Briefcase,
      title: 'Intoxicações Ocupacionais',
      description: 'Exposição a substâncias químicas tóxicas sem proteção',
      prevention: 'EPI adequado, fichas de segurança, ventilação, treinamento',
    },
  ]

  const eparequencies = [
    {
      sector: 'Construção Civil',
      epis: ['Capacete de segurança', 'Óculos de proteção', 'Máscara', 'Bota de segurança', 'Luvas', 'Cintos de segurança'],
    },
    {
      sector: 'Indústria Química',
      epis: ['Avental impermeável', 'Luvas de nitrilo', 'Óculos de proteção', 'Botas de borracha', 'Máscara/Respirador'],
    },
    {
      sector: 'Saúde',
      epis: ['Máscara N95', 'Luvas de látex/nitrilo', 'Avental', 'Óculos de proteção', 'Gorro', 'Propé'],
    },
    {
      sector: 'Manufactura',
      epis: ['Protetor auricular', 'Óculos de segurança', 'Luvas', 'Calçado de segurança', 'Capacete'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Saúde Ocupacional
            </h1>
            <p className="text-muted-foreground">
              Proteja sua saúde no ambiente de trabalho. Conheça seus direitos e as melhores práticas de segurança.
            </p>
          </div>

          {/* Rights Section */}
          <div className="mb-12 bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Direitos Trabalhistas Relacionados à Insalubridade
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Adicional de insalubridade (mínimo 10%, 20% ou 40% conforme grau)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Fornecimento obrigatório de EPI adequado ao risco</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Direito a pausas e redução de jornada em trabalhos insalubres</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Exames médicos periódicos obrigatórios (PCMSO)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Afastamento com salário garantido em caso de doença ocupacional</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Comunicação de Acidente de Trabalho (CAT) obrigatória</span>
              </li>
            </ul>
          </div>

          {/* Risks Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Principais Riscos Ocupacionais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {risks.map((risk, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <risk.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {risk.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {risk.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        Prevenção: {risk.prevention}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* EPI Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Equipamentos de Proteção Individual (EPI) por Setor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eparequencies.map((sector, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {sector.sector}
                  </h3>
                  <ul className="space-y-2">
                    {sector.epis.map((epi, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {epi}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Guide */}
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              O que Fazer Diante de Riscos no Ambiente de Trabalho
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">1. Denuncie.</span> Reporte riscos identificados ao SESMT (Serviço Especializado em Saúde e Segurança no Trabalho) da empresa ou ao Ministério do Trabalho.
              </p>
              <p>
                <span className="font-semibold text-foreground">2. Documente.</span> Mantenha registro de incidentes, sintomas e exposições para possíveis processos futuro.
              </p>
              <p>
                <span className="font-semibold text-foreground">3. Procure apoio médico.</span> Consulte médico ocupacional periodicamente para monitorar sua saúde.
              </p>
              <p>
                <span className="font-semibold text-foreground">4. Conheça seus direitos.</span> Consulte sindicatos e órgãos como Superintendência Regional do Trabalho (SRTE).
              </p>
              <p>
                <span className="font-semibold text-foreground">5. Use proteção.</span> Sempre utilize EPIs recomendados, mesmo que incômodo.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
