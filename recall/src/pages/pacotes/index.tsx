import Link from "next/link";
import Layout from "../../components/templates/layout/Layout";
import CardPacote from "../../components/templates/cards/CardPacote";
import CategoriaModel from "../../model/Categoria";
import PacoteModel from "../../model/Pacote";
import { useEffect, useState } from "react";
import { useCategoriaContext } from "../../docs/hook/useCategoria";
import { usePacoteContext } from "../../docs/hook/usePacote";
import { IconeMais } from "../../components/icons/Icones";
import CardPergunta from "../../components/templates/cards/CardPergunta";
import Botao from "../../components/templates/botoes/Botao";
import useAuth from './../../docs/hook/useAuth';

export default function Pacotes() {
	const { usuario } = useAuth()

	const [categorias, setCategorias] = useState<CategoriaModel[]>([])
	const [pacotes, setPacotes] = useState<PacoteModel[]>([])

	const [perguntasFiltradas, setPerguntasFiltradas] = useState([])
	const [estudando, setEstudando] = useState(false)
	const [revelada, setRevelada] = useState(false)
	const [indice, setIndice] = useState(0)

	const { obterCategorias } = useCategoriaContext()
	const { obterPacotes } = usePacoteContext()

	useEffect(() => {
		obterTodosPacotes()
        obterTodasCategorias()
    }, [])

	function obterTodasCategorias() {
        obterCategorias().then(categorias => {
            setCategorias(categorias)
        })
    }

    function obterTodosPacotes() {
        obterPacotes().then(pacotes => {
            setPacotes(pacotes)
        })
    }

	function incrementarIndice(indice) {
		if(indice === perguntasFiltradas.length - 1) {
			setEstudando(false)
			setRevelada(false)
			setIndice(0)
		} else {
			setIndice(indice + 1)
			setRevelada(false)
		}

	}

	function exibirCardsFiltrados(categoria, estudando = false) {
		const perguntasFiltradas = pacotes.map(pacote => {
			if(categoria === pacote.nomeCategoria && pacote.idUsuarioAtual === usuario?.uid) {
				return `{ "pergunta": "${pacote.pergunta}", "resposta": "${pacote.resposta}", "revelada": "${pacote.respostaRevelada}" }`
			}
		}).filter(pacote => pacote !== undefined).map(json => JSON.parse(json))

		setPerguntasFiltradas(perguntasFiltradas)
		setEstudando(estudando)
	}

	function renderizarPacotes() {
		return categorias.map((categoria => {
			if(categoria.idUsuarioAtual === usuario?.uid) {
				return (
					<CardPacote key={categoria.id} categoria={categoria.categoria} onClick={() => exibirCardsFiltrados(categoria.categoria, true)} />
				)
			}
		}))
	}

	function renderizarPerguntas() {
		if(perguntasFiltradas.length > 0) {
			return (
				<CardPergunta key={perguntasFiltradas[indice].id} pergunta={perguntasFiltradas[indice].pergunta} 
					resposta={perguntasFiltradas[indice].resposta} revelada={revelada} />
			)
		} else return 'Nenhuma pergunta cadastrada nesta categoria!'
	}

	return (
		<div>
			<Layout titulo="Pacotes de Estudo" 
			subtitulo="Aqui ficam os seus pacotes de estudo!">
				{estudando ? (
					<div className="flex flex-col justify-center items-center">
						<div onClick={() => setRevelada(true)}>
							{renderizarPerguntas()}
						</div>
						<div>
							{perguntasFiltradas.length > 0 ? (
								<Botao textoBotao="Proxima Pergunta" className="mt-5 rounded-3xl" 
									onClick={() => incrementarIndice(indice)} />
							) : (
								<div className="flex flex-col justify-center items-center">
									<Link href='/pacotes/criar'>
										<Botao className="flex rounded-3xl mt-5">
											{IconeMais}
											<span className="ml-1">Cadastrar Pergunta</span> 
										</Botao>
									</Link>
									<Botao textoBotao="Voltar" onClick={() => setEstudando(false)} 
										className="bg-gray-500 hover:bg-gray-400 mt-5 rounded-3xl" />
								</div>
							)}
						</div>
					</div>
				) : (
					<>
						<Link href='/pacotes/criar'>
							<Botao className="flex rounded-3xl">
								{IconeMais}
								<span className="ml-1">Criar Pacote</span> 
							</Botao>
						</Link>
						<div className="flex flex-wrap">
							{renderizarPacotes()}
						</div>
					</>
				)}
			</Layout>
		</div>
  	)
}