import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Providers from '@/components/Provider'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BroadBuy😃',
  description: 'BroadBuy is your ultimate online shopping destination, offering a wide range of high-quality products including electronics, fashion, home goods, and more. Enjoy a user-friendly shopping experience with secure transactions and great deals across various categories. Shop smart, shop BroadBuy!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
