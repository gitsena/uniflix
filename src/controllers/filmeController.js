import * as filmeService from '../services/filmeService.js';

export const getAll = async (req, res) => {
  const filmes = await filmeService.getAllFilmes();
  res.json(filmes);
};

export const getById = async (req, res) => {
  const filme = await filmeService.getFilmeById(req.params.id);
  if (!filme) return res.status(404).json({ error: 'Filme não encontrado' });
  res.json(filme);
};

export const create = async (req, res) => {
  const filme = await filmeService.createFilme(req.body);
  res.status(201).json(filme);
};

export const update = async (req, res) => {
  const filme = await filmeService.updateFilme(req.params.id, req.body);
  res.json(filme);
};

export const remove = async (req, res) => {
  await filmeService.deleteFilme(req.params.id);
  res.status(204).end();
};