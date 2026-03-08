"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "",
    message: "",
  });

  // Estado para manejar el feedback visual (cargando, éxito, error)
  const [status, setStatus] = useState("idle");

  // Actualiza el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Función que se ejecuta al enviar
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", asunto: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section>
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark">
        <div className="sm:flex sm:justify-center gap-3 px-6 pt-56 pb-10 rounded-xl">
          <div className="hidden sm:block sm:w-56 h-28 relative">
            <Image
              src="/icons/flecha-rulo-blanca.svg"
              alt="Fondo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-8 min-h-[300px] text-gray-100">
            <h2 className="text-3xl sm:text-4xl">Contáctame</h2>
            <p className="text-xl font-light">
              Envía una consulta y me pondré en contacto cuanto antes.
            </p>

            <div className="py-4 w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block mb-2 text-sm font-medium">Asunto</label>
                  <select
                    id="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="transicion">TRANSICIÓN DE CARRERA</option>
                    <option value="equipos">EQUIPOS DE ALTA PERFORMANCE</option>
                    <option value="otro">OTRO</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Tu mensaje</label>
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="En qué te puedo ayudar..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg border border-1 border-primary sm:w-fit hover:bg-primary transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Enviando..." : "Enviar consulta"}
                </button>

                {/* Mensajes de estado */}
                {status === "success" && <p className="text-green-500 font-medium">¡Mensaje enviado con éxito!</p>}
                {status === "error" && <p className="text-red-500 font-medium">Ocurrió un error. Inténtalo de nuevo.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}