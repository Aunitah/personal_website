import { projects } from '@/lib/constants/projects'

export function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
      <div className="space-y-4">
        {featuredProjects.map((project) => (
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
  )
}