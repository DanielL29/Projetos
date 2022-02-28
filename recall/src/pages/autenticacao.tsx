import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconeErro } from '../components/icons/Icones';
import Botao from '../components/templates/botoes/Botao';
import BotaoGoogle from '../components/templates/botoes/BotaoGoogle';
import Link from '../components/templates/Link';
import Logo from '../components/templates/layout/Logo';
import RecallBanner from '../components/templates/RecallBanner';
import useAuth from './../docs/hook/useAuth';
import Head from 'next/head';

export default function Autenticacao() {
    const { cadastrar, login, loginGoogle } = useAuth()

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg, tempoSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoSegundos * 1000)
    }

    async function submeter() {
        try {
            if(modo === 'login') {
                await login(email, senha)
            } else {
                await cadastrar(email, senha)
            }
        } catch(e) {
            exibirErro(e?.message ?? 'Erro desconhecido')
        }      
    }

    return (
        <div>
            <Head>
                <title>Recall</title>
                <link rel="icon" href="/recall-logo-aba.png" />
            </Head>
            <div className='flex h-screen items-center justify-center'>
                <RecallBanner />
                <div className='m-10 w-full md:w-1/2 lg:w-1/3'>
                    <div className={`
                        flex justify-start items-center
                        md:hidden 
                    `}>
                        <div className={`
                            flex justify-end items-center 
                            h-12 w-12 rounded-full 
                            bg-cyan-500
                        `}>
                            <Logo className="h-8 w-8 select-none"/>
                        </div>
                        <span className='font-bold text-cyan-500 text-3xl p-5'>Bem vindo ao Recall!</span>
                    </div>

                    <hr className='my-6 border-gray-300 w-full md:hidden' />

                    <h1 className='text-3xl font-bold mb-5'>
                        {modo === 'login' ? 'Entre com sua conta' : 'Cadastre uma nova conta'}
                    </h1>

                    {erro ? (
                        <div className={`
                            flex items-center
                            bg-amber-500 text-white 
                            py-3 px-5 my-2 rounded-lg
                        `}>
                            {IconeErro}
                            <span className='ml-3 text-sm'>{erro}</span>
                        </div>
                    ) : false}

                    <AuthInput label='Email' valor={email} tipo='email'
                        valorMudou={setEmail} obrigatorio />
                    <AuthInput label='Senha' valor={senha} tipo='password'
                        valorMudou={setSenha} obrigatorio />

                    <Botao className='w-full mt-6 bg-cyan-500 hover:bg-cyan-400' onClick={submeter}>
                        {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                    </Botao>

                    <hr className='my-6 border-gray-300 w-full' />

                    <BotaoGoogle onClick={loginGoogle} />

                    {modo === 'login' ? (
                        <Link texto='Tem uma Conta?' onClick={() => setModo('cadastro')}>
                            Crie a sua conta gratuitamente clicando aqui!
                        </Link>
                    ) : (
                        <Link texto='Já tem Conta?' onClick={() => setModo('login')}>
                            Faça o login!
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}