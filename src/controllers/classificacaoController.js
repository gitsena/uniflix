import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();

export async function getClassificacoes(req, res) {
  try {
    const classificacoes = await prisma.tbl_classificacao.findMany();
    res.json(classificacoes);
  } catch (error) {
    console.error('Erro ao buscar classificações:', error);
    res.status(500).json({ error: 'Erro ao buscar classificações' });
  }
}
