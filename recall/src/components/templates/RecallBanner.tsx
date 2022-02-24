import Logo from "./layout/Logo";

export default function RecallBanner() {
    return (
        <div className={`
            md:flex flex-col justify-center items-center
            hidden md:w-1/2 lg:w-2/3 
            h-screen w-full
            bg-cyan-500
        `}>
            <Logo className='h-36 w-36' />
            <span className='font-bold text-white text-3xl p-5'>Bem vindo ao Recall!</span>
        </div>
    )
}