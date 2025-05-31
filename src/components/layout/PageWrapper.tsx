import { Header } from './Header'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl w-full mx-auto px-4 py-12 font-serif flex-grow">
        <Header />
        <main className="mt-8">
          {children}
        </main>
      </div>
    </div>
  )
}