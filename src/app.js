import express from 'express';
import filmeRoutes from './routes/filmeRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors()); // Habilita CORS para todas as origens
app.use(express.json());
app.use('/filmes', filmeRoutes);

export default app;