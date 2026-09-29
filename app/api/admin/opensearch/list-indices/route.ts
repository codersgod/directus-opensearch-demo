import { client } from "@/lib/opensearch";

// TO LIST ALL INDICES IN OPENSEARCH
export async function GET() {
  const result = await client.cat.indices({
    format: "json",
  });

  return Response.json(result.body);
}
