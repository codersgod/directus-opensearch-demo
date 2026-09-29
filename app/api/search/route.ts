import { client } from "@/lib/opensearch";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const q = searchParams.get("q") || "";

    const result = await client.search({
      index: "articles",
      body: {
        query: {
          multi_match: {
            query: q,
            fields: ["title", "content"],
            fuzziness: "AUTO",
          },
        },
        highlight: {
          pre_tags: ["<mark>"],
          post_tags: ["</mark>"],
          fields: {
            title: {},
            content: {},
          },
        },
      },
    });

    return Response.json(result.body.hits.hits);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: String(error),
      },
      {
        status: 500,
      },
    );
  }
}
