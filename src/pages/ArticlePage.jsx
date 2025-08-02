// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleById } from "../utils/api";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(id)
      .then((data) => setArticle(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading…</p>;
  }
  if (!article) {
    return <p className="p-6">Article not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-600 mb-6">{article.category}</p>
      <div className="prose">
        {article.content || article.preview}
      </div>
    </div>
  );
}

