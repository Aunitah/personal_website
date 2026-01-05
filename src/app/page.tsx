import { PageWrapper } from '@/components/layout/PageWrapper'
import { About } from '@/components/home/About'
import { PostPreview } from '@/components/home/PostPreview'
import { getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXComponents } from 'mdx/types'
import remarkGfm from 'remark-gfm'

const components: MDXComponents = {
  a: ({ href, children }) => {
    if (typeof href !== 'string') return null
    return (
      <a href={href} className="text-orange-500 hover:text-orange-400 hover:underline">
        {children}
      </a>
    )
  },
  ol: ({ children }) => (
    <ol className="list-decimal pl-4 my-4 space-y-2 [&>li]:mt-2 first:[&>li]:mt-0">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  del: ({ children }) => (
    <del className="line-through text-gray-500">{children}</del>
  )
}

export default function Home() {
  const allPosts = getAllPosts()

  return (
    <PageWrapper>
      <div className="space-y-16">
        <About />
        <div className="space-y-16">
          {allPosts.map((post) => {
            let previewContent: string
            let hasMoreContent: boolean
            
            // Special handling for specific posts
            if (post.slug === 'until-i-sing-freely' || post.slug === 'children-of-love') {
              // Show first 5 lines
              const lines = post.content.split('\n')
              const previewLines = lines.slice(0, 5)
              previewContent = previewLines.join('\n')
              hasMoreContent = lines.length > 5
            } else if (post.slug === 'exile') {
              // Show specific excerpt
              previewContent = "Mom, I'm hiding from the phone. Not wanting to let you down is why. I can't say I'm hungry, can't say I'm blue. Up here, where happiness should be easy, I find it hard."
              hasMoreContent = true
            } else if (post.slug === 'hope') {
              // Show first 2 lines
              const lines = post.content.split('\n')
              const previewLines = lines.slice(0, 2)
              previewContent = previewLines.join('\n')
              hasMoreContent = lines.length > 2
            } else if (post.slug === 'its-that-simple') {
              // Show first 2 lines
              const lines = post.content.split('\n')
              const previewLines = lines.slice(0, 2)
              previewContent = previewLines.join('\n')
              hasMoreContent = lines.length > 2
            } else if (post.slug === 'my-impossible') {
              // Show specific excerpt
              previewContent = "If I could ever go back, I would hug my friend tighter and tell my mom I love her cooking. I wouldn't worry about the bugs and would lay on the grass in the yard. I would read all of my"
              hasMoreContent = true
            } else if (post.slug === 'my-way-to-you') {
              // Show first 2 lines
              previewContent = 'You gently took my head in your strong hands,\n"Let me get that for you," you said softly,'
              hasMoreContent = true
            } else if (post.slug === 'nostalgiacore') {
              // Show specific excerpt
              previewContent = "In a small, quiet room, surrounded by shelves stacked high with books, she felt both comforted and overwhelmed. Every spine was a portal to a new world, every page a chance to"
              hasMoreContent = true
            } else if (post.slug === 'oceans-blue') {
              // Show specific excerpt
              previewContent = "Drink deeply of the sea and lift me ever upwards,\n\nRest awhile, and with your truth, refresh my spirit. Guide me deep into your thoughts, planting belief, Murmur of the ocean's blue, the sky's claim on stars. Your presence eclipses"
              hasMoreContent = true
            } else if (post.slug === 'poetic-struggle-for-solace') {
              // Show specific excerpt
              previewContent = "Why is it that, at my core, I seem to be the most anxious, the most heartbroken soldier, the saddest version of myself?\n\nI marvel at the many faces I wear, how I change and flow. Yet, why does the most"
              hasMoreContent = true
            } else if (post.slug === 'the-guilt') {
              // Show specific excerpt
              previewContent = "How far I've come, free from the guilt,\nAll those times I looked back, unable to stop,\nFeeling guilty for being happy,\nTasting freedom while another part of the world burned,\nMy heart on fire."
              hasMoreContent = true
            } else if (post.slug === 'the-outsider') {
              // Show specific excerpt
              previewContent = "Belonging to Nothing\n\nI hated small towns, suffocating me in their embrace."
              hasMoreContent = true
            } else if (post.slug === 'the-perfect-mediocre') {
              // Show first 2 lines
              previewContent = "In brilliance they stand\nTheir perfection so sharp"
              hasMoreContent = true
            } else if (post.slug === 'the-perfection') {
              // Show first 2 lines
              previewContent = "I pause, not distracted.\n\nThe boredom sharpens my vision, brings clarity."
              hasMoreContent = true
            } else if (post.slug === 'the-unfinished-serenade') {
              // Show first 2 lines
              previewContent = "I hear the unkind melody of rain,\n\nHow the earth is beaten by this cruel beauty."
              hasMoreContent = true
            } else if (post.slug === 'look-closely') {
              // Show specific excerpt
              previewContent = "In the heart of Switzerland, a single moment encapsulated a lifetime of memories. There, on a street far from our beginnings, the three of us - sister, brother, cousin - found ourselves together again. It was as if the universe had conspired to bring us to this point, a reunion that transcended the mere crossing of borders."
              hasMoreContent = true
            } else if (post.slug === 'exhaustion-of-apathy') {
              // Show specific excerpt
              previewContent = "In a world where effort is often cloaked under the guise of indifference, where passion is dampened beneath a facade of apathy, there lies a rebellious heartbeat. This heartbeat refuses to be silenced by the trend of the 'effortless cool.'"
              hasMoreContent = true
            } else if (post.slug === 'adulthood') {
              // Show specific excerpt
              previewContent = "Three years have ebbed away since I last felt my mother's reassuring presence; my grandmother now battles with the relentless advance of liver cancer. My father remains a distant, unspoken thought. Love, in its traditional guise, has eluded me, yet I've discovered it in unexpected places and forms."
              hasMoreContent = true
            } else if (post.slug === 'the-day-i-ran-away') {
              // Show specific excerpt
              previewContent = "Day 789. That's the coded way I've remembered it. I left. Without a grand proclamation, without any warning. The weight of my decision fueled by an adrenaline rush, fear, and the ever-consuming urge to escape. I just... ran."
              hasMoreContent = true
            } else if (post.slug === 'the-ordinary-window') {
              // Show specific excerpt
              previewContent = "It is my last day in Toronto, and I am sitting in this café that I have been coming to this past week to study. It is also the first day of the new year, 2025. I can't bring myself to study yet. Right now, in front of me, there is this beautiful view of the outside - ordinary stores, a Chinese takeout, a psychic clinic, a UPS store."
              hasMoreContent = true
            } else if (post.slug === 'why-i-deleted-social-media') {
              // Show specific excerpt
              previewContent = "I know I have to come back soon. I know it will happen again – and that is why this thought refuses to let me sleep. People often ask me if I'm still on social media, if I'll ever return, or why I deleted it in the first place. The easy answer I shall offer each time would be that I wanted to focus more on school and spend less time on my phone. But the truth runs far deeper than that."
              hasMoreContent = true
            } else if (post.slug === 'the-clocks-tick-tack') {
              // Show specific excerpt
              previewContent = "Mountains' Whisper, Oblivion\n\nSeating precisely in the center of my room, the clock's tick tack, tick tack, weaves the rhythm of a world in miniature. I was struck by an epiphany, akin to quiet revelations found in the natural world: life itself does not hasten; rather, it is the human mind, a forgetful and fleeting thing, that lets slip the fragments and pieces of time. Life, in its boundless expanse, doesn't rush; time doesn't scurry."
              hasMoreContent = true
            } else {
              // Split content into paragraphs by grouping consecutive non-empty lines
              const lines = post.content.split('\n')
              const paragraphs: string[] = []
              let currentParagraph = ''
              
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i]
                // Empty line indicates paragraph break
                if (line.trim().length === 0) {
                  if (currentParagraph.trim().length > 0) {
                    paragraphs.push(currentParagraph.trim())
                    currentParagraph = ''
                  }
                } else {
                  // Add line to current paragraph
                  currentParagraph += (currentParagraph ? '\n' : '') + line
                }
              }
              // Add last paragraph if exists
              if (currentParagraph.trim().length > 0) {
                paragraphs.push(currentParagraph.trim())
              }
              
              const previewParagraphs = paragraphs.slice(0, 2)
              previewContent = previewParagraphs.join('\n\n')
              hasMoreContent = paragraphs.length > 2
            }

            const mdxOptions = {
              parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                format: 'mdx' as const,
                development: false
              }
            }

            return (
              <PostPreview
                key={post.slug}
                title={post.title}
                previewContent={
                  <MDXRemote 
                    source={previewContent} 
                    components={components}
                    options={mdxOptions}
                  />
                }
                fullContent={
                  <MDXRemote 
                    source={post.content} 
                    components={components}
                    options={mdxOptions}
                  />
                }
                hasMoreContent={hasMoreContent}
              />
            )
          })}
        </div>
      </div>
    </PageWrapper>
  )
}