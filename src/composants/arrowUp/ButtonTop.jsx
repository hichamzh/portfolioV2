import React,{useEffect, useState} from 'react'

export function ButtonTop() {
    const [isVisible, setIsVisible] = useState(false);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const ViewButtonTop = () => {
      const scrollThreshold = 300; // Hauteur minimale pour afficher le bouton
      const scrolled = window.scrollY; // Position actuelle de scroll
      setIsVisible(scrolled > scrollThreshold); // Afficher ou masquer le bouton
    };
  
    useEffect(() => {
      window.addEventListener("scroll", ViewButtonTop);
      return () => {
        window.removeEventListener("scroll", ViewButtonTop); // Nettoyer l'écouteur
      };
    }, []);
  
    return (
      <>
        <button
          onClick={scrollToTop}
          className={`w-16 h-16 bg-accent rounded-full fixed bottom-10 md:bottom-20 right-10 grid place-items-center ${
            isVisible ? " translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          } transition-all duration-300 ease-linear z-[99]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M12 4l-8 8h5v8h6v-8h5z" />
          </svg>
        </button>
      </>
    );
  }