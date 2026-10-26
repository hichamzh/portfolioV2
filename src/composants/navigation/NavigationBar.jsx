import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const liens = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#a-propos", label: "À propos" },
];

export const NavigationBar = () => {
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  const fermer = () => setOuvert(false);

  return (
    <header className="sticky top-0 z-50 border-b border-craie/10 bg-abysse text-craie">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link to="/" onClick={fermer} className="font-display text-xl font-bold">
          Hicham Zouit
        </Link>

        <button
          type="button"
          className="relative z-[60] lg:hidden"
          onClick={() => setOuvert(!ouvert)}
          aria-expanded={ouvert}
          aria-controls="menu-principal"
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {ouvert ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul
          id="menu-principal"
          className={`${
            ouvert ? "flex" : "hidden"
          } fixed inset-0 z-50 flex-col items-center justify-center gap-8 bg-abysse text-2xl lg:static lg:z-auto lg:flex lg:flex-row lg:gap-8 lg:bg-transparent lg:text-base`}
        >
          {liens.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={fermer}
                className="text-craie/80 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={fermer}
              className="rounded-lg bg-soleil px-5 py-2.5 font-semibold text-abysse transition-colors hover:bg-white"
            >
              Demander un devis
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
