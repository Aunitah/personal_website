import { Header } from './Header'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <div className="max-w-6xl w-full mx-auto px-12 py-16 font-sans flex-grow">
        <Header />
        <div className="flex gap-8 mt-8">
          <main className="flex-1">
            {children}
          </main>
          <aside className="w-64">
            <div className="sticky top-8">
              {/* Sidebar content can be added here in the future */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}