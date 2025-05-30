// filmeService.js
import prisma from "../models/prismaClient.js";
import fs from "fs";
import path from "path";

export const getAllFilmes = async (filtros = {}) => {
  const where = {};

  if (filtros.nome) {
    where.nome = {
      contains: filtros.nome,
      mode: "insensitive"
    };
  }

  if (filtros.id_classificacao) {
    where.id_classificacao = parseInt(filtros.id_classificacao);
  }

  const generoFilter = filtros.id_genero
    ? {
        some: {
          id_genero: parseInt(filtros.id_genero)
        }
      }
    : undefined;

  return prisma.tbl_filme.findMany({
    where: {
      ...where,
      generos: generoFilter
    },
    include: {
      classificacao: true,
      generos: {
        include: {
          genero: true
        }
      }
    }
  });
};

export const getFilmeById = (id) =>
  prisma.tbl_filme.findUnique({
    where: { id: parseInt(id) },
    include: { classificacao: true }
  });

export const createFilme = async (data, file) => {
  const foto_capa = file ? file.path : ""; // Cloudinary retorna URL completa

  return prisma.tbl_filme.create({
    data: {
      nome: data.nome,
      nome_original: data.nome_original,
      data_lancamento: new Date(data.data_lancamento),
      data_relancamento: data.data_relancamento
        ? new Date(data.data_relancamento)
        : null,
      duracao: data.duracao,
      sinopse: data.sinopse,
      id_classificacao: parseInt(data.id_classificacao),
      foto_capa
    }
  });
};

export const updateFilme = async (id, data, file) => {
  // Buscar o filme atual para comparar/recuperar imagem antiga
  const filmeAtual = await prisma.tbl_filme.findUnique({
    where: { id: parseInt(id) }
  });

  let foto_capa = filmeAtual.foto_capa;

  if (file) {
    foto_capa = file.path; // URL da nova imagem
  }

  return prisma.tbl_filme.update({
    where: { id: parseInt(id) },
    data: {
      nome: data.nome,
      nome_original: data.nome_original,
      data_lancamento: new Date(data.data_lancamento),
      data_relancamento: data.data_relancamento
        ? new Date(data.data_relancamento)
        : null,
      duracao: data.duracao,
      sinopse: data.sinopse,
      id_classificacao: parseInt(data.id_classificacao),
      foto_capa
    }
  });
};

export const deleteFilme = async (id) => {
  const filmeId = parseInt(id);

  // 1. Buscar o filme para obter o nome da imagem
  const filme = await prisma.tbl_filme.findUnique({
    where: { id: filmeId }
  });

  if (!filme) {
    throw new Error("Filme não encontrado");
  }

  // 2. Caminho completo da imagem
  const caminhoImagem = path.resolve(
    "frontend",
    "public",
    "assets",
    filme.foto_capa
  );

  // 3. Deletar o filme do banco
  await prisma.tbl_filme.delete({
    where: { id: filmeId }
  });

  // 4. Tentar remover a imagem, se existir
  if (filme.foto_capa && fs.existsSync(caminhoImagem)) {
    try {
      fs.unlinkSync(caminhoImagem);
      console.log(`Imagem removida: ${filme.foto_capa}`);
    } catch (err) {
      console.error("Erro ao remover imagem:", err);
    }
  }
};
