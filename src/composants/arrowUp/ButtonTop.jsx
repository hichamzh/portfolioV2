import { useCallback, useEffect, useState } from "react";

export function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ViewButtonTop = useCallback(() => {
    const scrollThreshold = 300; // Hauteur minimale pour afficher le bouton
    const scrolled = window.scrollY; // Position actuelle de scroll
    setIsVisible(scrolled > scrollThreshold); // Afficher ou masquer le bouton
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", ViewButtonTop, { passive: true });
    return () => {
      window.removeEventListener("scroll", ViewButtonTop); // Nettoyer l'écouteur
    };
  }, [ViewButtonTop]);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`w-16 h-16 bg-gradient-to-t from-blue-400 via-purple-600 to-pink-500 
        rounded-full fixed bottom-10 md:bottom-20 right-10 grid place-items-center
        transition-all duration-300 ease-linear z-[99]
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#fff"
        >
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </button>
    </>
  );
}
