import React from "react";
import { Link } from "react-router-dom";
import MagneticButton from "../composants/bundui/MagneticButton";

export const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <div class="absolute inset-0">
          <div class="relative h-full w-full bg-[#020617] [&>div]:absolute [&>div]:bottom-0 [&>div]:left-[-20%] [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            <div></div>
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl tracking-tight sm:text-6xl lg:text-7xl text-white animate__animated animate__backInLeft">
              Transformez vos idées en
              <span className="text-accent"> Réalité Digitale.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 animate__animated animate__backInRight">
              Je m'appelle
              <Link to={"about"}>
                <span className="text-accent underline mx-[2px]">
                  Hicham Zouit
                </span>
                ,
              </Link>
              développeur web débutant, passionné par la création de sites
              modernes et performants. À la recherche d'opportunités pour
              développer mes compétences et contribuer à des projets
              intéressants.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={"projets"}>
                <button className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:text-accent animate__animated animate__backInUp">
                  Découvrez Mes Projets
                </button>
              </Link>
              <Link to={"/contact"}>
                <MagneticButton>
                  <button className="rounded-lg border px-6 py-3 font-medium text-white hover:border-accent animate__animated animate__backInUp">
                    Contactez-moi
                  </button>
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
