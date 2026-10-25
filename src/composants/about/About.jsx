import { FaReact, FaGithub, FaJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import outils from "../../data-json/outils.json";

const icons = { FaReact, FaGithub, FaJs, RiTailwindCssFill, RiNextjsFill, SiPostgresql };

export default function About() {
  return (
    <section id="a-propos" className="bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <img
          src="/dev.png"
          alt="Poste de travail avec deux écrans affichant du code"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover grayscale"
        />
        <div>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Un seul interlocuteur, du premier échange à la mise en ligne
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-encre/70">
            Je m'appelle Hicham, je suis développeur web à Marseille. Je crée
            des sites pour des entreprises, des associations et des
            indépendants qui veulent une présence en ligne claire, sans jargon
            ni intermédiaire.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-encre/70">
            Vous parlez directement à la personne qui conçoit et développe votre
            site.
          </p>

          <h3 className="mt-10 text-lg">Outils que j'utilise</h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {outils.map((o) => {
              const Icon = icons[o.icon];
              return (
                <li key={o.id} className="flex items-center gap-2 text-encre/80">
                  <Icon size={20} className="text-mer" aria-hidden="true" />
                  {o.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
