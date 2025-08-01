import React from "react";
import { articles } from "../utils/dummyData";
import { Link } from "react-router-dom";

const categories = ["Medicine", "Law", "Tech"];

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Black Canon</h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat.toLowerCase()}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            {cat}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="border rounded p-4 hover:shadow"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <h3 className="font-bold">{article.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
