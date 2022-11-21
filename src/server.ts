import express from 'express';
import path from 'path';
import cors from 'cors';
import 'reflect-metadata';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () =>
  console.log('🔥 Server started at http://localhost:3333')
);

// REQ --> RES
// localhost:3333
