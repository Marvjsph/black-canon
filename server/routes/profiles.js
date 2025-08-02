import { Router } from 'express';
import pkg from '../models/index.js';    // import the entire module
const { Profile } = pkg;               // grab the Profile model



const router = Router();

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
});

export default router;
