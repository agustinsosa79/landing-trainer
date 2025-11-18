import { useState } from "react";
import { Award } from "lucide-react";
import certificado_1 from '../../assets/certificado_1.png'
import certificado_2 from '../../assets/certificado_2.png'

import foto_1 from '../../assets/foto_1.jpeg'
import foto_2 from '../../assets/foto_2.jpeg'

const Me = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const certs = [
    { src: certificado_1, label: "GualdaTraining - Certificado 2024" },
    { src: certificado_2, label: "Técnica en ejercicios compuestos" },
  ];

  const openPreview = (src: string) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  return (
    <section className="relative py-20 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* === TEXTO PRINCIPAL === */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl italic md:text-4xl font-semibold text-white tracking-tight">
            Sobre mí
          </h2>

          <p className="mt-4 text-zinc-300 md:text-base text-sm max-w-2xl leading-relaxed">
  Entreno hace más de cuatro años y, aunque hoy el gimnasio es una parte clave de mi vida,
  no siempre fue así. Arranqué como cualquiera: sin saber por dónde empezar, frustrándome,
  probando rutinas que no me servían y sintiendo que no avanzaba. Pero algo adentro mío
  me pedía cambiar, sentirme más fuerte y seguro conmigo mismo.
  <br /><br />
  Con el tiempo entendí que entrenar no es solo levantar peso: es disciplina, es aprender
  a conocerte y es construir una versión tuya que te haga sentir orgulloso. Ahí fue cuando
  decidí formarme en <strong>GualdaTraining</strong>, para dejar de entrenar “a ojo”
  y empezar a entender realmente cómo funciona el cuerpo, el progreso y los procesos.
  <br /><br />
  Hoy uso ese conocimiento para ayudar a personas que están en el mismo lugar donde
  yo estuve: con ganas de cambiar su realidad, pero sin saber por dónde arrancar o cómo
  sostenerlo en el tiempo. Mi enfoque es simple: entrenar de forma inteligente, con un plan
  que se adapte a tu nivel, a tu vida y a tus objetivos reales, sin mentiras ni promesas
  imposibles.
  <br /><br />
  Si estás buscando dar el primer paso o si querés volver a sentirte bien con vos mismo,
  estoy acá para acompañarte en ese proceso.
</p>

          <div className="mt-6 space-y-4 max-w-2xl md:text-base text-sm text-zinc-300">
            <p>
              Lo que aprendí en mi formación me dio herramientas prácticas para trabajar con
              personas de distintos niveles. Gracias a eso puedo ayudarte a:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-zinc-400">
              <li>Mejorar tu técnica en ejercicios clave sin lastimarte.</li>
              <li>Armar una progresión que tenga sentido para tu nivel actual.</li>
              <li>Entrenar incluso si venís de molestias, sedentarismo o falta de ritmo.</li>
              <li>Organizar tu semana para que entrenar deje de ser un quilombo.</li>
            </ul>

            <p>
              Mi enfoque es simple: que entiendas lo que estás haciendo, que progreses sin
              frustrarte y que el entrenamiento encaje con tu vida, no al revés.
            </p>
          </div>

          

          {/* === CERTIFICADOS === */}
          <div className="mt-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-700 rounded-md">
                <Award className="w-5 h-5 text-black" />
              </div>
              <h3 className="md:text-lg text-2xl font-semibold text-white">Mis certificados</h3>
            </div>

            <p className="text-zinc-400 mt-3 md:text-base text-sm max-w-2xl">
              Una parte importante para mí es seguir aprendiendo. Estos son algunos de
              los cursos que hice y que uso todos los días con las personas que entreno.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3 max-w-xl">
              {certs.map((c, i) => (
                <button
                  key={i}
                  onClick={() => openPreview(c.src)}
                  className="overflow-hidden rounded-md border border-white/6"
                >
                  <img
                    src={c.src}
                    alt={c.label}
                    className="w-full h-24 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/certs/placeholder-cert.jpg";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* === FOTOS === */}
        <aside className="flex flex-col items-start gap-6">
          <button
            onClick={() => openPreview(foto_2)}
            className="w-56 h-90 rounded-2xl overflow-hidden border border-white/6"
          >
            <img
              src={foto_2}
              alt="Nazareno entrenando"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/img/placeholder-vertical-1.jpg";
              }}
            />
          </button>

          <button
            onClick={() => openPreview(foto_1)}
            className="w-56 h-90 rounded-2xl overflow-hidden border border-white/6"
          >
            <img
              src={foto_1}
              alt="Nazareno instruyendo"
              className="w-full h-full bottom-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "";
              }}
            />
          </button>

          <div className="w-56 text-start">
            <p className="text-sm text-zinc-300">
              Tengo 20 años, me formé en GualdaTraining y hoy acompaño a personas a entrenar
              de forma realista, progresiva y sin dolor.
            </p>
          </div>
        </aside>
      </div>

      {/* === MODAL PREVIEW === */}
      {previewSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6"
          onClick={closePreview}
        >
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 text-white text-lg"
          >
            ✕
          </button>

          <img
            src={previewSrc}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-md object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Me;
