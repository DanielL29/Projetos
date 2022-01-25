import React from "react"
import './Header.css' 

import { Toggle } from '../../../config/functions'
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header className="header">
            <button type='button' 
                className='button' 
                onClick={Toggle}>
                    <i className='fa fa-align-left'></i> 
            </button>
            <div className="main-title">
                <Link to='/' className="header-link">Aplicação Web IMC - React.js</Link>
            </div>
        </header>
    )
}

export default Header