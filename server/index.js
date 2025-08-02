import express from 'express';
import cors from 'cors';

import profilesRouter from './routes/profiles.js';
import articlesRouter from './routes/articles.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/profiles', profilesRouter);
app.use('/api/articles', articlesRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Black Canon API is running' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
