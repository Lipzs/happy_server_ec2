import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();

app.use(cors());

// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started! on port 3001`);
});