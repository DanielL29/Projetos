import { IconeLua, IconeSol } from "../../icons/Icones";

interface BotaoTemaProps {
    tema: string
    alternarTema: () => void
}

export default function BotaoTema(props: BotaoTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-cyan-200 to-cyan-500
            w-14 lg:w-24 h-8 p-1 rounded-full 
            transition-all duration-900
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-cyan-500 
                w-6 h-6 rounded-full
                transition-all duration-900
            `}> 
                {IconeSol}
            </div>
            <div className={`
                hidden lg:flex items-center ml-2
                text-gray-900
            `}>
                <span className="text-md">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-cyan-900 to-cyan-600
            w-14 lg:w-24 h-8 p-2 rounded-full 
            transition-all duration-900
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-gray-300
            `}>
                <span className="text-md">Escuro</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-cyan-900 text-gray-300
                w-6 h-6 rounded-full
                transition-all duration-900
            `}> 
                {IconeLua}
            </div>
        </div>
    )
}