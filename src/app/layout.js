import "./globals.css";
import { Roboto } from 'next/font/google';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['400', '700'], // Selecciona los pesos que necesites
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto', // Definimos la variable CSS
});

export const metadata = {
    title: {
        template: "%s | Jerónimo Ciapparelli",
        default: "Jerónimo Ciapparelli",
    },
    description: "Transforma tu liderazgo y equipo. Soy Jerónimo Ciapparelli, experto en coaching ejecutivo para empresas y reinvención. Descubre mi libro, podcasts, cursos y mas...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body
                className={`${roboto.variable} antialiased text-gray-900 min-h-screen flex flex-col`}
            >
                <Header />
                <main className={`flex flex-col bg-white px-4 sm:px-6 lg:px-8`}>
                    <div className="max-w-screen-2xl mx-auto w-full">{children}</div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
