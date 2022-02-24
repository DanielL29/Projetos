import { createContext, useEffect, useState } from "react"

interface TemaProviderProps {
    tema?: string
    alternarTema?: () => void
}

const TemaContext = createContext<TemaProviderProps>({})

export function TemaProvider(props) {
    const [tema, setTema] = useState('dark')

    function alternarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    return (
        <TemaContext.Provider value={{
            tema, 
            alternarTema
        }}>
            {props.children}
        </TemaContext.Provider>
    )
}

export default TemaContext