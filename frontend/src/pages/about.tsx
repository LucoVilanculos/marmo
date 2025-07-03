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
		<section className="flex flex-col items-center px-4 py-8 font-sans">
			<h1 className="text-4xl text-green-600 font-bold mb-6 text-center">
				Sobre Nós
			</h1>

			<div className="mb-2 flex justify-center">
				<img
					src="/marmo-logo.png"
					alt="Logo da MARMO"
					className="rounded shadow-lgs max-w-xs h-28 object-contain"
				/>
			</div>

			<p className="max-w-2xl text-base md:text-lg text-center mb-10 text-black dark:text-gray-300">
				A{" "}
				<strong className="font-bold text-green-600">MARMO</strong> foi criada
				para promover a manutenção da diversidade biológica do mar moçambicano
				considerada em termos genéticos, específicos e ecossistematicos podendo
				actuar também em outros setores, com foco em:
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl w-full">
				{aboutItems.map((item, idx) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-[#1a233a] rounded-xl shadow-lg p-6 border-l-4 border-green-500"
					>
						<h2 className="text-xl font-bold text-green-700 mb-2">
							{item.title}
						</h2>
						<p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
					</motion.div>
				))}
			</div>
			<section className="bg-indigo-950 text-white py-16 px-6 text-center">
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
							className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded text-white font-semibold"
						>
							Candidatar-se como Voluntário
						</Button>
					</Link>
				</motion.div>
			</section>

		</section>
	);
};
