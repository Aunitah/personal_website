import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Her Living Letter',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-900">
      <body className="min-h-screen antialiased bg-gray-900 text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}