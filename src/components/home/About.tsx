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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <img 
            src="/magazine/magazine1.jpg" 
            alt="Persona Creative Magazine Volume 42 - Cover" 
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <img 
              src="/magazine/magazine2.jpg" 
              alt="Persona Creative Magazine Volume 42 - Inside" 
              className="rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/magazine/magazine3.jpg" 
                alt="Persona Creative Magazine Volume 42 - Page 1" 
                className="rounded-lg shadow-lg w-full"
              />
              <img 
                src="/magazine/magazine4.jpg" 
                alt="Persona Creative Magazine Volume 42 - Page 2" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
        <p className="leading-relaxed">
          Cooking is another passion I've carried with me through college, a way to unwind after long days of studying, but also a way to stay connected to home. Preparing food reminds me of my family, especially my grandmother, whose love for cooking shaped so many of my memories. Through every dish, I try to hold onto that warmth and share it with others.
        </p>
        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Tahchin: Persian Food - The Crispy Bottom of Heaven</h3>
          <div className="flex justify-center">
            <img 
              src="/foods/tahchin.jpg" 
              alt="Tahchin - Persian Saffron Rice Cake" 
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
            />
          </div>
          <div className="text-center mt-4">
            <a href="/foods" className="text-blue-600 hover:underline">See the rest of flavors</a>
          </div>
        </div>
      </div>
    </section>
  )
}