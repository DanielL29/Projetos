export default interface UsuarioModel {
    uid: string
    email: string
    displayName: string
    token?: string
    providerId: string
    photoURL: string
}