"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ticking.current) return;

            ticking.current = true;
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollingDown = currentScrollY > lastScrollY.current;
                const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

                if (scrollDelta > 8) {
                    setVisible(!scrollingDown || currentScrollY < 80);
                    setAtTop(currentScrollY < 10);
                    lastScrollY.current = currentScrollY;
                }

                ticking.current = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50
                px-4 lg:px-8 py-3
                transition-all duration-300 ease-in-out
                ${atTop
                    ? "bg-transparent shadow-none"
                    : "bg-background-dark shadow-lg shadow-black/20"
                }
                ${visible ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo compact={!atTop} />
                <Navigation atTop={atTop} />
            </div>
        </header>
    );
}

