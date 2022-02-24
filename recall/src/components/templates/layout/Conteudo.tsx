import Titulo from "./Titulo";

interface ConteudoProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <main className="flex flex-col p-5 ">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`
                pt-5 border-t-2
                border-gray-300 dark:text-gray-200
            `}>
                {props.children}
            </div>
        </main>
    )
}