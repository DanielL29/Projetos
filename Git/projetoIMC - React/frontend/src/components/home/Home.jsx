import React, { Component } from "react";
import Main from '../templates/main/Main'
import DashboardCard from "../templates/dashboard-card/DashboardCard";

import { baseUrl, baseState } from '../../config/functions';
import axios from 'axios';

class Home extends Component {

    state = { ...baseState }

    componentDidMount() {
        axios(baseUrl).then(res => {
            this.setState({ list: res.data })
        })
    }

    getBigherOne(field, maiorObject) {
        // const getAltura = user => `${user.nome}: ${user.altura}`
        const getMaior = (user, userAtual) => Number(userAtual[field]) - Number(user[field])
        
        axios.get(baseUrl).then(res => {
            const user = res.data
            const maior = user.sort(getMaior)[0]
            // getAltura(maiorAltura)
            baseState[maiorObject] = maior
        }) 
    }

    getAverage(field, mediaString) {

        const getField = user => user[field]
        const number = user => parseFloat(user)
        const getAvg = (user, userAtual) => user + userAtual

        axios.get(baseUrl).then(res => {
            const user = res.data
            const media = user.map(getField).map(number).reduce(getAvg) / user.length
            baseState[mediaString] = media.toFixed(2)
        })
    }

    render() {

        this.getBigherOne('altura', 'maiorAltura')
        this.getBigherOne('peso', 'maiorPeso')
        this.getAverage('altura', 'mediaDasAlturas')
        this.getAverage('peso', 'mediaDosPesos')

        return (
            <Main title='Home' icon='home'>
                <div>Bem Vindo!</div>
                <p>Aplicação em React para calculo de IMC</p>
                <h2><i className="fa fa-tags"></i> Dashboard</h2>
                <hr />
                <div className="dashboard-cards"> 
                    {baseState.showTable = false}
                    { baseState.maiorAltura ? 
                        <DashboardCard title='Maior Altura' 
                            name={`Nome: ${baseState.maiorAltura.nome}`} 
                            status={`Altura: ${baseState.maiorAltura.altura}`} 
                            color='#FB3640'/>  : ''} 

                    { baseState.maiorPeso ? 
                        <DashboardCard title='Maior Peso' 
                            name={`Nome: ${baseState.maiorPeso.nome}`} 
                            status={`Peso: ${baseState.maiorPeso.peso}`} 
                            color='#1D3461'/>  : ''} 

                    { baseState.mediaDasAlturas ? 
                        <DashboardCard title='Media das Alturas' 
                            status={`Media: ${baseState.mediaDasAlturas}`} 
                            color='#FF7F11' />  : ''}  

                    { baseState.mediaDosPesos ? 
                        <DashboardCard title='Media dos Pesos' 
                            status={`Media: ${baseState.mediaDosPesos}`} 
                            color='darkgreen' />  : ''}  
                    
                    <DashboardCard title='Usuários Cadastrados' 
                            status={`Usuários: ${this.state.list.length}`} 
                            color='darkviolet' />
                </div>
            </Main>   
        )
    }
}

export default Home