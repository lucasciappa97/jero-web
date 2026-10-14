"use client";
import { useState, useRef, useEffect, useCallback } from "react";

export default function VideoAcademy() {
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (modalOpen) {
      video.pause();
    } else if (isPlaying) {
      video.play().catch(() => {});
    }
  }, [modalOpen, isPlaying]);

  useEffect(() => {
    if (modalOpen && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {});
    }
  }, [modalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") closeModal(); };
    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen, closeModal]);

  return (
    <>
      {/* Video en mockup */}
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={togglePlay}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); togglePlay(); } }}
      >
        <video
          ref={videoRef}
          className="w-full h-64 object-cover"
          src="/videos/academy.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay controles — visible en hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 bg-black/30 ${isHovered ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        >
          {/* Play/Pause central */}
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg transition-transform duration-150 hover:scale-110">
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 5h3v14H6V5zm9 0h3v14h-3V5z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </div>
          {/* Expandir — esquina superior derecha */}
          <button
            className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-md transition-transform duration-150 hover:scale-110 hover:bg-white/30"
            onClick={(e) => { e.stopPropagation(); openModal(); }}
            aria-label="Expandir video"
            title="Ver en pantalla completa"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal expandido */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Video Academy expandido"
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f172a]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <div className="ml-3 h-5 rounded-full bg-white/10 flex items-center px-3">
                  <span className="text-white/40 text-xs">academyos.app</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-150"
                aria-label="Cerrar video"
                title="Cerrar (Esc)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <video
              ref={modalVideoRef}
              className="w-full aspect-video bg-black"
              src="/videos/academy.mp4"
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}

