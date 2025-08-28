import { motion } from "framer-motion";

const partners = [
	{
		name: "Parceiro 1",
		logo: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219119/Ervinio_Litsure-photo_perfil_gb3mco.jpg",
		url: "https://example.com",
	},
	{
		name: "Parceiro 2",
		logo: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219127/Gesica_Canivete_Photo_perfil_fgtxwd.jpg",
		url: "https://example.com",
	},
	{
		name: "Parceiro 3",
		logo: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219112/Kelly_Stefany-photo_perfil_ixgwdm.jpg",
		url: "https://example.com",
	},
	{
		name: "Parceiro 4",
		logo: "https://res.cloudinary.com/dtopurogz/image/upload/v1756219114/Lopes_Namposse_photo_perfil_na7r7m.jpg",
		url: "https://example.com",
	},
];

export const Partners = () => {
	return (
		<main
			className="font-sans bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen"
			style={{ fontFamily: "Poppins, sans-serif" }}
		>
			{/* Hero Section */}
			<div className="relative w-full h-[350px] mb-2">
				<img
					src="https://res.cloudinary.com/dtopurogz/image/upload/v1753117060/IMG_20231201_151858_HDR_plbufy.jpg"
					alt="Parceiros MARMO"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent" />
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-6xl md:text-7xl font-black text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider text-center">
						PARCEIROS MARMO
					</h1>
				</div>
			</div>

			<section className="mb-10 mt-6">
				<p className="text-lg md:text-xl text-blue-700 dark:text-green-300 font-bold mb-10 text-center max-w-2xl mx-auto">
					Juntos, fortalecemos a proteção do mar moçambicano através de
					colaboração, ciência e educação.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full px-6 mx-auto">
					{partners.map((partner, i) => (
						<motion.div
							key={partner.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true }}
							className="flex flex-col items-center bg-white border border-green-500 dark:bg-[#1a263b] shadow-xl rounded-2xl p-8 transition-transform hover:scale-105 active:scale-95 min-h-[260px]"
						>
							<img
								src={partner.logo}
								alt={partner.name}
								className="w-32 h-32 object-contain mb-4 rounded-xl bg-white border-2 border-green-500 shadow-md"
								onError={(e) => {
									e.currentTarget.src =
										"https://ui-avatars.com/api/?name=Parceiro&background=green&color=white";
								}}
							/>
							<h3 className="text-xl font-bold text-green-600 text-center mb-2">
								{partner.name}
							</h3>
							<a
								href={partner.url}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded shadow transition active:scale-95"
							>
								Ver site
							</a>
						</motion.div>
					))}
				</div>
			</section>

			<section className="max-w-3xl mx-auto text-center mt-12 px-4">
				<h2 className="text-2xl font-bold text-green-600 mb-4">
					Por que são importantes?
				</h2>
				<p className="text-lg text-gray-800 dark:text-green-100 leading-relaxed">
					Os parceiros da{" "}
					<span className="font-bold text-green-600">MARMO</span> trazem
					conhecimento, recursos e apoio institucional, tornando possível
					ampliar o impacto das nossas ações em prol do mar moçambicano.
				</p>
			</section>
		</main>
	);
};