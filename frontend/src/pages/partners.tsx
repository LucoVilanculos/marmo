

const partners = [
  {
    name: "Parceiro 1",
    logo: "Logo URL",
    url: "https://example.com",
  },
  {
    name: "Parceiro 2",
   logo: "Logo URL",
    url: "https://example.com",
  },
  {
    name: "Parceiro 3",
    logo: "Logo URL",
    url: "https://example.com",
  },
  {
    name: "Parceiro 4",
    logo: "Logo URL",
    url: "https://example.com",
  },
];

export const Partners = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans min-h-screen py-10">
      <section className="mb-10 ml-6 mt-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 mb-8 drop-shadow-md tracking-wider">
          PARCEIROS MARMO
        </h1>
      </section>
      <p className="text-lg md:text-xl text-blue-700 dark:text-green-300 font-bold mb-10 text-center max-w-2xl">
        Juntos, fortalecemos a proteção do mar moçambicano através de colaboração, ciência e educação.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full px-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center bg-white dark:bg-[#1a263b] border border-blue-100 shadow-xl rounded-2xl p-8 transition-transform hover:scale-105 min-h-[260px]"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-40 h-40 object-contain mb-4 rounded-xl bg-white border-2 border-green-500 shadow-md"
            />
            <h3 className="text-xl font-bold text-green-600 text-center">{partner.name}</h3>
          <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded shadow transition"
            >
              Ver site
            </a>
          </div>
        ))}
      </div>
      <section className="max-w-3xl mx-auto text-center mt-12 px-4">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Por que são importantes?</h2>
        <p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
          Os parceiros da <span className="font-bold text-green-600">MARMO</span> trazem conhecimento, recursos e apoio institucional, tornando possível ampliar o impacto das nossas ações em prol do mar moçambicano.
        </p>
      </section>
    </section>
  );
};