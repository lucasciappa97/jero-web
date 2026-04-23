import "./globals.css";
import { Roboto } from 'next/font/google';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
    title: {
        template: "%s | Jerónimo Ciapparelli",
        default: "Jerónimo Ciapparelli",
    }, 
    description: "Transforma tu liderazgo y equipo. Soy Jerónimo Ciapparelli, experto en coaching ejecutivo para empresas y reinvención. Descubre mi libro, podcasts, cursos y mas...",
  openGraph: {
    title: 'Jeronimo Ciapparelli',
    description: 'Redefiní el rumbo de tu carrera. Creá tu nueva identidad. Empezá a diseñar la transición profesional que te permita vivir la vida que realmente deseas',
    url: 'https://www.jeronimociapparelli.com/',
    siteName: 'Jeronimo Ciapparelli',
    images: [
      {
        url: 'og/home.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeronimo Ciapparelli',
    description: 'Redefiní el rumbo de tu carrera. Creá tu nueva identidad.',
    images: ['og/home.png'],
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body
                className={`${roboto.variable} antialiased text-gray-900 min-h-screen flex flex-col bg-background-dark`}
            >
                <Header />
                <main className={`flex flex-col bg-white px-4 sm:px-6 lg:px-8 mt-[12rem]`}>
                    <div className="max-w-screen-2xl mx-auto w-full">{children}</div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
