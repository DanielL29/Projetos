export const baseUrl = 'http://localhost:3001/users'

export const baseState = {
    user: { 
        nome: '', 
        idade: '', // 0 
        sexo: '', 
        altura: '', // 0.0
        peso: '' // 0.0
    },
    list: [],
    form: false,
    showTable: false,
    mode: 'update',
    maiorAltura: {},
    maiorPeso: {},
    mediaDasAlturas: '',
    mediaDosPesos: '',
    imc: ''
} 

export function Toggle() {

    let button = document.querySelector('.button')
    let app = document.querySelector('.app')
    let aside = document.querySelector('.aside')
    let section = document.querySelectorAll('.section')
    let icon = document.querySelector('.fa')

    button.onclick = function() {
        app.classList.toggle('active')
        aside.classList.toggle('active')
        section.forEach(item => {
            item.classList.toggle('active')
        })
        icon.classList.toggle('fa-align-justify')
    }
}


