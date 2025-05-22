import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();

export async function getGeneros(req, res) {
  try {
    const generos = await prisma.tbl_genero.findMany();
    res.json(generos);
  } catch (error) {
    console.error('Erro ao buscar generos:', error);
    res.status(500).json({ error: 'Erro ao buscar generos' });
  }
}
