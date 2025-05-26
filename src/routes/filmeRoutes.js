import express from 'express';
import * as filmeController from '../controllers/filmeController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get('/', filmeController.getAll);
router.get('/:id', filmeController.getById);
router.post('/', upload.single('foto_capa'), filmeController.create);
router.put('/:id', upload.single('foto_capa'), filmeController.update);
router.delete('/:id', filmeController.remove);

export default router;
