"use client";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useDarkMode } from "../context/darkmode";


export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { dark, toggle } = useDarkMode();

  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  const linksLeft = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Projectos", href: "/projects" },
    { label: "Equipe", href: "/team" },
    { label: "Voluntariado", href: "/volunteer" },
    { label: "Parceiros", href: "/partners" },
    { label: "Galeria", href: "/gallery" },
    { label: "Contacto", href: "/contact" },
  ];

  const session = localStorage.getItem("session");
  const user = session ? JSON.parse(session) : null;
  const isLogged = !!user;

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    navigate("/login");
  }

  return (
    <header
      className={`w-full border-b transition-all duration-300 font-sans ${
        scrolled
          ? "bg-white dark:bg-gray-900/80 shadow-md backdrop-blur-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
        <NavLink to="/" className="flex items-center font-bold text-green-600 mr-5">
          <img
            src="https://res.cloudinary.com/dtopurogz/image/upload/v1753116471/01_MARMO_LOGOTIPO_PNG.png_xnnek0.png"
            alt="MARMO logo"
            className="w-12 h-12 rounded-2xl md:w-14 md:h-14 shadow-lg"
          />
          <span className="ml-2 text-xl md:text-2xl tracking-wide font-extrabold">MARMO</span>
        </NavLink>

        <nav className="gap-8 text-base hidden md:flex ml-auto">
          {linksLeft.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `relative px-2 py-1 font-semibold tracking-wide transition-colors duration-200
                hover:text-green-700
                ${isActive ? "text-green-600" : "text-gray-700 dark:text-gray-300"}
                after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5
                after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="items-center text-base hidden md:flex gap-2 ml-6">
          {isLogged && (
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold shadow transition"
            >
              Sair
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Alternar dark mode"
            onClick={toggle}
            className="hover:bg-green-100 dark:hover:bg-green-900"
          >
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="p-2"
            variant={"ghost"}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold px-6 py-6"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="uppercase font-bold tracking-wider text-green-600 dark:text-indigo-300 text-2xl">
                MARMO
              </span>
              <Button
                onClick={() => setIsMobileOpen(false)}
                variant={"ghost"}
                aria-label="Fechar menu"
              >
                <X size={28} />
              </Button>
            </div>
            <nav className="flex flex-col justify-center items-center gap-6 text-lg">
              {linksLeft.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="hover:text-green-600"
                >
                  {link.label}
                </NavLink>
              ))}
              {isLogged && (
                <Button
                  onClick={() => {
                    setIsMobileOpen(false);
                    handleLogout();
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition mt-4"
                >
                  Sair
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Alternar dark mode"
                onClick={toggle}
                className="mt-4 hover:bg-green-100 dark:hover:bg-green-900"
              >
                {dark ? <Sun size={22} /> : <Moon size={22} />}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
