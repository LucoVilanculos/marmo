import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 
      dark:from-[#181f3a] dark:via-[#22305a] dark:to-[#2b4170]"
    >
      <div className="text-center flex flex-col items-center gap-4 p-6">
        <h1 className="text-[10rem]  font-extrabold text-white animate-pulse leading-none">
          404
        </h1>
        <p className="text-xl text-green-600 dark:text-green-500 ">
          Parece que você se perdeu
        </p>
        <Link to="/">
          <Button className="mt-4 bg-indigo-900 text-white  px-6 py-2 rounded 
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