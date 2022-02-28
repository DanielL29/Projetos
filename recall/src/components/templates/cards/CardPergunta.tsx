interface CardPerguntaProps {
    pergunta: string
    resposta: string
    revelada?: boolean
}

export default function CardPergunta(props: CardPerguntaProps) {
    return props.revelada ? (
        <div className={`
            flex flex-col justify-center items-center flex-wrap
            bg-cyan-500 dark:bg-cyan-800 cursor-pointer
            h-40 w-80 p-2 my-5 rounded-lg
            shadow-xl shadow-gray-400 dark:shadow-gray-800 
            transition-transform duration-700
            scale-110
        `}>
            <div className="font-light text-gray-100">
                <span>{props.resposta}</span>
            </div>
        </div>
    ) : (
        <div className={`
            flex flex-col justify-center items-center flex-wrap
            bg-gray-200 dark:bg-gray-500 cursor-pointer
            h-40 w-80 p-2 my-5 rounded-lg
            shadow-xl
        `}>
            <div className="font-light text-gray-600 dark:text-gray-200">
                <span>{props.pergunta}</span>
            </div>
        </div>
    )
}