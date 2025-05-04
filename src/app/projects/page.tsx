import { ProjectsList } from '@/components/projects/ProjectsList';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { getGithubRepos } from '@/lib/utils/github';
import { projectMetadata } from '@/lib/constants/projects';

export const revalidate = 3600; // Revalidate every hour

export default async function ProjectsPage() {
  const repos = await getGithubRepos();
  
  const projects = repos.map((repo: any) => ({
    title: projectMetadata[repo.name]?.title || repo.name,
    repo: repo.name,
    description: repo.description,
    tags: repo.topics || [],
    stars: repo.stargazers_count,
    category: projectMetadata[repo.name]?.category || 'Other',
  }));

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ProjectsList projects={projects} />
    </PageWrapper>
  );
}