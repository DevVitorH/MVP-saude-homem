'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, UserCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AuthModal from '@/components/AuthModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuth, setShowAuth] = useState(false)

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Biblioteca', href: '/biblioteca' },
    { label: 'Lembretes', href: '/lembretes' },
    { label: 'Saúde Ocupacional', href: '/saude-ocupacional' },
    { label: 'Sem Tabus', href: '/tabus' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-primary">
            Saúde do Homem
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Ícone do usuário */}
            <button 
              onClick={() => setShowAuth(true)} 
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <UserCircle className="w-7 h-7 text-foreground hover:text-primary" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Ícone do usuário no mobile */}
            <button
              onClick={() => {
                setShowAuth(true)
                setIsOpen(false)
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              <UserCircle className="w-6 h-6" />
              <span>Minha Conta</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal de cadastro */}
      {showAuth && <AuthModal close={() => setShowAuth(false)} />}
    </nav>
  )
}
