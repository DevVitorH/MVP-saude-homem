'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Plus } from 'lucide-react'

interface Reminder {
  id: string
  type: string
  description: string
  date: string
  status: 'pendente' | 'concluído'
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newReminder, setNewReminder] = useState({
    type: '',
    description: '',
    date: '',
  })

  // 👉 1. Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('reminders')
    if (saved) {
      setReminders(JSON.parse(saved))
    }
  }, [])

  // 👉 2. Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
  }, [reminders])

  const handleAddReminder = () => {
    if (newReminder.type && newReminder.date) {
      setReminders([
        ...reminders,
        {
          id: Date.now().toString(),
          ...newReminder,
          status: 'pendente',
        },
      ])
      setNewReminder({ type: '', description: '', date: '' })
      setShowForm(false)
    }
  }

  const handleDeleteReminder = (id: string) => {
    setReminders(reminders.filter(r => r.id !== id))
  }

  const handleToggleStatus = (id: string) => {
    setReminders(
      reminders.map(r =>
        r.id === id
          ? { ...r, status: r.status === 'pendente' ? 'concluído' : 'pendente' }
          : r
      )
    )
  }

  const sortedReminders = [...reminders].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Lembretes de Consultas e Exames
            </h1>
            <p className="text-muted-foreground">
              Organize seus cuidados de saúde com uma timeline intuitiva
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4 mb-8">
            {sortedReminders.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Nenhum lembrete adicionado ainda
                </p>
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Lembrete
                </Button>
              </Card>
            ) : (
              <>
                {sortedReminders.map((reminder) => (
                  <Card
                    key={reminder.id}
                    className={`p-6 border-l-4 transition-all ${
                      reminder.status === 'concluído'
                        ? 'border-l-green-500 opacity-60'
                        : 'border-l-primary'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={reminder.status === 'concluído'}
                            onChange={() => handleToggleStatus(reminder.id)}
                            className="w-5 h-5 cursor-pointer accent-primary"
                          />
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">
                              {reminder.type}
                            </h3>
                            {reminder.description && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {reminder.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium text-foreground">
                            {new Date(reminder.date).toLocaleDateString('pt-BR')}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {reminder.status === 'pendente' ? 'Pendente' : 'Concluído'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteReminder(reminder.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </>
            )}
          </div>

          {/* Add Reminder Form */}
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground mb-6"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Novo Lembrete
          </Button>

          {showForm && (
            <Card className="p-6 bg-primary/5">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Consulta/Exame
                  </label>
                  <input
                    type="text"
                    value={newReminder.type}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, type: e.target.value })
                    }
                    placeholder="Ex: Consulta com Cardiologista"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descrição (opcional)
                  </label>
                  <input
                    type="text"
                    value={newReminder.description}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, description: e.target.value })
                    }
                    placeholder="Detalhes adicionais"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Data
                  </label>
                  <input
                    type="date"
                    value={newReminder.date}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, date: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleAddReminder}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Adicionar
                  </Button>
                  <Button
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
