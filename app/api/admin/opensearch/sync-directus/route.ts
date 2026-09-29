import { client } from "@/lib/opensearch";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/articles`,
      {
        headers: {
          Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
        },
      },
    );

    const json = await response.json();
    const articles = json.data;

    // Index each article in OpenSearch (ITERATION)
    for (const article of articles) {
      await client.index({
        index: "articles",
        id: article.id.toString(),
        body: {
          id: article.id,
          title: article.title,
          slug: article.slug,
          content: article.content,
        },
      });
    }
    // Refresh the index to make sure all documents are searchable immediately
    await client.indices.refresh({
      index: "articles",
    });

    return Response.json({
      success: true,
      indexed: articles.length,
    });
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
