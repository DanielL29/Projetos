import { db } from '../../database/config'
import firebase, { doc, setDoc, collection, addDoc, deleteDoc, getDocs, query } from 'firebase/firestore'
import PacoteModel from '../../model/Pacote'
import { createContext } from 'react'
import Router from 'next/router'

interface PacoteProviderProps {
    salvarPacote: (pacote: PacoteModel) => Promise<PacoteModel>
    excluir: (pacote: PacoteModel) => Promise<void>
    obterPacotes: () => Promise<PacoteModel[]>
}

const PacoteContext = createContext<PacoteProviderProps>(PacoteModel.padrao())

export function PacoteProvider(props) {

    const conversor = {
        toFirestore(pacote: PacoteModel) {
            return {
                pergunta: pacote.pergunta,
                resposta: pacote.resposta,
                respostaRevelada: pacote.respostaRevelada,
                desempenho: pacote.desempenho,
                nomeCategoria: pacote.nomeCategoria,
                idUsuarioAtual: pacote.idUsuarioAtual,
            }
        }, 
        fromFirestore(snapshot: firebase.QueryDocumentSnapshot, 
            options: firebase.SnapshotOptions): PacoteModel {
                const dados = snapshot.data(options)
                return new PacoteModel(
                    dados.pergunta, 
                    dados.resposta, 
                    dados.respostaRevelada, 
                    dados.desempenho,
                    dados.nomeCategoria,
                    dados.idUsuarioAtual,
                    snapshot.id
                )
        }
    }
    
    async function salvarPacote(pacote: PacoteModel): Promise<PacoteModel> {
        try {
            if(pacote?.id) {
                await setDoc(doc(db, 'pacote', pacote.id)
                    .withConverter(conversor), pacote)

                return pacote
            } else {
                await addDoc(collection(db, 'pacote')
                    .withConverter(conversor), pacote)
    
                Router.push('/pacotes')
                return pacote
            }
        } catch(e) {
            console.log(e?.message)
        }
    }

    async function excluir(pacote: PacoteModel): Promise<void> {
        await deleteDoc(doc(db, 'pacote', pacote.id).withConverter(conversor))
        document.location.reload()
    }

    async function obterPacotes(): Promise<PacoteModel[]> {
        const querySnapshot = await getDocs(query(collection(db, 'pacote')
            .withConverter(conversor)))
        return querySnapshot.docs.map(doc => doc.data()) ?? []
    }

    return (
        <PacoteContext.Provider value={{
            salvarPacote,
            excluir,
            obterPacotes,
        }}>
            {props.children}
        </PacoteContext.Provider>
    )
}

export default PacoteContext