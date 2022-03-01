import { IconeEmojiFeliz, IconeEmojiNormal, IconeEmojiTriste } from "../../icons/Icones";

interface CardEmojisProps {
    emojiTriste: boolean
    emojiNormal: boolean
    emojiFeliz: boolean
    emojiSelecionadoTriste: () => void
    emojiSelecionadoNormal: () => void
    emojiSelecionadoFeliz: () => void
    onClickTriste: () => void
    onClickNormal: () => void
    onClickFeliz: () => void
}

export default function CardEmojis(props: CardEmojisProps) {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <span>Como foi seu desempenho?</span>
            <div className="flex flex-col md:flex-row justify-center m-2">
                <div className="w-24 m-10 flex flex-col items-center" onClick={props.emojiSelecionadoTriste}>
                    <span className="p-2">Errou(0)</span>
                    <div className={`
						w-12 ${props.emojiTriste ? 'text-cyan-400 dark:text-cyan-600' : 'text-cyan-500 dark:text-cyan-700'}
						hover:text-cyan-400 dark:hover:text-cyan-600 cursor-pointer 				
					`} onClick={props.onClickTriste}
                    >
                        {IconeEmojiTriste}
                    </div>
                </div>
                <div className="w-28 m-10 flex flex-col items-center" onClick={props.emojiSelecionadoNormal}>
                    <span className="p-2">Quase lá(1)</span>
                    <div className={`
						w-12 ${props.emojiNormal ? 'text-cyan-400 dark:text-cyan-600' : 'text-cyan-500 dark:text-cyan-700'}
						hover:text-cyan-400 dark:hover:text-cyan-600 cursor-pointer 
					`} onClick={props.onClickNormal}
                    >
                        {IconeEmojiNormal}
                    </div>
                </div>
                <div className="w-24 m-10 flex flex-col items-center" onClick={props.emojiSelecionadoFeliz}>
                    <span className="p-2">Acertou(2)</span>
                    <div className={`
						w-12 ${props.emojiFeliz ? 'text-cyan-400 dark:text-cyan-600' : 'text-cyan-500 dark:text-cyan-700'}
						hover:text-cyan-400 dark:hover:text-cyan-600 cursor-pointer 
					`} onClick={props.onClickFeliz}
                    >
                        {IconeEmojiFeliz}
                    </div>
                </div>
            </div>
        </div>
    )
}