import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../composants/form/ContactForm";

const infos = [
  {
    icon: Mail,
    label: "Email",
    value: "hichamz.dev@gmail.com",
    href: "mailto:hichamz.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 27 94 51 92",
    href: "tel:+33627945192",
  },
  { icon: MapPin, label: "Localisation", value: "Marseille" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-abysse px-6 py-24 text-craie lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-craie/75">
            Décrivez votre besoin en quelques lignes. Je vous réponds
            personnellement avec une première proposition.
          </p>

          <ul className="mt-10 space-y-6">
            {infos.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-profond text-soleil">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-craie/60">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-soleil">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
