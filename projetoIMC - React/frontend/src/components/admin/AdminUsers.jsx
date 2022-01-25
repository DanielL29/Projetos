import React, { Component } from "react"
import { baseState, baseUrl } from "../../config/functions" 
import { ToastContainer, toast } from "react-toastify"
import axios from 'axios'

import Main from "../templates/main/Main"
import InputResponsive from "../templates/input-reponsive/InputResponsive"
import SelectResponsive from "../templates/select-responsive/SelectResponsive"
import THead from "../templates/table/THead"
import Button from '../templates/button/Button'

class AdminUsers extends Component {

    state = { ...baseState }

    componentDidMount() {
        axios(baseUrl).then(res => {
            this.setState({ list: res.data })
        })
    }

    clear() {
        this.setState({ user: baseState.user, form: baseState.form = false })
    }

    update() {
        const user = this.state.user
        const method = 'put'
        const url = `${baseUrl}/${user.id}` 

        axios[method](url, user)
            .then(res => {
                const list = this.getUpdateList(res.data)
                this.setState({ form: baseState.form = false, list })
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

    loadUser(user, mode) {
        this.setState({ user })
        baseState.form = true
        baseState.mode = mode
    }

    delete() {
        const user = this.state.user
        const method = 'delete'
        const url = `${baseUrl}/${user.id}` 

        axios[method](url)
            .then(res => {
                const list = this.getUpdateList(user, false)
                this.setState({ form: baseState.form = false, list })
                toast.error('Usuário Deletado...', { autoClose: 2000 })
            })
    }

    notify() {
        toast.success('Usuário Atualizado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <InputResponsive label='Nome' type="text" class="form-control" name='nome' 
                        value={this.state.user.nome} onChange={e => this.updateField(e)} 
                        placeholder="Digite o nome do novo usuario..." disabled={baseState.mode !== 'update'} />
                    <InputResponsive label='Idade' type="number" class="form-control" name='idade'
                        value={this.state.user.idade} onChange={e => this.updateField(e)}
                        placeholder="Digite a idade do novo usuario..." disabled={baseState.mode !== 'update'} />
                    <InputResponsive label='Altura' type="number" class="form-control" name='altura'
                        value={this.state.user.altura} onChange={e => this.updateField(e)}
                        placeholder="Digite a altura do novo usuario..." disabled={baseState.mode !== 'update'} /> 
                    <InputResponsive label='Peso' type="number" class="form-control" name='peso'
                        value={this.state.user.peso} onChange={e => this.updateField(e)}
                        placeholder="Digite o peso do novo usuario..." disabled={baseState.mode !== 'update'} />
                    <SelectResponsive label='Sexo' name="sexo" class="form-control" 
                        value={this.state.user.sexo} onChange={e => this.updateField(e)}
                        disabled={baseState.mode !== 'update'}>
                            <option></option>
                            <option value='M'>Masculino</option>
                            <option value='F'>Feminino</option>
                    </SelectResponsive>
                </div>
                <div className="row">
                    <div className="col-12 d-flex mt-2 mr-2">
                        { baseState.mode === 'update' ? 
                            <Button text='Atualizar' 
                                colorClass='primary' 
                                function={e => this.update(e)} />
                        :
                            <Button text='Deletar' 
                                colorClass='danger' 
                                function={e => this.delete(e)} />
                        }
                        <Button text='Cancelar' 
                            colorClass='secondary' 
                            function={e => this.clear(e)} />
                    </div>
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table table-hover m-4">
                    <THead id={true} />
                    <tbody>
                        {this.state.list.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nome}</td>
                                    <td>{user.idade}</td>
                                    <td>{user.altura}</td>
                                    <td>{user.peso}</td>
                                    <td>{user.sexo}</td>
                                    <td>
                                        <Button text={<i className="fa fa-pencil"></i>} 
                                            function={() => this.loadUser(user, 'update')}
                                            colorClass='warning'/>

                                        <Button text={<i className="fa fa-trash"></i>} 
                                            function={() => this.loadUser(user, 'delete')}
                                            colorClass='danger'/>
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
            <Main title='Administrar Usuario' icon='users'>
                <ToastContainer theme="colored"/>
                {baseState.showTable = false}
                {baseState.form ? this.renderForm() : <h3><i className='fa fa-table'></i> Tabela de Usuarios</h3>} 
                {this.renderTable()}
            </Main>
        )
    }
}


export default AdminUsers