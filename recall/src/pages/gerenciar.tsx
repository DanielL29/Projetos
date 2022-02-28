import { useEffect, useState } from "react";
import Botao from "../components/templates/botoes/Botao";
import CardGerencia from "../components/templates/cards/CardGerencia";
import Layout from "../components/templates/layout/Layout";
import TabelaPacotes from "../components/templates/TabelaPacotes";
import Textarea from "../components/templates/Textarea";
import useAuth from "../docs/hook/useAuth";
import useCategoria, { useCategoriaContext } from "../docs/hook/useCategoria";
import usePacote, { usePacoteContext } from "../docs/hook/usePacote";
import CategoriaModel from "../model/Categoria";
import PacoteModel from "../model/Pacote";
import { ToastContainer, toast } from 'react-toastify';
import { IconeMais } from "../components/icons/Icones";

export default function Gerenciar() {
    const { usuario } = useAuth()

    const [categorias, setCategorias] = useState<CategoriaModel[]>([])
	const [pacotes, setPacotes] = useState<PacoteModel[]>([])

    const [pacote, setPacote] = useState<PacoteModel>(PacoteModel.padrao())

    const [filtrados, setFiltrados] = useState([])
    const [mostrar, setMostrar] = useState(false)
    const [selecionado, setSelecionado] = useState(false)
    const [excluir, setExcluir] = useState(false)
    const [pergunta, setPergunta] = useState('')
    const [resposta, setResposta] = useState('')

    const { obterCategorias } = useCategoriaContext()
	const { obterPacotes } = usePacoteContext()
    const { criarPacote, excluirPacote } = usePacote()
    const { excluirCategoria } = useCategoria()

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

    function selecionarPacote(pacote, selecionado = false, excluir = false) {
        setPacote(pacote)
        setSelecionado(selecionado)
        setExcluir(excluir)
    }

    async function atualizarPacote() {
        await criarPacote(new PacoteModel(pergunta !== '' ? pergunta : pacote.pergunta, resposta !== '' ? resposta : pacote.resposta, 
            false, pacote.desempenho, pacote.nomeCategoria, usuario?.uid, pacote.id))

        document.location.reload()
    }

    function filtrarPacotes(categoria?: any, mostrar = false) {
        const filtrados = pacotes.map(pacote => categoria === pacote.nomeCategoria 
            && pacote.idUsuarioAtual === usuario?.uid ? pacote : '')
            .filter(pacote => pacote !== '')
        
        setFiltrados(filtrados)
        setMostrar(mostrar)
            
        const obterDesempenhos = pacote => pacote.desempenho
        const desempenhosFiltrados = filtrados.length === 0 ? toast('Cadastre alguma pergunta!') : filtrados.map(obterDesempenhos).reduce((atual, prox) => atual + prox)

        if(desempenhosFiltrados === (filtrados.length * 2)) {
            return toast.success(`Estudos de ${categoria} em dia!`)
        } else if(desempenhosFiltrados < (filtrados.length * 2) && desempenhosFiltrados > 0) {
            return toast.info(`Dê uma olhada em ${categoria} novamente.`)
        } else if(desempenhosFiltrados === 0) {
            return toast.warning(`Estude mais ${categoria} urgente!`)
        }
    }

    function renderizarTabela() {
        return filtrados.map(pacote => {
            return (
                    <TabelaPacotes key={pacote.id} pergunta={pacote.pergunta} resposta={pacote.resposta} 
                        editarPacote={() => selecionarPacote(pacote, true)} excluirPacote={() => selecionarPacote(pacote, true, true)} />
            ) 
        })
    }

    function renderizarCategoriasDropdown() {
        return categorias.map(categoria => {
            if(categoria.idUsuarioAtual === usuario?.uid) {
                return (
                    <CardGerencia key={categoria.id} categoria={categoria.categoria} onClick={() => filtrarPacotes(categoria.categoria, true)} 
                        mostrar={mostrar} excluirCategoria={() => excluirCategoria(categoria)}>
                        {filtrados[0]?.nomeCategoria === categoria.categoria ? renderizarTabela() : ''}
                    </CardGerencia>
                )
            }
        })
    }

    function renderizarPacoteSelecionado() {
        return (
            <div className="w-2/4">
                <div className="text-gray-500 dark:text-gray-100 font-semibold text-lg mb-5">{excluir ? 'Excluir Card ?' : 'Edite os campos que deseja alterar (1 ou mais)'}</div>
                <Textarea label="Nova Pergunta" labelColor="text-gray-500 dark:text-gray-200" desabilitado={excluir}
                    border="border-gray-500" valor={excluir ? pacote.pergunta : pergunta} onChange={setPergunta}/>
                <Textarea label="Nova Resposta" labelColor="text-gray-500 dark:text-gray-200" desabilitado={excluir}
                    border="border-gray-500" valor={excluir ? pacote.resposta : resposta} onChange={setResposta}/>

                <div className="flex justify-end">
                    <Botao textoBotao="Voltar" className="bg-slate-500 hover:bg-slate-400" 
                        onClick={() => setSelecionado(false)} />
                    {excluir ? (
                        <Botao textoBotao="Excluir" className="bg-red-500 hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-400"
                            onClick={() => excluirPacote(pacote)} />
                    ) : (
                        <Botao textoBotao="Atualizar" className="bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-800 dark:hover:bg-cyan-700"
                            onClick={() => atualizarPacote()} 
                        />
                    )}
                </div>
            </div>
        )
    }

    return (
        <div>
            <Layout titulo="Gerenciar Pacotes" 
                subtitulo="Aqui seus pacotes são exibidos para o gerenciamento deles">
                {selecionado ? (
                    <div>
                        {renderizarPacoteSelecionado()}
                    </div>
                ) : (
                    <div>
                        <div className={`
                            flex flex-col justify-center 
                            rounded-lg w-2/4 
                            bg-gradient-to-r from-cyan-600 to-cyan-400
                            dark:bg-gradient-to-r dark:from-cyan-800 dark:to-cyan-600
                        `}>
                            {renderizarCategoriasDropdown()}
                            <ToastContainer theme="colored" bodyClassName={filtrados.length === 0 ? "text-gray-500" : "text-white font-bold"} position="top-right"
                                autoClose={5000} hideProgressBar newestOnTop={false} draggable icon={filtrados.length === 0 ? IconeMais : true}
                                closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover />
                        </div>
                    </div>
                )} 
            </Layout>
        </div>
    )
}