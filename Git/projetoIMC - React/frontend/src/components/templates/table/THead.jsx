import React from "react";

function THead(props) {
    return(
        <thead>
            <tr>
                {props.id === true ? <th>ID</th> : '' }
                <th>Nome</th>
                <th>Idade</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Sexo</th>
                <th>Ações</th>
            </tr>
        </thead>
    )
}

export default THead