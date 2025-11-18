import Header from "./Header"
import { ArrowDown } from "lucide-react"

type HeroProps = {
  scrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    inicioRef: React.RefObject<HTMLDivElement | null>;
    entrenamientoRef: React.RefObject<HTMLDivElement | null>;
    serviciosRef: React.RefObject<HTMLDivElement | null>;
    sobreMiRef: React.RefObject<HTMLDivElement | null>;
    contactoRef: React.RefObject<HTMLDivElement | null>;
  };
};

const Hero = ({ scrollTo, refs }: HeroProps) => {
  return (

    <>  
    <Header scrollTo={scrollTo} refs={refs} />
    <section ref={refs?.inicioRef} className="  w-full h-screen  flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center   p-10 rounded-lg">
                <h2 className="text-6xl text-start flex-col flex items-center justify-center  md:text-7xl font-extrabold italic text-white drop-shadow-lg drop-shadow-black leading-tight">
                    <span>TÚ MEJOR VERSIÓN</span>
                    <span>EMPIEZA HOY.</span>
                </h2>

                <div className=" flex flex-col items-center justify-center  text-white ">
                <button onClick={() => scrollTo(refs.entrenamientoRef)} className="mt-10 px-8 py-3 rounded-full bg-amber-700 text-white font-medium cursor-pointer hover:bg-amber-800 transition-colors text-lg">
                    COMENZAR AHORA
                </button>

                    <ArrowDown size={40} className="absolute lg:bottom-60 bottom-20 animate-bounce" />
                </div>
        </div>
    </section>
    </>
  )
}

export default Hero