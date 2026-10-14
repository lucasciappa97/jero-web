import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
import Section4 from "@/components/about/Section4";

export const metadata = {
  title: 'Sobre mí',
  description: 'Speaker internacional, consultor de negocios y mentor en transiciones de carrera.',

  openGraph: {
    title: 'Sobre mí | Jerónimo Ciapparelli',
    description: 'Speaker internacional, consultor de negocios y mentor en transiciones de carrera.',
    url: 'https://www.jeronimociapparelli.com/about',
    siteName: 'Jerónimo Ciapparelli',
    images: [
      {
        url: 'og/about.png',
        width: 1200,
        height: 630,
        alt: 'Jerónimo Ciapparelli - Perfil profesional',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mí | Jerónimo Ciapparelli',
    description: 'Speaker internacional, consultor de negocios y mentor en transiciones de carrera.',
    images: ['og/about.png']
  },
};

export default function Page() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
    </div>
  );
}
