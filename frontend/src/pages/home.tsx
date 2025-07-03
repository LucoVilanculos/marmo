import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

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
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    fetchFaqs().then(setFaqs);
  }, []);

  return (
    <>
      
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=1000&auto=format&fit=crop&q=60"
          alt="Oceano Moçambicano"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-700 dark:text-green-600 drop-shadow-md tracking-wider">
              MARMO
            </h1>
            <p className="text-lg md:text-xl text-indigo-800 tracking-wider font-bold">
              Mar Moçambique
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-100 dark:bg-gray-900 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">Nossa Missão</h2>
          <p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
            A <strong className="text-green-600">MARMO</strong> é dedicada à proteção da biodiversidade marinha de Moçambique. Actuamos em educação, conservação,
            turismo sustentável, pesquisa científica e apoio às comunidades costeiras.
          </p>
        </motion.div>
      </section>

      <section className="bg-white dark:bg-gray-700 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-green-600 text-center mb-12">Nossas Áreas de Atuação</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{area}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {`Descrição institucional sobre "${area}". Adaptar conforme conteúdo da ONG.`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-10">
          Perguntas Frequentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg shadow-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 dark:text-blue-300 text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700  dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-950 text-white py-16 px-6 text-center">
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
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded text-white font-semibold"
            >
              Apoiar a Causa
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};
