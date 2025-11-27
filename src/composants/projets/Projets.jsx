import { Card_component } from "../projets-card/Card_component";

export default function Projets() {
  return (
    <>
      <section className="py-32 px-8 bg-black" id="projets">
        <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 rounded-full">
            <span className="text-sm font-semibold text-blue-400">PROJETS</span>
          </div>
          <h3 className="text-5xl font-bold mb-6">Mes réalisations</h3>
          <p className=" text-gray-400 text-lg max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences et ma
            passion pour le développement web
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-10 mt-10">
             <Card_component />
          </div>
        </div>
      </section>
    </>
  );
}
