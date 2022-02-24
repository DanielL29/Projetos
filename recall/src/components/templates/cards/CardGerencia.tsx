import { IconeExcluir, IconeTag } from "../../icons/Icones";
import ReactTooltip from 'react-tooltip'

interface CardGerenciaProps {
    children?: any
    categoria: string
    mostrar?: boolean
    onClick: (param: any) => void
    excluirCategoria: () => void
}

export default function CardGerencia(props: CardGerenciaProps) {
    

    return (
        <div>
            <div className={`
                flex text-gray-200 border-b
                border-b-gray-100 dark:border-b-gray-700
                p-2 cursor-pointer
            `} 
                onClick={() => props.onClick(props.children)}>
                <span>{IconeTag}</span>
                <div className="flex-grow">{props.categoria}</div>
                <div>
                    <div data-tip='Excluir Categoria?' onClick={props.excluirCategoria}>{IconeExcluir}</div>
                    <ReactTooltip place="right" type="error" effect="solid" delayShow={100} delayHide={100} backgroundColor="#F77777" />
                </div>
            </div>
            <div className="w-full">
                {props.mostrar ? <div>{props.children}</div> : ''} 
            </div>
        </div>
    )
}