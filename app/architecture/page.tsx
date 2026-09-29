import Link from "next/link";
import Image from "next/image";
import directusOpensearch_arch from "@/images/directusOpensearch_arch.png";
export default function ArchitecturePage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
          Architecture Overview
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          A full-stack implementation demonstrating a modern CMS, database,
          search engine, and frontend working seamlessly together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Content Flow
            </h2>
            <ol className="relative border-l border-slate-700 ml-3 space-y-5">
              {[
                "Create an article in Directus.",
                "Directus stores data in Supabase PostgreSQL.",
                "Sync API indexes articles into OpenSearch.",
                "Users search from the Next.js UI.",
                "Search API queries OpenSearch.",
                "Matching articles are displayed instantly.",
              ].map((step, i) => (
                <li key={i} className="pl-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-4 ring-slate-900 text-xs font-bold text-blue-200">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-300 pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              Key Endpoints
            </h2>
            <p className="text-sm text-slate-400 mb-3 -mt-2">
              Useful endpoints for testing and integration.
            </p>
            <ul className="space-y-2">
              {[
                {
                  path: "/api/admin/opensearch/sync-directus",
                  desc: "Sync articles from Directus to OpenSearch",
                },
                {
                  path: "/api/admin/opensearch/create-index",
                  desc: "Create the articles index",
                },
                {
                  path: "/api/admin/opensearch/list-indices",
                  desc: "List all indices",
                },
                {
                  path: "/api/admin/opensearch/view-docs",
                  desc: "View raw indexed documents",
                },
                {
                  path: "/api/search?q=next",
                  desc: "Search API with fuzzy matching",
                },
              ].map((endpoint) => (
                <li
                  key={endpoint.path}
                  className="flex flex-col sm:items-center justify-between text-xs bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-slate-300 gap-2"
                >
                  <p className="font-mono text-blue-400 font-bold whitespace-nowrap">
                    {endpoint.path}
                  </p>
                  <p className="text-slate-500 text-right sm:text-left">
                    {endpoint.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <h2 className="text-xl font-semibold text-white mb-2 relative z-10">
              Architecture
            </h2>
            <p className="text-sm text-slate-400 mb-6 relative z-10">
              Overview of how all the components work together.
            </p>
            <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-x-auto relative z-10">
              <Image
                src={directusOpensearch_arch}
                alt="alt"
                width={800}
                height={600}
                className="object-contain bg-white"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Components
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Technologies used in this project.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Next.js",
                  desc: "Frontend application responsible for displaying articles, search results and calling APIs.",
                  color: "text-slate-100",
                },
                {
                  title: "Directus",
                  desc: "Headless CMS used to manage article content and expose APIs.",
                  color: "text-purple-400",
                },
                {
                  title: "Supabase",
                  desc: "PostgreSQL database used by Directus to store data.",
                  color: "text-emerald-400",
                },
                {
                  title: "OpenSearch",
                  desc: "Search engine used to index and search article content quickly.",
                  color: "text-blue-400",
                },
              ].map((tech) => (
                <div
                  key={tech.title}
                  className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:bg-slate-900 transition-colors"
                >
                  <h3 className={`font-bold text-lg mb-2 ${tech.color}`}>
                    {tech.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 relative overflow-hidden my-10">
        <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/10 border-b border-l border-emerald-500/20 rounded-bl-lg">
          <span className="text-xs font-bold text-emerald-400 flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            100% Free Tier
          </span>
        </div>

        <h2 className="text-xl font-semibold text-white mb-4">
          Behind the Scenes: Infrastructure
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          This entire application stack is deployed globally using generous
          free-tier offerings from modern cloud providers.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-purple-400 font-bold text-xs">R</span>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-bold text-slate-200">
                Directus CMS on{" "}
                <a
                  href="https://render.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Render
                </a>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Deployed as a background web service managing the API, auth, and
                admin dashboard.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-emerald-400 font-bold text-xs">S</span>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-bold text-slate-200">
                PostgreSQL on{" "}
                <a
                  href="https://supabase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Supabase
                </a>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Provides the robust, scalable SQL database that Directus uses to
                store all content and schemas.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-orange-400 font-bold text-xs">A</span>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-bold text-slate-200">
                OpenSearch on{" "}
                <a
                  href="https://aiven.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Aiven.io
                </a>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Fully managed OpenSearch cluster providing blazing-fast
                full-text search capabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-blue-400 font-bold text-xs">C</span>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-bold text-slate-200">
                Keep-Alive via{" "}
                <a
                  href="https://cron-job.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  cron-job.org
                </a>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Automatically pings the Directus health endpoint (
                <code>/server/health</code>) every 10 minutes to prevent the
                Render free tier from sleeping.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 relative overflow-hidden mb-10">
        <h2 className="text-xl font-semibold text-white mb-2">Folder Architecture</h2>
        <p className="text-sm text-slate-400 mb-6">Directory structure mapping to our key concerns.</p>
        
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-5 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300 leading-loose">
<span className="text-blue-400 font-bold">app/</span>
├── <span className="text-emerald-400">api/</span>          <span className="text-slate-500 italic"># Serverless Next.js API routes (Admin, Sync, Search)</span>
├── <span className="text-emerald-400">architecture/</span> <span className="text-slate-500 italic"># Interactive architecture UI & documentation page</span>
├── <span className="text-emerald-400">search/</span>       <span className="text-slate-500 italic"># Live OpenSearch frontend interface</span>
├── <span className="text-purple-400">layout.tsx</span>    <span className="text-slate-500 italic"># Global application shell & dark-mode styling</span>
└── <span className="text-purple-400">page.tsx</span>      <span className="text-slate-500 italic"># Directus CMS Dashboard (CRUD Operations)</span>

<span className="text-blue-400 font-bold">lib/</span>             <span className="text-slate-500 italic"># Core utilities, API clients (Directus / OpenSearch)</span>
<span className="text-blue-400 font-bold">types/</span>           <span className="text-slate-500 italic"># TypeScript definitions and strict typings</span>
          </pre>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-900/50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Implemented Features
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          What`s already working in this project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Directus CRUD",
            "Supabase Integration",
            "OpenSearch Integration",
            "Article Indexing",
            "Search API",
            "Live Search",
            "Search Highlighting",
            "Dynamic Article Pages",
            "Architecture Documentation Page",
            "Auto Sync After CRUD",
            "Render Deployment",
            "Aiven OpenSearch Setup",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-start text-sm text-slate-300"
            >
              <svg
                className="w-5 h-5 mr-2 text-emerald-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-emerald-900/20 border border-emerald-900/50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-lg font-semibold text-emerald-400 flex items-center mb-1">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Next Steps
          </h2>
          <p className="text-sm text-slate-300">
            Enhance the project with advanced filters, pagination, and
            configuring Directus webhooks for fully automated backend-to-backend
            sync.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
          <Link
            href="/search"
            className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Try Search <span className="ml-2">→</span>
          </Link>
          <Link
            href="/"
            className="flex-1 md:flex-none text-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
