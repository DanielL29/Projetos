import { IconeAjuda, IconeGerenciar, IconeHome, IconePacote, IconeSair, IconeUsuario } from "../../icons/Icones";
import MenuItem from "./MenuItem";
import useAuth from '../../../docs/hook/useAuth';

export default function Menu() {
    const { logout } = useAuth()

    return (
        <aside className={`
            flex md:flex-col flex-wrap md:flex-nowrap md:h-screen w-full md:w-20 fixed
            bg-gray-200 text-gray-700
            dark:bg-gray-800 dark:text-gray-200
            mt-20 md:mt-0
        `}>
            <ul className="flex md:flex-col flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeHome}/>
                <MenuItem url="/pacotes" texto="Pacotes" icone={IconePacote} />
                <MenuItem url="/gerenciar" texto="Gerenciar Pacotes" icone={IconeGerenciar} />
                <MenuItem url="/perfil" texto="Perfil" icone={IconeUsuario} />
                <MenuItem url="/sobre" texto="Sobre" icone={IconeAjuda} />
            </ul>
            <ul>
                <MenuItem texto="Sair"
                    icone={IconeSair}
                    onClick={logout}
                    className={`
                        text-red-600 hover:bg-red-400
                        dark:text-red-400 dark:hover:bg-red-500
                        hover:text-white dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}