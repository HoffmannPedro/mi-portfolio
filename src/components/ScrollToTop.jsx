import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Función que detecta cuánto scroll se hizo
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-10 right-10 z-50">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <ChevronUpIcon className="w-6 h-6" />
            </button>
        </div>
    );
}