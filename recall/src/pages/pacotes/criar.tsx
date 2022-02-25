import { useEffect, useState } from "react";
import Botao from "../../components/templates/botoes/Botao";
import CategoriaForm from "../../components/templates/CategoriaForm";
import Layout from "../../components/templates/layout/Layout";
import Textarea from "../../components/templates/Textarea";
import useAuth from "../../docs/hook/useAuth";
import useCategoria, { useCategoriaContext } from "../../docs/hook/useCategoria";
import usePacote from "../../docs/hook/usePacote";
import CategoriaModel from "../../model/Categoria";
import PacoteModel from './../../model/Pacote';

export default function CriarPacote() {
    const [categorias, setCategorias] = useState<CategoriaModel[]>([])
    const { usuario } = useAuth()

    const id = ''
    const [categoria, setCategoria] = useState('')

    const idPacote = ''
    const [pergunta, setPergunta] = useState('')
    const [resposta, setResposta] = useState('')
    const [nomeCategoria, setNomeCategoria] = useState('')

    const { criarCategoria } = useCategoria()
    const { obterCategorias } = useCategoriaContext()
    const { criarPacote } = usePacote()

    useEffect(() => {
        obterTodasCategorias()
    }, [])

    function obterTodasCategorias() {
        obterCategorias().then(categorias => {
            setCategorias(categorias)
        })
    }

    function camposDaCategoria(e) {
        const text = e.target.options[e.target.selectedIndex].text
        setNomeCategoria(text)
    }

    return (
        <div>
            <Layout titulo="Criar Pacote de Estudo" 
                subtitulo="Crie seu pacote de estudo e começe a treinar!">
                    <div className="w-full md:w-3/4 lg:w-2/4">
                        <CategoriaForm label="Crie uma Nova Categoria" labelColor="text-gray-500 dark:text-white"border="border-gray-400 dark:border-gray-300"
                            valor={categoria} categorias={categorias} placeholder="Criar Categoria" 
                            onClick={() => criarCategoria(new CategoriaModel(categoria, usuario?.uid ,id))} onChange={setCategoria}
                            camposCategorias={camposDaCategoria} textoBotao="Criar" 
                        />
                        <div className="bg-gray-300 dark:bg-gray-500 p-5 mt-5 rounded-lg">
                            <Textarea label="Card Pergunta" labelColor="text-gray-500 dark:text-white" border="border-gray-400 dark:border-gray-300"
                                placeholder="Pergunta..." valor={pergunta} onChange={setPergunta} />
                            <Textarea label="Card Resposta" labelColor="text-gray-500 dark:text-white" border="border-gray-400 dark:border-gray-300"
                                placeholder="Resposta..." valor={resposta} onChange={setResposta} />
                            <div className="flex flex-col justify-end items-end ">
                                <Botao textoBotao="Criar Pacote" className="bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-800 dark:hover:bg-cyan-700 mt-2 m-0"
                                    onClick={() => criarPacote(
                                        new PacoteModel(pergunta, resposta, false, nomeCategoria, usuario?.uid, idPacote)
                                    )} 
                                />
                            </div>
                        </div>
                    </div>
            </Layout>          
        </div>
    )
}