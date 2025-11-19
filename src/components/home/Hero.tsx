import React, { useLayoutEffect, useRef } from "react";
import Header from "./Header";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

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

// ---------------------------------------------
// Hero con animaciones GSAP limpias y sin flash
// ---------------------------------------------
// Recomendaciones:
// - Asegurate que los elementos animados NO tengan clases Tailwind que afecten
//   `transform` u `opacity` (ej: evita `transition`, `transform` en .hero-line/.hero-btn).
// - Este archivo usa selectores scoped con gsap.context para no afectar otros elementos.

const Hero = ({ scrollTo, refs }: HeroProps) => {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector; // selector scoped al rootRef
      if (!q) return; // proteger contra posible undefined

      // 1) Forzar estado inicial - evitar from() flashes
      gsap.set(q(".hero-line"), { y: 60, opacity: 0, filter: "blur(8px)", skewY: 4 });
      gsap.set(q(".hero-btn"), { y: 40, opacity: 0, scale: 0.96, filter: "blur(6px)" });
      gsap.set(q(".hero-arrow"), { y: 25, opacity: 0 });

      // 2) Timeline: lines -> btn -> arrow
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(q(".hero-line"), {
        y: 0,
        opacity: 1,
        skewY: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.14,
      });

      tl.to(
        q(".hero-btn"),
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.5"
      );

      tl.to(
        q(".hero-arrow"),
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.45"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header scrollTo={scrollTo} refs={refs} />

      <section ref={rootRef} className="w-full h-screen flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center p-10 rounded-lg">
          <h2 className="hero-title text-6xl md:text-7xl font-extrabold italic text-white drop-shadow-lg drop-shadow-black leading-tight">
            <span className="hero-line block">TÚ MEJOR VERSIÓN</span>
            <span className="hero-line block">EMPIEZA HOY.</span>
          </h2>

          <div className="flex flex-col items-center justify-center text-white">
            <button
              onClick={() => scrollTo(refs.entrenamientoRef)}
              className="hero-btn mt-10 px-8 py-3 rounded-full bg-amber-700 text-white font-medium cursor-pointer hover:bg-amber-800 transition-colors text-lg"
            >
              COMENZAR AHORA
            </button>

            <ArrowDown size={40} className="hero-arrow absolute lg:bottom-60 bottom-20" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
