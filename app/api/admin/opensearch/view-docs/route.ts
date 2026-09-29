import { client } from "@/lib/opensearch";

// TO VIEW DOCUMENTS IN OPENSEARCH

export async function GET() {
  const result = await client.search({
    index: "articles",
    body: {
      query: {
        match_all: {},
      },
      size: 20,
    },
  });

  return Response.json(result.body.hits.hits);
}
