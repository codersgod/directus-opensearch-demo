import Image from "next/image";
import React from "react";
import DIRECTUS_ARCH from "@/images/directus_arch.jpg";
/* ─────────────────────────────────────────────
   Reusable UI Components
   ───────────────────────────────────────────── */

function CodeBlock({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-slate-700/60 bg-[#0d1117]">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/90 border-b border-slate-700/60">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-auto text-[11px] font-mono text-slate-500 uppercase tracking-widest">
          {language}
        </span>
      </div>
      <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed">
        <code className="text-emerald-300 font-mono whitespace-pre">
          {children.split("\n").map((line, i, arr) => {
            const commentIndex = line.indexOf("//");
            return (
              <React.Fragment key={i}>
                {commentIndex === -1 ? (
                  line
                ) : (
                  <>
                    {line.slice(0, commentIndex)}
                    <span className="text-slate-500">
                      {line.slice(commentIndex)}
                    </span>
                  </>
                )}
                {i < arr.length - 1 ? "\n" : ""}
              </React.Fragment>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 shadow-lg shadow-black/20">
      {children}
    </section>
  );
}

function Topic({
  emoji,
  children,
}: {
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2.5 mb-4">
      <span>{emoji}</span>
      {children}
    </h3>
  );
}

function SubTopic({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-md font-semibold text-slate-200 mt-6 mb-3 flex items-center gap-2 border-l-2 border-blue-500 pl-3">
      {children}
    </h3>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex text-sm items-start gap-2.5 text-slate-300 leading-relaxed">
      <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2">{children}</ul>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-blue-500/50 bg-blue-500/5 p-4">
      <p className="text-xs font-bold uppercase tracking-wider mb-1 text-blue-400/80">
        📝 Note
      </p>
      <p className="text-sm leading-relaxed text-blue-200/90">{children}</p>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-emerald-500/50 bg-emerald-500/5 p-4">
      <p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-400/80">
        💡 Tip
      </p>
      <p className="text-sm leading-relaxed text-emerald-200/90">{children}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
      {children}
    </span>
  );
}

function Divider() {
  return <hr className="border-slate-800 my-2" />;
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-slate-100 font-semibold">{children}</strong>;
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function LearnDirectusPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* ── Sticky Header ── */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <span className="text-2xl">📘</span>
          <h1 className="text-xl font-bold text-slate-100 tracking-tight">
            Directus Notes
          </h1>
          <Badge>Learning Path</Badge>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {/* ═══════════════════════════════════════
            1. WHAT IS DIRECTUS?
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📖">What is Directus?</Topic>
          <BulletList>
            <Bullet>
              An <B>open‑source, backend‑as‑a‑service</B> data platform that
              layers on top of any new or existing SQL database.
            </Bullet>
            <Bullet>
              Instantly turns your database into a <B>secure headless CMS</B>{" "}
              and data engine with automatic APIs and a code‑free admin panel.
            </Bullet>
            <Bullet>
              Acts as a <B>transparent wrapper</B> — your data stays in standard
              database tables with full ownership and zero vendor lock‑in.
            </Bullet>
          </BulletList>
          <Tip>
            Unlike traditional CMS platforms that enforce proprietary data
            models, Directus never modifies your underlying schema.
          </Tip>
        </Card>

        {/* ═══════════════════════════════════════
            2. THREE‑LAYER ARCHITECTURE
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🧱">Three‑Layer Architecture</Topic>

          <SubTopic>1. Your SQL Database</SubTopic>
          <BulletList>
            <Bullet>
              Maps directly to <B>PostgreSQL, MySQL, SQLite, Oracle</B>.
            </Bullet>
            <Bullet>
              Mirrors your exact schema dynamically — no proprietary format.
            </Bullet>
          </BulletList>

          <SubTopic>2. The Data Engine (Node.js)</SubTopic>
          <BulletList>
            <Bullet>
              Generates instant, comprehensive <B>REST &amp; GraphQL APIs</B>.
            </Bullet>
            <Bullet>
              Handles file management and the authentication framework.
            </Bullet>
          </BulletList>

          <SubTopic>3. The Data Studio (Vue.js)</SubTopic>
          <BulletList>
            <Bullet>
              A beautiful, responsive <B>no‑code web application</B>.
            </Bullet>
            <Bullet>
              Intuitive GUI for content management, analytics, and data
              authoring.
            </Bullet>
          </BulletList>
          <Image
            src={DIRECTUS_ARCH}
            alt="Three-Layer Architecture"
            width={800}
            height={400}
            className="mt-4 rounded-lg mx-auto"
          />
        </Card>

        {/* ═══════════════════════════════════════
            3. CORE CAPABILITIES
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="✨">Core Capabilities &amp; Features</Topic>
          <div className="grid gap-4 sm:grid-cols-2 mt-2">
            {[
              {
                title: "Instant APIs & SDK",
                desc: "Create a collection → get a granular CRUD API instantly. Query via the official JS SDK.",
              },
              {
                title: "Granular Access Control",
                desc: "RBAC at collection, field, and row level — consistent across dashboard & API.",
              },
              {
                title: "Directus Flows",
                desc: "Built‑in automation builder with triggers, conditions, and webhook steps.",
              },
              {
                title: "Digital Asset Mgmt",
                desc: "Media manager with image editing, metadata, and on‑the‑fly thumbnails.",
              },
              {
                title: "Highly Extensible",
                desc: "Custom extensions in Vue.js & Node.js, published via the Directus Marketplace.",
              },
              {
                title: "AI & Dev Tooling",
                desc: "Native MCP server for context‑aware developer tools.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
              >
                <p className="font-semibold text-slate-100 mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* ═══════════════════════════════════════
            4. GETTING STARTED
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🚀">Getting Started</Topic>
          <p className="text-slate-400 mb-4">
            Three primary paths to experiment or deploy:
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Local",
                tag: "Docker / npx",
                desc: "Spin up a local container or use npx init scripts to mock front‑ends.",
              },
              {
                label: "Self‑Hosted",
                tag: "VPS / AWS",
                desc: "Deploy to an Ubuntu VPS, AWS EC2, or any custom server infrastructure.",
              },
              {
                label: "Directus Cloud",
                tag: "Managed",
                desc: "Free Community Cloud tier for testing or premium tiers for enterprise.",
              },
            ].map((opt) => (
              <div
                key={opt.label}
                className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-800/20 p-4"
              >
                <Badge>{opt.tag}</Badge>
                <div>
                  <p className="font-semibold text-slate-100">{opt.label}</p>
                  <p className="text-sm text-slate-400">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ═══════════════════════════════════════
            5. CHEAT SHEET — DASHBOARD vs CODE
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📚">Cheat Sheet — Dashboard vs. Code</Topic>

          <SubTopic>📌 Core Architecture</SubTopic>
          <BulletList>
            <Bullet>
              <B>Transparent Wrapper</B> — sits on your SQL database without
              modifying the schema.
            </Bullet>
            <Bullet>
              <B>Instant Backend</B> — dynamically generates REST/GraphQL APIs
              the moment a table is created.
            </Bullet>
          </BulletList>

          <SubTopic>🖥️ The Dashboard (No‑Code Data Studio)</SubTopic>
          <BulletList>
            <Bullet>
              <B>Schema Builder</B> — Creating a Collection = table; adding a
              Field = column.
            </Bullet>
            <Bullet>
              <B>Content Management</B> — GUI for authoring text, uploading
              files, managing media.
            </Bullet>
            <Bullet>
              <B>Access Control</B> — Granular Roles &amp; Permissions (RBAC)
              down to rows and fields.
            </Bullet>
            <Bullet>
              <B>Automation</B> — Directus Flows, a node‑based automation engine
              (like Zapier).
            </Bullet>
          </BulletList>

          <SubTopic>⚙️ The SDK (Code‑Level Interaction)</SubTopic>
          <BulletList>
            <Bullet>
              Type‑safe &amp; modular JS/TS library optimized for modern
              frontend frameworks.
            </Bullet>
          </BulletList>

          <p className="text-sm font-semibold text-slate-200 mt-5 mb-1">
            Client Setup
          </p>
          <CodeBlock language="typescript">
            {`import { createDirectus, rest, readItems } from '@directus/sdk';

const client = createDirectus('https://example.com').with(rest());`}
          </CodeBlock>

          <p className="text-sm font-semibold text-slate-200 mt-5 mb-1">
            Fetching Data
          </p>
          <CodeBlock language="typescript">{`const articles = await client.request(
  readItems('articles', {
    fields: ['title', 'slug'],
    filter: { status: { _eq: 'published' } }
  })
);`}</CodeBlock>

          <SubTopic>🔄 Schema‑as‑Code</SubTopic>
          <BulletList>
            <Bullet>
              <B>JSON Backups</B> — export your entire dashboard config into a
              single JSON file.
            </Bullet>
            <Bullet>
              <B>CI/CD Automation</B> — apply it across environments via a
              single terminal command.
            </Bullet>
          </BulletList>
          <CodeBlock language="bash">{`npx directus schema apply ./schema.json`}</CodeBlock>

          <Note>
            Schema‑as‑Code lets you version‑control your entire Directus
            structure and reproduce it in any environment automatically.
          </Note>
        </Card>

        <Card>
          <Topic emoji="🔍"> API Query Parameters Reference</Topic>
          <p className="text-slate-400 mb-2">
            These parameters apply identically to both the REST API (GET
            /items/posts?...) and the SDK query object
          </p>

          <table className="min-w-full text-sm text-left text-slate-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  Parameter
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  Purpose
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  fields
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Controls which columns/relations are returned
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  fields=id,title,author.name
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  filter
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Standard filter matching rules
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  filter[status][_eq]=published
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">sort</td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Determines sorting order
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  sort=-date_created,title
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  limit
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Controls max records returned
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  limit=25
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  offset
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Skips a specific number of records
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  offset=50
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">page</td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Simple pagination helper
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  page=2
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  search
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Full-text search across text fields
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  search=headless cms
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="mt-10 mb-5 underline">Common Filter Operators</h3>
          <BulletList>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                _eq, _neq
              </code>
              : Equals / Not Equals
            </Bullet>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                _contains, _icontains
              </code>
              : Contains substring (case-sensitive / case-insensitive)
            </Bullet>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                _gt, _gte, _lt, _lte
              </code>
              : Greater than, Less than (or equal to)
            </Bullet>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                _in, _nin
              </code>
              : Value matches / does not match any entry in an array
            </Bullet>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                _null, _nnull
              </code>
              : Is null / Is not null
            </Bullet>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                _some, _none
              </code>
              : Matches at least one or no related entries (for M2M/O2M
              relationships)
            </Bullet>
          </BulletList>
        </Card>

        {/* ═══════════════════════════════════════
            6. THE DIRECTUS SDK — DEEP DIVE
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🧩">The Directus SDK — Deep Dive</Topic>
          <p className="text-slate-400 mb-2">
            The official{" "}
            <code className="text-emerald-400 bg-slate-800 px-1.5 py-0.5 rounded text-sm">
              @directus/sdk
            </code>{" "}
            is a dependency‑free, modular, TypeScript‑first library with a
            composable architecture — only import what you need.
          </p>

          <SubTopic>1. Composable Client Setup</SubTopic>
          <BulletList>
            <Bullet>
              Build with{" "}
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                .with()
              </code>{" "}
              like Lego blocks — load only REST, Auth, or Realtime as needed.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { createDirectus, rest, authentication, realtime } from '@directus/sdk';

const client = createDirectus('https://example.com')
  .with(rest())                                       // REST query capabilities
  .with(authentication('json', { persist: true }));   // Login, logout, token auto-refresh
  .with(realtime());                                  // WebSocket subscriptions`}</CodeBlock>

          <SubTopic>2. Advanced Data Querying (Global Query Object)</SubTopic>
          <BulletList>
            <Bullet>
              Replace complex SQL strings with clear, nested query objects.
            </Bullet>
            <Bullet>
              Supports <B>relational fields</B>, <B>logical operators</B> (_and,
              _or), <B>sorting</B>, and <B>pagination</B>.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`const products = await client.request(
  readItems('products', {
    // 🎯 Fields — select columns & deep relational data
    fields: ['id', 'name', { category: ['title', 'slug'] }],

    // 🔍 Filtering — logical operators- _and, _or  here means both status and price conditions must be met
    filter: {
      _and: [
        { status: { _eq: 'published' } },
        { price: { _lte: 50 } }
      ]
    },

    // 🔢 Sorting & Pagination
    sort: ['-date_created', 'name'],
    limit: 20,
    page: 1
  })
);`}</CodeBlock>

          <SubTopic>3. Authentication &amp; Security</SubTopic>
          <p className="text-slate-400 text-sm mb-3">
            Two distinct patterns for managing auth:
          </p>

          <p className="text-sm font-semibold text-slate-200 mb-1">
            Option A — User Login (Cookies or JSON Tokens)
          </p>
          <CodeBlock language="typescript">{`// Logs a user in; handles access/refresh tokens under the hood
await client.login('user@example.com', 'securepassword');`}</CodeBlock>

          <p className="text-sm font-semibold text-slate-200 mt-4 mb-1">
            Option B — Static Token (Server‑to‑Server)
          </p>
          <CodeBlock language="typescript">{`import { staticToken } from '@directus/sdk';

// Perfect for SSG (Next.js, Astro) or backend microservices
const systemClient = createDirectus('https://example.com')
  .with(staticToken('YOUR_STATIC_USER_TOKEN'))
  .with(rest());`}</CodeBlock>

          <SubTopic>4. TypeScript‑First Design (Strict Type Safety)</SubTopic>
          <BulletList>
            <Bullet>
              Feed a custom schema interface into{" "}
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                createDirectus
              </code>{" "}
              for strict autocomplete on collection names, fields, and filters.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`// 1. Define your database structure types
interface Article {
  id: number;
  title: string;
  content: string;
}

interface MySchema {
  articles: Article[];  // Registers a multi-item collection
}

// 2. Inject schema into the client
const client = createDirectus<MySchema>('https://example.com').with(rest());

// 3. IDE warns if 'title' is misspelled or you query a missing table!
const data = await client.request(readItems('articles', { fields: ['title'] }));`}</CodeBlock>

          <SubTopic>5. System Operations</SubTopic>
          <BulletList>
            <Bullet>
              <B>Asset Handling</B> — upload files directly via multipart form
              data.
            </Bullet>
            <Bullet>
              <B>User Management</B> — programmatically call createUser,
              updateUser, or trigger password resets.
            </Bullet>
            <Bullet>
              <B>Schema Audits</B> — query database field structures on the fly
              with readFieldsByCollection.
            </Bullet>
          </BulletList>
        </Card>

        {/* ═══════════════════════════════════════
            7. SDK — CORE CRUD OPERATIONS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="⚙️">SDK — Core CRUD Operations</Topic>

          <SubTopic>1. Client Setup &amp; Configuration</SubTopic>
          <BulletList>
            <Bullet>
              Composable{" "}
              <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded text-sm">
                .with()
              </code>{" "}
              approach — load modules exclusively as needed.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { createDirectus, rest, authentication, realtime } from '@directus/sdk';

const client = createDirectus('https://example.com')
  .with(rest())
  .with(authentication('json', { storage: window.localStorage }))
  .with(realtime());`}</CodeBlock>

          <SubTopic>2. Reading Data with Relations &amp; Filters</SubTopic>
          <BulletList>
            <Bullet>
              Clean, nested query objects — no messy string parsing.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { createItem, readItems, updateItem, deleteItem } from '@directus/sdk';
// ==================================== CREATE ==============================

//SINGLE ITEM CREATION
const newArticle = await client.request(
  createItem('articles', {
    title: 'Hello World',
    content: 'This is my first post!',
    status: 'draft'
  })
);

// BATCH ITEM RETRIEVAL
const newArticles = await client.request(
  createItems('articles', [
    { title: 'Post One', status: 'published' },
    { title: 'Post Two', status: 'draft' }
  ])
);
// ==================================== READ ==============================

// READ SINGLE ITEM
const article = await client.request(
  readItem('articles', '5', {
    fields: ['id', 'title', 'content']
  })
);

// READ MULTIPLE ITEMS (WITH FILTERS, SORTING, AND LIMITS)
const articles = await client.request(
  readItems('articles', {
    fields: ['id', 'title', { author: ['first_name', 'last_name'] }],
    filter: { status: { _eq: 'published' } },
    sort: ['-date_created'],
    limit: 10
  })
);
// ==================================== UPDATE ==============================
// UPDATE SINGLE ITEM
  const updatedArticle = await client.request(
  updateItem('articles', '5', {
    status: 'published'
  })
);

// UPDATE MULTIPLE ITEMS (BATCH UPDATE)
// Pass an array of IDs to apply identical changes to all of them
const publishedArticles = await client.request(
  updateItems('articles', ['5', '12', '44'], {
    status: 'published'
  })
);

// ==================================== DELETE ==============================

// DELETE SINGLE ITEM
await client.request(deleteItem('articles', '5'));

// DELETE MULTIPLE ITEMS BY ID (BATCH DELETE)
await client.request(deleteItems('articles', ['5', '12', '44']));



`}</CodeBlock>

          <SubTopic>3. Authentication &amp; User Context</SubTopic>
          <CodeBlock language="typescript">{`import { login, readMe, logout } from '@directus/sdk';

await client.login('developer@company.com', 'secure_password');
const userProfile = await client.request(readMe({ fields: ['id', 'email'] }));
await client.logout();`}</CodeBlock>

          <SubTopic>4. Real‑time Live Subscriptions (WebSockets)</SubTopic>
          <BulletList>
            <Bullet>
              WebSockets run alongside standard REST calls to pipe records live
              into reactive UIs.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`await client.connect();
const { subscription } = await client.subscribe('chat_messages', {
  event: 'create',
  query: { fields: ['text', 'timestamp'] }
});

for await (const message of subscription) {
  console.log('Live update:', message);
}`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
            8. ADVANCED SDK PATTERNS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🛡️">Advanced SDK Patterns</Topic>

          <SubTopic>1. Schema‑as‑Code (Structural Management)</SubTopic>
          <BulletList>
            <Bullet>
              Manage collections, fields, and relations programmatically —
              essential for multi‑tenant SaaS.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { createCollection, createField, createRelation } from '@directus/sdk';

// 1. Create a new database table programmatically
await client.request(createCollection({
  collection: 'tenants',
  schema: {},
  meta: { note: 'Stores individual SaaS tenant sub-organizations' }
}));

// 2. Add a column to that table
await client.request(createField('tenants', {
  field: 'company_name',
  type: 'string',
  meta: { interface: 'input', required: true }
}));`}</CodeBlock>

          <SubTopic>2. Geographic &amp; Spatial Data (GIS Queries)</SubTopic>
          <BulletList>
            <Bullet>
              Directus natively supports geometry fields (Points, LineStrings,
              Polygons) in PostgreSQL (PostGIS).
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { readItems } from '@directus/sdk';

// Fetch stores within a specific bounding box or radius
const nearbyStores = await client.request(
  readItems('stores', {
    filter: {
      location: {
        _intersects: {
          type: 'Point',
          coordinates: [12.9716, 77.5946]  // [Longitude, Latitude]
        }
      }
    }
  })
);`}</CodeBlock>

          <SubTopic>3. Native Aggregation &amp; Grouping</SubTopic>
          <BulletList>
            <Bullet>
              Run <B>SUM, AVG, COUNT, GROUP BY</B> directly via the API — no
              need to fetch thousands of rows.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { aggregate } from '@directus/sdk';

// Calculate financial metrics grouped by month
const financialSummary = await client.request(
  aggregate('invoices', {
    groupBy: ['month'],
    aggregate: {
      sum: ['total_amount'],
      avg: ['tax_paid'],
      count: ['id']
    },
    filter: { status: { _eq: 'paid' } }
  })
);
// Returns: [{ month: 'January', sum: { total_amount: 45000 }, ... }]`}</CodeBlock>

          <SubTopic>
            4. Programmatic Flow Execution (Webhooks &amp; Logic)
          </SubTopic>
          <BulletList>
            <Bullet>
              Trigger webhook‑based Directus Flows explicitly through code —
              don&apos;t wait for a DB change.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { triggerFlow } from '@directus/sdk';

// Trigger a custom Flow (e.g., "Generate Monthly PDF Report")
const result = await client.request(
  triggerFlow('POST', 'YOUR-FLOW-TRIGGER-ID', {
    report_id: 4022,
    export_format: 'pdf',
    recipient: 'finance@company.com'
  })
);`}</CodeBlock>

          <SubTopic>5. Activity Auditing &amp; Revision History</SubTopic>
          <BulletList>
            <Bullet>
              Directus tracks every mutation — view compliance audits, see who
              modified a record, and browse historical revisions.
            </Bullet>
          </BulletList>
          <CodeBlock language="typescript">{`import { readActivities, readRevisions } from '@directus/sdk';
import { DIRECTUS_TOKEN } from '@/lib/directus';

// 1. Audit log — last 5 system changes
const systemAudit = await client.request(readActivities({ limit: 5 }));

// 2. Version history — previous versions of blog post ID 12
const history = await client.request(
  readRevisions({
    filter: { collection: { _eq: 'articles' }, item: { _eq: '12' } }
  })
);`}</CodeBlock>
        </Card>
        <Card>
          <Topic emoji="🐳">Docker Compose Boilerplate</Topic>
          <p>A basic setup to run Directus self-hosted using PostgreSQL</p>
          <CodeBlock language="yaml">{`version: '3'
services:
  database:
    image: postgres:15
    environment:
      POSTGRES_USER: directus
      POSTGRES_PASSWORD: password123
      POSTGRES_DB: directus
    volumes:
      - pgdata:/var/lib/postgresql/data

  directus:
    image: directus/directus:latest
    ports:
      - '8055:8055'
    environment:
      KEY: 'generate-a-random-string-here'
      SECRET: 'generate-another-random-string-here'
      DB_CLIENT: 'pg'
      DB_HOST: 'database'
      DB_PORT: '5432'
      DB_DATABASE: 'directus'
      DB_USER: 'directus'
      DB_PASSWORD: 'password123'
      ADMIN_EMAIL: 'admin@example.com' # Replace with your admin email
      ADMIN_PASSWORD: 'admin-password' # Replace with your admin password
    depends_on:
      - database

volumes:
  pgdata:
`}</CodeBlock>
        </Card>
        {/* ── Footer ── */}
        <div className="text-center py-8 text-slate-600 text-sm">
          — more notes coming soon —
        </div>
      </main>
    </div>
  );
}
