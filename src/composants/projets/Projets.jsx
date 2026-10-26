import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projets from "../../data-json/projets.json";
import { BrowserFrame } from "../ui/BrowserFrame";

export default function Projets() {
  return (
    <section id="realisations" className="bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
          Des sites déjà en ligne
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-encre/70">
          Deux projets réalisés pour des structures de Marseille, puis quelques
          projets personnels qui montrent ma façon de travailler.
        </p>

        <div className="mt-16 space-y-20">
          {projets.clients.map((p, i) => (
            <article
              key={p.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <BrowserFrame
                  src={p.image}
                  alt={p.alt}
                  url={p.link.replace("https://", "")}
                />
              </div>
              <div>
                <p className="text-mer">{p.type}</p>
                <h3 className="mt-2 text-3xl sm:text-4xl">{p.title}</h3>
                <p className="mt-5 max-w-md leading-relaxed text-encre/70">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-calcaire px-3 py-1 text-sm text-encre/70"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-mer underline-offset-4 hover:underline"
                >
                  Visiter le site
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">Projets personnels</h3>
          <ul className="mt-6 divide-y divide-calcaire border-y border-calcaire">
            {projets.personnels.map((p) => (
              <li
                key={p.id}
                className="grid gap-3 py-5 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center sm:gap-8"
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-xl font-bold hover:text-mer"
                >
                  {p.title}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <p className="text-encre/70">
                  {p.description}{" "}
                  <span className="text-encre/50">{p.stack.join(", ")}</span>
                </p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-encre/60 hover:text-encre"
                  aria-label={`Code source de ${p.title}`}
                >
                  <FaGithub aria-hidden="true" />
                  Code
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
