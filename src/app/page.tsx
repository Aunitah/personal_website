import { PageWrapper } from '@/components/layout/PageWrapper'
import { About } from '@/components/home/About'
import { BeyondTech } from '@/components/home/BeyondTech'
import { RecentPosts } from '@/components/home/RecentPosts'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export default function Home() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <About />
        <BeyondTech />
        <RecentPosts/>
        <FeaturedProjects />
      </div>
    </PageWrapper>
  )
}