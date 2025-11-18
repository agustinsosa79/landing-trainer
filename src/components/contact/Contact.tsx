import { FaWhatsapp } from "react-icons/fa";

/**
 * Contact component (WhatsApp-first)
 * Reemplazá PHONE y CALENDAR_LINK por los reales.
 */
const PHONE = "5492213094123"; // formato: country + area + number, sin +

const Contact = () => {
  const prefilled = encodeURIComponent(
    "Hola Nazareno! Vi tu página y quiero coordinar una charla para entrenar."
  );
  const waHref = `https://wa.me/${PHONE}?text=${prefilled}`;


  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-12 bg-zinc-950 text-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ===== Left: Title + copy ===== */}
        <div className="lg:col-span-2">
          <h2 id="contact-title" className="text-2xl md:text-4xl font-semibold">
            Hablemos por <span className="text-amber-700">WhatsApp</span>
          </h2>

          <p className="mt-4 text-zinc-300 md:text-base text-sm max-w-3xl leading-relaxed">
            Si querés arrancar o saber cómo puedo ayudarte, escribime por WhatsApp y te
            respondo personalmente. Si preferís llamarme o agendar una charla corta,
            también podés hacerlo!  
          </p>

          {/* micro-instrucciones */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center gap-3 px-5 py-3 rounded-xl text-black font-semibold
                           bg-linear-to-br from-emerald-500 via-emerald-600 to-emerald-700   transform transition hover:scale-105"
                aria-label="Enviar WhatsApp a Nazareno"
              >
                {/* ring pulsante */}
                <span className="absolute -left-2 -top-2 w-3 h-3 rounded-full bg-emerald-400 opacity-80 animate-pulse hidden sm:block" />
                {/* icon */}
                <FaWhatsapp className="w-5 h-5 text-white" />

                <span className="text-white md:text-base text-sm">Escribime por WhatsApp</span>
              </a>

           
            
          </div>

          {/* Small notes */}
          <div className="mt-4 text-sm text-zinc-400 max-w-xl">
            <p>Respondo personalmente: generalmente dentro de la misma hora.</p>
            <p className="mt-1">Horario de atención: L — D 9:00 — 21:00</p>
          </div>
        </div>

        {/* ===== Right: Contact card visual ===== */}
        
      </div>

      {/* ===== Floating WA button for mobile (always visible) ===== */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex  items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-emerald-500 via-emerald-900 to-emerald-700 hover:from-emerald-700 hover:via-emerald-900 hover:to-emerald-500 shadow-lg shadow-black transition hover:scale-105 duration-400"
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 white" />
      </a>
    </section>
  );
};

export default Contact;
