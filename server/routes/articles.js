import { Router } from 'express';
import pkg from '../models/index.js';
const { Article } = pkg;

const router = Router();



router.get('/', async (req, res) => {
  try {
    // pull `category` off the query string
    const { category } = req.query;

    // if category is provided, use it in the WHERE clause
    const where = category ? { category } : {};

    const articles = await Article.findAll({ where });
    res.json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});


// GET /api/articles/:id — fetch one article
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch article' });
  }
});

// POST /api/articles — create a new article
router.post('/', async (req, res) => {
  try {
    const { title, content, category, image, profileId } = req.body;
    const newArticle = await Article.create({
      title,
      content,
      category,
      image,
      profileId,
    });
    res.status(201).json(newArticle);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create article' });
  }
});

// PUT /api/articles/:id — update an existing article
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Update returns [numberOfAffectedRows]
    const [updated] = await Article.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: 'Article not found' });
    }
    // Fetch and return the updated record
    const updatedArticle = await Article.findByPk(id);
    res.json(updatedArticle);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update article' });
  }
});

// DELETE /api/articles/:id — remove an article
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Article.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete article' });
  }
});



export default router;
