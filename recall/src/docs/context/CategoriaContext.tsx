import { createContext } from "react";
import CategoriaModel from "../../model/Categoria";
import { db } from '../../database/config'
import firebase, { 
    doc, 
    setDoc, 
    collection, 
    addDoc, 
    deleteDoc, 
    getDocs, 
    query 
} from 'firebase/firestore'

interface CategoriaProviderProps {
    salvar: (categoria: CategoriaModel) => Promise<CategoriaModel>
    excluir: (categoria: CategoriaModel) => Promise<void>
    obterCategorias: () => Promise<CategoriaModel[]>
}

const CategoriaContext = createContext<CategoriaProviderProps>(CategoriaModel.padrao())

export function CategoriaProvider(props) {
    const conversor = {
        toFirestore(categoria: CategoriaModel) {
            return {
                categoria: categoria.categoria,
                idUsuarioAtual: categoria.idUsuarioAtual,
            }
        },
        fromFirestore(snapshot: firebase.QueryDocumentSnapshot, 
            options: firebase.SnapshotOptions): CategoriaModel {
                const dados = snapshot.data(options)
                return new CategoriaModel(
                    dados.categoria, 
                    dados.idUsuarioAtual,
                    snapshot.id
                )
        }
    }

    async function salvar(categoria: CategoriaModel): Promise<CategoriaModel> {
        try {
            if(categoria?.id) {
                await setDoc(doc(db, 'categoria', categoria.id)
                    .withConverter(conversor), categoria)
                return categoria
            } else {
                await addDoc(collection(db, 'categoria')
                    .withConverter(conversor), categoria)

                document.location.reload()
                return categoria
            }
        } catch(e) {
            console.log(e?.message)
        }
    }

    async function excluir(categoria: CategoriaModel): Promise<void> {
        await deleteDoc(doc(db, 'categoria', categoria.id).withConverter(conversor))
        document.location.reload()
    }

    async function obterCategorias(): Promise<CategoriaModel[]> {
        const querySnapshot = await getDocs(query(collection(db, 'categoria')
            .withConverter(conversor)))
        return querySnapshot.docs.map(doc => doc.data()) ?? []
        
    }

    return (
        <CategoriaContext.Provider value={{
            salvar,
            excluir,
            obterCategorias
        }}>
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaContext