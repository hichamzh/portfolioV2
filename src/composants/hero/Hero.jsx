import { Check } from "lucide-react";
import { BrowserFrame } from "../ui/BrowserFrame";

const atouts = [
  "Design sur mesure",
  "Référencement naturel",
  "Adapté au mobile",
  "Mise en ligne incluse",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-abysse text-craie">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(15,92,138,0.55),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-24">
        <div>
          <p className="entree mb-6 text-lg text-soleil" style={{ "--i": 0 }}>
            Hicham Zouit, création de sites web à Marseille
          </p>
          <h1
            className="entree text-[2.6rem] leading-[1.04] sm:text-6xl"
            style={{ "--i": 1 }}
          >
            Un site web clair, rapide et fait pour être trouvé.
          </h1>
          <p
            className="entree mt-7 max-w-xl text-lg leading-relaxed text-craie/75"
            style={{ "--i": 2 }}
          >
            Je conçois, développe et mets en ligne le site de votre entreprise,
            de votre association ou de votre activité. Vous échangez avec une
            seule personne, de la maquette à l'hébergement.
          </p>
          <div
            className="entree mt-9 flex flex-wrap items-center gap-4"
            style={{ "--i": 3 }}
          >
            <a
              href="#contact"
              className="rounded-lg bg-soleil px-7 py-3.5 font-semibold text-abysse transition-colors hover:bg-white"
            >
              Demander un devis
            </a>
            <a
              href="#realisations"
              className="rounded-lg border border-craie/30 px-7 py-3.5 font-medium text-craie transition-colors hover:border-craie"
            >
              Voir mes réalisations
            </a>
          </div>
        </div>

        <div className="entree relative pb-10 sm:pb-16" style={{ "--i": 4 }}>
          <BrowserFrame
            src="/projets/fclacastellane.webp"
            alt="Site du FC La Castellane réalisé pour le club"
            url="fclacastellane.vercel.app"
            priority
            className="w-[92%]"
          />
          <BrowserFrame
            src="/projets/ecole-lolivier.webp"
            alt="Site de l'école primaire privée l'Olivier"
            url="ecoleprimairepriveelolivier.fr"
            className="absolute bottom-0 right-0 w-[52%]"
          />
        </div>
      </div>

      <ul className="relative mx-auto grid max-w-6xl grid-cols-2 border-t border-craie/15 px-6 lg:grid-cols-4">
        {atouts.map((a) => (
          <li
            key={a}
            className="flex items-center gap-3 py-5 text-sm text-craie/85 lg:py-6"
          >
            <Check size={18} className="shrink-0 text-soleil" aria-hidden="true" />
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
