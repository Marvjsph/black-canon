// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";

export default function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(category)
      .then((data) => setArticles(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <p className="p-6">Loading…</p>;
  }
  if (articles.length === 0) {
    return <p className="p-6">No articles found in “{category}.”</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{category}</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="flex items-start gap-4 mb-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <Link to={`/article/${article.id}`}>
                <h2 className="text-xl font-semibold hover:underline">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600">{article.content || article.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
