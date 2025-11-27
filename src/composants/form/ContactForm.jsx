import { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // success | error | sending

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_API_MAIL);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message envoyé !");
      event.target.reset();
    } else {
      setStatus("error");
      setResult("Une erreur est survenue.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6 w-full mb-10 lg:w-1/2">
        <div className="w-full flex flex-col items-start">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Téléphone
          </label>
          <input
            type="number"
            id="phone"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            rows="5"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
            placeholder="Votre message..."
          ></textarea>
        </div>

        <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-4 rounded-lg">Envoyez le message</button>
      </form>
    </>
  );
}
