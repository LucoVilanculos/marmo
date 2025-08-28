import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, HeartHandshake } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 text-white px-4 py-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-base items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dtopurogz/image/upload/v1753116471/01_MARMO_LOGOTIPO_PNG.png_xnnek0.png"
              alt="MARMO logo"
              className="w-10 h-10 rounded-2xl shadow-lg"
            />
            <h2 className="text-2xl font-extrabold text-green-200 tracking-wide">MARMO</h2>
          </div>
          <p className="text-green-100 leading-relaxed">
            Mar Moçambique.<br />
            Respirando o Oceano & Supirando Biodiversidade!
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold uppercase text-green-300 tracking-wide">Informações</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline text-green-100 hover:text-white transition">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-green-100 hover:text-white transition">
                Contacte-nos
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline text-green-100 hover:text-white transition">
                Termos e condições
              </Link>
            </li>
            <li>
              <Link to="/politic" className="hover:underline text-green-100 hover:text-white transition">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold uppercase text-green-300 tracking-wide">Localização</h3>
          <ul className="space-y-2 text-green-100">
            <li>Norte</li>
            <li>Centro</li>
            <li>Sul</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold uppercase text-green-300 tracking-wide">Redes Sociais</h3>
          <ul className="flex gap-5 items-center">
            <li>
              <a
                href="https://www.facebook.com/MARMO-Mar-Mo%C3%A7ambique-102577895481431"
                className="hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mar_mocambique/"
                className="hover:text-pink-400 transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mar_mocambique-9483b921b"
                className="hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/Mar_Mocambique?s=20"
                className="hover:text-indigo-400 transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-7 h-7" />
              </a>
            </li>
          </ul>
          <Link
            to="/volunteer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded shadow transition mt-4"
          >
            <HeartHandshake className="w-5 h-5" />
            Seja Voluntário
          </Link>
        </div>
      </div>

      <hr className="my-8 border-green-700" />

      <div className="text-center text-base text-green-100 font-medium">
        &copy; {currentYear} MARMO. Todos os direitos reservados.
      </div>
    </footer>
  );
};