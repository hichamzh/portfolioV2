import React from "react";
import { Card_component } from "../composants/projets-card/Card_component";

export const Projets = () => {
  const projets = [
    {
      id: 1,
      name: "Météo App",
      content:
        "Une application météo dynamique développée en HTML, CSS et JavaScript, exploitant une API météo pour fournir des prévisions.",
      img: "/projets/meteoapp.jpg",
      link: "https://meteoappbyhicham.netlify.app/",
      github: "https://github.com/hichamzh/weather_app.git",
    },
    {
      id: 2,
      name: "Pokédex React Api",
      content:
        "Une application web qui permet de voir jusqu'a 99 pokémons grâce à une Api",
      img: "/projets/pokedex_react.webp",
      link: "https://pokedexreacthichamv1.netlify.app/",
      github: "https://github.com/hichamzh/portfolio_react_tailwind.git",
    },
    {
      id: 3,
      name: "Countries React Api",
      content:
        "Une application web qui permet de voir jusqu'a 250 Pays grâce à une Api",
      img: "/projets/countries_react.webp",
      link: "https://countriesreacthicham.netlify.app/",
      github: "https://github.com/hichamzh/Countries_api_react.git",
    },
    {
      id: 4,
      name: "Api de Jeux",
      content:
        "Une API REST construite avec Node.js pour récupérer des informations sur des jeux, pour les affichés dans mon projet React.",
      img: "/projets/api-game.png",
      link: "https://api-games-hicham.vercel.app/",
      github: "https://github.com/hichamzh/Api-games.git",
    },
  ];
  return (
    <>
      <main className="relative pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl tracking-tight sm:text-6xl lg:text-7xl text-white animate__animated animate__backInLeft">
              Découvrez <br />
              <span className="text-accent"> Mes Réalisations.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 animate__animated animate__backInUp">
              Découvrez une sélection de projets sur lesquels j'ai travaillé,
              mettant en avant mon apprentissage et ma passion pour le
              développement web.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center w-full pt-5 px-3  lg:grid-cols-2 2xl:grid-cols-3 ">
          <Card_component objets={projets}/>
        </div>
      </main>
    </>
  );
};
