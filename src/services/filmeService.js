import prisma from '../models/prismaClient.js';

export const getAllFilmes = () => prisma.tbl_filme.findMany({
  include: { classificacao: true }
});

export const getFilmeById = (id) => prisma.tbl_filme.findUnique({
  where: { id: parseInt(id) },
  include: { classificacao: true }
});

export const createFilme = (data) => prisma.tbl_filme.create({ data });

export const updateFilme = (id, data) => prisma.tbl_filme.update({
  where: { id: parseInt(id) },
  data
});

export const deleteFilme = (id) => prisma.tbl_filme.delete({
  where: { id: parseInt(id) }
});
