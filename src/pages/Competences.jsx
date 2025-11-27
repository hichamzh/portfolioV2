import { FaReact, FaGithub, FaJs } from "react-icons/fa"; // react, github, JS
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri"; // next, tailwind
import { VscVscode } from "react-icons/vsc"; // vscode
import { SiPostgresql } from "react-icons/si"; // sql

import outilsJson from "../data-json/outils.json";
import { color } from "framer-motion";

export default function Competences() {
  const icons = {
    FaReact,
    RiTailwindCssFill,
    RiNextjsFill,
    VscVscode,
    SiPostgresql,
    FaGithub,
    FaJs,
  };
  return (
    <>
      <section className="py-32 px-8 bg-[#0A0A0A]" id="mes-competences">
        <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-purple-500/10 rounded-full">
            <span className="text-sm font-semibold text-purple-400">
              COMPÉTENCES
            </span>
          </div>

          <h3 className="text-5xl font-bold mb-6">Technologies & Outils</h3>
          <p className=" text-gray-400 text-lg max-w-2xl mx-auto">
            Un ensemble de compétences techniques pour créer des solutions web
            complètes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
            {outilsJson.map((outil) => {
              const IconComponent = icons[outil.icon];
              return (
                  <div
                    key={outil.id}
                    style={ {borderColor: outil.color} }
                    className={`bg-[#1A1A1A] flex flex-col items-start p-8  gap-5 rounded-lg cursor-pointer border hover:-translate-y-4 transition-all duration-300`}
                  >
                    <i style={{backgroundColor: outil.color}} className="p-2 rounded-lg">
                    <IconComponent size={40} className="text-white"/>
                    </i>
                    <h4 className=" font-bold text-white text-xl">
                      {outil.title}
                    </h4>
                    <p className="text-start">{outil.desc}</p>
                  </div>
              );
            })}
            </div>
        </div>
      </section>
    </>
  );
}
