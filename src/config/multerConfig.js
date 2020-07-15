import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa de ser PNG ou JPG.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({ // Este diskStorage é o disco do servidor onde estiver a correr
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')); // O null era onde controlavamos o erro
    },
    filename: (req, file, cb) => {
      // Aqui mudamos o nome do ficheiro para outra coisa
      // Não vá o user enviar uma foto com nome estranho
      // Assim convertemos o nome para data
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
