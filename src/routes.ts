import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import RotaController from './controllers/RotaController';
import PesquisaController from './controllers/PesquisaController';
import UsuarioController from './controllers/UsuarioController';
import ColetaController from './controllers/ColetaController';
import VariavelPesquisaController from './controllers/VariavelPesquisaController';
import DadoColetaController from './controllers/DadoColetaController';
import FotoDadoController from './controllers/FotoDadoController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/rota', RotaController.create);
routes.get('/rotas', RotaController.index);
routes.get('/rota/:id', RotaController.show);

routes.post('/pesquisa', PesquisaController.create);
routes.get('/pesquisas', PesquisaController.index);
routes.get('/pesquisa/:id', PesquisaController.show);

routes.post('/usuario', UsuarioController.create);
routes.get('/usuarios', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);

routes.post('/coleta', ColetaController.create);
routes.get('/coletas', ColetaController.index);
routes.get('/coleta/:id', ColetaController.show);

routes.post('/variavel', VariavelPesquisaController.create);
routes.get('/variaveis', VariavelPesquisaController.index);
routes.get('/variavel/:id', VariavelPesquisaController.show);

routes.post('/dado', upload.array('arquivo_foto'), DadoColetaController.create);
routes.get('/dados', DadoColetaController.index);
routes.get('/dado/:id', DadoColetaController.show);

routes.post('/foto', upload.single('arquivo_foto'), FotoDadoController.create);
routes.get('/fotos', FotoDadoController.index);
routes.get('/foto/:id', FotoDadoController.show);

export default routes;