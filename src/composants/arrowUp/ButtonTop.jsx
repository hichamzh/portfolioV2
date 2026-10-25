import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ButtonTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut de la page"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-abysse text-soleil shadow-lg ring-1 ring-craie/20 transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
