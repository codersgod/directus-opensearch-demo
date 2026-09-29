import { Client } from "@opensearch-project/opensearch";

export const client = new Client({
  node: process.env.OPENSEARCH_NODE,
  auth: {
    username: process.env.OPENSEARCH_USERNAME!,
    password: process.env.OPENSEARCH_PASSWORD!,
  },
});
