import useTema from "../../../docs/hook/useTema";
import ForcarAuth from "../../auth/ForcarAuth";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useTema()

    return (
        <ForcarAuth>
            <div className={`${tema} flex h-screen w-screen`}>
                <Menu />
                <div className={`
                    flex flex-col w-full
                    bg-gray-100 dark:bg-gray-700
                `}>
                    <Cabecalho />
                    <Conteudo titulo={props.titulo} subtitulo={props.subtitulo}>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        </ForcarAuth>
    )
}