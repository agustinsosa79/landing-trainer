import { useEffect, useState } from "react";
import { ClipboardCheck, Dumbbell, Home, Menu, Phone, User, X } from "lucide-react";
import hero_img from '../../assets/Hero.png';
import { FaInstagram, FaTiktok } from "react-icons/fa";

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

const Header = ({scrollTo, refs}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { inicioRef, entrenamientoRef, serviciosRef, sobreMiRef, contactoRef } = refs;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <img
        src={hero_img}
        alt="Entrenamiento"
        className="absolute w-full h-screen object-cover -z-50"
      />

      <header
  className={`
    fixed w-full p-6 md:p-10 flex items-center justify-between z-999999
    text-white  transition-colors duration-500
    ${isScrolled ? "bg-black/95 backdrop-blur-md" : ""}
  `}
>

        {/* LOGO */}
        <h1 className="text-3xl md:text-4xl font-extrabold italic drop-shadow-xl pl-2 md:pl-20">
          NAZARENO SALERNO
        </h1>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center mr-20">
          <ul className="flex gap-10 items-center font-medium drop-shadow-xl">
        <button className="cursor-pointer hover:text-amber-700 transition duration-300 drop-shadow-xl drop-shadow-black" onClick={() => scrollTo(inicioRef)}>Inicio</button>
        <button className="cursor-pointer hover:text-amber-700 transition duration-300 drop-shadow-xl drop-shadow-black" onClick={() => scrollTo(entrenamientoRef)}>Sobre el Entrenamiento</button>
        <button className="cursor-pointer hover:text-amber-700 transition duration-300 drop-shadow-xl drop-shadow-black" onClick={() => scrollTo(serviciosRef)}>Servicios</button>
        <button className="cursor-pointer hover:text-amber-700 transition duration-300 drop-shadow-xl drop-shadow-black" onClick={() => scrollTo(sobreMiRef)}>Sobre Mí</button>  
          </ul>

          <button onClick={() => scrollTo(contactoRef)} className="ml-10 px-6 py-2 rounded-full bg-amber-700 hover:bg-amber-800 cursor-pointer transition">
            Contacto
          </button>
        </nav>

        {/* BOTÓN MENÚ MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
        >
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

  {/* CARD PRINCIPAL del menú */}
  <nav
    role="dialog"
    aria-modal="true"
    aria-label="Menú principal"
    className={`relative w-[92%] max-w-sm mx-auto rounded-2xl p-6 border border-white/6
      bg-linear-to-b from-zinc-900/95 to-zinc-900/95 shadow-xl transform transition-all duration-350
      ${open ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-95"}`}
    onClick={(e) => e.stopPropagation()} /* evitar que el click en la card cierre el menu */
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
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg text-left hover:bg-white/3 transition transform"
            style={{ transitionDelay: `${i * 70}ms` }} // stagger
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
  <a
    href="https://instagram.com/"
    target="_blank"
    className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-black shadow"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://tiktok.com/"
    target="_blank"
    className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-black shadow"
  >
    <FaTiktok size={18} />
  </a>
</div>
  </nav>
</div>
    </>
  );
};

export default Header;
