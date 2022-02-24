interface BotaoGoogleProps {
    onClick?: () => void
}

export default function BotaoGoogle(props: BotaoGoogleProps) {
    return (
        <button onClick={props.onClick} className={`
            flex items-center justify-center
            w-full bg-white hover:bg-red-500
            text-gray-600 hover:text-white rounded-lg px-4 py-3 mt-6
            border-2 border-red-300 hover:border-red-500
            transition-colors duration-500
        `}>
            <img 
                src='/images/google.png' 
                alt='Icone Google'
                className='h-6 w-6 mr-2' 
            />
            <span>Entrar com Google</span>
        </button>
    )
}