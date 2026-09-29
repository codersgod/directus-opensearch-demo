import { client } from "@/lib/opensearch";

export async function GET() {
  try {
    const result = await client.cluster.health();

    return Response.json({
      success: true,
      cluster: result.body.cluster_name,
      status: result.body.status,
      nodes: result.body.number_of_nodes,
    });
  } catch (error) {
    console.error("OpenSearch connection failed:", error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown Error",
      },
      {
        status: 500,
      },
    );
  }
}
