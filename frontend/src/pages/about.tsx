import { Link } from "react-router";
import { motion } from "framer-motion";

import { Button } from "../components/ui/button";

const aboutItems = [
	{
		title: "Unidades de Conservação",
		desc: "Incentivar, criar e/ou manter unidades de conservação costeiras e marinhas, contribuindo para a proteção do patrimônio natural e da diversidade biológica.",
	},
	{
		title: "Pesquisa e Inovação",
		desc: "Desenvolver, apoiar e incentivar atividades de pesquisa científica, ensino, extensão e inovação tecnológica.",
	},
	{
		title: "Tecnologias Alternativas",
		desc: "Produzir e difundir tecnologias alternativas que promovam o desenvolvimento socialmente justo, ecologicamente adequado e economicamente viável.",
	},
	{
		title: "Ações Sociais e Turismo",
		desc: "Apoiar ações sociais, culturais, educacionais e de turismo ecológico e científico com foco nos ecossistemas e nas comunidades costeiras.",
	},
	{
		title: "Fortalecimento Institucional",
		desc: "Promover o fortalecimento institucional de organismos públicos e privados dedicados à implementação de políticas públicas.",
	},
];

export const About = () => {
	return (
		<section className="flex flex-col bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans">
			<section className="text-center py-10 px-6">
            	<h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
					QUEM SOMOS
            	</h1>
      		</section>

			<img
		            src="https://res.cloudinary.com/dtopurogz/image/upload/v1752137298/marmo-pic_a38zca.jpg"
		            alt="Marmo Pic"
		            className="h-[400px] object-cover mb-2 shadow-md w-full"
         		 />

			<p className="max-w-4xl m-auto text-base md:text-lg text-center mb-10 p-4 text-black dark:text-gray-300">
				A Associação Mar Mocambique{" "},
				<strong className="font-bold text-green-600">MARMO</strong>, é uma pessoa coletiva de direito privado, sem
fins lucrativos, dotada de personalidade jurídica, autonomia administrativa, financeira e
patrimonial com a sede na cidade de Quelimane, na província da Zambézia e delegações em
todo o país.
			</p>

			<section className="bg-green-100 dark:bg-gray-900 py-10 px-6 text-center">
        		<motion.div
          			initial={{ opacity: 0, y: 50 }}
          			whileInView={{ opacity: 1, y: 0 }}
          			transition={{ duration: 0.6 }}
          			viewport={{ once: true }}
          			className="max-w-4xl mx-auto"
        		>	
          			<h2 className="text-3xl font-bold text-green-600 mb-6">Nossos Objectivos</h2>
          			<p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
            			A <strong className="text-green-600">MARMO</strong> foi criado com objectivo primordial
de promover a manutenção da diversidade
biológica, considerada em termos genéticos
pacíficos e ecossistemáticos, do mar
moçambicano.
          			</p>
          
        		</motion.div>
      		</section>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-8 mb-8 p-6 w-full ">
				{aboutItems.map((item, idx) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-[#1a233a] rounded-xl shadow-lg p-6 border-l-4 border-green-500 transition-transform hover:scale-105"
					>
						<h2 className="text-xl font-bold text-green-600 mb-2">
							{item.title}
						</h2>
						<p className="text-gray-600 dark:text-gray-200">{item.desc}</p>
					</motion.div>
				))}
			</div>

			

			<section className="bg-blue-950 text-white w-full py-13 px-6 text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto"
				>
					<h2 className="text-2xl md:text-4xl font-bold mb-4 text-green-500">
						Gostaria de ser voluntário?
					</h2>
					<p className="text-lg text-blue-100 mb-6">
						Se você ama o mar, acredita na força da comunidade e quer fazer parte da transformação ambiental em Moçambique, junte-se à nossa rede de voluntários.
					</p>
					<Link to={"/volunteer"}>
						<Button
							className="bg-green-600 hover:bg-green-600 transition px-6 py-3 rounded text-white font-semibold"
						>
							Candidatar-se como Voluntário
						</Button>
					</Link>
				</motion.div>
			</section>

		</section>
	);
};
