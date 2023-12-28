import { ArticleContextProvider } from '@/contexts/ArticleContext'
import './globals.css'
import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Artigo',
  description: 'Uma cópia do jogo artigo de artigo.app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${courierPrime.className} h-screen bg-zinc-900`}>
        <ArticleContextProvider>{children}</ArticleContextProvider>
      </body>
    </html>
  )
}
