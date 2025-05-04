import { Project } from '@/types';
import { projectCategories } from '@/lib/constants/projects';

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className="space-y-8">
      {projectCategories.map((category) => {
        const categoryProjects = projectsByCategory[category];
        if (!categoryProjects?.length) return null;

        return (
          <section key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="space-y-4">
              {categoryProjects.map((project) => (
                <div key={project.repo}>
                  <a
                    href={`https://github.com/ethanmclark1/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    {project.title}
                  </a>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}