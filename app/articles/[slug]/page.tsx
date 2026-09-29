import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
function getArticle(slug: string) {
  // Mock implementation for demonstration purposes
  return Promise.resolve({
    title: `Article: ${slug}`,
    content: `Content for article with slug: ${slug}`,
  });
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">{article.title}</h1>

      <p className="mt-6">{article.content}</p>
    </main>
  );
}
