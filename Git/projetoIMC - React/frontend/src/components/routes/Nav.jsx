import React from "react";
import './Nav.css'

import NavbarCard from "../templates/navbar-card/NavbarCard";

function Nav(props) {
    return (
        <aside className="aside">
            <nav className="menu">
                <NavbarCard sectionName='Inicio' icon='home' />
                <NavbarCard path='criar' sectionName='Criar Usuario' icon='user-plus' />
                <NavbarCard path='users' sectionName='Gerenciar Usuarios' icon='users' />
                <NavbarCard path='imc' sectionName='Calcular IMC' icon='dashboard' />
            </nav>
        </aside>
    )
}

export default Nav