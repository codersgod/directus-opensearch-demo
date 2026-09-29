import { client } from "@/lib/opensearch";

export async function GET() {


  // Add a new document to the "articles" index in OpenSearch

  const result = await client.index({
    index: "articles",
    body: {
      title: "Learn Next.js",
      content: "Next.js is a React framework",
    },
    refresh: true,
  });

  return Response.json(result);
}
