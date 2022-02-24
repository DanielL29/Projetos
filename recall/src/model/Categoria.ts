export default class CategoriaModel {
    #id: string
    #categoria: string
    #idUsuarioAtual: string
    salvar: (categoria: CategoriaModel) => Promise<CategoriaModel>
    excluir: (categoria: CategoriaModel) => Promise<void>
    obterCategorias: () => Promise<CategoriaModel[]>

    constructor(categoria: string, idUsuarioAtual: string, id: string = null) {
        this.#id = id
        this.#categoria = categoria
        this.#idUsuarioAtual = idUsuarioAtual
    }

    static padrao() {
        return new CategoriaModel('', '')
    }

    get id() {
        return this.#id
    }

    get categoria() {
        return this.#categoria
    }

    get idUsuarioAtual() {
        return this.#idUsuarioAtual
    }
}