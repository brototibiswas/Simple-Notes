import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database';
import { errorHandler } from './middleware/errorHandler';
import noteRoutes from './routes/notes.routes';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());
app.use('/api/notes', noteRoutes)
app.use(errorHandler)

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

async function start() {
  try {
    await sequelize.authenticate();
    console.log('database connected');
  } catch (err) {
    console.error('database connection failed', err);
  }

  app.listen(port, () => {
    console.log(`api listening on http://localhost:${port}`);
  });
}

start();
