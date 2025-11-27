import { useState } from "react";
import { Spinner } from "@material-tailwind/react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // success | error | sending

  const [loading, setloading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Envoi en cours...");
    setloading(true);
    document.body.style.overflow = "hidden";

    const formData = new FormData(event.target);
    console.log(formData);

    formData.append("access_key", import.meta.env.VITE_API_MAIL);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message envoyé !");
      setloading(false);
      document.body.style.overflow = "";
      event.target.reset();
    } else {
      setStatus("error");
      setResult("Une erreur est survenue.");
      setloading(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-[999]">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-gray-700 rounded-full animate-spin"></div>
        </div>
      )}
      <form
        onSubmit={onSubmit}
        method="POST"
        className="space-y-6 w-full mb-10 lg:w-1/2"
      >
        <div className="w-full flex flex-col items-start">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Nom
          </label>
          <input
            required
            type="text"
            id="name"
            name="Nom"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Téléphone
          </label>
          <input
            required
            type="number"
            id="phone"
            name="Téléphone"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            required
            type="email"
            id="Email"
            name="email"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
            placeholder="Votre message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-4 rounded-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-5">
              <Spinner className="text-purple-400" />
              Chargement en cour...
            </div>
          ) : (
            <>Envoyez le message</>
          )}
        </button>
        {result && (
          <>
            <p
              className={`text-center mt-4 font-semibold ${
                status === "success"
                  ? "text-green-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-blue-400"
              }`}
            >
              {result}
            </p>
          </>
        )}
      </form>
    </>
  );
}
