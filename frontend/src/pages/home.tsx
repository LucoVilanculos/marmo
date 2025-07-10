import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import  useEmblaCarousel  from "embla-carousel-react";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useEmblaAutoPlay } from "../context/autoplay";


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
  useEmblaAutoPlay(emblaApi, 15000);
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    fetchFaqs().then(setFaqs);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 text-center py-10 px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
              MARMO
            </h1>
            <p className="text-lg md:text-xl text-blue-700 tracking-wider font-bold">
              Mar Moçambique
            </p>
      </section>

      <section
        className="overflow-hidden max-w-[100%] mx-auto h-[600px] relative mt-1.5 mb-1.5"
        ref={emblaRef}
      >
        <div className="flex transition-transform duration-1000 ease-in-out">
          {[
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137314/ocean_v3rw5v.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/saving-ocean_xwufsu.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137295/splash-marmo_sqffbp.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137279/marmo-acoes_unpt2b.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/living-ocean_e8ty5e.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137278/mangal-marmo_jscknk.jpg",
            "https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg",
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
        <Link to={"/gallery"}>
          <Button
            variant="ghost"
            className="absolute bottom-8 right-8  bg-green-600 hover:bg-green-500  px-6 py-3 rounded text-white font-semibold shadow-2xl transition"
          >
            Ver Mais
          </Button>
        </Link>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 py-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">Visão da Marmo</h2>
          <p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
            A <strong className="text-green-500">MARMO</strong> é dedicada à proteção da biodiversidade marinha de Moçambique. Actuamos em educação, conservação,
            turismo sustentável, pesquisa científica e apoio às comunidades costeiras.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-8">
            {[
              "Conservação Marinha",
              "Educação Ambiental",
              "Turismo Sustentável",
              "Pesquisa Científica",
            ].map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-100 dark:bg-gray-900 border border-gray-200 rounded-lg p-6 shadow-sm transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{area}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {`Descrição institucional sobre "${area}". Adaptar conforme conteúdo da ONG.`}
                </p>
              </motion.div>
            ))}
          </div>
      </section>

      <section className="bg-green-100 dark:bg-gray-900 py-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="https://res.cloudinary.com/dtopurogz/image/upload/v1752137312/mar_neqgan.jpg"
            alt="Marmo Pic"
            className="h-[400px] object-cover shadow-md w-full"
          />
          <h2 className="text-3xl font-bold text-green-600 mb-6">Nossa Missão</h2>
          <p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
            A <strong className="text-green-600">MARMO</strong> é dedicada à proteção da biodiversidade marinha de Moçambique. Actuamos em educação, conservação,
            turismo sustentável, pesquisa científica e apoio às comunidades costeiras.
          </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-8">
            {[
              "Conservação Marinha",
              "Educação Ambiental",
              "Turismo Sustentável",
              "Pesquisa Científica",
              "Apoio Comunitário",
              "Tecnologia & Inovação",
            ].map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg p-6 shadow-sm transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{area}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {`Descrição institucional sobre "${area}". Adaptar conforme conteúdo da ONG.`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-8 ">
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
