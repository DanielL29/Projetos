import React, { Component } from "react"
import { baseState, baseUrl } from './../../config/functions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import Main from  '../templates/main/Main'
import InputResponsive from '../templates/input-reponsive/InputResponsive'
import SelectResponsive from "../templates/select-responsive/SelectResponsive"
import Button from "../templates/button/Button"

class User extends Component {

    state = { ...baseState }

    clear() {
        this.setState({ user: baseState.user })
    }

    create() {
        const user = this.state.user
        const method = 'post'
        const url = baseUrl
        
        axios[method](url, user)
            .then(res => {
                const list = this.getUpdateList(res.data)
                this.setState({ user: baseState.user, list })
                this.notify()
            })
    }

    getUpdateList(user, add = true) {
        const list  = this.state.list.filter(userParam => userParam.id !== user.id)

        if(add) list.unshift(user)
        return list
    }

    updateField(e) {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    notify() {
        toast.success('Usuário Cadastrado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    }

    render() {
        return (
            <Main title='Criar Usuario' icon='user-plus'>
                {baseState.showTable = false}
                <ToastContainer theme="colored" />
                <div className="form">
                    <div className="row">
                        <InputResponsive label='Nome' type="text" class="form-control" name='nome' 
                            value={this.state.user.nome} onChange={e => this.updateField(e)} 
                            placeholder="Digite o nome do novo usuario..." />
                        <InputResponsive label='Idade' type="number" class="form-control" name='idade'
                            value={this.state.user.idade} onChange={e => this.updateField(e)}
                            placeholder="Digite a idade do novo usuario..." />
                        <InputResponsive label='Altura' type="number" class="form-control" name='altura'
                            value={this.state.user.altura} onChange={e => this.updateField(e)}
                            placeholder="Digite a altura do novo usuario..." /> 
                        <InputResponsive label='Peso' type="number" class="form-control" name='peso'
                            value={this.state.user.peso} onChange={e => this.updateField(e)}
                            placeholder="Digite o peso do novo usuario..." />
                        <SelectResponsive label='Sexo' name="sexo" class="form-control" 
                            value={this.state.user.sexo} onChange={e => this.updateField(e)}>
                                <option></option>
                                <option value='M'>Masculino</option>
                                <option value='F'>Feminino</option>
                        </SelectResponsive>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex mt-2 mr-2">
                            <Button text='Criar' 
                                colorClass='primary' 
                                function={e => this.create(e)} />

                            <Button text='Cancelar' 
                                colorClass='secondary' 
                                function={e => this.clear(e)} />
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}

export default User