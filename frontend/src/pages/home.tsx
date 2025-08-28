import { Link } from 'react-router-dom';
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Info, Leaf, Users } from "lucide-react";
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
  "Conservação Marinha",
  "Educação Ambiental",
  "Turismo Sustentável",
  "Pesquisa Científica",
  "Apoio Comunitário",
  "Tecnologia & Inovação",
  "Aquacultura sustentável"
];

const area = [
  "Celebrar termos de parcerias com instituições, empresas, organizações não governamentais, associações, universidades públicas ou privadas, nacionais ou estrangeiras, sobre assuntos ligados aos seus objetivos, interesses e competências.",
  "Subvencionar, total ou parcialmente, projetos de desenvolvimento, geração de rendimento de pesquisa individual ou de equipes, podendo explorar comercialmente produtos resultantes dessas atividades, mediante contrato ou acordo específico.",
  "Apoiar a comunidade a desenvolver projetos de sustentabilidade ecológica, inovação tecnológica, desenvolvimento comunitário e de geração de rendimento.",
];

const bannerImages = [
 "https://res.cloudinary.com/dtopurogz/image/upload/v1753118274/IMG_20231218_101153_ut8ba5.jpg",
  "https://res.cloudinary.com/dtophttps://res.cloudinary.com/dtopurogz/image/upload/v1756219035/IMG_20231221_084514_dhnron.jpgurogz/image/upload/v1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
  "https://reshttps://res.cloudinary.com/dtopurogz/image/upload/v1756219026/IMG_20231218_101217_ucnnyj.jpg.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydxfzo.jpg",  "https://res.cloudinary.com/dybll7vsv/image/upload/v1753739800/Benedito_Issa_esperanca_do_oceano_otlleq.jpg",
  "https://res.cloudinary.com/dybll7vsv/image/upload/v1753642268/IMG-20230926-WA0005_w2hfad.jpg",
  "https://res.cloudinary.com/dtopurogz/imaghttps://res.cloudinary.com/dtopurogz/image/upload/v1756218997/IMG-20250612-WA0079_llqbhz.jpge/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
  "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_20231201_18140https://res.cloudinary.com/dtopurogz/image/upload/v1756218995/IMG-20250612-WA0073_idw4mh.jpg7_HDR_ewezir.jpg",
  "https://res.cloudinary.com/dtopuhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218827/IMG-20211204-WA01370_udbnid.tiffrogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
  "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026/IMG_2https://res.cloudinary.com/dtopurogz/image/upload/v1756218820/IMG-20211204-WA0181_xnfnwx.jpg0231201_181407_HDR_ewezir.jpg",
  "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_https://res.cloudinary.com/dtopurogz/image/upload/v1756218818/IMG-20211204-WA0183_le7qeq.jpgydxfzo.jpg",
  "https://res.cloudinary.comhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218736/IMG-20220913-WA0030_lxvwiy.jpg/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
  "https://res.cloudinary.com/dtopurogz/image/upload/v1753117026https://res.cloudinary.com/dtopurogz/image/upload/v1756218737/IMG-20220913-WA0033_iaxcri.jpg/IMG_20231201_181407_HDR_ewezir.jpg",
  "https://res.cloudinary.cohttps://res.cloudinary.com/dtopurogz/image/upload/v1756218978/IMG_20231201_180507_ukta9h.jpgm/dtopurogz/image/upload/v1753117029/IMG_20231201_164320_HDR_jxyxlt.jpg",
  "https://res.cloudinary.com/dtopurogz/image/upload/vhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218975/IMG_20231202_153010_jpgzpy.jpg1753117026/IMG_20231201_181407_HDR_ewezir.jpg",
  "https://res.cloudinary.com/dtopurogz/image/upload/v1753117021/IMG_20231201_180743_ydhttps://res.cloudinary.com/dtopurogz/image/upload/v1756218959/IMG_20231201_163224_1_xswet0.jpgxfzo.jpg",
];

const faqs = [
  {
    question: "Por que conservar os mangais é importante?",
    answer: "Mangais protegem a costa contra erosão, abrigam espécies marinhas e capturam carbono, ajudando no combate às mudanças climáticas.",
    icon: <Leaf className="w-6 h-6 text-green-600 mr-2" />
  },
  {
    question: "Como posso ser voluntário na MARMO?",
    answer: "Acesse a página de voluntariado, preencha o formulário e participe das nossas ações de campo e educação ambiental.",
    icon: <Users className="w-6 h-6 text-blue-600 mr-2" />
  },
  {
    question: "Quais atividades posso participar como voluntário?",
    answer: "Plantio de mangais, limpeza de praias, oficinas educativas, monitoramento de fauna e muito mais.",
    icon: <Info className="w-6 h-6 text-green-600 mr-2" />
  },
  {
    question: "A MARMO aceita doações?",
    answer: "Sim! Você pode doar pela página de doações ou entrar em contato para apoiar nossos projetos.",
    icon: <Leaf className="w-6 h-6 text-green-600 mr-2" />
  },
  {
    question: "Preciso ter experiência para ajudar?",
    answer: "Não! Qualquer pessoa pode contribuir, basta vontade de proteger o mar.",
    icon: <Users className="w-6 h-6 text-blue-600 mr-2" />
  },
  {
    question: "Onde a MARMO atua?",
    answer: "Estamos presentes em várias regiões costeiras de Moçambique e expandindo para novas áreas.",
    icon: <Info className="w-6 h-6 text-green-600 mr-2" />
  },
];

