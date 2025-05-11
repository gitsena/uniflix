import express from 'express';
import * as filmeController from '../controllers/filmeController.js';

const router = express.Router();

router.get('/', filmeController.getAll);
router.get('/:id', filmeController.getById);
router.post('/', filmeController.create);
router.put('/:id', filmeController.update);
router.delete('/:id', filmeController.remove);



export default router;


