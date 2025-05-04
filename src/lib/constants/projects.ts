import { Project } from '@/types';

export const projectMetadata: Record<string, Partial<Project>> = {
  'carla_aebs': {
    title: 'Autonomous Emergency Braking System',
    category: 'Autonomous Systems',
    featured: true
  },
  'octomap-ros': {
    title: 'OctoMap ROS Integration',
    category: 'Robotics'
  },
  'bioinformatics-sota-eval': {
    title: 'Bioinformatics SOTA Evaluation',
    category: 'Machine Learning'
  },
  'blocksworld3d': {
    title: 'Blocksworld3D',
    category: 'Reinforcement Learning'
  },
  'rl_toolkit': {
    title: 'RL Toolkit',
    category: 'Reinforcement Learning'
  },
  'geat': {
    title: 'GEAT',
    category: 'Evolutionary Computation'
  }
};

export const projects: Project[] = [
  {
    title: 'Autonomous Emergency Braking System',
    repo: 'carla_aebs',
    description: 'Deep learning-based emergency braking system built with CARLA simulator',
    tags: ['Python', 'PyTorch', 'CARLA'],
    category: 'Autonomous Systems',
    featured: true,
    slug: 'carla-aebs'
  },
  {
    title: 'OctoMap ROS Integration',
    repo: 'octomap-ros',
    description: 'ROS 2 compatible Python bindings for OctoMap, enabling efficient 3D mapping and spatial perception',
    tags: ['C++', 'ROS'],
    category: 'Robotics',
    featured: true,
    slug: 'octomap-ros'
  },
  {
    title: 'Bioinformatics SOTA Evaluation',
    repo: 'bioinformatics-sota-eval',
    description: 'Benchmarking modern neural networks for single-cell RNA sequencing analysis',
    tags: ['Python', 'Deep Learning', 'Bioinformatics'],
    category: 'Machine Learning',
    featured: true,
    slug: 'bioinformatics-sota-eval'
  },
  {
    title: 'Blocksworld3D',
    repo: 'blocksworld3d',
    description: '3D reinforcement learning environment for testing complex manipulation strategies',
    tags: ['Python', 'Reinforcement Learning'],
    category: 'Reinforcement Learning',
    featured: false,
    slug: 'blocksworld3d'
  },
  {
    title: 'RL Toolkit',
    repo: 'rl_toolkit',
    description: 'Implementation of core reinforcement learning algorithms with PyTorch',
    tags: ['Python', 'PyTorch', 'Reinforcement Learning'],
    category: 'Reinforcement Learning',
    featured: false,
    slug: 'rl-toolkit'
  },
  {
    title: 'GEAT',
    repo: 'geat',
    description: 'Genetic and evolutionary algorithm implementations for optimization problems.',
    tags: ['Python', 'Evolutionary Algorithms'],
    category: 'Evolutionary Computation',
    featured: false,
    slug: 'geat'
  }
];

export const projectCategories = [
  'Robotics',
  'Autonomous Systems',
  'Reinforcement Learning',
  'Machine Learning',
  'Evolutionary Computation'
] as const;