import Database from "better-sqlite3";
import path from "path";

// Caminho físico do banco de dados
const dbPath = path.join(process.cwd(), "CODE", "database.db");

// Abrir/conectar banco
const db = new Database(dbPath);

// Criar tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );
`);

export default db;
