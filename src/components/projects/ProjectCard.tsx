import { Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
        </div>
        <a
          href={`https://github.com/ethanmclark1/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}