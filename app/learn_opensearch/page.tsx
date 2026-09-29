import React from "react";
import OS_ARCH from "@/images/OpenSearch_Arch_Workflow.jpg";
import Image from "next/image";
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
            const hashComment = line.trimStart().startsWith("#")
              ? line.indexOf("#")
              : -1;
            const cIdx = commentIndex !== -1 ? commentIndex : hashComment;
            return (
              <React.Fragment key={i}>
                {cIdx === -1 ? (
                  line
                ) : (
                  <>
                    {line.slice(0, cIdx)}
                    <span className="text-slate-500">{line.slice(cIdx)}</span>
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

export default function LearnOpenSearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* ── Sticky Header ── */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <span className="text-2xl">🔍</span>
          <h1 className="text-xl font-bold text-slate-100 tracking-tight">
            OpenSearch Notes
          </h1>
          <Badge>Learning Path</Badge>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {/* ═══════════════════════════════════════
            1. WHAT IS OPENSEARCH?
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📖">What is OpenSearch?</Topic>
          <BulletList>
            <Bullet>
              An <B>open‑source search and analytics engine</B> forked from
              Elasticsearch 7.10.2 and Kibana 7.10.2 in 2021.
            </Bullet>
            <Bullet>
              Licensed under <B>Apache License 2.0</B> — fully open‑source with
              no vendor lock‑in or restrictive licensing.
            </Bullet>
            <Bullet>
              Now governed by the <B>OpenSearch Software Foundation</B> under
              the Linux Foundation, with a vendor‑neutral Technical Steering
              Committee.
            </Bullet>
            <Bullet>
              Built on <B>Apache Lucene</B>, it provides distributed full‑text
              search, analytics, observability, and vector database
              capabilities.
            </Bullet>
          </BulletList>
          <Tip>
            Think of OpenSearch as a distributed, RESTful search engine — you
            send JSON in, query with JSON, and get JSON back. No SQL needed
            (though it supports SQL/PPL queries too).
            <br />
            <br />
            <b>Note:</b> OpenSearch is a distributed, community-driven search
            and analytics suite used to find text, analyze logs, and power
            modern AI features. . Think of it as a massive, lightning-fast
            digital filing cabinet. You throw millions of unorganized documents,
            system logs, or product catalogs into it, and it allows you to
            search through them or build visual dashboards out of them in
            milliseconds. Because it is highly scalable, it doesn`t just run on
            one computer—it runs across clusters of servers to handle massive
            enterprise data.
          </Tip>
        </Card>

        <Card>
          <Topic emoji="🏛️"> The Two Core Pillars of OpenSearch</Topic>
          <p>
            When you install OpenSearch, you are primarily working with two main
            pieces of software:
          </p>
          <br />
          <BulletList>
            <Bullet>
              <b>OpenSearch (The Engine):</b> This is the database backend. It
              handles the storage, indexing, and fast querying of data using a
              RESTful API (which means you communicate with it using standard
              web requests and data formatted in JSON).
            </Bullet>
            <Bullet>
              <b>OpenSearch Dashboards (The Interface):</b> This is the user
              interface. It connects to the engine and lets you explore your
              data visually, build charts, track system health, and manage
              security settings.
            </Bullet>
          </BulletList>
        </Card>

        {/* ═══════════════════════════════════════
            2. KEY USE CASES
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🎯">Key Use Cases</Topic>
          <div className="grid gap-4 sm:grid-cols-2 mt-2">
            {[
              {
                title: "Full‑Text Search",
                desc: "Power site search, product catalogs, and document search with relevance scoring and highlighting.",
              },
              {
                title: "Log Analytics & Observability",
                desc: "Ingest, search, and visualize logs, metrics, and traces — a core alternative to the ELK stack.",
              },
              {
                title: "Security Analytics (SIEM)",
                desc: "Built‑in security analytics with threat detection rules, correlation engine, and alerts.",
              },
              {
                title: "Vector Database / AI Search",
                desc: "Store and search vector embeddings for semantic search, RAG pipelines, and recommendation engines.",
              },
              {
                title: "Application Monitoring",
                desc: "Trace requests across microservices with OpenTelemetry integration and Dashboards visualizations.",
              },
              {
                title: "Business Analytics",
                desc: "Run aggregations, build dashboards, and perform real‑time analytics on structured and unstructured data.",
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

        <Card>
          <Topic emoji="🎯">Key Technical Capabilities</Topic>
          <div className="grid gap-4 sm:grid-cols-2 mt-2">
            {[
              {
                title: "Distributed Architecture",
                desc: "Data is divided into shards and distributed across multiple nodes (servers), allowing clusters to scale seamlessly from a single local laptop up to petabytes of data across data centers.",
              },
              {
                title: "Advanced Analytics",
                desc: "Supports traditional full-text lexical search alongside SQL query syntax, machine learning plugins, and automated anomaly detection.",
              },
              {
                title: "Cloud & Managed Options",
                desc: " While teams can self-manage the open-source clusters on-premises, cloud providers also offer managed platforms—most notably Amazon OpenSearch Service—to automate provisioning, patching, and backups.",
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
            3. ARCHITECTURE & COMPONENTS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🧱">Architecture &amp; Core Components</Topic>

          <SubTopic>1. Cluster</SubTopic>
          <BulletList>
            <Bullet>
              A <B>cluster</B> is a collection of one or more nodes working
              together to store data and provide search capabilities.
            </Bullet>
            <Bullet>
              Each cluster has a unique name — nodes join the cluster by
              referencing this name.
            </Bullet>
          </BulletList>

          <SubTopic>2. Nodes</SubTopic>
          <BulletList>
            <Bullet>
              <B>Cluster Manager (CM) nodes</B> — manage cluster metadata, index
              creation/deletion, and track node availability.
            </Bullet>
            <Bullet>
              <B>Data nodes</B> — store data and execute data‑related operations
              (indexing, searching, aggregations).
            </Bullet>
            <Bullet>
              <B>Coordinating nodes</B> — act as load balancers, routing
              search/index requests to the right data nodes.
            </Bullet>
            <Bullet>
              <B>Ingest nodes</B> — pre‑process documents before indexing
              (transformations, enrichments via pipelines).
            </Bullet>
          </BulletList>

          <SubTopic>3. Indices & Documents</SubTopic>
          <BulletList>
            <Bullet>
              An <B>index</B> is a logical namespace holding a collection of
              related JSON documents — similar to a &quot;database&quot; in
              RDBMS terms.
            </Bullet>
            <Bullet>
              <B>Mappings</B> — the schema that defines fields and their data
              types (text, keyword, integer, date, geo_point, etc.).
            </Bullet>
            <Bullet>
              <B>Documents</B> — the basic unit of information that can be
              indexed, expressed as an individual JSON object (similar to a
              `row` in RDBMS).
            </Bullet>
          </BulletList>

          <SubTopic>4. Shards &amp; Replicas</SubTopic>
          <BulletList>
            <Bullet>
              <B>Primary shards</B> — each index is split into shards
              distributed across nodes for horizontal scaling.
            </Bullet>
            <Bullet>
              <B>Replica shards</B> — copies of primary shards for redundancy
              and parallel read throughput.
            </Bullet>
            <Bullet>
              <B>Apache Lucene (The core engine)</B> — the underlying search
              technology inside every individual shard that creates the search
              indexes.
            </Bullet>
          </BulletList>
          <Note>
            Default is 1 primary shard and 1 replica per index. For production,
            tune shard count based on data volume — aim for 10–50 GB per shard.
          </Note>
          <hr className="my-10" />
          <Topic emoji="⚔️">OpenSearch Architecture and Workflow</Topic>
          <Image
            src={OS_ARCH}
            alt="OpenSearch Architecture"
            className="my-4 rounded-2xl overflow-clip"
          />
        </Card>

        {/* ═══════════════════════════════════════
            4. OPENSEARCH vs ELASTICSEARCH
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="⚔️">OpenSearch vs Elasticsearch</Topic>
          <p className="text-slate-400 mb-4">
            Key differences since the 2021 fork:
          </p>
          <table className="min-w-full text-sm text-left text-slate-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  Aspect
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  OpenSearch
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  Elasticsearch
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  License
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Apache 2.0 (fully open‑source)
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  SSPL / Elastic License 2.0 / AGPLv3
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  Governance
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Linux Foundation (vendor‑neutral and community driven)
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Elastic (single‑vendor)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  UI Dashboards
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  OpenSearch Dashboards
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Kibana
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  Security
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Built‑in (Security plugin, free) 100% free
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  X‑Pack (some features paid)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  AI / Vector
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Open Engines: k‑NN plugin, neural search, SIMD
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  proprietary ELSER, vector search, semantic
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  Query Language
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  SQL &amp; PPL (Piped Processing Language)
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  QL and ES|QL (Elastic`s proprietary query language).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-bold">
                  Data Ingestion
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Relies on Data Prepper and open standards like OpenTelemetry.
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Driven natively by the all-in-one Elastic Agent
                  infrastructure.
                </td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* ═══════════════════════════════════════
            6. CORE CONCEPTS — INDEXING & DOCUMENTS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📦">Core Concepts — Indexing &amp; Documents</Topic>

          <SubTopic>RDBMS → OpenSearch Mapping</SubTopic>
          <table className="min-w-full text-sm text-left text-slate-300 mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  RDBMS
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  OpenSearch
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Server Instance
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Cluster
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  The entire physical or cloud environment infrastructure
                  managing all system operations.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Database / Table
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Index
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  A logical data bucket that stores a collection of related
                  documents / characteristics.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Row
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Document (JSON)
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  A single data record structured and saved as an individual
                  JSON object.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Column
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Field
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  A distinct key-value property or attribute nested inside a
                  document.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Schema
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Mapping
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  A blueprint setting how fields and text data types are
                  evaluated and indexed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  SQL Query
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Query DSL / PPL
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  The core JSON-based processing syntax used to parse and return
                  cluster data.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Partition
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Primary Shard
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Splits index data across multiple nodes for scalability.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium">
                  Replication
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60 font-medium text-sky-400">
                  Replica Shard
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">
                  Copy of a shard for fault tolerance and high availability.
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        {/* ═══════════════════════════════════════
            5.INVERTED INDEX - MECHANICS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🔍">Inverted Index - Mechanics</Topic>
          <p className="text-slate-400 mb-4">
            The <B>Inverted Index</B> is the primary data structure behind
            OpenSearch`s high-speed full-text search capabilities. Instead of
            searching through documents for keywords, it directly maps
            individual words to the documents that contain them.
          </p>
          <p className="text-slate-400 mb-4">
            Traditional databases read table rows one by one to find matches,
            which slows down as data grows. OpenSearch avoids this step
            entirely. When new text is added, a built-in <B>Analyzer</B> breaks
            the phrases into individual, unique words (tokens), converts them to
            lowercase, strips punctuation, and reduces words to their root form
            (like turning `running` or `jumps` into `run` or `jump`).
          </p>

          <div className="text-slate-400 mb-4 bg-slate-800/40 p-3 rounded border border-slate-700/30">
            <span className="font-bold block mb-1 text-slate-200">
              Example Base Text:
            </span>
            <span className="block font-mono text-xs text-sky-300">
              Doc 1: <code>The quick brown fox jumps</code>
            </span>
            <span className="block font-mono text-xs text-sky-300">
              Doc 2: <code>Lazy dogs and brown foxes</code>
            </span>
          </div>

          <p className="my-2 font-bold text-slate-200">
            Generated Inverted Index Lookup Table:
          </p>

          <table className="min-w-full text-sm text-left text-slate-300 mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Token (Term)
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Doc Frequency
                </th>
                <th className="px-4 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Document IDs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-mono text-amber-400">
                  brown
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">2</td>
                <td className="px-4 py-2 border-b border-slate-700/60 text-sky-400">
                  [1, 2]
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-mono text-amber-400">
                  dog
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">1</td>
                <td className="px-4 py-2 border-b border-slate-700/60 text-sky-400">
                  [2]
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-mono text-amber-400">
                  fox
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">2</td>
                <td className="px-4 py-2 border-b border-slate-700/60 text-sky-400">
                  [1, 2]
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-mono text-amber-400">
                  jump
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">1</td>
                <td className="px-4 py-2 border-b border-slate-700/60 text-sky-400">
                  [1]
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-mono text-amber-400">
                  lazy
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">1</td>
                <td className="px-4 py-2 border-b border-slate-700/60 text-sky-400">
                  [2]
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-slate-700/60 font-mono text-amber-400">
                  quick
                </td>
                <td className="px-4 py-2 border-b border-slate-700/60">1</td>
                <td className="px-4 py-2 border-b border-slate-700/60 text-sky-400">
                  [1]
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-slate-400 border-l-2 border-sky-500 pl-3 italic">
            <strong>Engine Impact:</strong> When a user searches for the word{" "}
            <code>brown</code>, OpenSearch skips reading through the documents
            entirely. It targets the entry for <code>brown</code> inside this
            lookup table and instantly returns Doc 1 and Doc 2.
          </p>
        </Card>
        <Card>
          <Topic emoji="🗺️"> Ingestion & Log Lifecycle </Topic>

          <h4 className="font-semibold text-slate-200 mt-2">
            Step 1: Mapping Strategy (Data Safeguard)
          </h4>
          <p className="text-slate-400 mb-2">
            OpenSearch can guess fields automatically (<B>Dynamic Mapping</B>),
            but this risks <B>Mapping Explosions</B> that crash your cluster.
            Production environments require <B>Explicit Mapping</B> to lock in
            optimized schemas, data types, and field structures before any data
            is indexed.
          </p>
          <p>
            <B>** Mapping:</B> is the process of defining how documents and
            their fields are stored and indexed in OpenSearch.
          </p>
          <CodeBlock language="bash">{`# Example: Defining an Explicit Mapping schema via REST API
PUT /logs-system-prod
{
  "mappings": {
    "properties": {
      "timestamp": { "type": "date" },
      "status_code": { "type": "keyword" },
      "message": { "type": "text" }
    }
  }
}
  # above code defines the explicit mapping for the "logs-system-prod" index, ensuring proper data types and field structures.
`}</CodeBlock>

          <h4 className="font-semibold text-slate-200 mt-4">
            Step 2: Index Lifecycle Management / ISM (Automated Aging)
          </h4>
          <p className="text-slate-400 mb-2">
            As log volumes scale, keeping historical data on expensive hardware
            degrades performance. **Index State Management (ISM)** applies
            automated policies to roll over indices daily, migrate older logs to
            cheaper warm/cold storage tiers, and securely purge them after
            retention expires.
          </p>
          <CodeBlock language="bash">{`# Example: Attaching an automated ISM data retention policy
PUT /_plugins/_ism/policies/30_day_log_retention
{
    "policy": {
        "description": "Auto-rollover daily, shift to warm tier at 7 days, delete at 30 days.",
        "default_state": "hot",
        "states": [
      { "name": "hot", "actions": [{ "rollover": { "min_index_age": "1d" } }] }, // hot state with daily rollover action
      { "name": "warm", "actions": [{ "allocate": { "require": { "data": "warm" } } }] }, // warm state with allocation to warm nodes
      { "name": "delete", "actions": [{ "delete": {} }] } // delete state with automatic deletion
    ]
  }
}
# the above code tells OpenSearch how to manage the lifecycle of the "logs-system-prod" index, including automatic rollovers and retention policies.
`}</CodeBlock>
        </Card>

        <Card>
          <Topic emoji="⚖️"> Relevance Scoring (BM25) - Mechanics </Topic>

          <h4 className="font-semibold text-slate-200 mt-2">
            How Results Are Ranked
          </h4>
          <p className="text-slate-400 mb-2">
            When running a full-text search, OpenSearch doesn`t just find
            matches—it ranks them using a core mathematical algorithm called{" "}
            <B>Okapi BM25</B>. This formula evaluates how relevant a specific
            document is to the search query and assigns a numeric value (
            <B>_score</B>) to sort the results.
          </p>

          <h4 className="font-semibold text-slate-200 mt-4">
            The 3 Core Scoring Factors
          </h4>
          <p className="text-slate-400 mb-2">
            The BM25 algorithm computes individual field weights based on three
            distinct structural rules:
          </p>
          <ul className="list-disc pl-5 text-slate-400 mb-4 space-y-1">
            <li>
              <B>Term Frequency (TF):</B> The more times your search term
              appears inside a specific document field, the higher that
              document`s score will rise.
            </li>
            <li>
              <B>Inverse Document Frequency (IDF):</B> Common words across the
              index (like `the` or `error`) get penalized, while unique or rare
              terms (like `database_corrupted`) receive a much higher scoring
              weight.
            </li>
            <li>
              <B>Document Length Saturation:</B> Matches found in short fields
              (like a concise title) carry significantly higher relevance than
              the exact same matches buried inside massive text fields (like a
              long log body).
            </li>
          </ul>

          <CodeBlock language="bash">{`# Example: Checking relevance calculations using the Explain API
GET /logs-system-prod/_explain/doc_id_001
{
  "query": {
    "match": { "message": "database_corrupted" }
  }
}`}</CodeBlock>

          <p className="text-sm text-slate-400 border-l-2 border-amber-500 pl-3 italic mt-2">
            <B>Engine Impact:</B> Understanding BM25 prevents search performance
            tuning bugs. If scores are skewed, developers can adjust parameters
            (<B>k1</B> for term frequency saturation and <B>b</B> for document
            length scaling) inside the index mapping configurations.
          </p>

          <SubTopic>The Scenario</SubTopic>
          <p className="text-slate-400 mb-4">
            Imagine you have an index containing 3 documents, and a user
            searches for the term `corrupted`.
          </p>
          <ul className="list-disc pl-5 text-slate-400 mb-4 space-y-1">
            <li>
              Doc 1: `System error: database is corrupted` (Short, contains the
              word once)
            </li>
            <li>
              Doc 2: `Warning: temporary cache is corrupted. Log file
              corrupted.` (Medium, contains the word twice)
            </li>
            <li>
              Doc 3: `Routine update: completed successfully.` (Does not contain
              the word)
            </li>
          </ul>

          <SubTopic> BM25 Working Principle — Real-World Example </SubTopic>

          <p className="text-slate-400 mb-4">
            To understand how OpenSearch ranks data, imagine an index with{" "}
            <B>3 documents</B> where a user searches for the term{" "}
            <B>`corrupted`</B>:
          </p>

          <div className="text-slate-400 mb-4 bg-slate-800/40 p-3 rounded border border-slate-700/30 font-mono text-xs space-y-1">
            <span className="block text-sky-300">
              Doc 1: `System error: database is corrupted` (Short, 5 words)
            </span>
            <span className="block text-sky-300">
              Doc 2: `Warning: temporary cache is corrupted. Log file
              corrupted.` (Medium, 9 words)
            </span>
            <span className="block text-sky-300">
              Doc 3: `Routine update: completed successfully.` (Short, 4 words)
            </span>
          </div>

          <h4 className="font-semibold text-slate-200 mt-4 mb-2">
            Final Score Tally & Ranking
          </h4>
          <p className="text-slate-400 mb-2">
            When the engine combines all calculations (
            <B>IDF × TF with Saturation & Length Penalty</B>), it evaluates and
            ranks the documents as follows:
          </p>

          <table className="min-w-full text-sm text-left text-slate-300 mb-4">
            <thead>
              <tr>
                <th className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Document
                </th>
                <th className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Term Freq
                </th>
                <th className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Field Length
                </th>
                <th className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  BM25 Math Breakdown
                </th>
                <th className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Final _score
                </th>
                <th className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b border-slate-700/60 font-medium">
                  Doc 1
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-amber-400">
                  1 time
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60">
                  Short (5 words)
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-xs">
                  High boost for short field + full base IDF weight.
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-sky-400 font-mono">
                  1.85
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 font-semibold text-emerald-400">
                  #1 (Top Match)
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-700/60 font-medium">
                  Doc 2
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-amber-400">
                  2 times
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60">
                  Medium (9 words)
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-xs">
                  Double match boost, but heavily diluted by length penalty.
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-sky-400 font-mono">
                  1.62
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 font-semibold text-slate-400">
                  #2
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-700/60 font-medium text-slate-500">
                  Doc 3
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-slate-500">
                  0 times
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-slate-500">
                  Short (4 words)
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-xs text-slate-500">
                  No matching terms found.
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-slate-500 font-mono">
                  0.00
                </td>
                <td className="px-3 py-2 border-b border-slate-700/60 text-slate-500 italic">
                  Excluded
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-slate-400 border-l-2 border-sky-500 pl-3 italic mt-2">
            <B>Why Doc 1 wins:</B> Even though Doc 2 contains the word twice,{" "}
            <B>Doc 1 takes the #1 spot</B> because it is a shorter, more
            concentrated document. The BM25 engine determines that a single
            match in a brief log line or headline is more meaningful than
            multiple matches buried inside long, noisy text fields.
          </p>
        </Card>

        {/* ═══════════════════════════════════════
            5. GETTING STARTED — DOCKER SETUP
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🚀">Getting Started — Docker Setup</Topic>
          <p className="text-slate-400 mb-4">
            The fastest way to spin up a single-node OpenSearch playground
            locally:
          </p>

          <SubTopic>Step 1: System Preparation</SubTopic>
          <CodeBlock language="bash">{`# Disable memory swapping for performance
sudo swapoff -a

# Set max virtual memory areas (required by OpenSearch)
sudo sysctl -w vm.max_map_count=262144

# Make it permanent
echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf`}</CodeBlock>

          <SubTopic>Step 2: Docker Compose File</SubTopic>
          <CodeBlock language="yaml">{`version: '3'
services:
  opensearch-node1:
    image: opensearchproject/opensearch:latest
    container_name: opensearch-node1
    environment:
      - cluster.name=opensearch-cluster
      - node.name=opensearch-node1
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m
      - OPENSEARCH_INITIAL_ADMIN_PASSWORD=MyStr0ng!Pass#2024
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - opensearch-data1:/usr/share/opensearch/data
    ports:
      - 9200:9200
      - 9600:9600

  opensearch-dashboards:
    image: opensearchproject/opensearch-dashboards:latest
    container_name: opensearch-dashboards
    ports:
      - 5601:5601
    environment:
      OPENSEARCH_HOSTS: '["https://opensearch-node1:9200"]'
      OPENSEARCH_SSL_VERIFICATIONMODE: 'none'

volumes:
  opensearch-data1:`}</CodeBlock>

          <SubTopic>Step 3: Start &amp; Verify</SubTopic>
          <CodeBlock language="bash">{`# Start the cluster in the background
docker compose up -d

# Verify OpenSearch is running (may take 30-60s to initialize)
curl -ku admin:MyStr0ng!Pass#2024 https://localhost:9200

# Check cluster health
curl -ku admin:MyStr0ng!Pass#2024 https://localhost:9200/_cluster/health?pretty`}</CodeBlock>

          <Tip>
            Access OpenSearch Dashboards at http://localhost:5601 with your
            admin credentials. This is the visual UI for exploring data,
            building visualizations, and managing your cluster.
          </Tip>
        </Card>

        {/* ═══════════════════════════════════════
            5. PRODUCTION SETUP
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🗺️">
            {" "}
            4 Steps to Production: The OpenSearch Lifecycle{" "}
          </Topic>

          <h4 className="font-semibold text-slate-200 mt-2">
            Step 1: Mapping (Define the Schema)
          </h4>
          <p className="text-slate-400 mb-2">
            Before any data enters OpenSearch, you must create the index and
            define its blueprint (Mapping). This locks in your fields,
            configurations, and data types so OpenSearch knows how to optimize
            storage and memory.
          </p>
          <CodeBlock language="json">{`PUT /articles_v1
{
  "settings": {
    "number_of_shards": 3,  // tells OpenSearch how many primary shards to create for the index
    "number_of_replicas": 1  // tells OpenSearch how many replica shards to create for each primary shard
  },
  "mappings": {
    "properties": {
      "article_id": { "type": "keyword" },
      "title": { "type": "text" },
      "content": { "type": "text" },
      "status": { "type": "keyword" },
      "view_count": { "type": "integer" }
    }
  }
}`}</CodeBlock>

          <Note>
            <B>Crucial Differentiation:</B>
            <p className="mt-1">
              <B>text</B> is parsed by analyzers and broken into an inverted
              index. Use it for <B>full-text search</B> fields like names or
              descriptions.
            </p>
            <p className="mt-1">
              <B>keyword</B> is stored exactly as sent, without analysis. Use it
              for <B>filtering</B>, <B>exact matching</B>, <B>sorting</B>, or
              <B>aggregating</B> (IDs, status strings, tags).
            </p>
          </Note>

          <h4 className="font-semibold text-slate-200 mt-4">
            Step 2: Aliasing (Enterprise Best Practice)
          </h4>
          <p className="text-slate-400 mb-2">
            An <B>Alias</B> is a permanent pointer over your indices. By
            targeting the alias instead of a specific index name (e.g., querying{" "}
            <B>articles</B> instead of <B>articles_v1</B>), you can swap
            underlying data streams behind the scenes with <B>zero downtime</B>{" "}
            during migrations or schema reindexing.
          </p>
          <CodeBlock language="json">{`POST /_aliases
{
  "actions": [
    { "add": { "index": "articles_v1", "alias": "articles" } }
  ]
}`}</CodeBlock>
          <p>
            To achieve true zero-downtime, you must use an <B>Atomic Switch</B>.
            OpenSearch allows you to route traffic to the new index and remove
            the old index in a single, split-second operation.
          </p>

          <CodeBlock language="json">{`
{POST /_aliases
{
  "actions": [
    { "remove": { "index": "articles_v1", "alias": "articles" } },
    { "add":    { "index": "articles_v2", "alias": "articles" } }
  ]
}`}</CodeBlock>
          <h4 className="font-semibold text-slate-200 mt-4">
            Step 3: Indexing (The Initial Data Load / Ingest Data)
          </h4>
          <p className="text-slate-400 mb-2">
            Now that your database structure and pointers are ready, you perform
            Indexing. This is where you inject your raw JSON data into
            OpenSearch for the first time—ideally using the Bulk API for high
            performance. OpenSearch parses the text, creates the inverted index,
            and writes it to the shards.
          </p>

          <Note>
            <B>The Engine Pipeline:</B>
            Text fields are analyzed and broken down into an Inverted Index (a
            word-to-document map) for lightning-fast lookups.
            <B>Routing:</B> OpenSearch hashes the document ID to assign it to a
            specific Primary Shard, which then copies it to Replica Shards.
          </Note>

          <p className="text-sm font-semibold text-slate-300 mt-2 mb-1">
            Single Document Indexing Request:
          </p>
          <CodeBlock language="json">{`POST /articles/_doc/art_001
{
  "article_id": "art_001",
  "title": "Getting Started with OpenSearch",
  "content": "This covers cluster configurations...",
  "status": "published",
  "view_count": 500
}`}</CodeBlock>

          <p className="text-sm font-semibold text-slate-300 mt-3 mb-1">
            Bulk Ingest Request (Requires a trailing newline at the end of the
            text block):
          </p>
          <CodeBlock language="json">{`POST /articles/_bulk
{ "index": { "_id": "art_001" } }  // can leave out the index as {} -> OpenSearch will use the default index specified in the URL
{ "article_id": "art_001", "title": "Getting Started with OpenSearch", "content": "This covers cluster configurations...", "status": "published", "view_count": 500 }
{ "index": { "_id": "art_002" } }
{ "article_id": "art_002", "title": "Advanced Sharding Tactics", "content": "Learn how shards distribute data...", "status": "published", "view_count": 1200 }

//===========================  OR =======================================

{ "index": { "_index": "articles", "_id": "art_001" } } // Same index as before
{ "article_id": "art_001", "title": "Getting Started with OpenSearch", "status": "published" }
{ "index": { "_index": "system_metrics", "_id": "metric_99" } }  // Different index
{ "cpu_usage": 84, "memory_free_bytes": 1073741824 }
`}</CodeBlock>

          <Tip>
            Always use the Bulk API when indexing more than a few documents. It
            dramatically reduces HTTP overhead and can be 10–100× faster than
            individual single requests.
          </Tip>

          <h4 className="font-semibold text-slate-200 mt-4">
            Step 4: CRUD &amp; Search (Day-to-Day Operations)
          </h4>
          <p className="text-slate-400 mb-2">
            With the foundation built and your initial data loaded, your
            application moves into steady-state operations. You can now fetch
            data with precise query filters or run full-text matching:
          </p>
          <CodeBlock language="json">{`GET /articles/_search
{
  "query": {
    "match": {
      "title": "OpenSearch"
    }
  }
}`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
            7. REST API — CRUD OPERATIONS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="⚙️">REST API — CRUD Operations</Topic>

          <SubTopic>1. Create (Index a Document)</SubTopic>
          <p className="text-slate-400 mb-2">
            Use <B>PUT</B> to explicitly create or overwrite a document at a
            specific target ID path.
          </p>
          <CodeBlock language="json">{`
//Method A: POST Route (Auto-Generated IDs)
PUT /articles/_doc/art_003
{
  "article_id": "art_003",
  "title": "Drafting News Articles",
  "content": "Work in progress article body text...",
  "status": "draft",
  "view_count": 0
}


// Method B: PUT with _create Endpoint (Strict Overwrite Blocker)
PUT /articles/_create/art_003
{
  "article_id": "art_003",
  "title": "Drafting News Articles",
  "content": "Work in progress article body text...",
  "status": "draft",
  "view_count": 0
}
// If art_003 already exists, the _create endpoint will block the operation with a conflict database error.
`}</CodeBlock>

          <SubTopic>2. Read (Fetch a Document)</SubTopic>
          <p className="text-slate-400 mb-2">
            Use <B>GET</B> with a specific document ID to instantly read the
            record directly from its shard, completely bypassing search
            analysis.
          </p>
          <CodeBlock language="json">{`GET /articles/_doc/art_001`}</CodeBlock>
          <p>
            If you do not know the exact document ID and need to find records
            based on field criteria, text matching, or complex conditional
            logic, use the <Badge>_search</Badge> endpoint with a{" "}
            <Badge>POST</Badge> or <Badge>GET</Badge> request.
          </p>
          <CodeBlock language="json">{`

// Method A: Search API with Query DSL (Pattern Matching)
POST /articles/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "OpenSearch" } }
      ],
      "filter": [
        { "term": { "status": "published" } }
      ]
    }
  }
}
`}</CodeBlock>
          <p>
            If you know the document ID but want to read only a few specific
            fields—rather than pulling massive text payloads (like a 5MB blog
            body) over the network—append the <Badge>_source_includes</Badge>{" "}
            query parameter.
          </p>
          <CodeBlock language="json">{`
// Method B: Source Filtering (Network Optimization)
GET /articles/_doc/art_001?_source_includes=title,status,view_count
`}</CodeBlock>

          <SubTopic>3. Update (Partial Modifications)</SubTopic>
          <p className="text-slate-400 mb-2">
            Use <B>POST</B> via the <B>_update</B> endpoint wrapped in a{" "}
            <B>doc</B> object block to modify specific fields without re-sending
            the entire JSON object.
          </p>
          <CodeBlock language="json">{`POST /articles/_update/art_001
{
  "doc": {
    "status": "archived",
    "view_count": 125
  }
}
//====================  OR  ============================
// Example of using a script to update a document conditionally
{
  "script": {  
    // Context Source. -- Increment view_count and set status to 'trending'
    "source": "ctx._source.view_count += params.count; ctx._source.status = 'trending';", 
    "lang": "painless",                  ▲   // Specify the scripting language as Painless (OpenSearch own)
    "params": {                           |
      "count": 1  ────────────────────────┘  // The increment value for view_count (fetched from params.count - )
    }
  },
  "upsert": { // This block provides default values if the document doesn't exist yet
    "article_id": "art_001",
    "title": "Default Title",
    "status": "new",
    "view_count": 1
  }}
`}</CodeBlock>
          <p className="text-slate-400 mb-2">
            Instead of passing static values, use <B>Painless Scripting</B> for
            atomic operations (like increments). The <B>upsert</B> block
            guarantees that if the document doesn`t exist yet, it initializes
            with base values rather than crashing.
          </p>
          <Note>
            The core <B>advantage of a scripted update</B> is that it executes
            calculations directly inside the database node in a single
            microsecond, completely eliminating network delays and preventing
            users from accidentally overwriting and losing each other`s data
            updates.
          </Note>
          <SubTopic>4. Delete (Remove Documents or Index)</SubTopic>
          <p className="text-slate-400 mb-2">
            Remove specific data footprints using targeted IDs, or leverage
            conditional bulk deletes using query constraints.
          </p>
          <CodeBlock language="json">{`// Delete a single document by explicit ID
DELETE /articles/_doc/art_003

// Bulk delete multiple documents matching an exact status term
POST /articles/_delete_by_query
{
  "query": {
    "term": {
      "status": "draft"
    }
  }
}
//========================  OR ======================================
// Below is an example of a conditional bulk delete combining a must clause and a filter.
{
  "query": {
    "bool": {
      "must": [
        { "term": { "status": "draft" } }
      ],
      "filter": [
        { "range": { "created_at": { "lt": "now-90d" } } } // lt: less than 90 days ago
      ]
    }
  }
}
`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
    8. QUERY DSL — SEARCHING DATA
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🔎">Query DSL — Searching Data</Topic>
          <p className="text-slate-400 mb-2">
            OpenSearch uses a powerful, declarative JSON‑based Query Domain
            Specific Language (DSL) to fetch data.
          </p>
          <p className="text-slate-400 mb-4">
            Search clauses are divided into two operational worlds:{" "}
            <B>Queries</B> (scored and ranked by BM25 relevance) and{" "}
            <B>Filters</B> (binary yes/no choices that bypass math calculation
            and cache results for extreme speed).
          </p>

          <SubTopic>The Core Split: Queries vs. Filters</SubTopic>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm text-left text-slate-300">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Feature
                  </th>
                  <th className="px-4 py-2 font-semibold text-sky-400">
                    🧠 Queries (must, should, match)
                  </th>
                  <th className="px-4 py-2 font-semibold text-emerald-400">
                    ⚡ Filters (filter, must_not, term)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-medium">Purpose</td>
                  <td className="px-4 py-2">
                    Determines <i>how well</i> a document matches keywords.
                  </td>
                  <td className="px-4 py-2">
                    Determines <i>if</i> a document matches criteria exactly
                    (Yes/No).
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-medium">Scoring</td>
                  <td className="px-4 py-2">
                    Computes a running relevance metric (<B>_score</B>).
                  </td>
                  <td className="px-4 py-2">
                    Skips scoring completely (<B>_score</B> remains untouched).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Performance</td>
                  <td className="px-4 py-2">
                    Slower (requires heavy text tokenization and scoring math).
                  </td>
                  <td className="px-4 py-2">
                    Ultra-Fast (bitset results are saved automatically in memory
                    cache).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-700/40 my-6" />

          <SubTopic>1. Match Query (Full‑Text Search)</SubTopic>
          <p className="text-slate-400 mb-2">
            Tokenizes the query string into separate terms, strips noise, finds
            matching documents, and scores them using the BM25 algorithm. Use
            this for loose text exploration.
          </p>
          <CodeBlock language="json">{`GET /products/_search
{
  "query": {
    "match": {
      "description": "wireless ergonomic mouse"
    }
  }
}
//================  OR   ====================

// 1. The fuzziness parameter uses Levenshtein Distance to automatically find near-matches without crashing the search.
GET /products/_search
{
  "query": {
    "match": {
      "description": {
        "query": "wireles ergonmic mouse",
        "fuzziness": "AUTO",
        "prefix_length": 2,
        "max_expansions": 50
      }
    }
  }
}
//=================  OR ==================

// 2. Match Phrase with Slop (Proximity Searching)
GET /products/_search
{
  "query": {
    "match_phrase": {
      "description": {
        "query": "wireless ergonomic mouse",
        "slop": 2  // tells OpenSearch how many positions apart the terms are allowed to be
      }
    }
  }
}

//==============  OR =====================

// 3. Function Score Query (Business Logic Boosting)
GET /products/_search
{
  "query": {
    "function_score": {
      "query": {
        "match": { "description": "wireless mouse" }
      },
      "functions": [
        {
          "field_value_factor": {       // boosts the relevance score based on the value of a numeric field
            "field": "view_count",      // the numeric field whose value will influence the relevance score
            "factor": 1.2,              // the factor by which to multiply the field value
            "modifier": "log1p",        // the mathematical function to apply to the field value before multiplying by the factor
            "missing": 1                // the value to use if the field is missing in a document
          }
        }
      ],
      "boost_mode": "multiply"
    }
  }
}
// Calculates the base BM25 text score for "wireless mouse" and multiplies it by a log-smoothed, factored view_count to rank popular items higher.

// ==================  OR =====================

// 4. Search-As-You-Type (Instant Autocomplete)
GET /products/_search
{
  "query": {
    "match": {
      "name": {
        "query": "wireless",
        "type": "bool_prefix", // enables instant autocomplete by matching the beginning of words
      "fields": [
        "name",             // main field for exact matching (ex. "wireless mouse")
        "name._2gram",      // 2-gram shingle sub-field for partial matching (ex. "wi", "er")
        "name._3gram",      // 3-gram shingle sub-field for partial matching (ex. "wir", "ess")
        "name._index_prefix" // index prefix sub-field for efficient prefix matching (ex. "wirel", "mous")
      ]
      }
    }
  }
}
// Instantly matches partial inputs ("wirel", "mou") against sharded shingle sub-fields (_2gram, _3gram) to return accurate full-word completions mid-typing.
`}</CodeBlock>

          <SubTopic>2. Multi‑Match (Search Across Multiple Fields)</SubTopic>
          <p className="text-slate-400 mb-2">
            Runs a text search across several text fields simultaneously. Append
            a caret symbol (<B>^</B>) to multiply a field`s matching score
            weight.
          </p>
          <CodeBlock language="json">{`GET /products/_search
// 1. Best Fields Matching (The Default Multi-Match Behavior)
{
  "query": {
    "multi_match": {
      "query": "wireless keyboard",
      "fields": ["name^3", "description", "tags"], // ^3 boosts the relevance impact of the "name" field by 3× over the other fields.
      "type": "best_fields" // best_fields means that the query will match the single field that provides the highest score.
    }
  }
}
// =============  OR  ===================
// 2. Cross-Fields Matching (The "First Name / Last Name" Resolution)

GET /products/_search
{
  "query": {
    "multi_match": {
      "query": "Apple iPad",
      "fields": ["brand", "name", "description"],
      "type": "cross_fields",  //  cross_fields means that "Apple iPad" can match "Apple" in the brand field and "iPad" in the name field simultaneously.
      "operator": "and"         // Ensures that all terms in the query must be present across the combined fields.
    }
  }
}

// =============  OR  ======================
// 3. Most Fields Matching (The Multilingual / Synonyms Pattern)
GET /products/_search
{
  "query": {
    "multi_match": {
      "query": "wireless keyboards",
      "fields": ["name", "name.stemmed", "name.synonyms"], // analyzed variations of the "name" field.
      //.stemmed (e.g., converting "keyboards" to "keyboard") 
      //.synonyms (matching "keyboard" when a user types "keypad")
      "type": "most_fields"
    }
  }
}
// OpenSearch requires you to supply your own custom dictionary to map synonyms, as it has no built-in knowledge of word relationships.
// Queries the same text across multiple analyzer variations (name, name.stemmed, name.synonyms) and combines the scores to reward documents that match across the most variations.
`}</CodeBlock>
          <p className="text-xs font-mono text-slate-500 mt-1 pl-1">
            Note: <B>name^3</B> boosts the relevance impact of title matches by
            3× over description matches.
          </p>

          <SubTopic>3. Bool Query (Compound Logicals)</SubTopic>
          <p className="text-slate-400 mb-2">
            Combines individual query components into complex evaluation blocks.
          </p>
          <CodeBlock language="json">{`GET /products/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "name": "mechanical keyboard" } } // logical AND
      ],
      "must_not": [
        { "term": { "in_stock": false } } // logical NOT
      ],
      "should": [
        { "match": { "tags": "wireless" } } // logical OR
      ],
      "filter": [
        { "range": { "price": { "lte": 100 } } } // logical AND with range filter, lte (less than or equal to)
      ]
    }
  }
}`}</CodeBlock>
          <ul className="list-disc pl-5 text-xs text-slate-400 mt-2 space-y-1">
            <li>
              <B>must:</B> Acts as a logical <B>AND</B>. Documents must match
              this clause and will contribute to the relevance score.
            </li>
            <li>
              <B>must_not:</B> Acts as a logical <B>NOT</B>. Excludes documents
              matching this criteria entirely; runs silently without scoring.
            </li>
            <li>
              <B>should:</B> Acts as a logical <B>OR</B>. If a document contains
              this match, its relevance score gets a massive bonus boost.
            </li>
            <li>
              <B>filter:</B> Acts as a strict structural <B>AND</B>. Forces
              strict evaluation boundaries, skips scoring calculations, and
              caches results.
            </li>
          </ul>

          <SubTopic>4. Term vs Match Architectural Rules</SubTopic>
          <BulletList>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800/60 px-1 py-0.5 rounded text-xs font-mono">
                match
              </code>
              : Runs strings through text analyzers (breaks phrases down,
              lowercases). Use this exclusively for <B>text</B> field lookups.
            </Bullet>
            <Bullet>
              <code className="text-emerald-400 bg-slate-800/60 px-1 py-0.5 rounded text-xs font-mono">
                term
              </code>
              : Bypasses analysis completely. Searches the inverted index for an
              exact structural match. Use this for <B>keyword</B>, numeric, or
              boolean metrics.
            </Bullet>
          </BulletList>
          <Note>
            Never, use{" "}
            <code className="text-emerald-400 bg-slate-800/60 px-1 py-0.5 rounded text-xs font-mono">
              term
            </code>{" "}
            for <B>text</B> fields; it bypasses analysis and will not match
            tokenized content.
          </Note>
          <p className="text-sm font-semibold text-slate-300 mt-3 mb-1">
            Common Specialized Leaf Queries:
          </p>
          <CodeBlock language="json">{`// Exact Match on keyword/status types
{ "query": { "term": { "category": "electronics" } } } // returns documents where the category is exactly "electronics"

// Range queries for bounded numbers or date metrics
{ "query": { "range": { "price": { "gte": 20, "lte": 100 } } } } // returns documents where the price is between 20 and 100

// Wildcard scan pattern queries (Caution: heavy on performance)
{ "query": { "wildcard": { "name": "wire*" } } } // returns documents where the name starts with "wire"

// Presence validation (finds documents where a field is not empty)
{ "query": { "exists": { "field": "tags" } } } // returns documents where the tags field is present
`}</CodeBlock>

          <SubTopic>5. Pagination, Sorting &amp; Source Filtering</SubTopic>
          <p className="text-slate-400 mb-2">
            Control result sorting priorities and payload dimensions returned to
            your server application instance.
          </p>
          <CodeBlock language="json">{`GET /products/_search

//1. The Enterprise Standard for Deep Pagination --  using 'search_after'
{
  "_source": ["name", "price", "category"], // specify which fields to return
  "query": { "match_all": {} },             // match all documents
  "search_after": [49.99, "prod_99"],       // continue search after the specified price and product ID
  "sort": [
    { "price": "asc" },
    { "_id": "asc" },
    "_score"
  ],
  "from": 0,
  "size": 20
}
===============  OR =============

// 2. Scroll API (The Data Export Pattern)
// The Scroll API freezes a temporary snapshot of your data in memory to safely stream massive, multi-million-row datasets or log exports out of the cluster without hitting pagination limits.

// a. Initialize the Scroll Session
POST /products/_search?scroll=1m  // 1m = 1 minute
{
  "size": 1000,
  "query": { "term": { "status.keyword": "active" } }  // Returns a massive alphanumeric _scroll_id string along with your first 1,000 documents.
}

// b. Now Fetch subsequent batches using the _scroll_id returned from the initial request.
POST /_search/scroll
{
  "scroll": "1m",
  "scroll_id": "DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAAD4WbXpJZ..."
}
//  Bypasses search re-evaluations and scoring. It streams rows raw from an isolated, frozen snapshot block of data node storage segments.
`}</CodeBlock>
          <ul className="list-disc pl-5 text-xs text-slate-400 mt-2 space-y-1">
            <li>
              <B>_source:</B> Acts like a SQL SELECT statement to specify which
              exact key attributes return over HTTP.
            </li>
            <li>
              <B>sort:</B> Specifies prioritization sorting sequences (e.g.,
              sorting by price ascending, using score as a tie-breaker).
            </li>
            <li>
              <B>from / size:</B> Controls data offset bounds (Skip N items,
              return Limit matching instances).
            </li>
          </ul>
        </Card>

        {/* ═══════════════════════════════════════
    9. AGGREGATIONS — ANALYTICS
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📊">Aggregations — Analytics</Topic>
          <p className="text-slate-400 mb-2">
            Aggregations let you compute metrics (<B>SUM, AVG, COUNT</B>), group
            records together dynamically (<B>GROUP BY</B>), and build complex
            real-time dashboards at search runtime.
          </p>
          <p className="text-slate-400 mb-4">
            By combining a search <B>query</B> block with an <B>aggs</B> block,
            you can target and run analytical math against a specific filtered
            subset of data rather than scanning the entire cluster index.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm text-left text-slate-300">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Feature
                  </th>
                  <th className="px-4 py-2 font-semibold text-sky-400">
                    Metric Aggregations
                  </th>
                  <th className="px-4 py-2 font-semibold text-emerald-400">
                    Bucket Aggregations
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-medium">Purpose</td>
                  <td className="px-4 py-2">
                    Calculates specific mathematical values across documents.
                  </td>
                  <td className="px-4 py-2">
                    Groups documents into sets or buckets based on criteria.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-medium">SQL Equivalent</td>
                  <td className="px-4 py-2">
                    <code className="text-sky-400 font-mono text-xs">
                      SUM(), AVG(), MIN(), MAX(), COUNT()
                    </code>
                  </td>
                  <td className="px-4 py-2">
                    <code className="text-emerald-400 font-mono text-xs">
                      GROUP BY
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Common Uses</td>
                  <td className="px-4 py-2">
                    Finding average views, total revenue, or highest price.
                  </td>
                  <td className="px-4 py-2">
                    Grouping systems logs by status, tags, or date intervals.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-700/40 my-6" />

          <SubTopic>1. Metric Aggregations</SubTopic>
          <p className="text-slate-400 mb-2">
            Pass <B>size: 0</B> to tell OpenSearch to omit returning actual
            individual search hits. This instructs the coordinating node to
            process only the mathematical summaries, massively lowering
            bandwidth usage.
          </p>
          <CodeBlock language="json">{`GET /products/_search
{
  "size": 0,
  "aggs": {
    "avg_price": { "avg": { "field": "price" } },
    "max_price": { "max": { "field": "price" } },
    "total_products": { "value_count": { "field": "name.keyword" } },
    "price_stats": { "stats": { "field": "price" } }
  }
}

// OUTPUT:
// {
//   "took": 10,
//   "timed_out": false,
//   "hits": {
//     "total": { "value": 100, "relation": "eq" },
//     "max_score": null,
//     "hits": []
//   },
//   "aggregations": {
//     "avg_price": { "value": 25.5 },
//     "max_price": { "value": 100 },
//     "total_products": { "value": 100 },
//     "price_stats": {
//       "count": 100,
//       "min": 10,
//       "max": 100,
//       "avg": 25.5,
//       "sum": 2550
//     }
//   }
// }
`}</CodeBlock>
          <p className="text-xs font-mono text-slate-500 mt-1 mb-4 pl-1">
            Pro-Tip: The <B>stats</B> aggregation returns count, min, max, avg,
            and sum collectively in a single execution sweep.
          </p>

          <p className="text-slate-400 mb-2">
            <B>Filtered Aggregation Example:</B> Calculating the average value
            of the <B>view_count</B> field across only a filtered subset of
            published articles:
          </p>
          <CodeBlock language="json">{`GET /articles/_search
{
  "size": 0, 
  "query": {
    "term": { "status": "published" }
  },
  "aggs": {
    "average_views": {
      "avg": {
        "field": "view_count"
      }
    }
  }
}

// OUTPUT:
// {
//   "took": 12,
//   "timed_out": false,
//   "hits": {
//     "total": { "value": 1540, "relation": "eq" },
//     "max_score": null,
//     "hits": []
//   },
//   "aggregations": {
//     "average_views": {
//       "value": 1250.75
//     }
//   }
// }
`}</CodeBlock>

          <SubTopic>2. Bucket Aggregations (Sub-Aggregation Grouping)</SubTopic>
          <p className="text-slate-400 mb-2">
            Behaves exactly like a SQL <B>GROUP BY</B> statement. You can nest
            further metrics inside a bucket aggregation to calculate unique
            trends per grouped item.
          </p>
          <CodeBlock language="json">{`GET /products/_search
{
  "size": 0,
  "aggs": {
    "by_category": { 
      "terms": { 
        "field": "category.keyword", 
        "size": 10 
      }, 
      "aggs": {
        "avg_price": { 
          "avg": { "field": "price" } 
        } 
      }
    }
  }
}

// OUTPUT:
// {
//   "aggregations": {
//     "by_category": {
//       "doc_count_error_upper_bound": 0,
//       "sum_other_doc_count": 0,
//       "buckets": [
//         {
//           "key": "Electronics",
//           "doc_count": 2,
//           "avg_price": { "value": 150.0 }
//         },
//         {
//           "key": "Furniture",
//           "doc_count": 1,
//           "avg_price": { "value": 45.0 }
//         }
//       ]
//     }
//   }
// }
`}</CodeBlock>
          <p className="text-xs font-mono text-slate-500 mt-1 mb-3 pl-1">
            Equivalent Statement: SELECT category, AVG(price) FROM products
            GROUP BY category LIMIT 10;
          </p>
          <SubTopic>3. Date Histogram (Time‑Series Slicing)</SubTopic>
          <p className="text-slate-400 mb-2">
            Used to slice metric properties into distinct time intervals (days,
            weeks, months, or years). It acts as the backbone data interface for
            visualization charts.
          </p>
          <CodeBlock language="json">{`GET /orders/_search
{
  "size": 0,
  "aggs": {
    "orders_over_time": {
      "date_histogram": {
        "field": "created_at",
        "calendar_interval": "month"
      },
      "aggs": {
        "revenue": { 
          "sum": { "field": "total" } 
        }
      }
    }
  }
}

// OUTPUT: Expected cluster response for the date histogram aggregation
// {
//   "aggregations": {
//     "orders_over_time": {
//       "buckets": [
//         {
//           "key_as_string": "2026-01-01T00:00:00.000Z",
//           "key": 1767225600000,
//           "doc_count": 420,
//           "revenue": { "value": 24500.50 }
//         },
//         {
//           "key_as_string": "2026-02-01T00:00:00.000Z",
//           "key": 1769904000000,
//           "doc_count": 510,
//           "revenue": { "value": 31200.75 }
//         }
//       ]
//     }
//   }
// }
`}</CodeBlock>
          <Note>
            The date_histogram is needed to automatically group logs or metrics
            into uniform, continuous time blocks (like hours or days)—complete
            with empty slots for intervals with zero data—creating a perfect,
            time-series data array ready to feed directly into frontend charts.
          </Note>
        </Card>

        {/* ═══════════════════════════════════════
    10. TEXT ANALYSIS & MAPPING
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🔤">Text Analysis &amp; Mapping</Topic>
          <p className="text-slate-400 mb-4">
            In OpenSearch, <B>Mapping</B> defines how a document and its fields
            are stored and indexed, while <B>Text Analysis</B> is the process
            that converts unstructured text into searchable tokens or terms.
            Together, they determine exactly how your data is processed when
            stored and how searches match against that data.
          </p>

          <BulletList>
            <Bullet>
              When you index a <B>text</B> field, OpenSearch runs it through an{" "}
              <B>analyzer</B> sequentially:{" "}
              <Badge>character filters → tokenizer → token filters</Badge>.
              token filters.
            </Bullet>
            <Bullet>
              The default <B>standard analyzer</B> lowercases text, breaks
              sentences into words on boundaries, and strips punctuation marks.
            </Bullet>
          </BulletList>
          <SubTopic>The 3-Step Analyzer Pipeline</SubTopic>
          <p className="text-slate-400 mb-2">
            Every analyzer acts as a sequential processing assembly line that
            transforms raw strings into clean, indexable terms via three
            distinct layers:
          </p>
          <ul className="list-none space-y-2 text-sm text-slate-300 pl-2 mb-4">
            <li className="flex items-start">
              <span className="text-sky-400 font-mono font-bold mr-2 min-w-fit">
                1. Character Filters:
              </span>
              <span className="text-slate-400">
                Cleans the raw string text as a whole before parsing (e.g.,
                stripping HTML tags like{" "}
                <code className="text-xs bg-slate-800 p-0.5 font-mono text-amber-400">
                  &lt;b&gt;
                </code>{" "}
                or converting symbols).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 font-mono font-bold mr-2 min-w-fit">
                2. Tokenizer:
              </span>
              <span className="text-slate-400">
                The core engine that slices the continuous text stream into
                isolated token words (e.g., splitting on spaces or punctuation
                boundaries).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 font-mono font-bold mr-2 min-w-fit">
                3. Token Filters:
              </span>
              <span className="text-slate-400">
                Processes individual word tokens by converting them to
                lowercase, filtering out common stopwords (`the`, `is`), and
                stemming text to its grammatical root.
              </span>
            </li>
          </ul>
          <SubTopic>Built‑in Analyzers Reference</SubTopic>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm text-left text-slate-300">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Analyzer
                  </th>
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Behavior
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-mono text-sky-400">standard</td>
                  <td className="px-4 py-2">
                    Tokenizes on word boundaries, lowercases, and removes
                    punctuation.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-mono text-sky-400">simple</td>
                  <td className="px-4 py-2">
                    Splits text on any non‑letter character and converts to
                    lowercase.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-mono text-sky-400">
                    whitespace
                  </td>
                  <td className="px-4 py-2">
                    Splits text strictly on white spaces; retains original
                    letter casing.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-mono text-sky-400">keyword</td>
                  <td className="px-4 py-2">
                    Bypasses tokenization entirely; stores the whole string as
                    one single token.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sky-400">english</td>
                  <td className="px-4 py-2">
                    Standard tokenization + removes stop words (`and`, `the`) +
                    stems words to roots.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <SubTopic>Custom Analyzer Schema Definition</SubTopic>
          <p className="text-slate-400 mb-2">
            Create targeted indices using explicit, custom analysis pipelines to
            fine-tune how complex fields (like code logs or blog text) get
            processed.
          </p>
          <CodeBlock language="json">{`PUT /my_blog
{
  "settings": {
    "analysis": {
      "analyzer": {
        "my_custom_blog_analyzer": {
          "type": "custom",             // Indicates a user-defined analyzer with custom tokenizer and filters
          "tokenizer": "standard",      // Uses the standard tokenizer to split text into terms based on word boundaries
          "filter": [                   // Applies a series of token filters to each token produced by the tokenizer
            "lowercase",                // Converts all tokens to lowercase
            "stop",                     // Removes common stop words like "and", "the"
            "porter_stem"               // Reduces tokens to their grammatical root form  
          ]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "body": {
        "type": "text",
        "analyzer": "my_custom_blog_analyzer"
      }
    }
  }
}
`}</CodeBlock>
          <p className="text-xs font-mono text-slate-500 mt-1 mb-4 pl-1">
            Behavior: The <B>porter_stem</B> engine reduces words to their
            grammatical root form (e.g., turning <B>jumped</B> or <B>jumping</B>{" "}
            into
            <B>jump</B>).
          </p>

          <SubTopic>Testing An Analyzer Endpoint</SubTopic>
          <p className="text-slate-400 mb-2">
            Use the global <B>_analyze</B> API to inspect exactly how a string
            is tokenized and stored before loading it into your data stream
            index.
          </p>
          <CodeBlock language="json">{`POST /_analyze
{
  "analyzer": "standard",
  "text": "The Quick Brown Fox jumped!"
}

// OUTPUT:
//   "tokens": [
//     { "token": "the", "start_offset": 0, "end_offset": 3, "type": "<ALPHANUM>", "position": 0 },
//     { "token": "quick", "start_offset": 4, "end_offset": 9, "type": "<ALPHANUM>", "position": 1 },
//     { "token": "brown", "start_offset": 10, "end_offset": 15, "type": "<ALPHANUM>", "position": 2 },
//     { "token": "fox", "start_offset": 16, "end_offset": 19, "type": "<ALPHANUM>", "position": 3 },
//     { "token": "jumped", "start_offset": 20, "end_offset": 26, "type": "<ALPHANUM>", "position": 4 }
//   ]
// }
`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
    11. INDEX MANAGEMENT & LIFECYCLE
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🗂️">Index Management &amp; Lifecycle</Topic>

          <SubTopic>1. Index Templates (Schema Automation)</SubTopic>
          <BulletList>
            <Bullet>
              Define baseline settings, storage parameters, and mapping
              properties that automatically apply to any newly spawned index
              matching a specific naming pattern.
            </Bullet>
          </BulletList>

          <p className="text-slate-400 mb-2 mt-2">
            Create a global system log template targeting dynamic indices:
          </p>
          <CodeBlock language="json">{`PUT /_index_template/logs_template
{
  "index_patterns": ["logs-*"], // Matches any index starting with "logs-"
  "template": {
    "settings": {
      "number_of_shards": 2,
      "number_of_replicas": 1
    },
    "mappings": {
      "properties": {
        "timestamp": { "type": "date" },
        "level":     { "type": "keyword" },
        "message":   { "type": "text" },
        "service":   { "type": "keyword" }
      }
    }
  }
}`}</CodeBlock>
          <p className="text-xs font-mono text-slate-500 mt-1 pl-1">
            Behavior: Any index created moving forward named like `logs-2026-09`
            or `logs-nginx` will automatically inherit this configuration
            pattern.
          </p>

          <SubTopic>2. Index Aliases (Atomic Pointer Swapping)</SubTopic>
          <p className="text-slate-400 mb-2">
            Execute index routing shifts inside a single atomic operation array
            block. <B>Always place the remove action first</B> to prevent
            multi-index target write crashes.
          </p>
          <CodeBlock language="json">{`POST /_aliases
{
  "actions": [
    { "remove": { "index": "products-v1", "alias": "products" } },
    { "add":    { "index": "products-v2", "alias": "products" } }
  ]
}`}</CodeBlock>
          <p className="text-xs font-mono text-slate-500 mt-1 pl-1">
            Result: Achieves true zero-downtime database structural migrations.
            Application code points permanently to `products`.
          </p>

          <SubTopic>
            3. Index State Management / ISM (Automated Infrastructure Shifting)
          </SubTopic>
          <BulletList>
            <Bullet>
              OpenSearch&apos;s built‑in data lifecycle policy engine used to
              automatically manage, optimize, tier, and cleanly discard
              historical data as it ages.
            </Bullet>
          </BulletList>

          <p className="text-slate-400 mb-2 mt-2">
            Define a 30-day tiered log rotation policy profile:
          </p>
          <CodeBlock language="json">{`PUT /_plugins/_ism/policies/log_rotation
{
  "policy": {
    "description": "Rotate data daily, lock to warm tier, and delete old logs",
    "default_state": "hot",
    "states": [             // Define the different states for the index lifecycle management policy
      {
        "name": "hot",      // Hot tier for actively written and queried data
        "actions": [{ "rollover": { "min_size": "30gb", "min_index_age": "1d" } }], // Rollover when index reaches 30GB or 1 day old
        "transitions": [{ "state_name": "warm", "conditions": { "min_index_age": "7d" } }] // Transition to warm tier after 7 days
      },
      {
        "name": "warm",      // Warm tier for less frequently accessed data
        "actions": [{ "read_only": {} }], // Make index read-only in warm tier
        "transitions": [{ "state_name": "delete", "conditions": { "min_index_age": "30d" } }] // Transition to delete after 30 days
      },
      {
        "name": "delete",    // Delete tier for old data
        "actions": [{ "delete": {} }] // Delete the index
      }
    ]
  }
}`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
    11b. INFRASTRUCTURE — STORAGE TIERING
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🎛️">Hot / Warm / Cold Storage Tiering</Topic>
          <p className="text-slate-400 mb-4">
            In enterprise systems, storing high-volume historical log files on
            ultra-fast hardware burns budget. OpenSearch resolves this by
            pairing your <B>ISM Policies</B> with specialized{" "}
            <B>Node Attributes</B> to automatically shift index data across
            three logical hardware tiers as it ages.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm text-left text-slate-300">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Storage Tier
                  </th>
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Hardware Profile
                  </th>
                  <th className="px-4 py-2 font-semibold text-slate-400">
                    Index Status &amp; Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-semibold text-amber-400">
                    🔥 Hot Tier
                  </td>
                  <td className="px-4 py-2">
                    High-CPU servers backed by high-IOPS <B>NVMe SSDs</B>.
                  </td>
                  <td className="px-4 py-2">
                    <B>Read / Write Active.</B> Handles all real-time stream
                    ingestion and intensive search queries.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-4 py-2 font-semibold text-yellow-500">
                    🌤️ Warm Tier
                  </td>
                  <td className="px-4 py-2">
                    Standard CPU nodes backed by cheaper, dense mechanical hard
                    drives (<B>HDDs</B>).
                  </td>
                  <td className="px-4 py-2">
                    <B>Read‑Only Active.</B> Ingestion is disabled. Shards are
                    shrunk and optimized strictly for historic analytical
                    reports.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-sky-400">
                    ❄️ Cold Tier
                  </td>
                  <td className="px-4 py-2">
                    Detached, serverless object storage layers (e.g.,{" "}
                    <B>AWS S3</B> or Azure Blobs).
                  </td>
                  <td className="px-4 py-2">
                    <B>Archived Searchable Snapshot.</B> Local disks are wiped
                    clean. Cluster metadata points directly to object buckets
                    for on-demand emergency queries.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <SubTopic>How it Works: Routing Data via Node Attributes</SubTopic>
          <p className="text-slate-400 mb-2">
            To set up tiering, you must tag your cluster nodes with custom
            attributes inside their local configuration files (e.g., setting{" "}
            <code className="text-xs font-mono bg-slate-800 text-sky-400 p-1">
              node.attr.box_type: hot
            </code>
            ). Once nodes are grouped, your index settings or ISM policies
            trigger data movement via **Shard Allocation Filtering**:
          </p>

          <CodeBlock language="json">{`// Example: Instantly migrating an index from Hot nodes to Warm nodes via API
PUT /logs-2026-08/_settings
{
  "index.routing.allocation.require.box_type": "warm"
}`}</CodeBlock>

          <p className="text-sm text-slate-400 border-l-2 border-sky-500 pl-3 italic mt-3">
            <B>Engine Impact:</B> When this command runs, the coordinating node
            coordinates a cluster reallocation state. Shards are streamed over
            the network from Hot physical nodes to the designated Warm physical
            nodes, safely removing the storage overhead from your primary NVMe
            disk footprints without dropping search availability.
          </p>
        </Card>

        {/* ═══════════════════════════════════════
            12. SECURITY
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🔐">Security</Topic>
          <BulletList>
            <Bullet>
              OpenSearch ships with a <B>Security plugin</B> enabled by default
              — unlike Elasticsearch where security features were historically
              paid.
            </Bullet>
            <Bullet>
              Supports <B>TLS/SSL</B> for node‑to‑node and REST layer
              encryption.
            </Bullet>
            <Bullet>
              <B>Fine‑grained access control</B> — roles can restrict access
              down to index, document, and field levels.
            </Bullet>
            <Bullet>
              Multiple <B>authentication backends</B>: internal users, LDAP,
              Active Directory, SAML, OpenID Connect.
            </Bullet>
            <Bullet>
              Built‑in <B>audit logging</B> to track who accessed what and when.
            </Bullet>
          </BulletList>

          <SubTopic>Internal Users &amp; Roles</SubTopic>
          <CodeBlock language="bash">{`# Create an internal user via REST API
// PUT /_plugins/_security/api/internalusers/analyst
{
  "password": "Str0ng_p@ss!",
  "backend_roles": ["readall"],
  "attributes": {
    "department": "analytics"
  }
}

# Map a role to the user
// PUT /_plugins/_security/api/rolesmapping/readall
{
  "users": ["analyst"]
}`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
            13. OPENSEARCH DASHBOARDS
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📈">OpenSearch Dashboards</Topic>
          <BulletList>
            <Bullet>
              Fork of Kibana — the web‑based UI for visualizing and managing
              your OpenSearch data.
            </Bullet>
            <Bullet>
              Create <B>visualizations</B> (bar charts, pie charts, maps, time
              series), combine them into <B>dashboards</B>.
            </Bullet>
            <Bullet>
              <B>Dev Tools Console</B> — interactive REST client built into the
              UI for running queries against OpenSearch.
            </Bullet>
            <Bullet>
              <B>Alerting</B> — define monitors and triggers that send
              notifications via Slack, email, or webhooks.
            </Bullet>
            <Bullet>
              <B>Anomaly Detection</B> — ML‑powered plugin that automatically
              detects unusual patterns in your data.
            </Bullet>
            <Bullet>
              <B>Observability</B> — trace analytics with OpenTelemetry, log
              exploration, and notebook‑style investigations.
            </Bullet>
          </BulletList>
          <Tip>
            The Dev Tools Console (Dashboards → Dev Tools) is the fastest way to
            learn OpenSearch — type queries, hit Ctrl+Enter, see results
            instantly.
          </Tip>
        </Card>

        {/* ═══════════════════════════════════════
            14. VECTOR SEARCH & AI
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🧠">Vector Search &amp; AI</Topic>
          <BulletList>
            <Bullet>
              OpenSearch can act as a <B>vector database</B> using the k‑NN
              (k‑Nearest Neighbors) plugin.
            </Bullet>
            <Bullet>
              Store embeddings from ML models (OpenAI, Hugging Face, etc.) and
              perform <B>approximate nearest neighbor (ANN)</B> searches.
            </Bullet>
            <Bullet>
              Supports engines: <B>Faiss</B>, <B>Lucene</B>, and <B>NMSLIB</B>{" "}
              for vector indexing.
            </Bullet>
          </BulletList>

          <SubTopic>Create a Vector Index</SubTopic>
          <CodeBlock language="json">{`// PUT /my-vector-index
{
  "settings": {
    "index.knn": true
  },
  "mappings": {
    "properties": {
      "title": { "type": "text" },
      "embedding": {
        "type": "knn_vector",
        "dimension": 768,
        "method": {
          "name": "hnsw",
          "space_type": "cosinesimil",
          "engine": "faiss"
        }
      }
    }
  }
}`}</CodeBlock>

          <SubTopic>k‑NN Search</SubTopic>
          <CodeBlock language="json">{`// POST /my-vector-index/_search
{
  "size": 5,
  "query": {
    "knn": {
      "embedding": {
        "vector": [0.12, -0.34, 0.56, ...],
        "k": 5
      }
    }
  }
}
// Returns the 5 most similar documents by cosine similarity`}</CodeBlock>
          <Note>
            This is the foundation for semantic search and RAG (Retrieval
            Augmented Generation) — embed your documents, store vectors in
            OpenSearch, then query with an embedding of the user&apos;s
            question.
          </Note>
        </Card>

        {/* ═══════════════════════════════════════
            15. SQL & PPL QUERIES
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="💬">SQL &amp; PPL Queries</Topic>
          <BulletList>
            <Bullet>
              Already know SQL? OpenSearch lets you query with familiar SQL
              syntax via the SQL plugin.
            </Bullet>
            <Bullet>
              <B>PPL (Piped Processing Language)</B> is a pipe‑based query
              language (similar to Splunk SPL) for exploratory data analysis.
            </Bullet>
          </BulletList>

          <SubTopic>SQL Query</SubTopic>
          <CodeBlock language="json">{`// POST /_plugins/_sql
{
  "query": "SELECT name, price, category FROM products WHERE price > 50 ORDER BY price DESC LIMIT 10"
}`}</CodeBlock>

          <SubTopic>PPL Query</SubTopic>
          <CodeBlock language="json">{`// POST /_plugins/_ppl
{
  "query": "source=products | where price > 50 | sort -price | head 10 | fields name, price, category"
}`}</CodeBlock>
        </Card>

        {/* ═══════════════════════════════════════
    14. DAILY ESSENTIALS — API REFERENCE
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="📋">OpenSearch Daily API Essentials</Topic>
          <p className="text-slate-400 mb-4">
            The high-frequency endpoints needed for daily index management, CRUD
            actions, full-text searching, and health diagnostics.
          </p>

          <div className="overflow-x-auto space-y-4">
            <table className="min-w-full text-xs text-left text-slate-300">
              <thead>
                <tr className="border-b border-slate-700/60 bg-slate-800/30">
                  <th className="px-3 py-2 font-semibold text-slate-400 w-1/4">
                    Operational Goal
                  </th>
                  <th className="px-3 py-2 font-semibold text-slate-400 w-1/3">
                    Method &amp; Endpoint
                  </th>
                  <th className="px-3 py-2 font-semibold text-slate-400">
                    Payload Requirement / Behavior
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- DIAGNOSTICS & STATUS --- */}
                <tr className="border-b border-slate-800/40 bg-slate-900/20">
                  <td className="px-3 py-1.5 font-bold text-sky-400 uppercase tracking-wider col-span-3">
                    Diagnostics &amp; Health
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    Check Cluster Health
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    GET /_cluster/health
                  </td>
                  <td className="px-3 py-2">
                    Instantly returns cluster status: Green (OK), Yellow
                    (Warnings), or Red (Errors).
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    List Indices &amp; Sizes
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    GET /_cat/indices?v
                  </td>
                  <td className="px-3 py-2">
                    Returns a clean terminal table of all indexes, their
                    document counts, and disk space usage.
                  </td>
                </tr>

                {/* --- SCHEMA & INDEX MANAGEMENT --- */}
                <tr className="border-b border-slate-800/40 bg-slate-900/20">
                  <td className="px-3 py-1.5 font-bold text-purple-400 uppercase tracking-wider col-span-3">
                    Indices &amp; Mappings
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">Create Index Schema</td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    PUT /my-index
                  </td>
                  <td className="px-3 py-2">
                    Requires a JSON body defining{" "}
                    <code className="text-purple-300">`settings`</code> (shards)
                    and explicit field{" "}
                    <code className="text-purple-300">`mappings`</code>.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">Inspect Mappings</td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    GET /my-index/_mapping
                  </td>
                  <td className="px-3 py-2">
                    Returns the active data fields blueprint to verify explicit
                    schemas or analyze text fields.
                  </td>
                </tr>

                {/* --- DOCUMENT OPERATIONS --- */}
                <tr className="border-b border-slate-800/40 bg-slate-900/20">
                  <td className="px-3 py-1.5 font-bold text-amber-500 uppercase tracking-wider col-span-3">
                    Document Writes &amp; Updates
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    Write Document (Fixed ID)
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    PUT /my-index/_doc/{"{id}"}
                  </td>
                  <td className="px-3 py-2">
                    Stores raw JSON record at an explicit ID path; completely
                    overwrites if the ID already exists.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    Atomic Scripted Update
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    POST /my-index/_update/{"{id}"}
                  </td>
                  <td className="px-3 py-2">
                    Requires a JSON body with a{" "}
                    <code className="text-sky-300">`script`</code> block to
                    dynamically modify fields inside shard memory.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    Bulk Pipeline Ingest
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    POST /_bulk
                  </td>
                  <td className="px-3 py-2">
                    Streams multi-document index/delete pipelines.{" "}
                    <B>Strictly requires NDJSON formatting</B>.
                  </td>
                </tr>

                {/* --- READ & SEARCH --- */}
                <tr className="border-b border-slate-800/40 bg-slate-900/20">
                  <td className="px-3 py-1.5 font-bold text-emerald-400 uppercase tracking-wider col-span-3">
                    Reads &amp; Analytical Queries
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    Real-Time Fetch by ID
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    GET /my-index/_doc/{"{id}"}
                  </td>
                  <td className="px-3 py-2">
                    Instantly returns a single JSON doc directly from memory,
                    completely bypassing search engine delays.
                  </td>
                </tr>
                <tr className="border-b border-slate-800/40">
                  <td className="px-3 py-2 font-medium">
                    Execute Search Query
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    POST /my-index/_search
                  </td>
                  <td className="px-3 py-2">
                    Evaluates your JSON Query DSL payload. Used for text match
                    rankings and{" "}
                    <code className="text-emerald-300">`aggs`</code> analytics.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">
                    Force Search Visibility
                  </td>
                  <td className="px-3 py-2 font-mono text-amber-400">
                    POST /my-index/_refresh
                  </td>
                  <td className="px-3 py-2">
                    Forces memory buffers to immediately commit to disk, making
                    new writes instantly searchable.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* ═══════════════════════════════════════
    17. BEST PRACTICES
    ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="✅">Production Best Practices &amp; Guardrails</Topic>

          <SubTopic>Ingestion &amp; Indexing Strategy</SubTopic>
          <BulletList>
            <Bullet>
              Always leverage the <B>Bulk API</B> for bulk ingest
              requests—single document insertions incur massive HTTP and
              coordinating node overhead.
            </Bullet>
            <Bullet>
              Increase the <B>refresh_interval</B> to{" "}
              <code className="text-xs bg-slate-800 text-amber-400 p-0.5 font-mono">
                `30s`
              </code>{" "}
              or higher during large initial data migrations to reduce frequent
              Lucene segment creation, then drop it back down to{" "}
              <code className="text-xs bg-slate-800 text-amber-400 p-0.5 font-mono">
                `1s`
              </code>{" "}
              for normal use.
            </Bullet>
            <Bullet>
              Enforce strict, explicit <B>mappings</B> to block dynamic schema
              extensions, completely eliminating the threat of cluster-crashing
              <B>Mapping Explosions</B>.
            </Bullet>
            <Bullet>
              <B>Parameterize Painless Scripts:</B> Always pass dynamic data
              variables within the{" "}
              <code className="text-xs bg-slate-800 text-sky-400 p-0.5 font-mono">
                `params`
              </code>{" "}
              block instead of hardcoding text strings inside the source code,
              allowing OpenSearch to cache your pre-compiled scripts.
            </Bullet>
          </BulletList>

          <SubTopic>Shard Architecture &amp; Capacity Planning</SubTopic>
          <BulletList>
            <Bullet>
              Target individual shard sizes between <B>10GB and 50GB</B>. Small
              shards choke master node metadata memory, while bloated shards
              degrade cluster query parallelism and complicate node recoveries.
            </Bullet>
            <Bullet>
              Maintain a maximum cluster ratio of <B>20 shards per 1GB of
              configured JVM Heap memory</B> across all node servers to protect
              overall infrastructure health.
            </Bullet>
            <Bullet>
              Automate indices creation by utilizing standardized{" "}
              <B>Index Templates</B> bundled alongside strict{" "}
              <B>ISM Rollover Policies</B> to cycle indices cleanly out of the
              hot tier based on size or age metrics.
            </Bullet>
          </BulletList>

          <SubTopic>Query Performance &amp; Optimization</SubTopic>
          <BulletList>
            <Bullet>
              Prioritize using the binary <B>filter</B> array container inside
              your compound boolean blocks for all non-scoring lookups—these
              bypass BM25 math and automatically hit the high-speed bitset
              cache.
            </Bullet>
            <Bullet>
              Apply strict <B>_source filtering</B> lists to drop massive,
              unnecessary text objects (like raw code stacktraces) before the
              payload gets serialized and passed over the network pipe.
            </Bullet>
            <Bullet>
              Ban deep pagination calls via numerical offsets (
              <code className="text-xs bg-slate-800 text-red-400 p-0.5 font-mono">
                from + size
              </code>{" "}
              values exceeding 10,000 documents). Enforce the cursor-based{" "}
              <B>search_after</B> pattern for high-frequency scrolling, and
              allocate the <B>Scroll API</B> strictly to asynchronous background
              file exports.
            </Bullet>
            <Bullet>
              <B>Restrict Leading Wildcards:</B> Block user interfaces from
              running leading wildcard queries (e.g., searching for{" "}
              <code className="text-xs bg-slate-800 text-red-400 p-0.5 font-mono">
                `*error`
              </code>
              ), as they force a brute-force scan across every single token in
              the inverted index, spiking CPU usage.
            </Bullet>
          </BulletList>

          <SubTopic>Cluster Monitoring &amp; Memory Safeguards</SubTopic>
          <BulletList>
            <Bullet>
              Monitor JVM Heap memory utilization constantly—ensure real-time
              garbage collection routines trigger cleanly and keep running
              memory averages <B>well underneath a 75% heap footprint line</B>.
            </Bullet>
            <Bullet>
              Set up early-warning alerts for disk storage thresholds before
              hitting the strict <B>Disk Watermarks</B> limits (Low Watermark
              blocks new shard allocations; High Watermark actively forces
              active shards off the impacted disk drive).
            </Bullet>
          </BulletList>
        </Card>

        {/* ═══════════════════════════════════════
            18. DOCKER COMPOSE — PRODUCTION‑LIKE
            ═══════════════════════════════════════ */}
        <Card>
          <Topic emoji="🐳">Docker Compose — Multi‑Node Cluster</Topic>
          <p className="text-slate-400 mb-2">
            A more production‑like setup with 2 OpenSearch nodes and Dashboards:
          </p>
          <CodeBlock language="yaml">{`version: '3'
services:
  opensearch-node1:
    image: opensearchproject/opensearch:2.15.0
    container_name: opensearch-node1
    environment:
      - cluster.name=opensearch-cluster
      - node.name=opensearch-node1
      - discovery.seed_hosts=opensearch-node1,opensearch-node2
      - cluster.initial_cluster_manager_nodes=opensearch-node1,opensearch-node2
      - bootstrap.memory_lock=true
      - OPENSEARCH_JAVA_OPTS=-Xms1g -Xmx1g
      - OPENSEARCH_INITIAL_ADMIN_PASSWORD=MyStr0ng!Pass#2024
    ulimits:
      memlock: { soft: -1, hard: -1 }
      nofile: { soft: 65536, hard: 65536 }
    volumes:
      - opensearch-data1:/usr/share/opensearch/data
    ports:
      - 9200:9200
      - 9600:9600
    networks:
      - opensearch-net

  opensearch-node2:
    image: opensearchproject/opensearch:2.15.0
    container_name: opensearch-node2
    environment:
      - cluster.name=opensearch-cluster
      - node.name=opensearch-node2
      - discovery.seed_hosts=opensearch-node1,opensearch-node2
      - cluster.initial_cluster_manager_nodes=opensearch-node1,opensearch-node2
      - bootstrap.memory_lock=true
      - OPENSEARCH_JAVA_OPTS=-Xms1g -Xmx1g
      - OPENSEARCH_INITIAL_ADMIN_PASSWORD=MyStr0ng!Pass#2024
    ulimits:
      memlock: { soft: -1, hard: -1 }
      nofile: { soft: 65536, hard: 65536 }
    volumes:
      - opensearch-data2:/usr/share/opensearch/data
    networks:
      - opensearch-net

  opensearch-dashboards:
    image: opensearchproject/opensearch-dashboards:2.15.0
    container_name: opensearch-dashboards
    ports:
      - 5601:5601
    environment:
      OPENSEARCH_HOSTS: '["https://opensearch-node1:9200","https://opensearch-node2:9200"]'
    networks:
      - opensearch-net

volumes:
  opensearch-data1:
  opensearch-data2:

networks:
  opensearch-net:`}</CodeBlock>
        </Card>

        {/* ── Footer ── */}
        <div className="text-center py-8 text-slate-600 text-sm">
          — more notes coming soon —
        </div>
      </main>
    </div>
  );
}
