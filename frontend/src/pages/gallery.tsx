import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const imagesByProvince = {
 "Cultivo e plantio de Mudas de Mangal": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753118274/IMG_20231218_101153_ut8ba5.jpg",
    "https://res.cloudinary.com/dtophttps://res.cloudinary.com/dtopurogz/image/upload/v1756219035/IMG_20231221_084514_dhnron.jpgurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://reshttps://res.cloudinary.com/dtopurogz/image/upload/v1756219026/IMG_20231218_101217_ucnnyj.jpg.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117https://res.cloudinary.com/dtopurogz/image/upload/v1756219074/Benedito_Issa_esperanca_do_oceano_ysuioq.jpg021/IMG_20231201_180743_ydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18https://res.cloudinary.com/dtopurogz/image/upload/v1756219079/Imagem10_wbdyvb.jpg_at_16.25.57_1_mwhh0k.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jlhttps://res.cloudinary.com/dtopurogz/image/upload/v1756219066/Imagem11_daznzr.jpg.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116701/IMG-20211210-WA02430_wnmhttps://res.cloudinary.com/dtopurogz/image/upload/v1756219064/Imagem2_a4hk0e.jpgxqy.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116700/IMG-20211210-WA02360_ae8sfy.https://res.cloudinary.com/dtopurogz/image/upload/v1756219058/Imagem3_hejkzk.jpgtiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116693/IMG-20211204-WAhttps://res.cloudinary.com/dtopurogz/image/upload/v1756219062/Imagem9_dmm8px.jpg01370_gq6t8o.tiff",
  ],

  'Monitoramento de espécies em vias de extinção e controle das áreas de proteção parcial': [
    "https://res.cloudinary.com/dybll7vsv/image/upload/v1753642268/IMG-20230926-WA0005_w2hfad.jpg",
    "https://res.cloudinary.com/dtopurogz/imaghttps://res.cloudinary.com/dtopurogz/image/upload/v1756218997/IMG-20250612-WA0079_llqbhz.jpge/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_18140https://res.cloudinary.com/dtopurogz/image/upload/v1756218995/IMG-20250612-WA0073_idw4mh.jpg7_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218993/IMG-20250612-WA0100_flvjsr.jpgpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.https://res.cloudinary.com/dtopurogz/image/upload/v1756218993/IMG-20250612-WA0081_g7ssng.jpgjpg",
  ],

  'Descontaminação nos mangais, Educação ambiental e saúde sexual reprodutiva': [
    "https://res.cloudinary.com/dtopuhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218827/IMG-20211204-WA01370_udbnid.tiffrogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_2https://res.cloudinary.com/dtopurogz/image/upload/v1756218820/IMG-20211204-WA0181_xnfnwx.jpg0231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_https://res.cloudinary.com/dtopurogz/image/upload/v1756218818/IMG-20211204-WA0183_le7qeq.jpgydxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218817/IMG-20211210-WA02430_tc0jho.tifffzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1https://res.cloudinary.com/dtopurogz/image/upload/v1756218816/IMG-20211204-WA0140_qomm31.jpg_mwhh0k.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jl.https://res.cloudinary.com/dtopurogz/image/upload/v1756218816/IMG-20211204-WA0116_f1povy.jpgtiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116701/IMG-20211210-WA02430_wnmxhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218816/IMG-20211204-WA0116_f1povy.jpgqy.tiff",
    "https://res.cloudinary.com/dtopurogz/image/uplhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218815/IMG-20211204-WA0141_ghqbub.jpgoad/v1753116478/Imagem2_cfwggo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116693/IMG-20211204https://res.cloudinary.com/dtopurogz/image/upload/v1756218814/IMG-20211204-WA0109_aodmho.jpg-WA01370_gq6t8o.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218813/IMG-20211210-WA01990_i5ss4y.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218813/IMG-20211210-WA02360_fc49zk.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218813/IMG-20211127-WA0319_re5iic.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218813/IMG-20211127-WA0316_tjjoyn.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218812/Untitled_gj1djr.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218810/IMG-20211127-WA0273_cgpd7g.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218793/IMG-20211210-WA0242_obi2vv.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218793/IMG-20211210-WA0242_obi2vv.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218790/IMG-20211210-WA0205_iokdjh.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218787/IMG-20211210-WA0203_zlhjkp.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218787/IMG-20211210-WA0198_jmuds6.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218786/IMG-20211210-WA0202_fartiw.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218783/IMG-20211210-WA0195_zx6v0f.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218782/IMG-20211210-WA0194_u3fz4q.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218781/IMG-20211210-WA0186_evtezu.jpg",
  ],

  "Literacia oceânica e climática": [
    "https://res.cloudinary.comhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218736/IMG-20220913-WA0030_lxvwiy.jpg/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20220913-WA0033_iaxcri.jpg/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20250215-WA0085_bcxl2o.jpgpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jphttps://res.cloudinary.com/dtopurogz/image/upload/v1756218736/IMG-20220917-WA0106_wmuubh.jpgg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1_mwhh0https://res.cloudinary.com/dtopurogz/image/upload/v1756218738/IMG-20250215-WA0042_wpncj9.jpgk.jpg",
    "https://res.cloudinary.com/dtopurogz/image/https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20250215-WA0084_a51vcu.jpgupload/v1753116705/Untitled_jq35jl.tiff",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20250215-WA0084_a51vcu.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218741/IMG-20220917-WA0058_fjsart.jpg",
  ],

  "Empoderamento a pesca artesanal": [
    "https://res.cloudinary.cohttps://res.cloudinary.com/dtopurogz/image/upload/v1756218978/IMG_20231201_180507_ukta9h.jpgm/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/vhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218975/IMG_20231202_153010_jpgzpy.jpg1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218959/IMG_20231201_163224_1_xswet0.jpgxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218958/IMG_20231201_181407_HDR_fn3cam.jpgxfzo.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218958/IMG_20231201_151858_HDR_kqfn5h.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218957/IMG_20231201_153709_s89r7t.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218957/IMG_20231201_163412_i9lwxb.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218949/IMG_20231201_180743_oz4von.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218943/IMG_20231201_172545_HDR_elkwmv.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218939/IMG_20231201_164320_HDR_m1ohhi.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218939/Ihttps://res.cloudinary.com/dtopurogz/image/upload/v1756218910/IMG-20230929-WA0063_jqbhbg.jpgMG_20231201_164320_HDR_m1ohhi.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218902/IMG-20230929-WA0050_yyjq2w.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218902/IMG-20230929-WA0043_dtymvm.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218899/IMG-20230929-WA0042_ufdxic.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218898/IMG-20230928-WA0040_xmw2ta.jpg",
    "https://res.cloudinary.com/dtopurogzhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218897/IMG_20231202_161331_uw0oaq.jpg/image/uhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218897/IMG_20231202_161331_uw0oaq.jpgpload/v1756218898/IMG-20230928-WA0040_xmw2ta.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218896/IMG-20230928-WA0034_mub6my.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218897/IMG_20231202_161331_uw0oaq.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218895/IMG-20230928-WA0038_dtwt1c.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218893/IMG-20230926-WA0051_gtx9hm.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218892/IMG_20231202_180503_HDR_jocacx.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218892/IMG-20230927-WA0023_ltuzde.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218891/IMG-20230926-WA0048_p8cwqb.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218891/IMG-20230926-WA0008_wwcvvy.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218890/IMG-20230926-WA0039_xszp9z.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218889/IMG-20230926-WA0005_ds70qv.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218886/IMG-20230926-WA0038_wclvau.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218884/IMG-20230926-WA0037_dozugy.jpg",
  ],
  
  "Pesquisas e investigações oceanográficas": [
    "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029https://res.cloudinary.com/dtopurogz/image/upload/v1756218844/WhatsApp_Image_2024-09-18_at_16.25.57_1_jszimf.jpg/IMG_20231201_164320_HDR_jxyxlt.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218851/WhatsApp_Image_2024-09-18_at_16.25.56_nmpunz.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218849/WhatsApp_Image_2024-09-18_at_16.25.56_1_jilpsq.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218848/WhatsApp_Image_2024-09-18_at_16.25.55_uk5ajb.jpg",
    "hhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218846/WhatsApp_Image_2024-09-18_at_16.25.55_2_noh8un.jpg",
    "https://res.cloudinary.com/dtopurogz/image/upload/v1756218844/WhatsApp_Image_2024-09-18_at_16.25.55_1_odegsx.jpg",
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
        <TabsList className="flex flex-wrap h-fit justify-center gap-2 mb-10">
          {Object.keys(imagesByProvince).map((province) => (
            <TabsTrigger
              key={province}
              value={province}
              onClick={() => setSelectedProvince(province)}
              className="text-green-600 font-semibold"
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
