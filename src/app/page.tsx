'use client'
import RedesSociais from "@/components/RedesSociais/RedesSociais";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

	const listaDeProjetos = [
		{
			nome: 'Gamerzone',
			imagem: '/logo/logo-gamer-zone.png',
			link: 'https://gamerzone-nu.vercel.app/'
		},
		{
			nome: 'AutoEscola',
			imagem: '/logo/logo-autoescola.png',
			link: '/https://autoescola-nine.vercel.app/'
		},
		{
			nome: 'Prefeitura Joaquim Távora',
			imagem: '/logo/logo-prefeitura.png',
			link: 'https://prefeitura-municipal-de-joaquim-tavora-pr.vercel.app/'
		},
		{
			nome: 'Quiz - Perguntas e Respostas',
			imagem: '/logo/logo-quiz.png',
			link: 'https://quiz-gold-beta.vercel.app/'
		},
		{
			nome: 'Lista de Tarefas',
			imagem: '/logo/logo-lista-de-tarefas.png',
			link: 'https://lista-de-tarefas-phi-sage.vercel.app/'
		},
		{
			nome: 'MontHall',
			imagem: '/logo/logo-monthall.png',
			link: 'https://monthall.vercel.app/'
		},
		{
			nome: 'Tempo Certo',
			imagem: '/logo/logo-tempo-certo.png',
			link: 'https://tempo-certo-mu.vercel.app/'
		},
		{
			nome: 'Crud',
			imagem: '/logo/logo-crud.png',
			link: 'https://crud-two-pi.vercel.app/'
		},
	]
	return (
		<div className="w-full bg-dark-gradient bg-[length:200%_200%] animate-gradient-x font-poppins">
			<div className="flex flex-col gap-4 p-3 max-w-[900px] mx-auto">
				<h2 className="text-4xl font-bold text-center font-boogaloo tracking-wider">Lista de Projetos</h2>
				<ul className="flex flex-col gap-2">
					{
						listaDeProjetos.map((projeto, i) => {
							return (
								<li className="bg-black w-full h-full p-2 rounded-lg md:px-4" key={i}>
									<Link href={projeto.link} className="grid items-center gap-2" style={{ gridTemplateColumns: '50px 1fr' }}>
										<div className="relative w-12 h-12">
											<Image alt={projeto.nome} src={projeto.imagem} fill className="object-contain"></Image>
										</div>
										<h2 className="font-bold text-2xl whitespace-nowrap truncate">{projeto.nome}</h2>
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
			<div className="mt-auto bg-black p-3 italic">
				<p>Lista de Projetos desenvolvido por Dimi Endrix Martins Miranda</p>
				<RedesSociais />
			</div>
		</div>
	);
}
