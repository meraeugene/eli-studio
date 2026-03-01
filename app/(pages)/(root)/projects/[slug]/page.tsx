import { projects } from "@/app/data";
import ProjectDescription from "@/app/sections/(projects)/ProjectDescription";
import ProjectDetailsHero from "@/app/sections/(projects)/ProjectDetailsHero";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <main>Project not found</main>;
  }

  return (
    <main>
      <ProjectDetailsHero project={project} />
      <ProjectDescription project={project} />
    </main>
  );
};

export default page;
