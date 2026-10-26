import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-abysse px-6 py-10 text-craie/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-craie">
            Hicham Zouit
          </p>
          <p className="mt-1 text-sm">
            Création de sites web à Marseille. © {new Date().getFullYear()}, tous
            droits réservés.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/hichamzh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://fr.linkedin.com/in/hicham-zouit-2a46701b9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};
