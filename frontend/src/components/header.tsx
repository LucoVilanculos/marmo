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
    {label: "Galeria", href: "/gallery" },
    {label: "Contacto", href: "/contact"},
    {label: "Donativo", href: "/donate"},
    { label: "Voluntariado", href: "/volunteer" },
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
      className={`w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900/80 shadow-md backdrop-blur-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-start font-bold text-green-600 mr-5 justify-start">
            <img
              src="./public/img/marmo-logo.png || https://res.cloudinary.com/dtopurogz/image/upload/v1752137280/marmo-logo_nq0efc.png"
              alt="MARMO logo"
              className="w-10 h-10 mr-5 rounded-2xl md:w-10 md:h-10"
            />
          </NavLink>
        </div>

        <nav className="gap-8 text-sm flex-1 hidden md:flex justify-end">
          {linksLeft.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `transition font-medium tracking-wide hover:text-green-700 ${
                  isActive ? "text-green-600" : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <nav className="items-center text-sm flex-1 justify-end hidden md:flex">
          {isLogged && (
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition ml-2"
            >
              Sair
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            aria-label="Alternar dark mode"
            onClick={toggle}
          >
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </Button>
        </nav>

        <div className="md:hidden flex items-center flex-1 justify-end gap-2">
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
              <span className="uppercase items-center font-bold tracking-wider text-green-600 dark:text-indigo-300">
                MARMO
              </span>
              <Button 
                onClick={() => 
                setIsMobileOpen(false)}
                variant={"ghost"} 
                aria-label="Fechar menu">
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
                className="mt-4"
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
