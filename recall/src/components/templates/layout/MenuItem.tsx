import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (e: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderizarLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                h-20 w-20
                ${props.className}
            `}>
                {props.icone}
                <span className="text-sm font-medium text-center">
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-100 dark:hover:bg-gray-700
            hover:text-cyan-500 dark:hover:text-cyan-600
            cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : renderizarLink()}
        </li>
    )
}