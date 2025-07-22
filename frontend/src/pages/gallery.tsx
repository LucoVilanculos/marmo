import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const imagesByProvince = {
 "Cultivo e plantio de Mudas de Mangal": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1_mwhh0k.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jl.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116701/IMG-20211210-WA02430_wnmxqy.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116700/IMG-20211210-WA02360_ae8sfy.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116693/IMG-20211204-WA01370_gq6t8o.tiff",
  ],
  'Monitoramento de espécies em vias de extinção e controle das áreas de proteção parcial': [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1_mwhh0k.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jl.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116701/IMG-20211210-WA02430_wnmxqy.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116483/Imagem9_f4tcgr.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116693/IMG-20211204-WA01370_gq6t8o.tiff",
  ],
  'Descontaminação nos mangais, Educação ambiental e saúde sexual reprodutiva': [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1_mwhh0k.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jl.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116701/IMG-20211210-WA02430_wnmxqy.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116478/Imagem2_cfwggo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116693/IMG-20211204-WA01370_gq6t8o.tiff",
  ],
  "Literacia oceânica e climática": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1_mwhh0k.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jl.tiff",
  ],
  "Empoderamento a pesca artesanal": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
  ],
  "Pesquisas e investigações oceanográficas": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
  ],
};

export const Gallery = () => {
  const [selectedProvince, setSelectedProvince] = useState("Cultivo e plantio de Mudas de Mangal");

  return (
    <section className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans">
      
      <section className="mb-10 ml-6 mt-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
          GALERIA
        </h1>
      </section>
      
      <section className="text-center py-7 px-6">
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
