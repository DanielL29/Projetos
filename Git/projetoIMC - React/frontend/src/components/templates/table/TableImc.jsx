import React from "react";
import './TableImc.css'

function TableImc(props) {
    return (
        <table className="table table-dark table-striped table-bordered m-2">
            <thead>
                <th>Estado</th>
                <th>Mulher</th>
                <th>Homem</th>
            </thead>
            <tbody>
                <tr>
                    <td>abaixo do peso</td>
                    <td> {'< 19.1'} </td>
                    <td> {'< 20.7'} </td>
                </tr>
                <tr>
                    <td>peso normal</td>
                    <td> {'19.1 - 25.8'} </td>
                    <td> {'20.7 - 26.4'} </td>
                </tr>
                <tr>
                    <td>acima do peso</td>
                    <td> {'25.8 - 27.3'} </td>
                    <td> {'26.4 - 27.8'} </td>
                </tr>
                <tr>
                    <td>obesidade</td>
                    <td> {'27.3 - 31.1'} </td>
                    <td> {'27.8 - 32.3'} </td>
                </tr>
                <tr>
                    <td>obesidade mórbida</td>
                    <td> {'> 31.1'} </td>
                    <td> {'> 32.3'} </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableImc