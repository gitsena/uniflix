import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Converte __dirname e __filename para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configura armazenamento no disco
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../frontend/public/assets'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nomeUnico = `foto_capa-${Date.now()}-${Math.floor(Math.random() * 100000000)}${ext}`;
    cb(null, nomeUnico);
  }
});

export const upload = multer({ storage });
