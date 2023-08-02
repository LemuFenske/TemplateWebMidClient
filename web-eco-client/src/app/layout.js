import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Template Web Eco 1',
  description: 'Created by Lemuel Fenske',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
