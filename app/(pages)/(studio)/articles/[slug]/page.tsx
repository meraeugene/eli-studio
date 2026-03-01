import { articles } from "@/app/data";
import ArticleContent from "@/app/sections/(articles)/ArticleContent";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <main>Article not found</main>;
  }

  return (
    <main>
      <ArticleContent article={article} />
    </main>
  );
};

export default page;
