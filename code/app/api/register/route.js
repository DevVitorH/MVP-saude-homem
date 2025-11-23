import { NextResponse } from 'next/server'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Abrir conexão com SQLite
async function openDB() {
  return open({
    filename: './banco.sqlite',
    driver: sqlite3.Database,
  })
}

export async function POST(req) {
  try {
    const { nome, email, senha } = await req.json()

    if (!nome || !email || !senha) {
      return NextResponse.json(
        { erro: 'Preencha todos os campos.' },
        { status: 400 }
      )
    }

    const db = await openDB()

    // Verificar se o e-mail já existe
    const existente = await db.get(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    )

    if (existente) {
      return NextResponse.json(
        { erro: 'Este e-mail já está cadastrado.' },
        { status: 400 }
      )
    }

    // Inserir novo usuário
    await db.run(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    )

    return NextResponse.json(
      { mensagem: 'Usuário cadastrado com sucesso!' },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { erro: 'Erro no servidor.' },
      { status: 500 }
    )
  }
}




