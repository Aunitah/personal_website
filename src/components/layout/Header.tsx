export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">Her Living Letter</h1>
          <div className="flex flex-col items-end space-y-1">
            <a 
              href="mailto:aunita.hakimi@yahoo.com" 
              className="text-orange-500 hover:text-orange-400 hover:underline text-base text-right"
            >
              Contact me here
            </a>
            <a 
              href="https://url.usb.m.mimecastprotect.com/s/pwJhCWWA5rTzoqj7Lc6fVfoboKw?domain=canva.com" 
              className="text-orange-500 hover:text-orange-400 hover:underline text-base text-right"
              target="_blank"
              rel="noopener noreferrer"
            >
              Publications
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}