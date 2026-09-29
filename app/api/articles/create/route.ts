import { client } from "@/lib/opensearch";
import { DIRECTUS_URL, DIRECTUS_TOKEN } from "@/lib/directus";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Create article in Directus
    const directusRes = await fetch(`${DIRECTUS_URL}/items/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DIRECTUS_TOKEN}`,
      },
      body: JSON.stringify({
        title: body.title,
        slug: body.slug,
        content: body.content,
      }),
    });

    const article = await directusRes.json();

    if (!directusRes.ok) {
      return Response.json(article, {
        status: directusRes.status,
      });
    }

    const createdArticle = article.data;

    // Index in OpenSearch
    await client.index({
      index: "articles",
      id: String(createdArticle.id),
      body: {
        id: createdArticle.id,
        title: createdArticle.title,
        slug: createdArticle.slug,
        content: createdArticle.content,
      },
    });

    return Response.json(createdArticle);
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
