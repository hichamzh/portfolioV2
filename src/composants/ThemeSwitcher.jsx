import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "luxury");

  // Fonction pour changer le thème
  const toggleTheme = () => {
    const newTheme = theme === "corporate" ? "luxury" : "corporate";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Sauvegarde le thème dans le localStorage
  };

  return (
    <button
      className="btn btn-primary"
      onClick={toggleTheme}
    >
      {theme === "corporate" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeSwitcher;
