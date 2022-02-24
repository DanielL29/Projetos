interface LabelProps {
    label: string
    border: string
    labelColor: string
}

export default function Label(props: LabelProps) {
    return (
        <div className={`pb-3 ${props.labelColor}`}>
            <p>{props.label}</p>
            <hr className={`border ${props.border}`}/>
        </div>
    )
}