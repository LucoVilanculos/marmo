"use client";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Command, CommandInput } from "../components/ui/command";
import { useDarkMode } from "../context/darkmode";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { dark, toggle } = useDarkMode();

  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  const linksLeft = [
    { label: "Contacto", href: "/contact" },
    { label: "Sobre", href: "/about" },
  ];

  const session = localStorage.getItem("session");
  const user = session ? JSON.parse(session) : null;
  const isLogged = !!user;

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    navigate("/login");
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showSearchBar &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowSearchBar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearchBar]);

  return (
    <header
      className={`w-full border-b z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/80 shadow-md backdrop-blur-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
        {/* LOGO À ESQUERDA */}
        <div className="flex items-center">
          <NavLink to="/" className="flex flex-col items-start justify-start">
            <img
              src="/marmo-logo.png"
              alt="MARMO logo"
              className="w-10 h-10 rounded-2xl md:w-12 md:h-12"
            />
          </NavLink>
        </div>

        {/* LEFT NAV */}
        <nav className="gap-8 text-sm flex-1 hidden md:flex justify-center">
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

        {/* RIGHT NAV */}
        <nav className="items-center gap-4 text-sm flex-1 justify-end hidden md:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSearchBar((prev) => !prev)}
            className="text-sm font-normal"
            aria-label="Abrir busca"
          >
            Buscar
          </Button>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `transition hover:opacity-60 ${isActive ? "font-semibold" : ""}`
            }
          >
            Galeria
          </NavLink>

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

        {/* MOBILE BUTTONS */}
        <div className="md:hidden flex items-center flex-1 justify-end gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar dark mode"
            className="p-2 rounded"
          >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="p-2 rounded"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <AnimatePresence>
        {showSearchBar && (
          <motion.div
            ref={searchBarRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white dark:bg-gray-900 shadow-md border-b px-4 md:px-6 py-4"
            style={{ position: "relative", zIndex: 60 }}
          >
            <div className="max-w-7xl mx-auto">
              <Command className="w-full">
                <CommandInput
                  placeholder="Buscar..."
                  value={search}
                  onValueChange={setSearch}
                  autoFocus
                />
              </Command>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
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
              <span className="uppercase items-center font-bold tracking-wider text-indigo-800 dark:text-white">
                MARMO
              </span>
              <button onClick={() => setIsMobileOpen(false)} aria-label="Fechar menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col justify-center items-center gap-6 text-lg">
              <NavLink
                to="/"
                onClick={() => setIsMobileOpen(false)}
                className="hover:text-green-600"
              >
                Início
              </NavLink>
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
              <NavLink
                to="/gallery"
                onClick={() => setIsMobileOpen(false)}
                className="hover:text-green-600"
              >
                Galeria
              </NavLink>
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
