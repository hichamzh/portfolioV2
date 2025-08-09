import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card_component } from "../composants/projets-card/Card_component";
import projet_json from "../data-json/projets.json"

export const Projets = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    const fetchProjet = async () => {
      try {
        const reponse = await axios.get(
          "https://portfolio-directus-anqp.onrender.com/items/projet"
        );
        // const reponse = await axios.get('http://localhost:8055/items/projet')
        setProjets(reponse.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };
    fetchProjet();
  }, []);

  return (
    <>
      <main className="relative pt-32 bg-primary">
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
          <Card_component objets={projets} />
        </div>
      </main>
    </>
  );
};
