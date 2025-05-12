import express from 'express';
import { getClassificacoes } from '../controllers/classificacaoController.js';

const router = express.Router();

router.get('/', getClassificacoes);

export default router;
