import { useState } from "react";

const champ =
  "w-full rounded-lg border border-craie/20 bg-profond px-4 py-3 text-craie placeholder:text-craie/40 focus:border-soleil focus:outline-none";

export default function ContactForm() {
  const [etat, setEtat] = useState("repos"); // repos | envoi | ok | erreur

  const envoyer = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setEtat("envoi");

    const donnees = new FormData(form);
    donnees.append("access_key", import.meta.env.VITE_API_MAIL);
    donnees.append("subject", "Nouvelle demande de devis depuis le site");

    try {
      const reponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: donnees,
      });
      const data = await reponse.json();
      if (data.success) {
        setEtat("ok");
        form.reset();
      } else {
        setEtat("erreur");
      }
    } catch {
      setEtat("erreur");
    }
  };

  return (
    <form onSubmit={envoyer} className="space-y-5" noValidate={false}>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-medium">
            Nom
          </label>
          <input
            id="nom"
            name="Nom"
            type="text"
            required
            autoComplete="name"
            className={champ}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={champ}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tel" className="mb-2 block text-sm font-medium">
            Téléphone (facultatif)
          </label>
          <input
            id="tel"
            name="Téléphone"
            type="tel"
            autoComplete="tel"
            className={champ}
          />
        </div>
        <div>
          <label htmlFor="projet" className="mb-2 block text-sm font-medium">
            Type de projet
          </label>
          <select
            id="projet"
            name="Type de projet"
            defaultValue="Site vitrine"
            className={champ}
          >
            <option>Site vitrine</option>
            <option>Refonte de site</option>
            <option>Application web</option>
            <option>Autre demande</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Votre activité, ce que vous attendez du site, une échéance éventuelle…"
          className={`${champ} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="w-full rounded-lg bg-soleil px-7 py-3.5 font-semibold text-abysse transition-colors hover:bg-white disabled:opacity-60 sm:w-auto"
      >
        {etat === "envoi" ? "Envoi en cours" : "Envoyer ma demande"}
      </button>

      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {etat === "ok" && (
          <span className="text-emerald-300">
            Message envoyé. Je vous réponds personnellement.
          </span>
        )}
        {etat === "erreur" && (
          <span className="text-red-300">
            L'envoi a échoué. Réessayez ou écrivez-moi directement à
            hichamz.dev@gmail.com.
          </span>
        )}
      </p>
    </form>
  );
}
