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
        <nav className="w-full flex items-center justify-between py-5 px-10">
          <Link to="/">
            <div className="btn btn-accent btn-sm md:btn-md lg:btn-lg">
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
               active ? "left-1/2 -translate-x-1/2 bg-primary" : "left-full"
             } top-1/2 transform -translate-y-1/2 flex flex-col pb-40 justify-center items-center lg:p-0 lg:bg-transparent lg:flex lg:flex-row lg:justify-normal lg:static lg:top-auto lg:left-auto lg:transform-none lg:w-auto lg:h-auto gap-8 text-xl font-medium transition-all ease-in`}
          >
            {active && (
              <Link to={"/"} onClick={handleCloseMenu}>
                <li className="cursor-pointer">Acceuil</li>
              </Link>
            )}
            <Link to={"about"} onClick={handleCloseMenu}>
              <li className="cursor-pointer">À propos de moi</li>
            </Link>
            <Link to={"projets"} onClick={handleCloseMenu}>
              <li className="cursor-pointer">Mes Projets</li>
            </Link>
            <Link to="/contact" onClick={handleCloseMenu}>
              <button className="btn btn-accent btn-md lg:btn-lg">
                Contactez-moi
              </button>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
