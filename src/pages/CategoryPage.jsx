import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../utils/dummyData";

export default function CategoryPage() {
  const { category } = useParams();
  const filtered = articles.filter(
    (a) => a.field.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{category}</h1>

      {filtered.map((article) => (
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
            <p className="text-gray-600">{article.preview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
