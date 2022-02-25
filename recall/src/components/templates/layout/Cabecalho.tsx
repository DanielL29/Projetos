import useTema from "../../../docs/hook/useTema"
import AvatarUsuario from "./AvatarUsuario"
import BotaoTema from "../botoes/BotaoTema"
import Logo from "./Logo"

export default function Cabecalho() {
    const { tema, alternarTema } = useTema()

    return (
        <header className={`
            flex items-center bg-cyan-500 h-20 p-5
            dark:bg-cyan-900 
        `}>
            <Logo className="h-8 w-8 select-none" />
            <h1 className="text-white text-3xl font-bold">Recall</h1>
            <div className={`
                flex flex-grow justify-end items-center
            `}>
                <BotaoTema tema={tema} alternarTema={alternarTema} />
                <AvatarUsuario />
            </div>
        </header>
    )
}