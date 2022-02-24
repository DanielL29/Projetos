import { 
    User, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    updateProfile,
    updateEmail,
    sendPasswordResetEmail,
} from 'firebase/auth'
import auth from '../../database/config'
import { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'
import UsuarioModel from './../../model/Usuario';

interface AuthProviderProps {
    usuario?: UsuarioModel
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
    atualizarUsuario?: (nome: string, imagemUrl: string) => Promise<void>
    trocarEmail?: (email: string) => Promise<void>
    trocarSenha?: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthProviderProps>({})

async function usuarioResolvido(usuarioFirebase: User): Promise<UsuarioModel> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        displayName: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        providerId: usuarioFirebase.providerData[0].providerId,
        photoURL: usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado: boolean) {
    if(logado) {
        cookie.set('recall-fatec-app', logado, {
            expires: 2
        })
    } else {
        cookie.remove('recall-fatec-app')
    }
}

export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<UsuarioModel>(null)

    async function configurarSessao(usuarioFirebase) {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioResolvido(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function trocarEmail(email) {
        try {
            const atualizarEmail = await updateEmail(auth.currentUser, email)
            console.log("Email Atualizado!")

            return atualizarEmail
        } catch(e) {
            console.log(e?.message)
        }
    }

    async function trocarSenha(email) {
        try {
            const atualizarSenha = await sendPasswordResetEmail(auth, email)
            alert('Email para troca de senha enviado! Verifique seu email para a troca de senha.')

            return atualizarSenha
        } catch(e) {
            console.log(e?.message)
        }
    }

    async function atualizarUsuario(nome, imagemUrl) {
        try {
            const atualizarPerfil = await updateProfile(auth.currentUser, {
                displayName: nome,
                photoURL: imagemUrl
            })

            return atualizarPerfil
        } catch(e) {
            console.log(e?.message)
        }      
    }

    async function cadastrar(email, senha) {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, senha)

            await configurarSessao(res.user)
            Router.push('/')
        } finally {
            setCarregando(false)
        }   
    }

    async function login(email, senha) {
        try {
            const res = await signInWithEmailAndPassword(auth, email, senha)
        
            await configurarSessao(res.user)
            Router.push('/')
        } finally {
            setCarregando(false)
        }  
    }

    async function loginGoogle() {
        try {
            const googleProvider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, googleProvider)

            await configurarSessao(res.user)
            Router.push('/')
        } finally {
            setCarregando(false)
        }   
    }

    async function logout() {
        try {
            setCarregando(true)
            await auth.signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
        }   
    }

    useEffect(() => {
        if(cookie.get('recall-fatec-app')) {
            const cancelar = auth.onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            cadastrar,
            login,
            loginGoogle,
            logout,
            atualizarUsuario,
            trocarEmail,
            trocarSenha,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext