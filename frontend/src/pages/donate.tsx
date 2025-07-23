import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export const Donate = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400 dark:from-[#181f3a] dark:via-[#22305a] dark:to-[#2b4170] p-2 relative">
      <Button
        value={"ghost"}
        className="absolute top-8 left-8 bg-transparent hover:bg-green-100 text-blue-600 text-sm z-50 cursor-pointer"
      >
        <a href="/">Voltar</a>
      </Button>
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white/90 dark:bg-[#232c47] rounded-xl shadow-2xl overflow-hidden dark:text-white">
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 dark:from-[#181f3a] dark:via-[#22305a] dark:to-[#2b4170] md:w-1/2 w-full p-0">
          <img
            src="https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg"
            alt="Marmo Pic"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center p-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 text-center mb-2">
            QUER APOIAR A MARMO?
          </h1>
          <p className="text-base text-center text-gray-700 dark:text-blue-100 mb-6">
            A sua doação fortalece nossa missão de proteger os ecossistemas marinhos de Moçambique.<br />
            Utilize um dos métodos abaixo para contribuir de forma rápida e segura.
          </p>
          <Card className="w-full shadow-none border-none bg-transparent dark:bg-transparent">
            <CardHeader>
              <CardTitle className="font-bold text-xl text-blue-900 dark:text-blue-200 text-center">
                Dados para Doação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Banco BCI</h3>
                  <p className="text-sm text-gray-700 dark:text-blue-100">Conta: <span className="font-bold">1234567890123</span></p>
                  <p className="text-sm text-gray-700 dark:text-blue-100">NIB: <span className="font-bold">0001 2345 6789 0123 4567 8901</span></p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Millennium BIM</h3>
                  <p className="text-sm text-gray-700 dark:text-blue-100">Conta: <span className="font-bold">12345678901</span></p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Carteiras Móveis</h3>
                  <p className="text-sm text-gray-700 dark:text-blue-100">M-Pesa: <span className="font-bold">841234567</span></p>
                  <p className="text-sm text-gray-700 dark:text-blue-100">E-Mola: <span className="font-bold">851234567</span></p>
                  <p className="text-sm text-gray-700 dark:text-blue-100">M-Kesh: <span className="font-bold">861234567</span></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
