import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

const conselhoDirecao = [
	{
		name: "Nome do Director",
		role: "Director Executivo",
		img: "foto do director",
	},
	{
		name: "Nome do Vice-Director",
		role: "Vice-Director",
		img: "Foto do Vice-Director", 
	},
	{
		name: "Nome 1",
		role: "Vogal",
		img: "foto do vogal 1", 
	},
	{
		name: "Nome 2",
		role: "Vogal",
		img: "foto do vogal 2",
	},
	{
		name: "Nome 3",
		role: "Vogal",
		img: "foto do vogal 3",
	},
];

const outrosOrgaos = [
	{
		name: "Orgão 1",
		role: "Secretário",
		img: "foto do secretário",
	},
	{
		name: "Orgão 2",
		role: "Tesoureiro",
		img: "foto do tesoureiro",
	},
	{
		name: "Orgão 3",
		role: "Secretário Adjunto",
		img: "foto do secretário adjunto",
	},
];

export const Team = () => {
	return (
		<section className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans min-h-screen">
			<section className="text-center py-10 px-6">
				<h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider">
					ESTRUTURA DA EQUIPA MARMO
				</h1>
				<p className="text-lg md:text-xl text-blue-700 dark:text-green-300 tracking-wider font-bold mt-2">
					Conheça a hierarquia e os integrantes que lideram a MARMO na proteção do
					mar moçambicano
				</p>
			</section>

			
			<div className="flex flex-col items-center w-full max-w-5xl px-2 mb-12">
			
				<div className="flex flex-row justify-center items-stretch w-full gap-6 mb-8">
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="flex flex-col items-center h-full"
					>
						<Card className="bg-white dark:bg-[#1a263b] border border-green-300 shadow-xl rounded-xl flex flex-col items-center p-6 min-w-[220px] min-h-[240px] h-full">
							<img
								src={conselhoDirecao[0].img}
								alt={conselhoDirecao[0].name}
								className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-500"
							/>
							<CardHeader className="text-center w-full">
								<CardTitle className="text-green-600 text-xl font-bold">
									{conselhoDirecao[0].name}
								</CardTitle>
								<p className="text-blue-900 dark:text-blue-300 font-semibold">
									{conselhoDirecao[0].role}
								</p>
							</CardHeader>
						</Card>
					</motion.div>

	
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="flex flex-col items-center h-full"
					>
						<Card className="bg-white dark:bg-[#1a263b] border border-green-300 shadow-xl rounded-xl flex flex-col items-center p-6 min-w-[220px] min-h-[240px] h-full">
							<img
								src={conselhoDirecao[1].img}
								alt={conselhoDirecao[1].name}
								className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-500"
							/>
							<CardHeader className="text-center w-full">
								<CardTitle className="text-green-600 text-xl font-bold">
									{conselhoDirecao[1].name}
								</CardTitle>
								<p className="text-blue-900 dark:text-blue-300 font-semibold">
									{conselhoDirecao[1].role}
								</p>
							</CardHeader>
						</Card>
					</motion.div>
				</div>

			
				<div className="flex flex-row justify-center items-stretch w-full mb-8 gap-6">
					{conselhoDirecao.slice(2).map((member, idx) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
							viewport={{ once: true }}
							className="flex flex-col items-center"
						>
							<Card className="bg-white dark:bg-[#1a263b] border border-blue-100 shadow-xl rounded-xl flex flex-col items-center p-6 min-w-[180px] min-h-[240px] h-full">
								<img
									src={member.img}
									alt={member.name}
									className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-500"
								/>
								<CardHeader className="text-center w-full">
									<CardTitle className="text-green-600 text-lg font-bold">
										{member.name}
									</CardTitle>
									<p className="text-blue-900 dark:text-blue-300 font-semibold">
										{member.role}
									</p>
								</CardHeader>
							</Card>
						</motion.div>
					))}
				</div>

				
			
				<div className="flex flex-row justify-center items-stretch w-full mt-8 gap-6">
					{outrosOrgaos.map((member, idx) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
							viewport={{ once: true }}
							className="flex flex-col items-center"
						>
							<Card className="bg-white dark:bg-[#1a263b] border border-blue-100 shadow-xl rounded-xl flex flex-col items-center p-6 min-w-[180px] min-h-[240px] h-full">
								<img
									src={member.img}
									alt={member.name}
									className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-500"
								/>
								<CardHeader className="text-center w-full">
									<CardTitle className="text-green-600 text-lg font-bold">
										{member.name}
									</CardTitle>
									<p className="text-blue-900 dark:text-blue-300 font-semibold">
										{member.role}
									</p>
								</CardHeader>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			<section className="max-w-3xl mx-auto text-center mb-10 px-4">
				<h2 className="text-2xl font-bold text-green-600 mb-4">
					Nossa missão como equipa
				</h2>
				<p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
					A equipa da{" "}
					<span className="font-bold text-green-600">MARMO</span> é formada por
					profissionais e voluntários apaixonados pela conservação marinha,
					educação ambiental e desenvolvimento sustentável. Juntos, trabalhamos para
					proteger a biodiversidade do mar moçambicano e fortalecer as comunidades
					costeiras.
				</p>
			</section>
		</section>
	);
};