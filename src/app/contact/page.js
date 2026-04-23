import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contacto",
  description:
    "Consultas profesionales, entrevistas y oportunidades de consultoría. Completa el formulario y responderé a la brevedad.",

  openGraph: {
    title: "Contacto | Jerónimo Ciapparelli",
    description:
      "Consultas profesionales, entrevistas y oportunidades de consultoría. Completa el formulario y responderé a la brevedad.",
    url: "https://www.jeronimociapparelli.com/contact",
    siteName: "Jerónimo Ciapparelli",
    images: [
      {
        url: "og/contact.png",
        width: 1200,
        height: 630,
        alt: "Jerónimo Ciapparelli - Contacto",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Jerónimo Ciapparelli",
    description:
      "Con este libro, aprenderás a transitar el camino de la dependencia laboral hacia la autorrealización",
    images: ["og/contact.png"],
  },
};

export default function Page() {
  return <ContactForm />;
}
