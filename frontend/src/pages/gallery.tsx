import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const imagesByProvince = {
 "Cultivo e plantio de Mudas de Mangal": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137279/marmo-acoes_unpt2b.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/living-ocean_e8ty5e.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137278/mangal-marmo_jscknk.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg",
  ],
  'Monitoramento de espécies em vias de extinção e controle das áreas de proteção parcial': [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137279/marmo-acoes_unpt2b.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/living-ocean_e8ty5e.jpg",
    " https://res.cloudinary.com/dtopurogz/image/upload/v1752137278/mangal-marmo_jscknk.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg",
  ],
  'Descontaminação nos mangais, Educação ambiental e saúde sexual reprodutiva': [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137279/marmo-acoes_unpt2b.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/living-ocean_e8ty5e.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137278/mangal-marmo_jscknk.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg",
  ],
  "Literacia oceânica e climática": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137279/marmo-acoes_unpt2b.jpg",
  ],
  "Empoderamento a pesca artesanal": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
  ],
  "Pesquisas e investigações oceanográficas": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
  ],
};

export const Gallery = () => {
  const [selectedProvince, setSelectedProvince] = useState("Cultivo e plantio de Mudas de Mangal");

  return (
    <section className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans">
      <section className="text-center py-7 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
          GALERIA
        </h1>
        <p className="text-lg md:text-xl text-blue-800 dark:text-green-600 tracking-wider font-bold">
          Actividades feitas por nós
        </p>
      </section>

      <Tabs defaultValue={selectedProvince} className="max-w-6xl mx-auto">
        <TabsList className="flex flex-wrap h-fit justify-center gap-2 mb-10">
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
