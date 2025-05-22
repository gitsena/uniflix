import express from 'express';
import filmeRoutes from './routes/filmeRoutes.js';
import cors from 'cors';
import classificacaoRoutes from './routes/classificacaoRoutes.js';
import generoRoutes from './routes/generoRoutes.js';

const app = express();

app.use(cors()); 
app.use(express.json());
app.use('/assets', express.static('public/assets'));
app.use('/filmes', filmeRoutes);
app.use('/api/classificacoes', classificacaoRoutes);
app.use('/api/generos', generoRoutes);

export default app;