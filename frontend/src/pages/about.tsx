import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { getFaqs, createFaq } from "../services/faqs";

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

const faqsFantasmas = [
	{
		question: "Como a MARMO protege os mangais?",
		answer:
			"Realizamos reflorestamento, monitoramento e educação ambiental para garantir a sobrevivência dos mangais e das espécies que dependem deles.",
	},
	{
		question: "Posso ser voluntário sem experiência?",
		answer:
			"Sim! Oferecemos capacitação e atividades para todos os perfis, basta vontade de ajudar.",
	},
	{
		question: "Quais projetos de conservação estão ativos?",
		answer:
			"Atualmente, atuamos em reflorestamento de mangais, limpeza de praias e educação ambiental nas comunidades costeiras.",
	},
	{
		question: "Como faço para participar das ações?",
		answer:
			"Acesse a página de voluntariado, preencha o formulário e aguarde nosso contato.",
	},
	{
		question: "A MARMO aceita doações?",
		answer:
			"Sim! Você pode doar pela página de doações ou entrar em contato para apoiar nossos projetos.",
	},
];

export const About = () => {
	const [faqs, setFaqs] = useState<any[]>([]);
	const [question, setQuestion] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getFaqs()
			.then((data) => {
				// Se não houver FAQ no backend, mostra fantasmas
				if (Array.isArray(data) && data.length > 0) {
					setFaqs(data);
				} else {
					setFaqs(faqsFantasmas);
				}
			})
			.catch(() => setFaqs(faqsFantasmas));
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setSuccessMsg("");
		setErrorMsg("");
		try {
			await createFaq({ question });
			setSuccessMsg("Pergunta enviada! Em breve será respondida.");
			setQuestion("");
			getFaqs().then(setFaqs);
		} catch {
			setErrorMsg("Erro ao enviar pergunta. Tente novamente.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main
			className="font-sans bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800"
			style={{ fontFamily: "Poppins, sans-serif" }}
		>
			{/* Hero Section */}
			<div className="relative w-full h-[400px] mb-2">
				<img
					src="https://res.cloudinary.com/dtopurogz/image/upload/v1753117060/IMG_20231201_151858_HDR_plbufy.jpg"
					alt="Marmo Pic"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent" />
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-6xl md:text-7xl font-black text-blue-600 dark:text-green-600 drop-shadow-md tracking-wider text-center">
						QUEM SOMOS
					</h1>
				</div>
			</div>

			{/* Sobre a MARMO */}
			<section className="max-w-4xl mx-auto py-12 px-4">
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-left"
				>
					Sobre a MARMO
				</motion.h2>
				<p className="text-lg md:text-xl text-gray-800 dark:text-green-100 leading-relaxed mb-6">
					A MARMO é uma organização dedicada à conservação marinha, educação
					ambiental e desenvolvimento sustentável das comunidades costeiras de
					Moçambique. Nossa missão é proteger a biodiversidade, promover práticas
					sustentáveis e fortalecer a resiliência das populações locais.
				</p>
			</section>

			{/* Áreas de Atuação */}
			<section className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 py-14 px-6">
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-green-600 mb-10 text-left"
				>
					Áreas de Atuação
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{aboutItems.map((item, i) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-900 border-l-4 border-green-500 rounded-2xl p-8 shadow-md transition-transform hover:scale-105"
						>
							<h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">
								{item.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* FAQ Card */}
			<section className="max-w-3xl mx-auto my-14 bg-white dark:bg-[#1a233a] rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
				<h2 className="text-2xl font-bold text-blue-700 dark:text-green-400 mb-4 text-center">
					Perguntas Frequentes (FAQ)
				</h2>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col md:flex-row gap-4 mb-6"
				>
					<input
						type="text"
						className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-[#232e47] dark:text-white"
						placeholder="Envie sua pergunta..."
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						required
						disabled={loading}
					/>
					<Button type="submit" disabled={loading || !question.trim()}>
						{loading ? "Enviando..." : "Perguntar"}
					</Button>
				</form>
				{successMsg && <div className="text-green-600 mb-2">{successMsg}</div>}
				{errorMsg && <div className="text-red-500 mb-2">{errorMsg}</div>}

				<div className="space-y-4 mt-6">
					{faqs.length === 0 && (
						<div className="text-gray-400 text-center">
							Nenhuma FAQ respondida ainda.
						</div>
					)}
					{faqs
						.filter((faq) => faq.answer)
						.map((faq, idx) => (
							<motion.div
								key={faq._id || idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 shadow"
							>
								<div className="font-semibold text-blue-700 dark:text-green-300">
									{faq.question}
								</div>
								<div className="text-gray-700 dark:text-gray-200 mt-2">
									{faq.answer}
								</div>
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
						Sua ajuda pode transformar comunidades costeiras e conservar
						ecossistemas marinhos únicos.
					</p>
					<Button className="bg-green-600 hover:bg-green-500 transition px-8 py-4 rounded text-white font-bold text-lg shadow-lg">
						Quero ser voluntário!
					</Button>
				</motion.div>
			</section>
		</main>
	);
};
