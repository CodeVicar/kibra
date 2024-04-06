import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kibra Youth Boxing Initiative',
  description: 'Empowering Kibera’s Youth through Boxing and Holistic Education. Nurturing talent|Fostering Growth|Building Futures.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        
        </body>
    </html>
  )
}