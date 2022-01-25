import React, { Component } from "react";
import { baseUrl, baseState } from './../../config/functions'
import axios from 'axios'

import Main from "../templates/main/Main"
import THead from '../templates/table/THead'
import Button from '../templates/button/Button'
import TableImc from "../templates/table/TableImc";

class ImcCalc extends Component {

    state = { ...baseState }

    componentDidMount() {
        axios.get(baseUrl).then(res => {
            this.setState({ list: res.data })
        })
    }

    calcularImc(user, showTable) {
        this.setState({ imc: '' })

        let calculoImc = Number(user.peso) / (Number(user.altura) * Number(user.altura))
        let result = ''

        if(user.sexo === 'M') {
            if(calculoImc < 20.7) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Este homem esta abaixo do peso proporcional a sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else if(calculoImc >= 20.7 && calculoImc < 26.4) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Este homem esta com o peso normal para sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else if(calculoImc >= 26.4 && calculoImc < 27.8) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Este homem esta acima do peso normal para sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else if(calculoImc >= 27.8 && calculoImc < 32.3) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Este homem esta obeso com base em sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else {
                result = `Resultado: ${calculoImc.toFixed(2)}, Este homem esta com obesidade mórbida com base em sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            }
        } else {
            if(calculoImc < 19.1) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Esta mulher esta abaixo do peso proporcional a sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else if(calculoImc >= 19.1 && calculoImc < 25.8) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Esta mulher esta com o peso normal para sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else if(calculoImc >= 25.8 && calculoImc < 27.3) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Esta mulher esta acima do peso normal para sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else if(calculoImc >= 27.3 && calculoImc < 31.1) {
                result = `Resultado: ${calculoImc.toFixed(2)}, Esta mulher esta obesa com base em sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            } else {
                result = `Resultado: ${calculoImc.toFixed(2)}, Esta mulher esta com obesidade mórbida com base em sua altura`
                this.setState({ imc: result, showTable: baseState.showTable = showTable })
            }
        }
    }

    renderTableImc() {
        return (
            <TableImc />
        )
    }

    renderTable() {
        return (
            <table className="table table-hover m-4">
                <THead />
                <tbody>
                    {this.state.list.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.nome}</td>
                                <td>{user.idade}</td>
                                <td>{user.altura}</td>
                                <td>{user.peso}</td>
                                <td>{user.sexo}</td>
                                <td>
                                    <Button text={<i className='fa fa-calculator'> Calcular </i>}
                                        function={() => this.calcularImc(user, true)}
                                        colorClass='success'/>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        )
    }

    render() {
        return (
            <Main title='Calcular IMC' icon='dashboard'>
                {/* <h3><i className='fa fa-users'></i> Usuarios</h3> */}
                {this.renderTable()}
                <h4>{this.state.imc}</h4>
                <br />
                {baseState.showTable === true ? this.renderTableImc() : ''}
            </Main>
        )
    }
}

export default ImcCalc