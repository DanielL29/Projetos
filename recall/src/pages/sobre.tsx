import Layout from "../components/templates/layout/Layout";

export default function Sobre() {
  return (
    <div>
        <Layout titulo="Sobre a Aplicação" 
          subtitulo="Detalhes sobre criação da aplicação">
            <p className="w-2/4 text-xl font-light">
              Recall é uma aplicação inspirada com base no Anki, 
              proporcionando uma proposta parecida. Inicialmente foi desenvolvida
              como um projeto em um modúlo da faculdade, tendo como integrantes neste projeto
              4 alunos: Benjamim Estevo, Daniel Henrique, Daniel Lucas e Murilo Rezende. 
            </p>
        </Layout>
    </div>
  )
}
