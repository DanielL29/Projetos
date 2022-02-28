export default class PacoteModel {
    #id: string
    #pergunta: string
    #resposta: string
    #respostaRevelada: boolean
    #desempenho: number
    #nomeCategoria: string
    #idUsuarioAtual: string
    salvarPacote: (pacote: PacoteModel) => Promise<PacoteModel>
    excluir: (pacote: PacoteModel) => Promise<void>
    obterPacotes: () => Promise<PacoteModel[]>

    constructor(pergunta: string, resposta: string, respostaRevelada: false, desempenho: number, nomeCategoria: string,
        idUsuarioAtual: string = null, id: string = null) {
        this.#id = id
        this.#pergunta = pergunta
        this.#resposta = resposta
        this.#respostaRevelada = respostaRevelada
        this.#desempenho = desempenho
        this.#nomeCategoria = nomeCategoria
        this.#idUsuarioAtual = idUsuarioAtual
    }

    static padrao() {
        return new PacoteModel('', '', false, 0, '')
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

    get desempenho() {
        return this.#desempenho
    }

    get nomeCategoria() {
        return this.#nomeCategoria
    }

    get idUsuarioAtual() {
        return this.#idUsuarioAtual
    }
}

