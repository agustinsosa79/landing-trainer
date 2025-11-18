import { Dumbbell, HandHelping } from 'lucide-react'
import image_about_1 from '../../assets/Image.png'
import image_about_2 from '../../assets/Image2.png'

const About = () => {
  return (
    <section className="relative md:py-24 py-10 px-6 md:px-12 bg-zinc-950 overflow-hidden">

 <div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-0 -left-5 w-[105%] h-[22%] md:h-[24%] bg-linear-to-bl from-amber-900 via-amber-800 to-amber-700/20 -rotate-3 origin-top-left shadow-lg shadow-black" />
</div>


  <div className="relative max-w-6xl mx-auto flex flex-col md:gap-32 gap-30">

    {/* --- TÍTULO --- */}
    <div className="max-w-3xl space-y-6">
  <h2 className="text-3xl md:text-5xl font-bold text-white italic">
    Tu cambio empieza acá
  </h2>

  <p className="md:text-base text-md text-zinc-100/90 leading-relaxed">
    Mi trabajo es ayudarte a entrenar de una forma que puedas sostener de verdad.
    Nada de fórmulas mágicas ni rutinas imposibles.
  </p>

  <p className="md:text-base text-md text-zinc-100/80 leading-relaxed">
    Antes de avanzar, evaluamos dónde estás hoy, qué tenés a favor,
    qué te cuesta y qué necesitás mejorar. Con eso armamos un camino claro 
    para progresar sin lastimarte ni perder tiempo.
  </p>
</div>

    {/* --- BLOQUE 1: imagen con card superpuesta --- */}
    <div className="relative flex flex-col lg:flex-row items-center justify-center">

      {/* Imagen */}
      <img
        src={image_about_1}
        alt="Entrenamiento personal"
        className="
          rounded-3xl object-cover
          w-full max-w-3xl
        "
      />

      {/* Card superpuesta */}
      <div
        className="
          absolute lg:static lg:ml-[-120px]
          -bottom-70 lg:bottom-auto
          w-[90%] max-w-sm lg:max-w-none
          bg-linear-to-bl from-zinc-950 via-black/50 to-zinc-950
          backdrop-blur-sm
          p-8 rounded-2xl border border-white/10
          shadow-xl shadow-black
          hover:scale-102 transition duration-300
        "
      >
         <Dumbbell className="text-amber-700 mb-4" size={32} />
        <h3 className="md:text-3xl text-2xl font-bold text-white mb-3">
          Entrená con propósito
        </h3>

        <div className="h-[3px] w-12 bg-amber-700 rounded-full mb-5"></div>

        <p className="text-zinc-300 leading-relaxed md:text-md text-sm">
          Mi asesoría se adapta a tu nivel, tu ritmo y tu vida real. Te explico cómo
          entrenar con criterio y progresar sin frustrarte. Todo con un enfoque práctico,
          simple y pensado para sostenerse en el tiempo.
        </p>
      </div>
    </div>

    {/* --- BLOQUE 2: inverso, misma estética --- */}
    <div className="relative flex flex-col lg:flex-row items-center mt-50 md:mb-0 mb-80 md:mt-0 justify-center">

      {/* Card superpuesta (izquierda) */}
      <div
        className="
          absolute lg:static lg:mr-[-120px]
          -bottom-70 lg:bottom-auto
          w-[90%] max-w-sm lg:max-w-none
          bg-linear-to-br from-zinc-950 via-black/30 to-zinc-950 backdrop-blur-sm
          p-8 rounded-2xl border border-white/10
          order-2 lg:order-1 shadow-xl shadow-black
          hover:scale-102 transition duration-300
        "
      >
         <HandHelping className="text-amber-700 mb-4" size={32} />
        <h3 className="md:text-3xl text-2xl font-bold text-white mb-3">
          Acompañamiento real
        </h3>

        <div className="h-[3px] w-12 bg-amber-700 rounded-full mb-5"></div>

        <p className="text-zinc-300 leading-relaxed md:text-md text-sm">
          Te acompaño en cada sesión para ajustar, corregir y guiar. No se trata solo
          de hacer ejercicios: es entender el por qué y aprender a moverte con seguridad,
          confianza y criterio.
        </p>
      </div>

      {/* Imagen */}
      <img
        src={image_about_2}
        alt="Entrenamiento personalizado"
        className="
          rounded-3xl object-cover
          w-full max-w-3xl order-1 lg:order-2
        "
      />
    </div>
  </div>
</section>
  )
}

export default About
