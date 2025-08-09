import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const FormContact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [color, setColor] = useState("success");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_kii1kqo",
        "template_h3vo3qf",
        form.current,
        "3wrWyCDmSy0nsxKTA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Votre message a été envoyé avec succès !");
          setColor("success");
          e.target.reset(); // Réinitialise le formulaire
        },
        (error) => {
          console.log(error.text);
          console.log(error);

          setSuccessMessage("Une erreur est survenue. Veuillez réessayer.");
          setColor("error");
        }
      )
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };
  return (
    <>
      {loading && (
        <div className="bg-black opacity-50 w-screen h-screen z-[99] fixed top-0 left-0 flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-white"></span>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto px-2">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-primary border border-accent text-white text-sm rounded-md focus:ring-black focus:border-black block w-full p-4"
            placeholder="Nom Prénom"
            required
          />
          
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-primary border border-accent text-white text-sm rounded-md focus:ring-black focus:border-black block w-full p-4"
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Votre Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Bonjour..."
            className="block p-4 w-full text-sm bg-primary border-accent border rounded-md"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-accent w-full">Envoyer</button>
        </div>
      </form>

      {successMessage && (
        <div
          role="alert"
          className={`alert ${
            color === "success" ? "alert-success" : "alert-error"
          } z-50 max-w-72 fixed top-20 right-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                color === "success"
                  ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            />
          </svg>
          <span>{successMessage}</span>
        </div>
      )}
    </>
  );
};
