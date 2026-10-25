const etapes = [
  {
    titre: "Échange",
    texte: "On définit vos besoins, votre public et ce que le site doit accomplir pour vous.",
  },
  {
    titre: "Maquette",
    texte: "Je vous montre la structure et le design avant d'écrire la moindre ligne de code.",
  },
  {
    titre: "Développement",
    texte: "Un site rapide, lisible sur tous les écrans et préparé pour le référencement.",
  },
  {
    titre: "Mise en ligne",
    texte: "Hébergement, nom de domaine, puis un suivi pour les ajustements après livraison.",
  },
];

export default function Methode() {
  return (
    <section id="methode" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
          Comment se déroule un projet
        </h2>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-calcaire sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((e, i) => (
            <li key={e.titre} className="bg-craie p-8">
              <span className="font-display text-5xl font-bold text-mer/25">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl">{e.titre}</h3>
              <p className="mt-3 leading-relaxed text-encre/70">{e.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
