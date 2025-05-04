export function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold">Ethan M. Clark</h1>
      <nav className="text-gray-600 mt-2">
        <a href="/" className="mr-6 hover:underline">Home</a>
        <a href="/blog" className="mr-6 hover:underline">Blog</a>
        <a href="/projects" className="mr-6 hover:underline">Projects</a>
        <a href="/resume" className="mr-6 hover:underline">Resume</a>
      </nav>
    </header>
  )
}