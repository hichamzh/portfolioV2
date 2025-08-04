import React from "react";

export const TimeLine = () => {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-10">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black text-accent">
              BAC PRO COMMERCE
            </div>
            J'ai obtenu mon Bac Commerce avec mention bien. Cette étape a marqué
            le début de mon intérêt pour les métiers du commerce et la
            communication avec les clients.
          </div>
          <hr className="bg-accent" />
        </li>
        <li>
          <hr className="bg-accent" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black text-accent">BTS NDRC</div>
            J'ai obtenu mon BTS Négociation et Digitalisation de la Relation
            Client (NDRC). Durant cette période, j'ai acquis de solides
            compétences en commerce, tout en développant des sites basiques avec
            WordPress et PrestaShop.
          </div>
          <hr className="bg-accent" />
        </li>
        <li>
          <hr className="bg-accent" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black text-accent">
              Formation Développeur Web
            </div>
            J'ai suivi une formation intensive en développement web avec Simplon
            à Marseille. Cette formation m'a permis d'obtenir un diplôme reconnu
            par l'État, équivalent à un Bac+2/3.
          </div>
          <hr className="bg-accent" />
        </li>
        <li>
          <hr className="bg-accent" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black text-accent">Interim</div>
            Malgré les exigences d'expérience, j'ai dû travailler ailleurs pour
            subvenir aux besoins de ma famille, tout en continuant à coder et à
            apprendre pour préparer mon avenir.
          </div>
        </li>
      </ul>
    </>
  );
};
