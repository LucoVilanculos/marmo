import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center 
      bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="text-center flex flex-col items-center gap-4 p-6">
        <h1 className="text-[10rem] mb-2 font-extrabold text-blue-500 animate-pulse leading-none">
          PÁGINA NÃO ENCONTRADA
        </h1>
        <p className="text-xl md:text-3xl, lg:text-5xl font-bold text-green-600 dark:text-green-500 ">
          Parece que você se perdeu
        </p>
        <Link to="/">
          <Button className="mt-4 bg-blue-900 text-white  px-6 py-2 rounded 
            hover:bg-blue-900 hover:text-white hover:scale-105 transition-all duration-300
            dark:bg-[#232c47] dark:hover:bg-blue-700 dark:text-white"
          >
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </div>
  );
};