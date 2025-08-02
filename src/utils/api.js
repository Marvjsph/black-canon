const BASE_URL = 'http://localhost:5000/api';

export async function fetchArticles(category) {
  const url = category
    ? `${BASE_URL}/articles?category=${encodeURIComponent(category)}`
    : `${BASE_URL}/articles`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

export async function fetchArticleById(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}`);
  if (!res.ok) throw new Error('Failed to fetch article');
  return res.json();
}

export async function fetchProfiles() {
  const res = await fetch(`${BASE_URL}/profiles`);
  if (!res.ok) throw new Error('Failed to fetch profiles');
  return res.json();
}
