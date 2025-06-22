import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-green-100">MARMO</h2>
          <p className="text-green-100">
            MARMO, Mar Moçambique.<br />
            Respirando o Oceano & Supirando Biodiversidade!
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold uppercase text-green-200">Informações</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:underline text-green-100 hover:text-white">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-green-100 hover:text-white">
                Contacte-nos
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline text-green-100 hover:text-white">
                Termos e condições
              </Link>
              <li>
              <Link to="/politic" className="hover:underline text-green-100 hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold uppercase text-green-200">Localização</h3>
          <ul className="space-y-1 text-green-100">
            <li>Norte</li>
            <li>Centro</li>
            <li>Sul</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold uppercase text-green-200">Redes Sociais</h3>
          <ul className="space-y-1 flex gap-4">
            <li>
              <a
                href="https://www.facebook.com/"
                className="hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="inline mr-1" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="hover:text-pink-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="inline mr-1" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                className="hover:text-blue-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="inline mr-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-green-700" />

      <div className="text-center text-sm text-green-100">
        &copy; {currentYear} MARMO. Todos os direitos reservados.
      </div>
    </footer>
  );
};