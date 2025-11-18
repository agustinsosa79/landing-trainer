import { useEffect, useRef } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import Hero from './components/home/Hero'
import Me from './components/me/Me'
import Offer from './components/offer/Offer'

function App() {

     const inicioRef = useRef<HTMLDivElement | null>(null);
  const entrenamientoRef = useRef<HTMLDivElement | null>(null);
  const serviciosRef = useRef<HTMLDivElement | null>(null);
  const sobreMiRef = useRef<HTMLDivElement | null>(null);
  const contactoRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if(ref.current){
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    
  }, []);

  return (
    <>
       <Hero scrollTo={scrollTo} refs={{ inicioRef, entrenamientoRef, serviciosRef, sobreMiRef, contactoRef }} />

       <section className='md:scroll-mt-30 scroll-mt-65 ' ref={entrenamientoRef}>
      <About  />
       </section>

      <section ref={serviciosRef} className='relative before:content-[""] md:scroll-mt-30 scroll-mt-20 before:absolute before:top-0 md:before:left-50 md:before:w-3/4 before:w-xs before:left-8 before:h-px before:bg-amber-700/40 before:z-50 overflow-hidden'>
        <Offer scrollTo={scrollTo} refs={{ contactoRef }} />
      </section>

      <section ref={sobreMiRef} className='relative before:content-[""] md:scroll-mt-30 scroll-mt-105 before:absolute before:top-0 md:before:left-50 md:before:w-3/4 before:w-xs before:left-8 before:h-px before:bg-amber-700/40 before:z-50'>
        <Me />
      </section>

      <section ref={contactoRef} className='relative before:content-[""] md:scroll-mt-30 -scroll-mt-10 before:absolute before:top-0 md:before:left-50 md:before:w-3/4 before:w-xs before:left-8 before:h-px before:bg-amber-700/40 before:z-50'>
        <Contact />
      </section>
      <Footer scrollTo={scrollTo} refs={{ inicioRef, entrenamientoRef, serviciosRef, sobreMiRef, contactoRef }} />
    </>
  )
}

export default App
