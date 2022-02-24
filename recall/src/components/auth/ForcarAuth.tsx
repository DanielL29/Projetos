import Head from "next/head"
import Image from "next/image"
import Router from "next/router"
import React from "react"
import loadingRecall from "../../../public/images/loading-recall.gif" 
import useAuth from "../../docs/hook/useAuth"

export default function ForcarAuth(props) {
    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
        return (
            <React.Fragment>
                <Head>
                    <script 
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes('recall-fatec-app')) {
                                    window.location.href = '/autenticacao'
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </React.Fragment>
        )
    }

    function renderizarCarregando() {
        return (
            <div className='flex justify-center items-center h-screen'>
                <Image src={loadingRecall} />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        Router.push('/autenticacao')
        return null
    }
}