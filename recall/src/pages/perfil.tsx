import ReactTooltip from "react-tooltip";
import { IconeCaneta } from "../components/icons/Icones";
import Label from "../components/templates/Label";
import Layout from "../components/templates/layout/Layout";
import useAuth from "../docs/hook/useAuth";
import { useState } from 'react';
import Botao from "../components/templates/botoes/Botao";
import InputAltUsuario from "../components/templates/InputAltUsuario";

export default function Perfil() {
    const { usuario, atualizarUsuario, trocarSenha, trocarEmail } = useAuth()

    const [editando, setEditando] = useState(false)
    const [nome, setNome] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')
    const [email, setEmail] = useState('')

    async function atualizarCamposUsuario(nome, imagemUrl, email) {
        try {
            await atualizarUsuario(nome, imagemUrl)
            await trocarEmail(email)
            console.log('Usuario Atualizado!')
            document.location.reload()
        } catch(e) {
            console.log(e?.message)
        }
    }

    return (
        <div>
            <Layout titulo="Perfil do Usuario" 
                subtitulo="Informações e dados sobre o usuario">
                {/* {console.log(usuario)} */}
                <div className="xl:w-2/5 lg:w-2/4 md:w-3/4 w-full bg-gray-300 dark:bg-gray-500 rounded-md">
                    <div className="flex flex-wrap md:flex-nowrap">
                        <div className="flex flex-col justify-end items-center h-40 w-40 p-3">
                            <img src={usuario?.photoURL ?? "/images/avatarPadrao.svg"} alt="Imagem do Perfil" 
                                className="rounded-full w-full object-cover select-none" />
                            <div data-tip="Editar Perfil" className={`
                                flex justify-center items-center 
                                bg-cyan-500 dark:bg-cyan-800 rounded-full h-8 w-8 absolute mr-20
                                text-gray-100 cursor-pointer
                            `} onClick={() => setEditando(!editando)}>
                                {IconeCaneta}
                            </div>
                            <ReactTooltip place="right" type="light" effect="solid" delayShow={100} delayHide={100}  />
                        </div>
                        <div className={`
                            flex flex-col justify-center items-start
                            text-xl ml-5 p-2
                        `}>
                            {editando ? (
                                <div>
                                    <Label label="Edite os campos que deseja alterar (1 ou mais)" border="border-gray-500 dark:border-gray-300" 
                                        labelColor="text-gray-500 dark:text-gray-300 font-bold" />

                                    <InputAltUsuario label="Novo Nome do Usuario:" valor={nome} onChange={(e) => setNome(e.target.value)} />
                                    <InputAltUsuario label="Nova Foto do Perfil(Url):" valor={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} />
                                    {usuario?.providerId === 'google.com' ? '' : <InputAltUsuario label="Novo Email do Usuario:" valor={email} onChange={(e) => setEmail(e.target.value)} />} 
                                    <div className="flex justify-end">
                                        <Botao textoBotao="Atualizar Usuario" className="bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-800 dark:hover:bg-cyan-700"
                                            onClick={() => atualizarCamposUsuario(
                                                nome !== '' ? nome : usuario.displayName, 
                                                imagemUrl !== '' ? imagemUrl : usuario.photoURL,
                                                email !== '' ? email : usuario.email
                                            )} />  
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex">
                                        <Label label="Nome do Usuario: " border="border-gray-500 dark:border-gray-300" labelColor="text-gray-500 dark:text-gray-300" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-100">{usuario?.displayName ?? '(Usuario sem nome)'}</span>
                                    </div>
                                    <div className="flex">
                                        <Label label="Email do Usuario: " border="border-gray-500 dark:border-gray-300" labelColor="text-gray-500 dark:text-gray-300" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-100">{usuario?.email}</span>
                                    </div>
                                    <div className="flex">
                                        <Label label="Provedor: " border="border-gray-500 dark:border-gray-300" labelColor="text-gray-500 dark:text-gray-300" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-100">{usuario?.providerId}</span>
                                    </div>
                                    {usuario?.providerId === 'google.com' ? '' : (
                                        <a onClick={() => trocarSenha(usuario.email)} 
                                            className="text-cyan-500 dark:text-cyan-900 hover:text-cyan-400 dark:hover:text-cyan-800 cursor-pointer">
                                            Enviar email para redefinir senha
                                        </a> 
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}