export function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold">Aunita Hakimi</h1>
      <nav className="flex items-center">
        <a href="/" className="mr-6 hover:underline">Home</a>
        <a href="/blog" className="mr-6 hover:underline">Blog</a>
        <a href="/foods" className="mr-6 hover:underline">Flavors</a>
      </nav>
    </header>
  )
}