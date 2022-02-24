import { useContext } from "react";
import CategoriaModel from "../../model/Categoria";
import CategoriaContext from "../context/CategoriaContext";

export const useCategoriaContext = () => useContext(CategoriaContext)

export default function useCategoria() {
    const { salvar, excluir } = useCategoriaContext()

    async function criarCategoria(categoria: CategoriaModel) {
        try {
            await salvar(categoria)
            console.log('Cadastrado!')
        } catch(e) {
            console.log(e?.message)
        }
    }

    async function excluirCategoria(categoria: CategoriaModel) {
        try {
            await excluir(categoria)
            console.log('Excluido...')
        } catch(e) {
            console.log(e?.message)
        }
    }

    return {
        criarCategoria,
        excluirCategoria,
    }
}


