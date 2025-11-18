import {
  CalendarRange,
  Move3D,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

type OfferProps = {
  scrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    contactoRef: React.RefObject<HTMLDivElement | null>;
    serviciosRef?: React.RefObject<HTMLDivElement | null>;
  }
}

const Offer = ({ scrollTo, refs }: OfferProps) => {
  return (
    <section  className="relative py-20 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* === Columna principal (titulo + cards) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl italic md:text-4xl font-semibold text-white tracking-tight">
            Servicios
          </h2>

          <p className="mt-4 text-zinc-300 md:text-base text-sm max-w-xl leading-relaxed">
            No son trucos ni atajos. Es un sistema con foco en progresión, técnica y
            hábitos que encajan en tu día a día. Acá tenés lo concreto que hago por
            cada persona con la que trabajo.
          </p>

          {/* CTA compacto */}
          <div className="mt-6 flex gap-3 items-center">
            <button
              onClick={() => scrollTo(refs.contactoRef)}
              className="inline-block cursor-pointer bg-amber-700 text-white font-medium px-4 py-2 rounded-md md:text-md text-sm shadow-none hover:bg-amber-600 transition"
            >
              Consultá disponibilidad
            </button>
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <article className="flex gap-4 p-5 bg-zinc-900 rounded-lg border border-white/6 shadow-md shadow-black">
              <div className="flex-none">
                <div className="w-11 h-11 rounded-md bg-amber-700 flex items-center justify-center">
                  <CalendarRange className="w-5 h-5 text-black" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">Plan estructurado</h3>
                <p className="mt-1 text-zinc-400 text-sm leading-snug">
                  Secuencia clara de sesiones y progresión semanal para saber exactamente
                  qué hacer cada día.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="flex gap-4 p-5 bg-zinc-900 rounded-lg border border-white/6 shadow-md shadow-black">
              <div className="flex-none">
                <div className="w-11 h-11 rounded-md bg-amber-700 flex items-center justify-center">
                  <Move3D className="w-5 h-5 text-black" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">Técnica y seguridad</h3>
                <p className="mt-1 text-zinc-400 text-sm leading-snug">
                  Correcciones puntuales y variantes para proteger tus articulaciones y
                  mejorar la transferencia de fuerza.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="flex gap-4 p-5 bg-zinc-900 rounded-lg border border-white/6 shadow-md shadow-black">
              <div className="flex-none">
                <div className="w-11 h-11 rounded-md bg-amber-700 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-black" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">Hábitos prácticos</h3>
                <p className="mt-1 text-zinc-400 text-sm leading-snug">
                  Pequeños cambios diarios (rutina, sueño, microhábitos) que sostienen
                  el progreso sin sentirse sacrificio.
                </p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="flex gap-4 p-5 bg-zinc-900 rounded-lg border border-white/6 shadow-md shadow-black">
              <div className="flex-none">
                <div className="w-11 h-11 rounded-md bg-amber-700 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-black" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">Progreso medible</h3>
                <p className="mt-1 text-zinc-400 text-sm leading-snug">
                  Seguimiento sencillo con métricas que importan: fuerza, consistencia y
                  adherencia — para ajustar lo necesario.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* === Columna secundaria (elemento visual, sin ruido) */}
       <aside className="hidden lg:flex flex-col items-center gap-6">
  {/* Card visual sólida / identidad de servicio */}
 <div className="relative w-59 h-72  overflow-hidden rounded-2xl shadow-xl">
  {/* Fondo diagonal */}
  <div className="absolute inset-0 bg-linear-to-br from-amber-600 via-amber-900/80 to-amber-700" />
  <div className="absolute right-10 bottom-10 w-27 h-100 bg-black/20 rotate-90" />

  <div className="absolute bottom-5 left-6">
    <h3 className="text-white text-2xl font-semibold leading-tight">
      Entrenamiento<br />Personalizado
    </h3>
    <p className="text-amber-100/80 text-sm mt-4 max-w-[80%]">
      Diseño cada fase según tu nivel, tu experiencia y lo que realmente podés sostener.
Nada se deja al azar: cargas, volumen, progresiones y descansos están planificados para que avances sin estancarte.
    </p>
  </div>
</div>  

  {/* Micro-beneficio realista y útil */}
  <div className="w-56 text-right">
    <p className="text-sm text-zinc-300 leading-relaxed">
      Sea en gimnasio o en tu casa, adapto todo a tu contexto: horarios, lesiones,
      equipamiento y objetivo. El plan se ajusta a vos, no al revés.
    </p>
  </div>
</aside>
      </div>
    </section>
  );
};

export default Offer;
