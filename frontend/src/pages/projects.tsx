export const Projects = () => {
  const projects = [
    {
      title: "Projecto Cultivo e plantio de Mudas de Mangal",
      description: "Ações de reabilitação e conservação dos mangais, essenciais para a biodiversidade costeira.",
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    },
    {
      title: "Programa de monitoramento de espécies em vias de extinção e controle das áreas de proteção parcial",
      description: "Monitoramento de espécies ameaçadas e proteção de áreas marinhas críticas.",
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    },
    {
      title: "Programa de descontaminação nos mangais, Educação ambiental e saúde sexual reprodutiva",
      description: "Educação ambiental e ações de descontaminação para proteger os mangais e promover a saúde comunitária.",
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg",
    },
    {
      title: "Programa de Literacia oceânica e climática",
      description: "Iniciativas de educação para aumentar a conscientização sobre os oceanos e as mudanças climáticas.",
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    },
    {
      title: "Projecto PescaMar- empoderamento a pesca artesanal",
      description: "Empoderamento de comunidades pesqueiras artesanais para práticas sustentáveis e conservação marinha.",
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    },
    {
      title: "Pesquisas e investigações oceanográficas",
      description: "Realização de pesquisas para entender melhor os ecossistemas marinhos e suas dinâmicas.",
      img: "https://res.cloudinary.com/dtopurogz/image/upload/v1752137290/live_ad6irp.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans min-h-screen py-10">
  <section className="mb-10 ml-6 mt-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 mb-8 drop-shadow-md tracking-wider">
        PROJECTOS MARMO
      </h1>
  </section>
      <p className="text-lg md:text-xl text-blue-700 dark:text-green-300 font-bold mb-10 text-center max-w-2xl">
        Conheça os principais projectos que promovem a conservação e educação ambiental no mar moçambicano.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-[#1a263b] border border-blue-100 shadow-2xl rounded-2xl flex flex-col items-center p-8 min-h-[480px] transition-transform hover:scale-105"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
            />
            <h2 className="text-green-600 text-2xl font-bold mb-4 text-center">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-200 text-base text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}