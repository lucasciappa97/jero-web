"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        // Pequeño delay para que la página termine de renderizar
        const timeout = setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
