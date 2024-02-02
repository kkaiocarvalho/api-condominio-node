// Importa os módulos sqlite3 e open do pacote sqlite.
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Função assíncrona que retorna uma instância aberta do banco de dados SQLite.
export async function openDb () {
    return open({
      // Retorna a promessa resultante da função open, que cria uma instância do banco de dados.
      filename: './database.db', // Especifica o nome do arquivo do banco de dados.
      driver: sqlite3.Database  // Usa o driver SQLite3 para comunicação com o banco de dados.
    })
  }