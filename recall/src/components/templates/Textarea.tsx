import Label from "./Label";

interface TextareaProps {
    label: string
    valor: any
    border: string
    placeholder?: string
    labelColor: string
    desabilitado?: boolean
    onChange: (e: any) => void
}

export default function Textarea(props: TextareaProps) {
    return (
        <div>
            <Label label={props.label} border={props.border} labelColor={props.labelColor} />
            <textarea 
                placeholder={props.placeholder}
                value={props.valor} 
                onChange={(e) => props.onChange(e.target.value)} 
                disabled={props.desabilitado}
                className={`
                    resize-none rounded-lg w-full
                    p-2 border border-gray-300
                    focus:border-cyan-500 focus:outline-none
                    dark:bg-gray-300 dark:text-gray-600
                `}
            />
        </div>
    )
}