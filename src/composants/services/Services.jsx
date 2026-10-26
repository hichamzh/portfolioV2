import { Globe, RefreshCw, LayoutDashboard, Search, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Site vitrine",
    text: "Présentez votre activité, vos horaires, vos tarifs et vos coordonnées sur un site clair qui inspire confiance dès la première visite.",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site",
    text: "Votre site est daté, lent ou difficile à lire sur téléphone ? Je le reprends, le modernise et le remets au niveau de votre activité.",
  },
  {
    icon: LayoutDashboard,
    title: "Application web sur mesure",
    text: "Réservation, espace membres, tableau de bord : un outil adapté à votre façon de travailler, pas l'inverse.",
  },
  {
    icon: Search,
    title: "Référencement et performance",
    text: "Structure, balises, vitesse de chargement : les bases pour apparaître sur Google quand on vous cherche.",
  },
  {
    icon: Rocket,
    title: "Mise en ligne et suivi",
    text: "Nom de domaine, hébergement, formulaire de contact, puis mises à jour et corrections après la livraison.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Ce que je peux faire pour vous
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-encre/70">
            Un site, c'est d'abord un outil pour que vos clients, vos adhérents
            ou vos familles vous trouvent et vous contactent.
          </p>
        </div>

        <ul className="divide-y divide-calcaire border-y border-calcaire">
          {services.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-6 py-8">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-abysse text-soleil">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-encre/70">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
