import Link from "next/link";
import { IconePlay } from "../../icons/Icones";

interface BotaoPlayProps {
    onClick: () => void
}

export default function BotaoPlay(props: BotaoPlayProps) {
    return (
        // <Link href='pacotes/estudar'>
            <div onClick={props.onClick} className={`
                flex items-center cursor-pointer
                bg-cyan-500 hover:bg-cyan-400
                h-8 w-24 p-2 rounded-full
                transition-colors duration-900
            `}>
                <div className={`
                    flex items-center
                    text-gray-200
                `}>
                    <span className="text-sm text-white">Estudar</span>
                </div>
                <div className={`
                    flex items-center justify-center
                    text-gray-100 w-6 h-6 m-1
                `}> 
                    {IconePlay}
                </div>
            </div>
        // </Link>
    ) 
}