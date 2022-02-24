interface LogoProps {
    className?: string
}

export default function Logo(props: LogoProps) {
    return (
        <div>
            <img src="/images/recall.png" 
                alt="Icone Recall"
                className={`
                    rotate-45 mr-2
                    ${props.className}
                `} />
        </div>  
    )
}