import { client } from "@/lib/opensearch";
import { DIRECTUS_URL, DIRECTUS_TOKEN } from "@/lib/directus";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    console.log("DIRECTUS_URL =", DIRECTUS_URL);
    console.log("DIRECTUS_TOKEN exists =", !!DIRECTUS_TOKEN);
    const directusRes = await fetch(
      `${DIRECTUS_URL}/items/articles/${body.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DIRECTUS_TOKEN}`,
        },
        body: JSON.stringify({
          title: body.title,
          slug: body.slug,
          content: body.content,
        }),
      },
    );
    const article = await directusRes.json();
    console.log("Status:", directusRes.status);
    console.log("Response:", article);

    if (!directusRes.ok) {
      return Response.json(article, {
        status: directusRes.status,
      });
    }

    const updatedArticle = article.data;

    await client.update({
      index: "articles",
      id: String(updatedArticle.id),
      body: {
        doc: {
          title: updatedArticle.title,
          slug: updatedArticle.slug,
          content: updatedArticle.content,
        },
      },
    });

    return Response.json(updatedArticle);
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
