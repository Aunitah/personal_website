async function getGithubReposNoAuth() {
  const response = await fetch('https://api.github.com/users/ethanmclark1/repos', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch repos without authentication');
  }

  return response.json();
}

export async function getGithubRepos() {
  try {
    console.log('Fetching GitHub repos...');
    const response = await fetch('https://api.github.com/users/ethanmclark1/repos', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 }
    });

    if (response.status === 401) {
      console.warn('GitHub token invalid or expired');
      return getGithubReposNoAuth();
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch repos: ${response.status}`);
    }

    const data = await response.json();
    console.log('GitHub API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return getGithubReposNoAuth();
  }
}