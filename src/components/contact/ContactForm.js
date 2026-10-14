"use client";

import { useState } from "react";
import Image from "next/image";

const inputClass =
  "w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

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
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-20 items-start">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-10 lg:w-2/5 lg:sticky lg:top-24">
          <div className="flex flex-col gap-5">
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Contacto
            </span>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-white antialiased">
              Contáctame
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full" />
            <p className="text-gray-400 leading-relaxed text-lg antialiased">
              Enviá una consulta y te respondo a la brevedad.
            </p>
            <div className="hidden sm:block sm:w-32 h-32 relative">
              <Image
                src="/icons/flecha-carta-blanco.png"
                alt="Fondo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Columna derecha — Formulario */}
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-gray-400 text-xs uppercase tracking-widest font-medium"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-gray-400 text-xs uppercase tracking-widest font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="asunto"
                className="text-gray-400 text-xs uppercase tracking-widest font-medium"
              >
                Asunto
              </label>
              <select
                id="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="" disabled className="bg-gray-900">
                  Seleccioná una opción
                </option>
                <option value="Conferencia o keynote" className="bg-gray-900">
                  Conferencia o keynote
                </option>
                <option value="De espectador a creador" className="bg-gray-900">
                  De espectador a creador
                </option>
                <option
                  value="Consultoría organizacional"
                  className="bg-gray-900"
                >
                  Consultoría organizacional
                </option>
                <option value="Otro" className="bg-gray-900">
                  Otro
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-gray-400 text-xs uppercase tracking-widest font-medium"
              >
                Tu mensaje
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
                placeholder="¿En qué te puedo ayudar?"
                required
              />
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white text-base font-medium antialiased rounded-full shadow-lg transition-all duration-300 hover:bg-primary-light hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-fit"
              >
                <span>
                  {status === "loading" ? "Enviando..." : "Enviar consulta"}
                </span>
                {status !== "loading" && (
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm font-medium">
                  ✓ ¡Mensaje enviado con éxito! Te respondo a la brevedad.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-medium">
                  ✕ Ocurrió un error. Por favor intentá de nuevo.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
