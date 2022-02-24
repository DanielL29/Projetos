interface BotaoProps {
    textoBotao?: string
    className?: string
    children?: any
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-cyan-500 hover:bg-cyan-400
            dark:bg-cyan-800 dark:hover:bg-cyan-700 
            transition-colors duration-700 
            text-white rounded-lg p-2 m-1
            ${props.className}
        `}>
            {props.textoBotao ?? props.children}
        </button>
    )
}