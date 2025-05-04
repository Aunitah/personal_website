import { getAllPosts } from '@/lib/mdx'
import { formatShortDate } from '@/lib/utils/date'

export function RecentPosts() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <ul className="space-y-3">
        {recentPosts.map((post, index) => (
          <li key={index}>
            <span className="text-gray-500 mr-3">{formatShortDate(post.date)}</span>
            <a href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}