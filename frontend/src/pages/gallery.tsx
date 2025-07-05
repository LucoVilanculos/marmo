import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const imagesByProvince = {
  Maputo: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
    "../public/img/live.jpg",
    "../public/img/marmo-acoes.jpg",
    "../public/img/living-ocean.jpg",
    "../public/img/mangal-marmo.jpg",
    "../public/img/mar.jpg",
  ],
  Matola: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
    "../public/img/live.jpg",
    "../public/img/marmo-acoes.jpg",
    "../public/img/living-ocean.jpg",
    "../public/img/mangal-marmo.jpg",
    "../public/img/mar.jpg",
  ],
  Gaza: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
    "../public/img/live.jpg",
    "../public/img/marmo-acoes.jpg",
    "../public/img/living-ocean.jpg",
    "../public/img/mangal-marmo.jpg",
    "../public/img/mar.jpg",
  ],
  Inhambane: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
    "../public/img/live.jpg",
    "../public/img/marmo-acoes.jpg",
  ],
  Sofala: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
  Manica: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
  Zambézia: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
  Nampula: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
  Tete: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
  Niassa: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
  CaboDelegado: [
    "../public/img/ocean.jpg",
    "../public/img/marmo-pic.jpg",
    "../public/img/saving-ocean.jpg",
    "../public/img/splash-marmo.jpg",
  ],
};

export const Gallery = () => {
  const [selectedProvince, setSelectedProvince] = useState("Maputo");

  return (
    <section className="flex flex-col items-center p-4 bg-gradient-to-r from-indigo-100 to-indigo-300 dark:from-gray-800 dark:to-gray-900 font-sans">
      <section className="text-center py-7 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-700 dark:text-green-600 drop-shadow-md tracking-wider">
          Galeria
        </h1>
        <p className="text-lg md:text-xl text-indigo-800 dark:text-green-600 tracking-wider font-bold">
          Actividades feitas por nós
        </p>
      </section>

      <Tabs defaultValue={selectedProvince} className="max-w-6xl mx-auto">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(imagesByProvince).map((province) => (
            <TabsTrigger
              key={province}
              value={province}
              onClick={() => setSelectedProvince(province)}
              className="text-green-600"
            >
              {province}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(imagesByProvince).map(([province, images]) => (
          <TabsContent key={province} value={province} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 mt-10 gap-6">
            {images.map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-md border border-blue-100 bg-white dark:bg-[#1a263b]">
                  <CardContent className="p-0">
                    <img
                      src={url}
                      alt={`Imagem ${idx + 1} da província ${province}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
