import React from "react";
import MagneticButton from "../composants/bundui/MagneticButton";
import { TimeLine } from "../composants/about/TimeLine";


export const About = () => {
  return (
    <>
      <div className="relative h-full bg-primary">
        <div className="h-screen border-b-2 border-white">
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
            <div className="max-w-3xl text-center">
              <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white animate__animated animate__backInLeft">
                À propos de moi
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 animate__animated animate__backInRight">
                Je suis <span className="text-accent">Hicham Zouit</span>,
                aspirant développeur web à la recherche d'opportunités pour{" "}
                <span className="text-accent">acquérir de l'expérience.</span>{" "}
                Passionné par la création de sites modernes et fonctionnels, je
                souhaite perfectionner mes compétences tout en contribuant à des
                projets intéressants.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a href="cv/cv-hicham.pdf" download>
                  <button className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:text-accent animate__animated animate__backInUp">
                    Télécharger mon cv
                  </button>
                </a>
                  <a href='#timeline'>
                <MagneticButton>
                    <button className="rounded-lg border px-6 py-3 font-medium text-white hover:border-accent animate__animated animate__backInUp">
                    Voir Plus
                    </button>
                </MagneticButton>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full pt-20" id="timeline">
            <h2 className="text-center mb-14 text-3xl font-bold tracking-tight sm:text-6xl lg:text-6xl text-white">Mon parcours</h2>
          <TimeLine />
        </div>
      </div>
    </>
  );
};
