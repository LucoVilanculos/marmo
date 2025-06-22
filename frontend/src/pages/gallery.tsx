import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const imagesByProvince = {
  Maputo: [
    "https://source.unsplash.com/800x600/?mozambique,beach",
    "https://source.unsplash.com/800x600/?maputo,ocean",
  ],
  Inhambane: [
    "https://source.unsplash.com/800x600/?inhambane",
    "https://source.unsplash.com/800x600/?mozambique,sea",
  ],
  Nampula: [
    "https://source.unsplash.com/800x600/?nampula",
    "https://source.unsplash.com/800x600/?mozambique,coast",
  ],
};

export const Gallery = () => {
  const [selectedProvince, setSelectedProvince] = useState("Maputo");

  return (
    <section className="min-h-screen py-16 px-4 bg-blue-50 dark:bg-[#0e1a2b]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">
          Galeria MARMO
        </h1>
        <p className="text-lg text-blue-800 dark:text-blue-200">
          Explore as maravilhas do Mar Moçambicano por província
        </p>
      </div>

      <Tabs defaultValue={selectedProvince} className="max-w-6xl mx-auto">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(imagesByProvince).map((province) => (
            <TabsTrigger
              key={province}
              value={province}
              onClick={() => setSelectedProvince(province)}
              className="capitalize"
            >
              {province}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(imagesByProvince).map(([province, images]) => (
          <TabsContent key={province} value={province} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
