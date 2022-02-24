interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`
                font-black text-3xl
                text-gray-700
                dark:text-gray-200
            `}>
                {props.titulo}
            </h1>
            <h2 className={`
                font-light text-md pb-5
                dark:text-gray-200
            `}>
                {props.subtitulo}
            </h2>
        </div>
    )
}