export const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEmblaAutoPlay(emblaApi, 300000);

  return (
    <main className="font-sans bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Banner */}
      <section
        className="overflow-hidden max-w-[100%] mx-auto h-[600px] relative mt-1.5 mb-1.5 rounded-3xl shadow-2xl"
        ref={emblaRef}
      >
        <div className="flex transition-transform duration-1000 ease-in-out">
          {bannerImages.map((img, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="h-[600px] object-cover shadow-md w-full rounded-3xl"
                loading="lazy"
                onError={e => { e.currentTarget.src = "https://ui-avatars.com/api/?name=MARMO&background=green&color=white"; }}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 bg-white/80 hover:bg-green-600 text-green-700 hover:text-white rounded-full p-2 shadow-lg transition active:scale-90"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          aria-label="Anterior"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 bg-white/80 hover:bg-green-600 text-green-700 hover:text-white rounded-full p-2 shadow-lg transition active:scale-90"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          aria-label="Próximo"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <Link to={"/gallery"}>
          <Button
            variant="ghost"
            className="absolute bottom-8 right-8 bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-white font-semibold shadow-2xl transition active:scale-95"
          >
            Ver Mais
          </Button>
        </Link>
      </section>

      {/* Hero */}
      <section className="mt-10 mb-10 text-center">
        <h1 className="text-6xl md:text-7xl font-black text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider mb-4">
          MARMO
        </h1>
        <p className="text-2xl md:text-3xl text-blue-700 dark:text-green-300 tracking-wider font-bold mb-2">
          Mar Moçambique
        </p>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-green-100 leading-relaxed font-medium">
          Respirando o Oceano & Supirando Biodiversidade!
        </p>
      </section>

      {/* Visão e Atuação */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 py-14 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-6">Visão da MARMO</h2>
          <p className="text-xl text-gray-800 dark:text-green-100 leading-relaxed mb-4">
            Ser um centro catalisador para o desenvolvimento e a difusão de soluções inovadoras para o uso sustentável da zona costeira e do mar moçambicano, servindo como exemplo em conservação da natureza para a sociedade e para os sectores públicos e privados.
          </p>
          <p className="text-xl text-gray-800 dark:text-green-100 leading-relaxed">
            Para a consecução de seus objetivos sociais, a <strong className="font-bold text-green-600">MARMO</strong> poderá:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {area.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border-l-4 border-green-500 rounded-2xl p-8 shadow-md transition-transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Missão */}
      <section className="bg-green-100 dark:bg-gray-900 py-14 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-6">Nossa Missão</h2>
          <ul className="text-xl text-gray-800 dark:text-green-100 leading-relaxed space-y-6 text-center list-none pl-6">
            <li>
              <span className="font-semibold text-green-700 dark:text-green-300">Proteção e conservação:</span> Contribuir para a proteção, preservação, conservação, recuperação e manejo sustentável do ambiente costeiro, do património paisagístico e dos bens e valores culturais da costa moçambicana.
            </li>
            <li>
              <span className="font-semibold text-green-700 dark:text-green-300">Ações sustentáveis:</span> Promover ações voltadas aos ecossistemas marinhos e costeiros, buscando a substituição de práticas impactantes por atividades sustentáveis que visam a melhoria de vida das comunidades pesqueiras tradicionais e a manutenção e conservação da biodiversidade.
            </li>
          </ul>
          <Link to={"/volunteer"}>
            <Button variant="ghost" className="mt-8 bg-green-600 hover:bg-green-500 px-8 py-4 rounded text-white font-bold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95">
              Quero ser voluntário!
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Áreas de Atuação */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 text-center py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-green-600 text-center mb-12">Nossas Áreas de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areasDeActuacao.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border-l-4 border-green-500 rounded-2xl p-8 shadow-md transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-4xl font-bold text-green-600 text-center mb-10">
          Perguntas Frequentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-900 border border-green-500 rounded-2xl shadow-md transition-transform hover:scale-105">
                <CardHeader className="flex items-center gap-2">
                  {faq.icon}
                  <CardTitle className="text-blue-900 dark:text-blue-300 text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-950 text-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl dark:text-green-600 font-bold mb-6">
            Junte-se à MARMO na Proteção do Mar Moçambicano
          </h2>
          <p className="text-xl dark:text-green-600 mb-8">
            Sua ajuda pode transformar comunidades costeiras e conservar ecossistemas marinhos únicos.
          </p>
          <Link to={"/donate"}>
            <Button
              className="bg-green-600 hover:bg-green-500 transition px-8 py-4 rounded text-white font-bold text-lg shadow-lg active:scale-95"
            >
              Apoiar a Causa
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};
