import { PageWrapper } from '@/components/layout/PageWrapper'
import { About } from '@/components/home/About'
import { RecentPosts } from '@/components/home/RecentPosts'

export default function Home() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <About />
        <RecentPosts/>
      </div>
    </PageWrapper>
  )
}