import useAuth from "../../docs/hook/useAuth";
import CategoriaModel from "../../model/Categoria";
import Botao from "./botoes/Botao";
import Label from "./Label";

interface CategoriaFormProps{
    categorias: CategoriaModel[]
    placeholder: string
    label: string
    labelColor: string
    border: string
    valor: any
    textoBotao: string
    camposCategorias: (e: any) => void 
    onChange: (e: any) => void
    onClick: () => void
}

export default function CategoriaForm(props: CategoriaFormProps) {
    const { usuario } = useAuth()

    function renderizarCategorias() {
        return props.categorias?.map(categoria => {
            if(categoria.idUsuarioAtual === usuario.uid) {
                return (
                    <option value={categoria.id} key={categoria.id}>
                        {categoria.categoria}
                    </option>
                )               
            }
        })
    }

    return (
        <div className="bg-gray-300 dark:bg-gray-500 p-5 rounded-lg">
            <div>
                <Label label={props.label} border={props.border} labelColor={props.labelColor} />
                <input type="text" 
                    value={props.valor}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e.target.value)}
                    className={`
                        px-2 py-2 rounded-lg w-5/6
                        border border-white focus:border-cyan-500
                        dark:bg-gray-200 dark:text-gray-600
                        focus:outline-none mr-1
                    `}  
                />
                <Botao textoBotao={props.textoBotao} 
                    onClick={() => props.onClick()}/>
            </div>
            <div>
                <div className="pb-3 pt-10 text-white">
                    <p>Selecionar uma Categoria de Pacote</p>
                    <hr className="border border-gray-100"/>
                </div>
                <select onChange={(e) => props.camposCategorias(e)} className={`
                    rounded-lg h-10 w-full border border-gray-300
                    focus:outline-none focus:border-cyan-500
                    appearance-none p-2
                    dark:bg-gray-200 dark:text-gray-600
                `}>
                    <option></option>
                    {renderizarCategorias()}
                </select>                
            </div>
        </div>
    )
}