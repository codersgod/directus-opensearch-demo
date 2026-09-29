import { client } from "@/lib/opensearch";

export async function GET() {
  // To create the "articles" index in OpenSearch if it doesn't already exist

  try {
    const exists = await client.indices.exists({
      index: "articles",
    });

    if (exists.body) {
      return Response.json({
        success: true,
        message: "Index already exists",
      });
    }

    const result = await client.indices.create({
      index: "articles",
      body: {
        mappings: {
          properties: {
            id: { type: "integer" },
            title: { type: "text" },
            slug: { type: "keyword" },
            content: { type: "text" },
          },
        },
      },
    });
    const body = await result.body;
    return Response.json(body);
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
