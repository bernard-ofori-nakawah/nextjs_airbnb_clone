
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Sen } from 'next/font/google'

const font = Sen({ subsets: ['latin'], weight: ['400', '800'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
