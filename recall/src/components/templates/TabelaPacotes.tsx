import { IconeEditar, IconeExcluir } from "../icons/Icones";

interface TabelaPacotesProps {
    pergunta: any
    resposta: any
    editarPacote?: () => void
    excluirPacote?: () => void
}

export default function TabelaPacotes(props: TabelaPacotesProps) {
    const tdStyle = `
        text-left p-4 
        border border-gray-300 
        dark:border-gray-500
    `

    return (
        <table className="overflow-hidden w-full">
            <tbody className={`
                text-gray-600 dark:text-gray-200
                bg-gray-200 dark:bg-gray-600
            `}>
                <tr>
                    <td className={`${tdStyle} w-2/5`}>{props.pergunta}</td>
                    <td className={`${tdStyle} w-2/5`}>{props.resposta}</td>
                    <td className={`${tdStyle} w-1/5`}>
                        <div className="flex justify-center">
                            <button onClick={props.editarPacote} className={`
                                flex justify-center items-center
                                text-yellow-600 rounded-full p-2 m-1
                                hover:bg-gray-100 dark:hover:bg-gray-500
                            `}>
                                {IconeEditar}
                            </button>
                            <button onClick={props.excluirPacote} className={`
                                flex justify-center items-center
                                text-red-500 rounded-full p-2 m-1
                                hover:bg-gray-100 dark:hover:bg-gray-500
                            `}>
                                {IconeExcluir}
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}