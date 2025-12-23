import { Header } from './Header'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-28 lg:pt-24 pb-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <main className="flex-1">
            {children}
          </main>
          <aside className="w-64 hidden lg:block">
            <div className="sticky top-8">
              {/* Sidebar content can be added here in the future */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}