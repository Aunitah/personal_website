'use client'

import { useState, useEffect } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasPassedIntro, setHasPassedIntro] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const introThreshold = 400 // Distance past which intro is considered "passed"
      
      // Mark that we've passed the introduction section
      if (currentScrollY > introThreshold) {
        setHasPassedIntro(true)
      }
      
      // If we're near the top, always show and reset the "passed" flag
      if (currentScrollY <= 200) {
        setIsVisible(true)
        setHasPassedIntro(false)
      } 
      // If we've passed the intro, keep it hidden even when scrolling up
      else if (hasPassedIntro) {
        setIsVisible(false)
      }
      // Otherwise, show/hide based on scroll direction
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, hasPassedIntro])

  return (
    <section 
      className={`sticky top-[80px] sm:top-20 lg:top-24 z-40 bg-white transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-3">
        <div className="prose max-w-none">
          <p className="text-black text-base leading-relaxed font-medium m-0">
            I'm Aunita, an Iranian writer exploring how identity, culture, and technology shape modern life. Writing, for me, is a way to make sense of the world, through essays, poetry, and reflections on belonging, language, and the pace of change. I moved to the U.S. from Iran at nineteen and taught myself English during the pandemic. Since then, writing in this language has become both a practice of self-expression and a lens through which I examine how we live, connect, and adapt in an ever-shifting world.
          </p>
        </div>
      </div>
    </section>
  )
}