export function Header() {
  return (
    <header className="flex justify-between items-start">
      <h1 className="text-4xl font-bold text-orange-500">Her Living Letter</h1>
      <div className="flex flex-col items-end space-y-1">
        <a 
          href="mailto:aunita.hakimi@yahoo.com" 
          className="text-orange-500 hover:text-orange-400 hover:underline text-sm"
        >
          Contact me here
        </a>
        <a 
          href="https://url.usb.m.mimecastprotect.com/s/pwJhCWWA5rTzoqj7Lc6fVfoboKw?domain=canva.com" 
          className="text-orange-500 hover:text-orange-400 hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Publications
        </a>
      </div>
    </header>
  )
}