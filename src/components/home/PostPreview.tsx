'use client'

import { useState } from 'react'

interface PostPreviewProps {
  title: string
  previewContent: React.ReactNode
  fullContent: React.ReactNode
  hasMoreContent: boolean
}

export function PostPreview({ title, previewContent, fullContent, hasMoreContent }: PostPreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="prose max-w-none text-base">
      <header className="mb-4">
        <h2 className="text-orange-500 text-2xl font-bold mb-2">{title}</h2>
      </header>
      <div className="markdown-content text-black leading-relaxed">
        {isExpanded ? (
          <>
            {fullContent}
            <button
              onClick={() => setIsExpanded(false)}
              className="text-orange-500 hover:text-orange-400 hover:underline mt-4 font-medium cursor-pointer"
            >
              Read less
            </button>
          </>
        ) : (
          <>
            {previewContent}
            {hasMoreContent && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-orange-500 hover:text-orange-400 hover:underline mt-2 font-medium cursor-pointer"
              >
                Read more...
              </button>
            )}
          </>
        )}
      </div>
    </article>
  )
}

