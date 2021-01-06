import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

// var timeout =  require('connect-timeout');

export const app = express();
// app.use(timeout('2000s'));
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads/fotos', express.static(path.join(__dirname, '..', 'uploads', 'fotos')))
app.use(errorHandler);


// app.use(timeout('100s'));
// app.use(timeout(120000));
// app.use(haltOnTimedout);

// function haltOnTimedout(req, res, next){
//   if (!req.timedout) next();
// }

// var server =
 app.listen(3333);
// server.setTimeout(500000);