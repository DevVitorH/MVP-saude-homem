import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SaúdeMasc</h3>
            <p className="text-sm opacity-90">
              Informações confiáveis sobre saúde masculina
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/biblioteca" className="hover:underline opacity-90 hover:opacity-100">Biblioteca</Link></li>
              <li><Link href="/lembretes" className="hover:underline opacity-90 hover:opacity-100">Lembretes</Link></li>
              <li><Link href="/saude-ocupacional" className="hover:underline opacity-90 hover:opacity-100">Saúde Ocupacional</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tópicos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tabus" className="hover:underline opacity-90 hover:opacity-100">Quebra de Tabus</Link></li>
              <li><Link href="/bem-estar" className="hover:underline opacity-90 hover:opacity-100">Bem-estar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-sm opacity-90">
              Para dúvidas ou sugestões sobre o conteúdo, entre em contato conosco
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 SaúdeMasc. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
