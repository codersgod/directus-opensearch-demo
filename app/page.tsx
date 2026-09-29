"use client";

import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  slug: string;
  content: string;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "update">("create");
  const [currentArticle, setCurrentArticle] = useState<Partial<Article>>({});

  const DIRECTUS_URL = "/api/directus";

  const loadArticles = async () => {
    try {
      const response = await fetch(`${DIRECTUS_URL}/items/articles`);
      const result = await response.json();
      setArticles(result.data || []);
    } catch (error) {
      console.error("Load Error:", error);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      await loadArticles();
    };
    fetchArticles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = modalMode === "create" ? "POST" : "PATCH";

      if (
        !currentArticle.title ||
        !currentArticle.slug ||
        !currentArticle.content
      ) {
        throw new Error("Missing required fields: title, slug, or content");
      }

      if (method === "PATCH" && !currentArticle.id) {
        throw new Error("No article ID found for update");
      }

      const body = {
        title: currentArticle.title.toString(),
        slug: currentArticle.slug.toString(),
        content: currentArticle.content.toString(),
      };

      if (method === "POST") {
        await fetch(`/api/articles/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } else {
        await fetch(`/api/articles/update`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: currentArticle.id, ...body }),
        });
      }

      setIsModalOpen(false);
      await loadArticles();
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  const deleteArticle = async (id: number) => {
    if (!confirm("Delete this article?")) return;
    try {
      await fetch(`/api/articles/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      await loadArticles();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-1">
            Directus Articles
          </h1>
          <p className="text-slate-400">
            Manage your CMS content right from the Next.js client.
          </p>
        </div>
        <button
          onClick={() => {
            setModalMode("create");
            setCurrentArticle({ title: "", slug: "", content: "" });
            setIsModalOpen(true);
          }}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-10 px-6 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Create Article
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 transition-all shadow-sm"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-100 mb-3 line-clamp-1">
                  {article.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-6 leading-relaxed">
                  {article.content}
                </p>
              </div>

              <div className="p-4 bg-slate-950/40 border-t border-slate-800 flex justify-end gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => {
                    setModalMode("update");
                    setCurrentArticle(article);
                    setIsModalOpen(true);
                  }}
                  className="text-xs font-medium text-slate-300 hover:text-blue-400 transition-colors px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteArticle(article.id)}
                  className="text-xs font-medium text-slate-300 hover:text-red-400 transition-colors px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {articles.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/20">
              <h3 className="text-lg font-medium text-slate-300">
                No articles yet
              </h3>
              <p className="text-slate-500 mt-1">
                Get started by creating your first article.
              </p>
            </div>
          )}
        </div>
        <pre className=" text-[10px] border border-slate-800 p-2 overflow-auto">
          {JSON.stringify(articles, null, 2)}
        </pre>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative z-10 w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden transform transition-all">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {modalMode === "create"
                  ? "Create New Article"
                  : "Update Article"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="E.g. Learning Next.js"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    value={currentArticle.title || ""}
                    onChange={(e) =>
                      setCurrentArticle({
                        ...currentArticle,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300">
                    Slug
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. learning-nextjs"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    value={currentArticle.slug || ""}
                    onChange={(e) =>
                      setCurrentArticle({
                        ...currentArticle,
                        slug: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300">
                    Content
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your article content here..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    value={currentArticle.content || ""}
                    onChange={(e) =>
                      setCurrentArticle({
                        ...currentArticle,
                        content: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end gap-3 pt-6 border-t border-slate-800 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    {modalMode === "create"
                      ? "Publish Article"
                      : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
