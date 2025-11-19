// src/components/home/Header.tsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ClipboardCheck, Dumbbell, Home, Menu, Phone, User, X } from "lucide-react";
import hero_img from '../../assets/Hero.png';
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import gsap from "gsap";

type HeaderProps = {
  scrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    inicioRef: React.RefObject<HTMLDivElement | null>;
    entrenamientoRef: React.RefObject<HTMLDivElement | null>;
    serviciosRef: React.RefObject<HTMLDivElement | null>;
    sobreMiRef: React.RefObject<HTMLDivElement | null>;
    contactoRef: React.RefObject<HTMLDivElement | null>;
  };
};

const Header = ({ scrollTo, refs }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLElement | null>(null);

  const { inicioRef, entrenamientoRef, serviciosRef, sobreMiRef, contactoRef } = refs;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const instagramUrl = "https://www.instagram.com/nazarenosalerno22?igsh=czNrY2RhcHlxZ2ly";
  const tiktokUrl = "https://www.tiktok.com/@nazafit22?_r=1&_t=ZM-91VvGnbiGqG";
  const youtubeUrl = "https://youtube.com/@naza22arg?si=P4jLHSbsyfzSpkam";

  // Animación de entrada del header y nav items (mount)
  useLayoutEffect(() => {
  if (!headerRef.current) return;

  const ctx = gsap.context(() => {
    const q = gsap.utils.selector(headerRef); // selecciona solo dentro del header

    // 1) forzar estado inicial (los dejamos arriba y ocultos)
    gsap.set([ q(".title-item"), q(".nav-item") ], { y: -22, opacity: 0 });

    // 2) timeline limpia: header -> title -> items (todos con to(), no from())
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // animación del header (si querés animar el header en sí)
    tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.45 });

    // título: cae desde -22 a 0
    tl.to(q(".title-item"), { y: 0, opacity: 1, duration: 0.42 }, "-=0.28");

    // nav items: caen secuencialmente (stagger)
    tl.to(q(".nav-item"), {
      y: 0,
      opacity: 1,
      duration: 0.42,
      stagger: 0.03
    }, "-=0.34");

  }, headerRef);

  return () => ctx.revert();
}, []);

  // Animación del menú móvil cuando se abre/cierra
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const el = mobileMenuRef.current;

    if (open) {
      // abrir: card scale + items stagger
      gsap.killTweensOf(el);
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y: 14, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.1, ease: "power3.out" }
        );
        const items = el.querySelectorAll(".mobile-item");
        gsap.fromTo(
          items,
          { y: 0, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.1, delay: 0.3 }
        );
      }, el);

      return () => ctx.revert();
    } else {
      // cerrar: pequeña animación out (opcional)
      gsap.to(el, { y: 8, opacity: 0, duration: 0.22, ease: "power1.in" });
    }
  }, [open]);

  return (
    <>
      <img
        src={hero_img}
        alt="Entrenamiento"
        className="absolute w-full h-screen object-cover -z-50"
      />

      {/* header con clase inicial opaca (evita flicker) */}
      <header
        ref={headerRef}
        className={`opacity-0
          fixed w-full p-6 md:p-10 flex items-center justify-between z-999999
          text-white transition-colors duration-500
          ${isScrolled ? "bg-black/95 backdrop-blur-md" : ""}
        `}
      >
        {/* LOGO */}
        <h1 className="title-item text-3xl md:text-4xl font-extrabold italic drop-shadow-xl pl-2 md:pl-20">
          NAZARENO SALERNO
        </h1>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center  mr-20">
          <ul className="flex gap-10 items-center font-medium drop-shadow-xl">
            <button
              className="nav-item cursor-pointer hover:text-amber-700 transition-colors duration-300 drop-shadow-xl drop-shadow-black"
              onClick={() => scrollTo(inicioRef)}
            >
              Inicio
            </button>

            <button
              className="nav-item cursor-pointer hover:text-amber-700 transition-colors duration-300 drop-shadow-xl drop-shadow-black"
              onClick={() => scrollTo(entrenamientoRef)}
            >
              Sobre el Entrenamiento
            </button>

            <button
              className="nav-item cursor-pointer hover:text-amber-700 transition-colors duration-300 drop-shadow-xl drop-shadow-black"
              onClick={() => scrollTo(serviciosRef)}
            >
              Servicios
            </button>

            <button
              className="nav-item cursor-pointer hover:text-amber-700 transition-colors duration-300 drop-shadow-xl drop-shadow-black"
              onClick={() => scrollTo(sobreMiRef)}
            >
              Sobre Mí
            </button>
          </ul>

          <button
            onClick={() => scrollTo(contactoRef)}
            className="nav-item ml-10 px-6 py-2 rounded-full bg-amber-700 hover:bg-amber-800 cursor-pointer transition-colors duration-300 font-medium "
          >
            Contacto
          </button>
        </nav>

        {/* BOTÓN MENÚ MOBILE */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="Abrir menú">
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* MENÚ MOBILE SLIDE-DOWN */}
      <div
        className={`fixed inset-0 z-9999 flex items-center justify-center transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* BACKDROP clickeable para cerrar */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* CARD PRINCIPAL del menú (ref usado para animación) */}
        <nav
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className={`relative w-[92%] max-w-sm mx-auto rounded-2xl p-6 border border-white/6
            bg-linear-to-b from-zinc-900/95 to-zinc-900/95 shadow-xl transform transition-all duration-350
            ${open ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >

          {/* ITEMS (alineados a la izquierda, con icono) */}
          <ul className="mt-6 flex flex-col gap-3">
            {[
              { label: "Inicio", ref: inicioRef, Icon: Home },
              { label: "Entrenamiento", ref: entrenamientoRef, Icon: Dumbbell },
              { label: "Servicios", ref: serviciosRef, Icon: ClipboardCheck },
              { label: "Sobre mí", ref: sobreMiRef, Icon: User },
              { label: "Contacto", ref: contactoRef, Icon: Phone },
            ].map((it, i) => (
              <li key={it.label}>
                <button
                  onClick={() => {
                    scrollTo(it.ref);
                    setOpen(false);
                  }}
                  className="mobile-item w-full flex items-center gap-4 px-3 py-3 rounded-lg text-left hover:bg-white/3 transition-transform duration-300"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-amber-300">
                    <it.Icon size={18} />
                  </span>
                  <span className="text-white text-lg font-medium">{it.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Socials pequeños */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-black shadow">
              <FaInstagram size={18} />
            </a>

            <a href={tiktokUrl} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-black shadow">
              <FaTiktok size={18} />
            </a>

            <a href={youtubeUrl} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-black shadow">
              <FaYoutube size={18} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
