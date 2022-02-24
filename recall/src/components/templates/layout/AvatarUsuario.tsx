import Link from "next/link";
import useAuth from "../../../docs/hook/useAuth";

export default function AvatarUsuario() {
    const { usuario } = useAuth()

    return (
        <div>
            <Link href='/perfil'>
                <img 
                    src={usuario?.photoURL ?? "/images/avatarPadrao.svg"} 
                    alt="Icone Avatar"
                    className="h-10 w-10 ml-4 rounded-full cursor-pointer object-cover" />
            </Link>
        </div>
    )
}