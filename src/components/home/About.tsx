export function About() {
  return (
    <section className="prose prose-lg max-w-none">
      <div className="space-y-6">
        <p className="text-lg mb-8">
          I'm Aunita, an Iranian writer. For me writing is a way to make sense of the world, whether through opinion pieces, poetry, or personal reflections. I moved to the U.S. from Iran at 19 and during the COVID-19 pandemic I taught myself English. Since then, writing in this new language has become a powerful way for me to connect, reflect, and share.
        </p>
        <p className="leading-relaxed">
          <a href="/blog" className="text-blue-600 hover:underline">Here you can read my pieces.</a>
        </p>
        <p className="leading-relaxed">
          My publication on the Persona Creative Magazine volume 42:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-2">
          <img 
            src="/magazine/magazine1.jpg" 
            alt="Persona Creative Magazine Volume 42 - Cover" 
            className="rounded-lg shadow-lg max-w-[250px] mx-auto"
          />
          <div className="space-y-1">
            <img 
              src="/magazine/magazine2.jpg" 
              alt="Persona Creative Magazine Volume 42 - Inside" 
              className="rounded-lg shadow-lg max-w-[250px] mx-auto"
            />
            <div className="grid grid-cols-2 gap-1">
              <img 
                src="/magazine/magazine3.jpg" 
                alt="Persona Creative Magazine Volume 42 - Page 1" 
                className="rounded-lg shadow-lg w-full max-w-[150px] mx-auto"
              />
              <img 
                src="/magazine/magazine4.jpg" 
                alt="Persona Creative Magazine Volume 42 - Page 2" 
                className="rounded-lg shadow-lg w-full max-w-[150px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}