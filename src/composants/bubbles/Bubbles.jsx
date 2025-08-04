import React, { useEffect, useState } from "react";
import "./Bubbles.css"; // Importer le fichier CSS

const Bubble = ({ src, alt, size, top, left }) => {
  return (
    <div
      className="bubble"
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
      }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

const Bubbles = () => {
  const technologies = [
    { src: "/logo-techno/react.png", alt: "React", size: "80px" },
    { src: "/path/to/nodejs-logo.png", alt: "Node.js", size: "60px" },
    { src: "/path/to/tailwind-logo.png", alt: "Tailwind", size: "70px" },
    { src: "/path/to/css-logo.png", alt: "CSS", size: "50px" },
    { src: "/path/to/html-logo.png", alt: "HTML", size: "60px" },
  ];

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = technologies.map((tech) => {
      const size = parseInt(tech.size, 10); // Extraire la taille de la bulle (en pixels)
      const maxTop = 100 - size / 10; // Limite pour 'top' pour éviter que la bulle dépasse
      const maxLeft = 100 - size / 10; // Limite pour 'left' pour éviter que la bulle dépasse

      const randomTop = Math.random() * maxTop; // Position aléatoire pour 'top' (0 à 100% - taille)
      const randomLeft = Math.random() * maxLeft; // Position aléatoire pour 'left' (0 à 100% - taille)

      return {
        ...tech,
        top: `${randomTop}vh`,
        left: `${randomLeft}vw`,
      };
    });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="bubbles-container">
      {bubbles.map((tech, index) => (
        <Bubble
          key={index}
          src={tech.src}
          alt={tech.alt}
          size={tech.size}
          top={tech.top}
          left={tech.left}
        />
      ))}
    </div>
  );
};

export default Bubbles;
