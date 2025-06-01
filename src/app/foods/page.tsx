import { PageWrapper } from '@/components/layout/PageWrapper'

export default function FoodsPage() {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">Flavors</h1>
      <p className="text-lg mb-8">
        Food needs to be eaten warm and fast—so these pictures aren't too fancy. But every dish was made and served with love.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">My love for shrimp and salmon</h2>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[1, 2, 4].map(i => (
            <img
              key={i}
              src={`/foods/seafood${i}.jpg`}
              alt={`Seafood dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {[5, 6, 7].map(i => (
            <img
              key={i}
              src={`/foods/seafood${i}.jpg`}
              alt={`Seafood dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Attempts of Persian Food</h2>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`/foods/persian${i}.jpg`}
              alt={`Persian dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[5, 6, 7].map(i => (
            <img
              key={i}
              src={`/foods/persian${i}.jpg`}
              alt={`Persian dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Pasta, Lasagna, and Gnocchi</h2>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`/foods/pasta${i}.jpg`}
              alt={`Pasta dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[5, 6, 7, 8].map(i => (
            <img
              key={i}
              src={`/foods/pasta${i}.jpg`}
              alt={`Pasta dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Sweet Alabama</h2>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`/foods/sweet${i}.jpg`}
              alt={`Sweet dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[5, 6, 7, 8].map(i => (
            <img
              key={i}
              src={`/foods/sweet${i}.jpg`}
              alt={`Sweet dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[9, 10, 11].map(i => (
            <img
              key={i}
              src={`/foods/sweet${i}.jpg`}
              alt={`Sweet dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[12, 13, 14].map(i => (
            <img
              key={i}
              src={`/foods/sweet${i}.jpg`}
              alt={`Sweet dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Attempts on Thai, Chinese, and Vietnamese</h2>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {[1, 2, 3].map(i => (
            <img
              key={i}
              src={`/foods/asian${i}.jpg`}
              alt={`Asian dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[4, 5, 6].map(i => (
            <img
              key={i}
              src={`/foods/asian${i}.jpg`}
              alt={`Asian dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Salad and Lettuce Time</h2>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`/foods/salad${i}.jpg`}
              alt={`Salad dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[5, 6, 7].map(i => (
            <img
              key={i}
              src={`/foods/salad${i}.jpg`}
              alt={`Salad dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Fast and College Style</h2>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`/foods/fast${i}.jpg`}
              alt={`Fast dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[5, 6, 7, 8].map(i => (
            <img
              key={i}
              src={`/foods/fast${i}.jpg`}
              alt={`Fast dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[9, 10, 11].map(i => (
            <img
              key={i}
              src={`/foods/fast${i}.jpg`}
              alt={`Fast dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[12, 13, 14].map(i => (
            <img
              key={i}
              src={`/foods/fast${i}.jpg`}
              alt={`Fast dish ${i}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  )
} 