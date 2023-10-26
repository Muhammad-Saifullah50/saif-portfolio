import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Saif',
  description: 'Developer Saif Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <section className="relative bg-primary z-0">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>

    </html>
  )
}
