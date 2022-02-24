import BotaoPlay from "../botoes/BotaoPlay";

interface CardPacoteProps {
    categoria: string
    onClick: () => void
}

export default function CardPacote(props: CardPacoteProps) {
    return (
        <div className={`
            flex flex-col flex-wrap
            bg-cyan-700 
            h-24 w-36 p-2 my-5 mr-5 rounded-lg
        `}>
            <div className="text-gray-100 p-2 flex-wrap">{props.categoria}</div>
            <div className="pb-2"> 
                <BotaoPlay onClick={props.onClick} />
            </div>
        </div>
    )
}