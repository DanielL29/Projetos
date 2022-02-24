interface LinkProps {
    onClick?: () => void
    texto?: string
    children: any 
}

export default function Link(props: LinkProps) {
    return (
        <p className='mt-8'>
            {props.texto} 
            <a onClick={props.onClick} className={`
                text-cyan-500 hover:text-cyan-600 font-semibold
                cursor-pointer ml-2
            `}>
                {props.children}
            </a>
        </p>
    )
}