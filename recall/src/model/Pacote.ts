export default class PacoteModel {
    #id: string
    #pergunta: string
    #resposta: string
    #respostaRevelada: boolean
    #idUsuarioAtual: string
    #nomeCategoria: string
    salvarPacote: (pacote: PacoteModel) => Promise<PacoteModel>
    excluir: (pacote: PacoteModel) => Promise<void>
    obterPacotes: () => Promise<PacoteModel[]>

    constructor(pergunta: string, resposta: string, respostaRevelada: false, nomeCategoria: string,
        idUsuarioAtual: string = null, id: string = null) {
        this.#id = id
        this.#pergunta = pergunta
        this.#resposta = resposta
        this.#respostaRevelada = respostaRevelada
        this.#nomeCategoria = nomeCategoria
        this.#idUsuarioAtual = idUsuarioAtual
    }

    static padrao() {
        return new PacoteModel('', '', false, '')
    }

    get id() {
        return this.#id
    }

    get pergunta() {
        return this.#pergunta
    }

    get resposta() {
        return this.#resposta
    }

    get respostaRevelada() {
        return this.#respostaRevelada
    }

    get idUsuarioAtual() {
        return this.#idUsuarioAtual
    }

    get nomeCategoria() {
        return this.#nomeCategoria
    }
}

