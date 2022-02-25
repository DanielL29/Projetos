import Label from "./Label";

interface InputAltUsuarioProps {
    valor: any
    label: string
    onChange: (e: any) => void
}

export default function InputAltUsuario(props: InputAltUsuarioProps) {
    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <Label label={props.label} border="border-gray-500 dark:border-gray-300" labelColor="text-gray-500 dark:text-gray-300" />
                <input type="text" value={props.valor} onChange={props.onChange} className={`
                    rounded-lg w-3/4 h-10 text-gray-500
                    border border-white focus:border-cyan-500
                    dark:bg-gray-200 dark:text-gray-600
                    focus:outline-none m-2 p-2  
                `}/>
        </div>
    )
}