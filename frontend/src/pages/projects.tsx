import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { HeartHandshake, X } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Projecto Cultivo e Plantio de Mudas de Mangal",
      description: (
        <div className="space-y-4 text-left">
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Visão:</span> Promover a restauração ecológica e a valorização socioeconômica das comunidades costeiras por meio da recuperação de ecossistemas de mangal, assegurando resiliência climática, segurança alimentar e conservação da biodiversidade.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Objetivos:</span>
            <ul className="list-disc ml-6">
              <li>Restaurar e conservar áreas degradadas de mangal em Maputo e Zambézia.</li>
              <li>Reforçar a resiliência das comunidades costeiras frente às mudanças climáticas.</li>
              <li>Gerar alternativas sustentáveis de renda através de atividades ligadas ao mangal (pesca, apicultura, ecoturismo e educação ambiental).</li>
              <li>Promover a participação comunitária e fortalecer capacidades locais em técnicas de reflorestamento e gestão comunitária dos recursos naturais.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Público alvo:</span> 30 famílias costeiras inclusas nas atividades e 10 hectares restaurados.<br />
            <span className="font-bold text-blue-700 dark:text-green-300">Localização:</span> Maputo e Zambézia.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Metas:</span>
            <ul className="list-disc ml-6">
              <li>Plantar 50.000 mudas de mangal até 2025.</li>
              <li>Restaurar 10 hectares de ecossistemas de mangal.</li>
              <li>Capacitar 30 famílias em técnicas de reflorestamento, maneio sustentável e economia azul comunitária.</li>
              <li>Criar 2 comités de gestão comunitária para a manutenção das áreas restauradas.</li>
              <li>Implementar programas de sensibilização e educação ambiental para escolas locais, envolvendo pelo menos 300 ativistas.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Resultados:</span>
            <ul className="list-disc ml-6">
              <li>Redução da erosão costeira e aumento da proteção natural contra eventos climáticos extremos.</li>
              <li>Melhoria da biodiversidade marinha e terrestre associada ao mangal.</li>
              <li>Geração de renda adicional para famílias envolvidas (através de produtos sustentáveis derivados do mangal, como mel, viveiros e turismo comunitário).</li>
              <li>Fortalecimento da consciência ambiental e engajamento comunitário em práticas sustentáveis.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Financiador/doador:</span> MARMO
          </p>
        </div>
      ),
      img:"https://res.cloudinary.com/dtopurogz/image/upload/v1753118274/IMG_20231218_101153_ut8ba5.jpg",
    },
    {
      title: "Programa de monitoramento de espécies em vias de extinção e controle das áreas de proteção parcial",
      description: "Monitoramento de espécies ameaçadas e proteção de áreas marinhas críticas.",
      img: "https://res.cloudinary.com/dybll7vsv/image/upload/v1753642268/IMG-20230926-WA0005_w2hfad.jpg",
    },
    {
      title: "Programa de descontaminação nos mangais",
      description: (
        <div className="space-y-4 text-left">
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Visão:</span> Promover a restauração e preservação dos ecossistemas de mangal em Moçambique, através da descontaminação de áreas críticas, reforçando a resiliência costeira, a biodiversidade e a qualidade de vida das comunidades locais.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Objetivos:</span>
            <ul className="list-disc ml-6">
              <li>Identificar e remover fontes de contaminação em áreas de mangal nas províncias de Maputo e Zambézia.</li>
              <li>Restaurar áreas degradadas, promovendo condições adequadas para regeneração natural e reflorestamento.</li>
              <li>Sensibilizar e capacitar comunidades locais, escolas e autoridades sobre a importância da conservação dos mangais.</li>
              <li>Criar parcerias institucionais e comunitárias para a gestão sustentável das zonas costeiras.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Público alvo:</span> mais de 11 hectares descontaminados, mais de 300 utentes/munícipes envolvidos e sensibilizados.<br />
            <span className="font-bold text-blue-700 dark:text-green-300">Localização:</span> Maputo e Zambézia.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Metas:</span>
            <ul className="list-disc ml-6">
              <li>Descontaminar e restaurar pelo menos 11 hectares de mangal até 2025.</li>
              <li>Reduzir em 30% os resíduos sólidos e outros agentes poluentes identificados nas áreas alvo.</li>
              <li>Conduzir 12 campanhas de sensibilização comunitária e escolar sobre gestão costeira e proteção dos mangais.</li>
              <li>Capacitar 100 líderes comunitários e técnicos municipais em práticas de conservação e descontaminação ambiental.</li>
              <li>Estabelecer protocolos de cooperação entre municípios, sociedade civil e setor privado para continuidade da ação.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Resultados:</span>
            <ul className="list-disc ml-6">
              <li>Mangais mais saudáveis e resilientes, contribuindo para a biodiversidade marinha e proteção costeira.</li>
              <li>Comunidades costeiras mais conscientes e envolvidas na gestão ambiental.</li>
              <li>Aumento da qualidade de vida das populações dependentes dos recursos pesqueiros.</li>
              <li>Redução da vulnerabilidade ambiental urbana nas zonas de Maputo e Quelimane.</li>
              <li>Fortalecimento da governança local para a proteção dos ecossistemas de mangal.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Financiador/doador:</span> KrustaMoz, TRAC, Conselho Municipal da cidade de Quelimane (Bloomberg Philanthropic).
          </p>
        </div>
      ),
      img: "https://res.cloudinary.com/dybll7vsv/image/upload/v1753642166/IMG-20211210-WA0242_ubf7gf.jpg",
    },
    
    {
      title: "Clubes Ambientais nas escolas : ’’Blue school Project’’-2022-2027",
      description: (
        <div className="space-y-4 text-left">
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Visão:</span> Promover uma geração de crianças e jovens conscientes, responsáveis e engajados na preservação do ambiente marinho e terrestre.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Objetivos:</span>
            <ul className="list-disc ml-6">
              <li>Integrar a educação ambiental e literacia oceânica de forma prática e contínua no processo de ensino-aprendizagem.</li>
              <li>Sensibilizar crianças e professores sobre a importância da conservação marinha, costeira e terrestre.</li>
              <li>Estimular a adoção de práticas sustentáveis nas escolas e nas comunidades locais.</li>
              <li>Criar espaços de participação juvenil para liderança ambiental e cidadania ativa.</li>
              <li>Estabelecer parcerias entre escolas, famílias e comunidades para fortalecer ações de impacto coletivo.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Público alvo:</span> 5 escolas, envolvendo diretamente mais de 350 crianças e 50 professores.<br />
            <span className="font-bold text-blue-700 dark:text-green-300">Localização:</span> Maputo e Zambézia, Moçambique.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Metas:</span>
            <ul className="list-disc ml-6">
              <li>Criar e consolidar 5 Clubes Ambientais ativos em escolas primárias e secundárias.</li>
              <li>Capacitar pelo menos 50 professores em metodologias de educação ambiental e oceânica.</li>
              <li>Engajar mais de 350 crianças em atividades regulares de proteção ambiental e artística.</li>
              <li>Realizar 2 feiras/exposições anuais para apresentar os resultados e boas práticas das escolas.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Resultados:</span>
            <ul className="list-disc ml-6">
              <li>Escolas mais sustentáveis, com práticas ambientais incorporadas na rotina escolar.</li>
              <li>Crianças e professores empoderados como multiplicadores ambientais nas suas comunidades.</li>
              <li>Redução significativa da má gestão de resíduos sólidos nos arredores das escolas.</li>
              <li>Aumento do conhecimento sobre biodiversidade, oceanos e mudanças climáticas entre alunos e professores.</li>
              <li>Fortalecimento da colaboração entre escolas, famílias e comunidades em torno da proteção ambiental.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Financiador/doador:</span> MARMO.
          </p>
        </div>
      ),
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756218736/IMG-20220913-WA0030_lxvwiy.jpg",
    },
    {
      title: "Aquatrat Project : “Aquacultura e conservação, proteção de espécies Marinhas”-2021-2026",
      description: (
        <div className="space-y-4 text-left">
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Visão:</span> Promover a coexistência sustentável entre comunidades costeiras e os ecossistemas marinhos, através da aquacultura comunitária e da conservação de espécies ameaçadas, garantindo segurança alimentar, geração de renda e preservação da biodiversidade.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Objetivos:</span>
            <ul className="list-disc ml-6">
              <li>Desenvolver práticas sustentáveis de aquacultura como alternativa económica para as comunidades costeiras.</li>
              <li>Conservar e proteger espécies marinhas vulneráveis e em risco de extinção.</li>
              <li>Fortalecer capacidades técnicas de pescadores artesanais e CCP’s em gestão de recursos marinhos.</li>
              <li>Promover educação ambiental e sensibilização comunitária para a proteção dos ecossistemas marinhos.</li>
              <li>Contribuir para a redução da pressão da pesca excessiva e da degradação dos habitats.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Público alvo:</span> 3 CCP’s e 17 pescadores (3 tanques de aquacultura e 7 espécies em conservação e proteção).<br />
            <span className="font-bold text-blue-700 dark:text-green-300">Localização:</span> Inhambane, Zambézia, Moçambique.
          </p>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Metas:</span>
            <ul className="list-disc ml-6">
              <li>Instalar e operacionalizar 3 tanques de aquacultura comunitária até 2024.</li>
              <li>Reduzir em 30% a pressão sobre a captura de espécies marinhas ameaçadas até 2026.</li>
              <li>Reforçar a conservação de pelo menos 7 espécies prioritárias de fauna marinha.</li>
              <li>Capacitar 120 membros comunitários (incluindo jovens e mulheres) em aquacultura e conservação.</li>
              <li>Criar uma rede comunitária de monitoria e proteção dos ecossistemas costeiros.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-blue-700 dark:text-green-300">Resultados:</span>
            <ul className="list-disc ml-6">
              <li>Comunidades costeiras com fontes alternativas de renda através da aquacultura sustentável.</li>
              <li>Espécies marinhas prioritárias monitoradas e protegidas em colaboração com CCP’s.</li>
              <li>Aumento do conhecimento comunitário em gestão de recursos marinhos.</li>
              <li>Redução da dependência da pesca predatória.</li>
              <li>Fortalecimento institucional da MARMO e dos CCP’s na conservação costeira.</li>
            </ul>
          </div>
          <p>
            <span className="font-bold text-blue-700 dark:text-green-300">Financiador/doador:</span> Embaixada da França em Moçambique; MARMO.
          </p>
        </div>
      ),
      img: "https://res.cloudinary.com/dybll7vsv/image/upload/v1753642213/WhatsApp_Image_2024-09-18_at_16.25.57_1_lccpcw.jpg",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openCard = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <main
      className="font-sans bg-gradient-to-b from-blue-50 via-green-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Botão de doar fixo no topo */}
      <div className="w-full flex justify-end px-6 pt-6">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-lg transition active:scale-95"
          asChild
        >
          <a href="/donate">
            <HeartHandshake className="w-5 h-5" />
            Doar
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-2">
        <img
          src="https://res.cloudinary.com/dtopurogz/image/upload/v1753118274/IMG_20231218_101153_ut8ba5.jpg"
          alt="Projetos MARMO"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-200/80 via-green-200/60 to-gray-100/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 drop-shadow-lg tracking-wider text-center">
            PROJECTOS MARMO
          </h1>
        </div>
      </div>

      <section className="flex flex-col items-center py-10">
        <p className="text-lg md:text-xl text-green-700 dark:text-green-300 font-bold mb-10 text-center max-w-2xl">
          Conheça os principais projectos que promovem a conservação e educação ambiental no mar moçambicano.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              onClick={() => openCard(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1a263b] border-l-4 border-green-500 shadow-2xl rounded-2xl flex flex-col items-center p-8 min-h-fit transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                onError={e => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Projeto&background=green&color=white"; }}
              />
              <h2 className="text-green-700 text-2xl font-bold mb-4 text-center">{project.title}</h2>
            </motion.button>
          ))}
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-2xl w-full bg-white border border-green-500 dark:bg-[#151d29] px-0 py-0"
          style={{
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Botão de fechar */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow-lg transition active:scale-90"
            aria-label="Fechar"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedProject && (
            <>
              <DialogHeader className="sticky top-0 z-10 bg-white dark:bg-[#151d29] px-6 pt-6 pb-2 border-b border-green-500">
                <DialogTitle className="text-green-700 dark:text-green-300 text-2xl font-bold text-center">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div
                className="overflow-y-auto px-6 pb-6 pt-2"
                style={{ maxHeight: "calc(90vh - 70px)" }}
              >
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg"
                  onError={e => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Projeto&background=green&color=white"; }}
                />
                <div className="text-gray-800 dark:text-green-100 text-lg text-left">
                  {selectedProject.description}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Botão de doar no final da página */}
      <div className="flex justify-center py-10">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-lg transition active:scale-95"
          asChild
        >
          <a href="/donate">
            <HeartHandshake className="w-5 h-5" />
            Doar
          </a>
        </Button>
      </div>
    </main>
  );
};