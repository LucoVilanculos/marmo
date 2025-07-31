import { useState } from "react";
import { motion } from "framer-motion";
import { ChartBar, 
  User, 
  HelpCircle, 
  Mail, 
  HandHelping, 
  Newspaper, 
  LogOut, 
  HeartHandshake 
} from "lucide-react";
import { Button } from "../components/ui/button";
import { VolunteersAdmin } from "../components/volunteer";

const menu = [
  { key: "dashboard", label: "Dashboard", icon: <ChartBar /> },
  { key: "volunteers", label: "Voluntários", icon: <HandHelping /> },
  { key: "contacts", label: "Mensagens", icon: <Mail /> },
  { key: "faqs", label: "FAQs", icon: <HelpCircle /> },
  { key: "publications", label: "Publicações", icon: <Newspaper /> },
  { key: "donations", label: "Doações", icon: <HeartHandshake /> },
  { key: "users", label: "Usuários", icon: <User /> },
];

export const AdminPage = () => {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900">
      {/* Aside */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-white dark:bg-[#1a263b] shadow-lg flex flex-col p-4"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Painel Admin</h2>
        <nav className="flex flex-col gap-2">
          {menu.map((item) => (
            <Button
              key={item.key}
              variant={selected === item.key ? "default" : "ghost"}
              className="flex items-center gap-2 justify-start"
              onClick={() => setSelected(item.key)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </nav>
        <div className="mt-auto">
          <Button variant="destructive" className="w-full flex items-center gap-2 mt-8">
            <LogOut /> Sair
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 p-8 overflow-y-auto"
      >
        <div className="text-3xl font-bold text-blue-800 dark:text-white mb-6">
          {menu.find((m) => m.key === selected)?.label}
        </div>
        <div className="rounded-lg bg-white dark:bg-[#232e47] shadow-lg p-8 min-h-[400px] flex items-center justify-center">
          <span className="text-gray-400 text-xl">
            {selected === "dashboard" && "Aqui vai o painel com gráficos e estatísticas."}
            {selected === "volunteers" && <VolunteersAdmin />}
            {selected === "contacts" && "Aqui estão as mensagens dos contatos."}
            {selected === "faqs" && "Aqui estão as perguntas frequentes."}
            {selected === "publications" && "Aqui estão as publicações."}
            {selected === "donations" && "Aqui está o gerenciamento de doações."}
            {selected === "users" && "Aqui está o gerenciamento de usuários."}
          </span>
        </div>
      </motion.main>
    </div>
  );
};