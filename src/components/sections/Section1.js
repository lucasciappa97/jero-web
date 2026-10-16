import Image from "next/image";
import Brands from "../Brands";
import Link from "next/link";
import VideoAcademy from "../VideoAcademy";
import VideoCurso from "../VideoCurso";

export default function Section1() {
  return (
    <>
      <section id="jeronimo" className="mx-auto px-4 pb-28">
        <Brands />
        <div className="flex flex-col-reverse lg:flex-row min-h-[600px] items-center">
          <div className="w-full mt-10 lg:w-1/2 h-[300px] lg:h-[600px] relative">
            <Image
              src="/images/jero-naranja.jpg"
              alt="Fondo de la sección Hero"
              layout="fill"
              objectFit="contain"
              quality={75}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-full lg:w-1/2 p-3 lg:p-8">
            <h2 className="text-4xl mb-3 font-semibold leading-relaxed max-w-prose antialiased">
              Soy Jerónimo Ciapparelli
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose text-xl antialiased">
              Soy speaker, mentor y consultor especializado en transformación
              humana y organizacional. Desde hace más de una década acompaño a
              personas, líderes y empresas a enfrentar desafíos, desarrollar
              nuevas capacidades y transformar su manera de pensar, liderar y
              trabajar. Mi trabajo parte de una convicción: los cambios
              verdaderos no dependen solamente de lo que sucede a nuestro
              alrededor, sino de lo que decidimos hacer frente a ello. A través
              de conferencias, workshops, programas y experiencias de
              aprendizaje, ayudo a convertir esa decisión en acciones concretas.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 mt-6 border border-black text-black bg-transparent leading-relaxed max-w-prose text-lg antialiased rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 group"
            >
              <span>Contactame</span>
              <svg
                className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección: De Espectador a Creador */}
      <section id="personas" className="bg-background-dark text-gray-100 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-6">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            De Espectador a Creador
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug text-white antialiased">
            ¿Y si el problema no fuera todo lo que hacés, sino la forma en que estás viviendo?
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <p className="text-gray-300 leading-relaxed text-xl antialiased max-w-prose">
            Construiste una carrera, alcanzaste objetivos y asumiste responsabilidades.
          </p>
          <p className="text-gray-300 leading-relaxed text-xl antialiased max-w-prose">
            Pero quizás hoy te cuesta desconectarte, disfrutar de tu tiempo o dejar de pensar en el trabajo.
          </p>
          <p className="text-white font-medium leading-relaxed text-xl antialiased max-w-prose">
            No necesitás renunciar a lo que lograste.
            <br />
            Necesitás revisar las reglas con las que venís viviendo.
          </p>
          <p className="text-gray-300 leading-relaxed text-xl antialiased max-w-prose">
            <span className="text-primary font-semibold">De Espectador a Creador</span> es un programa para personas que quieren recuperar el control de sus decisiones y construir una vida que puedan disfrutar, sin abandonar sus ambiciones.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 shadow-lg">
            {/* Texto principal */}
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-primary uppercase tracking-widest text-xs font-semibold">
                Primer paso
              </span>
              <p className="text-white font-semibold text-xl leading-snug antialiased">
                Agendá tu sesión de claridad gratuita
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Una conversación sin compromiso para entender dónde estás y hacia dónde querés ir.
              </p>
            </div>

            {/* Botón */}
            <Link
              href="https://calendly.com/jeronimociapparelli/sesion-de-claridad-estrategia-personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-base antialiased rounded-full shadow-md transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-primary/40 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 group"
            >
              <span>Agendá acá</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <VideoCurso />

      {/* Sección: Empresas */}
      <section id="empresas" className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mx-auto px-4 py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-6">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Empresas
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug text-primary-dark antialiased">
            Transformación para organizaciones
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <p className="text-gray-700 leading-relaxed text-xl antialiased max-w-prose">
            Las empresas evolucionan cuando evolucionan las personas que las integran.
          </p>
          <p className="text-gray-700 leading-relaxed text-xl antialiased max-w-prose">
            Acompaño a organizaciones a desarrollar capacidades, transformar comportamientos y preparar a sus equipos para nuevos desafíos.
          </p>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6">

            {/* Tarjeta 01 — Conferencias */}
            <div className="group relative flex flex-col justify-between rounded-2xl bg-background-dark p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(16,26,60,0.4)]">
              {/* Línea de acento superior */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary-light to-transparent rounded-t-2xl" />
              {/* Número decorativo */}
              <span className="absolute bottom-4 right-6 text-[7rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none">01</span>
              {/* Contenido */}
              <div className="flex flex-col gap-5 z-10">
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Conferencias</span>
                <h3 className="text-2xl font-semibold text-white antialiased leading-snug">
                  Charlas que mueven perspectivas
                </h3>
                <div className="w-8 h-px bg-white/20" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Charlas que desafían perspectivas, movilizan conversaciones y generan nuevas formas de pensar y actuar.
                </p>
              </div>
            </div>

            {/* Tarjeta 02 — Workshops y Programas */}
            <div className="group relative flex flex-col justify-between rounded-2xl bg-background-dark p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(16,26,60,0.4)]">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary-light to-transparent rounded-t-2xl" />
              <span className="absolute bottom-4 right-6 text-[7rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none">02</span>
              <div className="flex flex-col gap-5 z-10">
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Workshops y Programas</span>
                <h3 className="text-2xl font-semibold text-white antialiased leading-snug">
                  Experiencias para el cambio real
                </h3>
                <div className="w-8 h-px bg-white/20" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Experiencias prácticas para desarrollar liderazgo, mentalidad de cambio, comunicación y nuevas formas de trabajar.
                </p>
              </div>
            </div>

            {/* Tarjeta 03 — Academy */}
            <div className="group relative flex flex-col justify-between rounded-2xl bg-background-dark p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(16,26,60,0.4)]">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary-light to-transparent rounded-t-2xl" />
              <span className="absolute bottom-4 right-6 text-[7rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none">03</span>
              <div className="flex flex-col gap-5 z-10">
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Academy</span>
                <h3 className="text-2xl font-semibold text-white antialiased leading-snug">
                  Aprendizaje continuo para equipos
                </h3>
                <div className="w-8 h-px bg-white/20" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Una solución de aprendizaje corporativo que combina tecnología, contenidos y experiencias para desarrollar capacidades de manera continua.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección: Academy destacada */}
      <section id="academy" className="bg-background-dark text-gray-100 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden px-4 py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Columna izquierda — Texto */}
          <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Academy
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-snug text-white antialiased">
              Aprendizaje corporativo continuo, potenciado por inteligencia artificial.
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-gray-300 leading-relaxed text-xl antialiased">
              Una solución para empresas que buscan desarrollar las capacidades de sus equipos de manera continua.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg antialiased">
              Academy integra rutas de aprendizaje, contenidos digitales, microlearning, evaluaciones y seguimiento del progreso todo en un mismo lugar, diseñado para que el desarrollo no sea un evento aislado, sino un hábito sostenido.
            </p>
            <div className="flex flex-col gap-3 w-full mt-2">
              {[
                { icon: "🗺️", label: "Rutas de aprendizaje personalizadas" },
                { icon: "⚡", label: "Microlearning y contenidos digitales" },
                { icon: "📊", label: "Evaluaciones y seguimiento del progreso" },
                { icon: "🏢", label: "Marca blanca para tu organización" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-base flex-shrink-0">{icon}</span>
                  <p className="text-gray-200 text-base antialiased">{label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about#academy"
              className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-primary text-white text-lg antialiased rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary-light hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 group"
            >
              <span>Descubrí Academy</span>
              <svg className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Columna derecha — Mockups de pantalla */}
          {/* IMPORTANTE: Cuando tengas las capturas reales de AcademyOS, reemplazá cada bloque  */}
          {/* <div className="w-full h-52 ..."> por <div className="relative w-full h-52"><Image src="/images/academy-screenshot-1.png" layout="fill" objectFit="cover" /></div> */}
          <div className="relative w-full lg:w-1/2 flex flex-col gap-5">

            {/* Mockup principal — Dashboard */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-ternary-dark">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <div className="ml-3 flex-1 h-5 rounded-full bg-white/10 flex items-center px-3">
                                </div>
              </div>
              <VideoAcademy />
            </div>

            {/* Stats / highlights debajo del video */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-start gap-3">
                <span className="text-2xl mt-0.5">📈</span>
                <div>
                  <p className="text-white font-semibold text-sm antialiased">Progreso en tiempo real</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">Seguimiento individual y por equipo desde el primer día.</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-start gap-3">
                <span className="text-2xl mt-0.5">🎯</span>
                <div>
                  <p className="text-white font-semibold text-sm antialiased">Rutas personalizadas</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">Contenido adaptado al rol y los objetivos de cada persona.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
