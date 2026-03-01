import Link from "next/link";
import { articles } from "../data";
import { ArrowRight } from "lucide-react";

export const NextArticleButton = ({ currentSlug }: { currentSlug: string }) => {
  // Find current index
  const currentIndex = articles.findIndex((p) => p.slug === currentSlug);

  // Get next article (wrap around if last)
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <Link
      prefetch
      href={`/articles/${nextArticle.slug}`}
      className="flex items-center gap-3 mt-3  w-fit bg-black text-white p-3   pr-4 rounded-full hover:bg-gray-800 cursor-pointer transition-all"
    >
      <ArrowRight className="bg-white p-1  rounded-full text-black  " />
      <span className="text-sm  tracking-widest"> Next Article</span>
    </Link>
  );
};
