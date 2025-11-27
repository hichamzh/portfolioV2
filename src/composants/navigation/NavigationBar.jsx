import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

export const NavigationBar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [active]);

  const handleCloseMenu = () => {
    setActive(false);
  };

  return (
    <>
      <header>
        <nav className="w-full flex items-center justify-between py-4 px-10 border-b border-purple-500 bg-[#0C0C10]">
          <Link to="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hicham Zouit
            </div>
          </Link>
          <button
            className="menu-burger lg:hidden z-50 w-7 h-7"
            onClick={() => {
              setActive(!active);
            }}
          >
            {active ? (
              <FontAwesomeIcon icon={faXmark} className="w-full h-full" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-full h-full" />
            )}
          </button>

          <ul
            className={`group-links z-40
              
             fixed h-full w-full ${
               active ? "left-1/2 -translate-x-1/2 bg-black" : "left-full"
             } top-1/2 transform -translate-y-1/2 flex flex-col pb-40 justify-center items-center lg:p-0 lg:bg-transparent lg:flex lg:flex-row lg:justify-normal lg:static lg:top-auto lg:left-auto lg:transform-none lg:w-auto lg:h-auto gap-8 text-xl font-medium transition-all ease-in`}
          >
            {active && (
              <a to={"/"} onClick={handleCloseMenu}>
                <li className="cursor-pointer">Acceuil</li>
              </a>
            )}
            <a href="#about" onClick={handleCloseMenu}>
              <li className="cursor-pointer">À propos de moi</li>
            </a>
            <a href="#projets" onClick={handleCloseMenu}>
              <li className="cursor-pointer">Mes Projets</li>
            </a>
            <a href="#mes-competences" onClick={handleCloseMenu}>
              <li className="cursor-pointer">Mes compétences</li>
            </a>
            <a href="#contact" onClick={handleCloseMenu}>
              <span className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Contactez-moi
              </span>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};
