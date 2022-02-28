import Layout from "../../components/templates/layout/Layout";
import CardPacote from "../../components/templates/cards/CardPacote";
import CategoriaModel from "../../model/Categoria";
import PacoteModel from "../../model/Pacote";
import { useEffect, useState } from "react";
import { useCategoriaContext } from "../../docs/hook/useCategoria";
import usePacote, { usePacoteContext } from "../../docs/hook/usePacote";
import { IconeMais } from "../../components/icons/Icones";
import CardPergunta from "../../components/templates/cards/CardPergunta";
import Botao from "../../components/templates/botoes/Botao";
import useAuth from './../../docs/hook/useAuth';
import Router from "next/router";
import CardEmojis from "../../components/templates/cards/CardEmojis";

export default function Pacotes() {
	const { usuario } = useAuth()

	const [categorias, setCategorias] = useState<CategoriaModel[]>([])
	const [pacotes, setPacotes] = useState<PacoteModel[]>([])

	const [perguntasFiltradas, setPerguntasFiltradas] = useState([])
	const [desempenho, setDesempenho] = useState([])
	const [estudando, setEstudando] = useState(false)
	const [revelada, setRevelada] = useState(false)
	const [resultado, setResultado] = useState(false)
	const [indice, setIndice] = useState(0)

	const [emojiTriste, setEmojiTriste] = useState(false)
	const [emojiNormal, setEmojiNormal] = useState(false)
	const [emojiFeliz, setEmojiFeliz] = useState(false)

	const { obterCategorias } = useCategoriaContext()
	const { criarPacote } = usePacote()
	const { obterPacotes } = usePacoteContext()

	useEffect(() => {
		obterTodosPacotes()
        obterTodasCategorias()
    }, [desempenho, indice, resultado, estudando, revelada])

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
		const obterDesempenhos = pacote => pacote.desempenho
		const desempenho = pacotes.map(pacote => {
			if(perguntasFiltradas[0].nomeCategoria === pacote.nomeCategoria && pacote.idUsuarioAtual === usuario?.uid) {
				return pacote
			}
		}).filter(pacote => pacote !== undefined).map(obterDesempenhos).reduce((atual, prox) => atual + prox)

		setDesempenho(desempenho)

		if(indice === perguntasFiltradas.length - 1) {
			setResultado(true)
			setRevelada(false)
			setEmojiTriste(false)
			setEmojiNormal(false)
			setEmojiFeliz(false)
			setIndice(0)
		} else {
			setIndice(indice + 1)
			setRevelada(false)
			setEmojiTriste(false)
			setEmojiNormal(false)
			setEmojiFeliz(false)
		}

	}

	function atualizarEmoji(valor) {
		return (
			criarPacote(new PacoteModel(
				perguntasFiltradas[indice]?.pergunta, perguntasFiltradas[indice]?.resposta, 
				perguntasFiltradas[indice]?.respostaRevelada, valor, perguntasFiltradas[indice]?.nomeCategoria, 
				perguntasFiltradas[indice]?.idUsuarioAtual, perguntasFiltradas[indice]?.id))
		)
	}

	function exibirCardsFiltrados(categoria, estudando = false) {
		const perguntasFiltradas = pacotes.map(pacote => {
			if(categoria === pacote.nomeCategoria && pacote.idUsuarioAtual === usuario?.uid) {
				return pacote
			}
		}).filter(pacote => pacote !== undefined)

		setPerguntasFiltradas(perguntasFiltradas)
		setEstudando(estudando)
	}

	function renderizarDesempenhoTotal() {
		return (
			<div className="flex flex-col justify-center items-center m-20">
				<div className="flex flex-col items-center justify-center h-40 w-80 bg-gray-500 rounded-lg">
					<div className="p-2 font-semibold text-xl text-gray-300">Categoria: {perguntasFiltradas[0].nomeCategoria}</div>
					<div className="p-2 font-semibold text-xl text-gray-300">Desempenho: {desempenho} / {perguntasFiltradas.length * 2}</div>
					<Botao textoBotao="Voltar" onClick={() => document.location.reload()} 
						className="bg-gray-400 hover:bg-gray-300 rounded-3xl" />
				</div>
			</div>
		)
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

	function emojiSelecionado(emojiTriste = false, emojiNormal = false, emojiFeliz = false) {
		setEmojiTriste(emojiTriste)
		setEmojiNormal(emojiNormal)
		setEmojiFeliz(emojiFeliz)
	}

	function renderizarPerguntas() {
		if(perguntasFiltradas.length > 0) {
			return (
				<div className="flex flex-col items-center justify-center">
					<CardPergunta key={perguntasFiltradas[indice]?.id} pergunta={perguntasFiltradas[indice]?.pergunta} 
						resposta={perguntasFiltradas[indice]?.resposta} revelada={revelada} />
					<CardEmojis emojiTriste={emojiTriste} emojiNormal={emojiNormal} emojiFeliz={emojiFeliz} 
						emojiSelecionadoTriste={() => emojiSelecionado(true)} emojiSelecionadoNormal={() => emojiSelecionado(false, true, false)} 
						emojiSelecionadoFeliz={() => emojiSelecionado(false, false, true)} 
						onClickTriste={() => atualizarEmoji(0)} onClickNormal={() => atualizarEmoji(1)} onClickFeliz={() => atualizarEmoji(2)} />
				</div>
			)
		} else return 'Nenhuma pergunta cadastrada nesta categoria!'
	}

	return (
		<div>
			<Layout titulo="Pacotes de Estudo" 
			subtitulo="Aqui ficam os seus pacotes de estudo!">
				{estudando ? (
					resultado ? renderizarDesempenhoTotal() : (
						<div className="flex flex-col justify-center items-center">
							<div onClick={() => setRevelada(true)}>
								{renderizarPerguntas()}
							</div>
							<div>
								{perguntasFiltradas.length > 0 ? (	
									indice === perguntasFiltradas.length - 1 ? (
										<Botao textoBotao="Finalizar" onClick={() => incrementarIndice(indice)} className={`
											rounded-3xl bg-cyan-500 hover:bg-cyan-400 
											dark:bg-cyan-800 dark:hover:bg-cyan-700
										`}/>
									) : (
										<Botao textoBotao="Proxima Pergunta" onClick={() => incrementarIndice(indice)} className={`
											rounded-3xl bg-cyan-500 hover:bg-cyan-400 
											dark:bg-cyan-800 dark:hover:bg-cyan-700
										`}/>
									)
								) : (
									<div className="flex flex-col justify-center items-center">
										<Botao className={`
											flex rounded-3xl mt-5 
											bg-cyan-500 hover:bg-cyan-400 
											dark:bg-cyan-800 dark:hover:bg-cyan-700
										`} onClick={() => Router.push('/pacotes/criar')}>
											{IconeMais}
											<span className="ml-1">Cadastrar Pergunta</span> 
										</Botao>
										<Botao textoBotao="Voltar" onClick={() => setEstudando(false)} 
											className="bg-gray-500 hover:bg-gray-400 mt-5 rounded-3xl" />
									</div>
								)}
							</div>
						</div>
					)
				) : (
					<>
						<Botao className={`
							flex rounded-3xl 
							bg-cyan-500 hover:bg-cyan-400 
							dark:bg-cyan-800 dark:hover:bg-cyan-700
						`} onClick={() => Router.push('/pacotes/criar')}>
							{IconeMais}
							<span className="ml-1">Criar Pacote</span> 
						</Botao>
						<div className="flex flex-wrap">
							{renderizarPacotes()}
						</div>
					</>
				)}
			</Layout>
		</div>
  	)
}