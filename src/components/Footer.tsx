import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

/**
 * Footer llamativo, pro y responsive
 * Reemplazá los links/números por los reales.
 */

type FooterProps = {
  scrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    inicioRef: React.RefObject<HTMLDivElement | null>;
    entrenamientoRef: React.RefObject<HTMLDivElement | null>;
    serviciosRef: React.RefObject<HTMLDivElement | null>;
    sobreMiRef: React.RefObject<HTMLDivElement | null>;
    contactoRef: React.RefObject<HTMLDivElement | null>;
  };
};

const Footer = ({ scrollTo, refs }: FooterProps) => {
  const YEAR = new Date().getFullYear();
  
  const instagramUrl = "https://www.instagram.com/nazarenosalerno22?igsh=czNrY2RhcHlxZ2ly";
  const tiktokUrl = "https://www.tiktok.com/@nazafit22?_r=1&_t=ZM-91VvGnbiGqG";
  const youtubeUrl = "https://youtube.com/@naza22arg?si=P4jLHSbsyfzSpkam";

  return (
    <footer className="relative bg-black text-zinc-100 overflow-hidden">
      {/* Forma angular derecha (marca fuerte, 100% opaca) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-56"
        style={{
          background: "#b45309", // amber-700 hex (#b45309)
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Branding / Intro */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-amber-700 flex items-center justify-center">
                <span className="text-black font-bold">N</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold leading-tight">Nazareno Salerno</h3>
                <p className="text-amber-200 text-sm">Personal trainer</p>
              </div>
            </div>

            <p className="mt-4 text-zinc-300 text-sm leading-relaxed max-w-sm">
              Te ayudo a entrenar con sentido: técnica, progresión y hábitos que puedas sostener.
              Coordinemos una evaluación inicial por WhatsApp y vemos el mejor plan para vos.
            </p>

            <div className="mt-6 flex gap-3 items-center">
            </div>
          </div>

          {/* Socials center (desktop middle) */}
          <div className="flex flex-col items-center md:items-start justify-center gap-6">
            <div className="text-sm text-zinc-400">Seguime</div>

            <div className="flex items-center gap-4">
              {/* Instagram (fondo amber filled) */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-black shadow-md transform transition hover:scale-105"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-black" />
              </a>

              {/* TikTok */}
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-black shadow-md transform transition hover:scale-105"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 text-black" />
              </a>
              <a href={youtubeUrl} className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-black hover:scale-105  transition shadow-md">
                <FaYoutube className="w-5 h-5 text-black" />
              </a>

            </div>

            {/* follower placeholders (opcional) */}
            <div className="hidden md:flex gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2"><span className="font-semibold text-white">12k</span><span>followers</span></div>
              <div className="flex items-center gap-2"><span className="font-semibold text-white">8k</span><span>views</span></div>
            </div>
          </div>

          {/* Right column: links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <h4 className="text-sm text-zinc-400">Enlaces</h4>
            <div className="flex flex-col items-start md:items-end gap-2">
              <button onClick={() => scrollTo(refs.sobreMiRef)} className="text-zinc-300 hover:text-white text-sm">Sobre mí</button>
              <button onClick={() => scrollTo(refs.serviciosRef)} className="text-zinc-300 hover:text-white text-sm">Qué ofrezco</button>
              <button onClick={() => scrollTo(refs.contactoRef)} className="text-zinc-300 hover:text-white text-sm">Contacto</button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {YEAR} Nazareno Salerno</p>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
