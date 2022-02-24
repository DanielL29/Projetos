import { useContext } from "react"
import PacoteModel from "../../model/Pacote"
import PacoteContext from "../context/PacoteContext"

export const usePacoteContext = () => useContext(PacoteContext)

export default function usePacote() {
    const { salvarPacote, excluir } = usePacoteContext()

    async function criarPacote(pacote: PacoteModel) {
        try {
            await salvarPacote(pacote)
            console.log('Pacote Salvo!')
        } catch(e) {
            console.log(e?.message)
        }
    }

    async function excluirPacote(pacote: PacoteModel) {
        try {
            await excluir(pacote)
            console.log('Excluido...')
        } catch(e) {
            console.log(e?.message)
        }
    }

    return {
        criarPacote,
        excluirPacote,
    }
}
