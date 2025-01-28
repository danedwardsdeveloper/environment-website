import type { Metadata, Viewport } from 'next'

import './styles.tailwind.css'

export const metadata: Metadata = {
  title: `Environment Company`,
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className="flex flex-col">{children}</body>
    </html>
  )
}
