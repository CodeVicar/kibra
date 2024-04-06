
import Image from 'next/image'
import Hero from '@/components/homepage/Hero'
import Programs from '@/components/homepage/Programs'
import About from '@/components/homepage/About'
import Faq from '@/components/homepage/Faq'
import Patners from '@/components/Patners'






export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">

      <Hero />
      <About />
      <Programs />
      <Faq />
      <Patners />
     


      

      
      
    </main>
  )
}