import { Helmet } from "react-helmet";
import Hero from "../composants/hero/Hero";
import Services from "../composants/services/Services";
import Projets from "../composants/projets/Projets";
import Methode from "../composants/methode/Methode";
import About from "../composants/about/About";
import Contact from "./Contact";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hicham Zouit - Création de sites web à Marseille</title>
        <meta
          name="description"
          content="Création de sites vitrines, refonte et applications web sur mesure pour entreprises, associations et indépendants. Design soigné, référencement et performance. Demandez votre devis."
        />
      </Helmet>
      <Hero />
      <Services />
      <Projets />
      <Methode />
      <About />
      <Contact />
    </>
  );
};
