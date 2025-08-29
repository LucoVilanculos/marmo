import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const imagesByProvince = {

 "Cultivo e plantio de Mudas de Mangal": [
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756219074/Benedito_Issa_esperanca_do_oceano_ysuioq.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756219066/Imagem11_daznzr.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756219079/Imagem10_wbdyvb.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756219064/Imagem2_a4hk0e.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756219030/IMG_20231218_101153_hir05u.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756219026/IMG_20231218_101217_ucnnyj.jpg",
  ],

  'Monitoramento de espécies em vias de extinção e controle das áreas de proteção parcial': [
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218997/IMG-20250612-WA0079_llqbhz.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218995/IMG-20250612-WA0073_idw4mh.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218993/IMG-20250612-WA0100_flvjsr.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218993/IMG-20250612-WA0081_g7ssng.jpg",
  ],

  'Descontaminação nos mangais, Educação ambiental e saúde sexual reprodutiva': [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218827/IMG-20211204-WA01370_udbnid.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218820/IMG-20211204-WA0181_xnfnwx.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218818/IMG-20211204-WA0183_le7qeq.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218817/IMG-20211210-WA02430_tc0jho.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218816/IMG-20211204-WA0140_qomm31.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218816/IMG-20211204-WA0116_f1povy.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218815/IMG-20211204-WA0141_ghqbub.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218814/IMG-20211204-WA0109_aodmho.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218793/IMG-20211210-WA0242_obi2vv.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218791/IMG-20211210-WA0207_nysjkt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218790/IMG-20211210-WA0205_iokdjh.jpg",
  ],

  "Literacia oceânica e climática": [
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218736/IMG-20220913-WA0030_lxvwiy.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218736/IMG-20220917-WA0106_wmuubh.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20220913-WA0033_iaxcri.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20250215-WA0085_bcxl2o.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20250215-WA0084_a51vcu.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218738/IMG-20250215-WA0042_wpncj9.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218741/IMG-20220917-WA0058_fjsart.jpg",
  ],

  "Empoderamento a pesca artesanal": [
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218975/IMG_20231202_153010_jpgzpy.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218978/IMG_20231201_180507_ukta9h.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218959/IMG_20231201_163224_1_xswet0.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218958/IMG_20231201_181407_HDR_fn3cam.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218958/IMG_20231201_151858_HDR_kqfn5h.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218957/IMG_20231201_153709_s89r7t.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218957/IMG_20231201_163412_i9lwxb.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218949/IMG_20231201_180743_oz4von.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218943/IMG_20231201_172545_HDR_elkwmv.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218939/IMG_20231201_164320_HDR_m1ohhi.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218910/IMG-20230929-WA0063_jqbhbg.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218902/IMG-20230929-WA0050_yyjq2w.jpg",
   ,
  ],
  
  "Pesquisas e investigações oceanográficas": [
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218997/IMG-20250612-WA0079_llqbhz.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218995/IMG-20250612-WA0073_idw4mh.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218993/IMG-20250612-WA0100_flvjsr.jpg",
   "https://res.cloudinary.com/dtopurogz/image/upload/v1756218993/IMG-20250612-WA0081_g7ssng.jpg",
  ],

};

export const Gallery = () => {
  const [selectedProvince, setSelectedProvince] = useState("Cultivo e plantio de Mudas de Mangal");

  return (
    <main className="font-sans bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="relative w-full h-[400px] mb-2">
        <img
          src="https://res.cloudinary.com/dtopurogz/image/upload/v1753118274/IMG_20231218_101153_ut8ba5.jpg"
          alt="Galeria MARMO"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wider text-center">
            GALERIA
          </h1>
        </div>
      </div>

      <section className="text-center py-7 px-6">
        <p className="text-lg md:text-xl text-blue-800 dark:text-green-600 tracking-wider font-bold">
          Actividades feitas por nós
        </p>
      </section>

      <Tabs defaultValue={selectedProvince} className="max-w-6xl mx-auto">
        <TabsList className="flex h-fit gap-2 mb-10 overflow-x-auto scrollbar-hide px-2 w-full flex-nowrap sm:flex-wrap justify-start sm:justify-center">
          {Object.keys(imagesByProvince).map((province) => (
            <TabsTrigger
              key={province}
              value={province}
              onClick={() => setSelectedProvince(province)}
              className="text-green-600 font-semibold whitespace-nowrap"
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
                <Card className="overflow-hidden shadow-md border border-blue-100 bg-white dark:bg-[#1a263b] rounded-xl transition-transform hover:scale-105">
                  <CardContent className="p-0">
                    <img
                      src={url}
                      alt={`Imagem ${idx + 1} da categoria ${province}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};
