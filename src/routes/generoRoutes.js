import express from 'express';
import { getGeneros } from '../controllers/generoController.js';

const router = express.Router();

router.get('/', getGeneros);

export default router;
