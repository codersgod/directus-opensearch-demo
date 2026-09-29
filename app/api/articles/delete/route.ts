import { client } from "@/lib/opensearch";
import { DIRECTUS_URL, DIRECTUS_TOKEN } from "@/lib/directus";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const directusRes = await fetch(`${DIRECTUS_URL}/items/articles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${DIRECTUS_TOKEN}`,
      },
    });

    if (!directusRes.ok) {
      return Response.json(
        {
          error: "Failed to delete from Directus",
        },
        {
          status: directusRes.status,
        },
      );
    }

    await client.delete({
      index: "articles",
      id: String(id),
    });

    return Response.json({
      success: true,
      deletedId: id,
    });
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
