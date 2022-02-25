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
            <Label label={props.label} border={props.border} labelColor={props.labelColor} />
            <div className="flex justify-center items-center">
                <input type="text" 
                    value={props.valor}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e.target.value)}
                    className={`
                        p-1 h-10 rounded-lg flex-grow
                        border border-white focus:border-cyan-500
                        dark:bg-gray-200 dark:text-gray-600
                        focus:outline-none mr-1
                    `}  
                />
                <div>
                    <Botao textoBotao={props.textoBotao} 
                        onClick={() => props.onClick()}/>
                </div>
            </div>
            <div>
                <Label label="Selecionar uma Categoria de Pacote" border="border-gray-400 dark:border-gray-300" labelColor="text-gray-500 dark:text-white" />
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