import express from 'express';
import filmeRoutes from './routes/filmeRoutes.js';

const app = express();
app.use(express.json());
app.use('/filmes', filmeRoutes);

export default app;