'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Heart, Calendar, BookOpen, AlertCircle, Unlock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Sua Saúde em <span className="text-primary">Primeiro Lugar</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Informações confiáveis, prevenção eficaz e bem-estar integral. Uma plataforma dedicada à saúde masculina sem tabus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/biblioteca">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Explorar Biblioteca
                </Button>
              </Link>
              <Link href="/lembretes">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Meus Lembretes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Feature 1 */}
          <Link href="/biblioteca" className="group">
            <Card className="h-full p-6 hover:shadow-lg transition-shadow hover:border-primary/50">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Biblioteca Confiável
                </h3>
                <p className="text-sm text-muted-foreground">
                  Informações verificadas sobre doenças, prevenção e bem-estar
                </p>
              </div>
            </Card>
          </Link>

          {/* Feature 2 */}
          <Link href="/lembretes" className="group">
            <Card className="h-full p-6 hover:shadow-lg transition-shadow hover:border-primary/50">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Lembretes de Consultas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe seus exames e consultas com timeline intuitiva
                </p>
              </div>
            </Card>
          </Link>

          {/* Feature 3 */}
          <Link href="/saude-ocupacional" className="group">
            <Card className="h-full p-6 hover:shadow-lg transition-shadow hover:border-primary/50">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Saúde Ocupacional
                </h3>
                <p className="text-sm text-muted-foreground">
                  Riscos no ambiente de trabalho e proteção ocupacional
                </p>
              </div>
            </Card>
          </Link>

          {/* Feature 4 */}
          <Link href="/tabus" className="group">
            <Card className="h-full p-6 hover:shadow-lg transition-shadow hover:border-primary/50">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Unlock className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Quebra de Tabus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Saúde mental, próstata e outros temas importantes
                </p>
              </div>
            </Card>
          </Link>

          {/* Feature 5 */}
          <Link href="/bem-estar" className="group">
            <Card className="h-full p-6 hover:shadow-lg transition-shadow hover:border-primary/50">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Bem-estar Integral
                </h3>
                <p className="text-sm text-muted-foreground">
                  Alimentação, exercícios, sono e hábitos saudáveis
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comece Sua Jornada de Cuidados Hoje
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore as seções abaixo e descubra informações valiosas sobre sua saúde
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <Link href="/biblioteca" className="text-center p-4 rounded-lg hover:bg-muted transition-colors">
              <p className="font-semibold text-primary">Doenças Comuns</p>
              <p className="text-sm text-muted-foreground">Informações verificadas</p>
            </Link>
            <Link href="/biblioteca" className="text-center p-4 rounded-lg hover:bg-muted transition-colors">
              <p className="font-semibold text-primary">Prevenção</p>
              <p className="text-sm text-muted-foreground">Orientações práticas</p>
            </Link>
            <Link href="/lembretes" className="text-center p-4 rounded-lg hover:bg-muted transition-colors">
              <p className="font-semibold text-primary">Consultas</p>
              <p className="text-sm text-muted-foreground">Acompanhamento</p>
            </Link>
            <Link href="/tabus" className="text-center p-4 rounded-lg hover:bg-muted transition-colors">
              <p className="font-semibold text-primary">Sem Tabus</p>
              <p className="text-sm text-muted-foreground">Temas importantes</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
