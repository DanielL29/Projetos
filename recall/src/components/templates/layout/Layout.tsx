import Head from "next/head";
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
            <Head>
                <title>Recall</title>
                <link rel="icon" href="/recall-logo-aba.png" />
            </Head>
            <div className={`${tema} flex h-screen`}>
                <Menu />
                <div className={`
                    flex flex-col w-full ml-20
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