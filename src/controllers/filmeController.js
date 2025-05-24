import * as filmeService from "../services/filmeService.js";

// filmeController.js
export const getAll = async (req, res) => {
  try {
    const filtros = {
      nome: req.query.nome,
      id_classificacao: req.query.id_classificacao,
      id_genero: req.query.id_genero
    };

    const filmes = await filmeService.getAllFilmes(filtros);
    res.json(filmes);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

export const getById = async (req, res) => {
  const filme = await filmeService.getFilmeById(req.params.id);
  if (!filme) return res.status(404).json({ error: "Filme não encontrado" });
  res.json(filme);
};

export const create = async (req, res) => {
  try {
    const novoFilme = await filmeService.createFilme(req.body, req.file);
    res.status(201).json(novoFilme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar filme" });
  }
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
};

export const update = async (req, res) => {
  try {
    const filme = await filmeService.updateFilme(
      req.params.id,
      req.body,
      req.file
    );
    res.json(filme);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar filme" });
  }
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
};

export const remove = async (req, res) => {
  try {
    await filmeService.deleteFilme(req.params.id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao remover filme" });
  }
};
