"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Article = {
  id?: number;
  title: string;
  slug?: string;
  content: string;
};

type SearchResult = {
  _source: Article;
  _id: string;
  _index: string;
  _score: number;
  highlight?: {
    title?: string[];
    content?: string[];
  };
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [query, handleSearch]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
          Discover Content -{" "}
          <Link
            href="https://opensearch.org/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            OpenSearch
          </Link>
        </h1>

        <p className="text-slate-400">
          Search through all articles using OpenSearch
        </p>
      </div>

      <div className="relative mb-12 shadow-sm rounded-xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-24 py-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-lg"
        />

        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "..." : "Search"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4 ">
          {loading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          )}

          {!loading &&
            results.length > 0 &&
            results.map((article) => (
              <div
                key={article._id}
                className="group border border-slate-800 bg-slate-900/40 hover:bg-slate-900 p-6 rounded-xl transition-colors"
              >
                <h2
                  className="text-xl font-semibold text-blue-400 mb-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      article.highlight?.title?.[0] ?? article._source.title,
                  }}
                />

                <p
                  className="text-slate-300 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      article.highlight?.content?.[0] ??
                      article._source.content,
                  }}
                />

                {article._source.slug && (
                  <Link
                    href={`/articles/${article._source.slug}`}
                    className="inline-flex items-center text-blue-400 hover:underline"
                  >
                    Read More
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            ))}

          {!loading && query && results.length === 0 && (
            <div className="text-center py-16 px-6 border border-slate-800 rounded-xl bg-slate-900/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 mb-4">
                <svg
                  className="h-6 w-6 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-medium text-slate-200">
                No results found
              </h3>

              <p className="text-slate-400 mt-1">
                We couldn`t find anything matching `{query}`.
              </p>
            </div>
          )}
        </div>
        <div className="border border-slate-800 rounded-xl p-4 overflow-auto h-full">
          <pre className=" text-[10px]">{JSON.stringify(results, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
