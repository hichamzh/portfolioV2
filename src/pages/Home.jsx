import { Link } from "react-router-dom";
import MagneticButton from "../composants/bundui/MagneticButton";
import About from "../composants/about/About";
import Projets from "../composants/projets/Projets";
import Competences from "./Competences";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio Hicham Zouit - Développeur Web</title>
        <meta
          name="description"
          content="En recherche d'alternance, développeur web front-end et fullstack. Découvrez mes projets et compétences."
        />
      </Helmet>
      
      <div className="relative h-screen overflow-x-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full overflow-hidden bg-[#020617] [&>div]:absolute [&>div]:bottom-0 [&>div]:left-[-20%] [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            <div></div>
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl tracking-tight sm:text-6xl lg:text-7xl text-white animate__animated animate__backInLeft">
              Transformez vos idées en
              <span className="block pb-2 bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Réalité Digitale.
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 animate__animated animate__backInRight">
              Je m'appelle
              <Link to={"about"}>
                <span className="text-purple-600 underline mx-[2px]">
                  Hicham Zouit
                </span>
                ,
              </Link>
              développeur web débutant, passionné par la création de sites
              modernes et performants. À la recherche d'opportunités pour
              développer mes compétences et contribuer à des projets
              intéressants.
            </p>
            <div className="flex flex-wrap justify-center gap-4 ">
              <a href="#projets">
                <div className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  Découvrez Mes Projets
                </div>
              </a>
              <a href="#contact">
                <MagneticButton>
                  <button className="rounded-lg border px-8 py-4 font-medium text-white hover:border-purple-600 animate__animated animate__backInUp">
                    Contactez-moi
                  </button>
                </MagneticButton>
              </a>
            </div>
            <div className="socials flex justify-center gap-4 mt-5">
              <a
                href="https://github.com/hichamzh/"
                target="_blank"
                className="github w-12 h-12 flex items-center justify-center rounded-full bg-dark-700 border border-dark-600 hover:border-purple-500 hover:bg-dark-600 transition-all duration-300"
              >
                <i className="text-xl">
                  <svg
                    className="svg-inline--fa fa-github"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/hicham-zouit/"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-700 border border-dark-600 hover:border-purple-500 hover:bg-dark-600 transition-all duration-300"
              >
                <i className="text-xl" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-linkedin"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projets />
      <Competences />
      <Contact />
    </>
  );
};
