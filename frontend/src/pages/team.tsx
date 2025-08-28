import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

const LOGO_MARMO = "https://res.cloudinary.com/dtopurogz/image/upload/v1752137280/marmo-logo_nq0efc.png";

const estrutura = [
	{
		title: "Assembleia Geral",
		children: [
			{ name: "Ervino Litsure", role: "Presidente", img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219119/Ervinio_Litsure-photo_perfil_gb3mco.jpg" },
			{ name: "Gésica Canivete", role: "Vice-Presidente", img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219127/Gesica_Canivete_Photo_perfil_fgtxwd.jpg" },
			{ name: "Kelly Steffany", role: "Secretariado", img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219112/Kelly_Stefany-photo_perfil_ixgwdm.jpg" },
			{ name: "Lopes Nhampossa", role: "Secretariado", img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219114/Lopes_Namposse_photo_perfil_na7r7m.jpg" },
		],
	},
	{
		title: "Conselho de Administração",
		children: [
			{ name: "Estevão Mazuze", role: "Presidente", img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219122/Estevao_Photo_Perfil_jzysxq.jpg" },
		],
	},
	{
		title: "Conselho Diretivo",
		children: [
			{ name: "Benedito Issa", role: "Presidente", img: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219116/Benedito_ISSA-Fotografia_xzjf1u.jpg" },
			{ name: "Ivaldo Fumo", role: "Vice-Presidente" },
			{ name: "Inácio Mariano", role: "Vogal" },
			{ name: "Kátia Mônica", role: "Vogal" },
			{ name: "Leandro Here", role: "Vogal" },
		],
	},
	{
		title: "Conselho Fiscal",
		children: [
			{ name: "Arcenia Chivale", role: "Presidente" },
			{ name: "Joel Salvador", role: "Vice-Presidente" },
			{ name: "Zequito Manhice", role: "Tesoureiro" },
		],
	},
	{
		title: "Coordenadores Provinciais",
		children: [
			{ name: "Sofia Amade", role: "Coordenadora" },
			{ name: "Elídio Comê", role: "Coordenador" },
			{ name: "Channice Thembe", role: "Coordenadora" },
			{ name: "Edson Bomes", role: "Coordenador" },
			{ name: "Yuri Pfumo", role: "Coordenador" },
			{ name: "Yula Rufino", role: "Coordenadora" },
			{ name: "Amôs António", role: "Coordenador" },
			{ name: "Regina", role: "Coordenadora" },
		],
	},
	{
		title: "Voluntariados",
		children: [
			{ name: "Vários Voluntários", role: "Diversas Funções" },
		],
	},
];

export const Team = () => {
	return (
		<main
			className="font-sans bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen"
			style={{ fontFamily: 'Poppins, sans-serif' }}
		>
			<div className="relative w-full h-[400px] mb-2">
				<img
					src="https://res.cloudinary.com/dtopurogz/image/upload/v1753117060/IMG_20231201_151858_HDR_plbufy.jpg"
					alt="Equipe MARMO"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent" />
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wider text-center">
						ESTRUTURA DA EQUIPA MARMO
					</h1>
				</div>
			</div>

			<section className="text-center py-10 px-6">
				<p className="text-lg md:text-xl text-blue-700 dark:text-green-300 tracking-wider font-bold mt-2">
					Conheça a hierarquia e os integrantes que lideram a MARMO na proteção do mar moçambicano
				</p>
			</section>

			<div className="flex flex-col items-center w-full max-w-5xl px-2 mb-12 gap-10">
				{estrutura.map((orgao, idx) => (
					<motion.div
						key={orgao.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="w-full"
					>
						<Card className="bg-white dark:bg-[#1a263b] border-l-4 border-green-500 shadow-xl rounded-2xl p-6 mb-4">
							<CardHeader>
								<CardTitle className="text-green-600 text-2xl font-bold mb-2">
									{orgao.title}
								</CardTitle>
							</CardHeader>
							<div className="flex flex-wrap gap-6">
								{orgao.children.map((member) => (
									<div
										key={member.name}
										className="flex flex-col items-center text-center transition-transform hover:scale-105 active:scale-95"
									>
										<img
											src={
												member.img
													? member.img
													: LOGO_MARMO
											}
											alt={member.name}
											className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-green-500 bg-white"
											onError={e => { e.currentTarget.src = LOGO_MARMO; }}
										/>
										<p className="text-blue-900 dark:text-blue-300 font-semibold">
											{member.name}
										</p>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											{member.role}
										</p>
									</div>
								))}
							</div>
						</Card>
					</motion.div>
				))}
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
		</main>
	);
};