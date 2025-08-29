import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const SocialLinks = () => (
  <section className="flex flex-col items-center gap-3 mt-10 mb-6">
    <h3 className="text-lg font-bold text-green-700 mb-2 text-center">
      Siga a MARMO e mantenha-se atualizado!
    </h3>
    <div className="flex gap-5">
      <a
        href="https://www.facebook.com/MARMO-Mar-Mo%C3%A7ambique-102577895481431"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook className="w-7 h-7" />
      </a>
      <a
        href="https://www.instagram.com/mar_mocambique/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-7 h-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/mar_mocambique-9483b921b"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-7 h-7" />
      </a>
      <a
        href="https://www.twitter.com/Mar_Mocambique?s=20"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-400 transition hover:scale-110"
        aria-label="Twitter"
      >
        <Twitter className="w-7 h-7" />
      </a>
    </div>
  </section>
);