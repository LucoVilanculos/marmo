import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useEmblaAutoPlay } from "../context/autoplay";

const areasDeActuacao = [
  {
    title: "Apoio Comunitário",
    description: "actuamos emprol da melhoria de vida, uso de sustentável dos recursos naturais e encarra como fonte de referência para novos desafios, promovendo a inovação contínua",
  },
  {
    title: "Tecnologia & Inovação",
    description: "Somos conduzidos em total conformidade com a legislação ambiental, com a busca da melhoria dos processos e com a aplicação de tecnologias adequadas e ecologicamente aceites",
  },
];

const area = [
  "Celebrar termos de parcerias com instituições, empresas, organizacoes não governamental, associacoes, universidades públicas ou privadas, nacionais ou estrangeiras, sobre assuntos ligados aos seus objectivos, interesses e competências",
  "Subvencionar, total ou parcialmente, projectos de desenvolvimento, geração de rendimento de pesquisa individual ou de equipas, podendo explorar comercialmente produtos resultantes dessas actividades, mediante contrato ou acordo específico",
  "Apoiar a comunidade a desenvolver projectos de sustentabilidade ecologica, inovação tecnológica, desenvolvimento comunitário e de geração de rendimento.",
];


const fetchFaqs = async () => [
  {
    question: "Como faço para me registrar?",
    answer: "Clique no botão Registrar e preencha o formulário com seus dados.",
  },
  {
    question: "Como funciona o serviço?",
    answer: "Você pode solicitar corridas, acompanhar motoristas e muito mais pelo nosso app.",
  },
  {
    question: "Quais cidades atendem?",
    answer: "Atualmente, atendemos Maputo e região metropolitana.",
  },
];

export const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEmblaAutoPlay(emblaApi, 300000);
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    fetchFaqs().then(setFaqs);
  }, []);

  return (
    <>
      <section
        className="overflow-hidden max-w-[100%] mx-auto h-[600px] relative mt-1.5 mb-1.5"
        ref={emblaRef}
      >
        <div className="flex transition-transform duration-1000 ease-in-out">
          {[
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753116900/WhatsApp_Image_2024-09-18_at_16.25.57_1_mwhh0k.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753116705/Untitled_jq35jl.tiff",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753116701/IMG-20211210-WA02430_wnmxqy.tiff",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753116483/Imagem9_f4tcgr.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1753116693/IMG-20211204-WA01370_gq6t8o.tiff",
          ].map((img, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="h-[600px] object-cover shadow-md w-full"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 bg-white/80 hover:bg-green-600 text-green-700 hover:text-white rounded-full p-2 shadow-lg transition"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          aria-label="Anterior"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 bg-white/80 hover:bg-green-600 text-green-700 hover:text-white rounded-full p-2 shadow-lg transition"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          aria-label="Próximo"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <Link to={"/gallery"}>
          <Button
            variant="ghost"
            className="absolute bottom-8 right-8 bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-white font-semibold shadow-2xl transition"
          >
            Ver Mais
          </Button>
        </Link>
      </section>

      <section className="ml-10 mt-6 mb-6">
          <h1 className="text-5xl md:text-7xl font-black text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
            MARMO
          </h1>
          <p className="text-lg md:text-xl text-blue-700 tracking-wider font-bold">
            Mar Moçambique
          </p>
      </section>



      <section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 py-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">Visão da MARMO</h2>
          <p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
            Ser um centro catalisador para o desenvolvimento e a difusão de
            soluções inovadoras para o uso sustentável da zona costeira e do
            mar moçambicano servindo como exemplo em conservação da
            natureza para a sociedade e para os sectores públicos e privados.
          </p>

          <p className="text-md text-gray-800 dark:text-green-100 leading-relaxed">
            Para a consecução de seus objectivos/responsabilidades sociais, a <strong className="font-bold text-green-600">MARMO </strong>
            poderá
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-3 gap-8 mt-6">
          {area.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-100 dark:bg-gray-900 border border-gray-200 rounded-lg p-6 shadow-sm transition-transform hover:scale-105 "
            >
              <h3 className="text-md text-blue-950 dark:text-blue-300">{area}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-green-100 dark:bg-gray-900 py-10 px-0 text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full p-4"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">Nossa Missão</h2>
          <ul className="text-lg text-gray-800 dark:text-green-100 leading-relaxed space-y-4 text-center list-disc pl-6">
            <li>
              <span className="font-semibold text-green-700 dark:text-green-300">Proteção e conservação:</span> Contribuir para a proteção, preservação, conservação, recuperação e manejo sustentável do ambiente costeiro, do património paisagístico e dos bens e valores culturais da costa moçambicana.
            </li>
            <li>
              <span className="font-semibold text-green-700 dark:text-green-300">Acções sustentáveis:</span> Promover ações voltadas aos ecossistemas marinhos e costeiros buscando a substituição de práticas impactantes por actividades sustentáveis que visam a melhoria de vida das comunidades pesqueiras tradicionais e a manutenção e conservação da biodiversidade
            </li>
          </ul>
          <Link to={"/volunteer"}>
            <Button variant="ghost" className="mt-4 bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-white font-semibold transition-transform hover:scale-105">
              Quer ser voluntário?
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="bg-white dark:bg-gray-600 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-green-600 text-center mb-12">Nossas Áreas de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl-grid-cols-2 gap-8">
            {areasDeActuacao.map((areasDeActuacao, i) => (
              <motion.div
                key={areasDeActuacao.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg p-6 shadow-sm transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{areasDeActuacao.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {areasDeActuacao.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-10">
          Perguntas Frequentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 gap-8 ">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg shadow-sm transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-900 dark:text-blue-300 text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600  dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-blue-950 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl dark:text-green-600 font-bold mb-4">
            Junte-se à MARMO na Proteção do Mar Moçambicano
          </h2>
          <p className="text-lg dark:text-green-600 mb-6">
            Sua ajuda pode transformar comunidades costeiras e conservar ecossistemas marinhos únicos.
          </p>
          <Link to={"/donate"}>
            <Button
              className="bg-green-600 hover:bg-green-500 transition px-6 py-3 rounded text-white font-semibold"
            >
              Apoiar a Causa
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};
