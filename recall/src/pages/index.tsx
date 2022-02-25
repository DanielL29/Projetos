import Layout from "../components/templates/layout/Layout";
import Logo from "../components/templates/layout/Logo";

export default function Home() {
  return (
    <div>
        <Layout titulo="Home da Aplicação Recall" 
          subtitulo="Aplicação baseada no Anki, com objetivo de fortalecer o aprendizado">
            <div className="w-2/4">
              <div className="flex flex-col justify-center items-center">
                <div className={`
                  flex items-center justify-end relative
                  h-12 w-12 rounded-full 
                  bg-cyan-500 z-10 
                  dark:bg-cyan-800
                `}>
                  <Logo className="h-8 w-8 select-none"/>
                </div>
                <div className={`
                  bg-cyan-500 relative
                  dark:bg-cyan-800
                  w-full h-2 rounded-full bottom-7`}></div>
              </div>
              <div className={`
                flex flex-col items-center justify-center 
                mt-5 text-xl font-light
              `}>
                <p>
                  O Recall é o mais novo programa para gerenciamento de flashcards, 
                  com diversas funções, ele poderá te ajudar a se lembrar de qualquer coisa que necessite, 
                  e com um design simples e de fácil uso.
                </p>
                <p className="w-full mt-2">
                  Em breve, aplicação para mobile também...
                </p>
              </div>
            </div>
        </Layout>
    </div>
  )
}
