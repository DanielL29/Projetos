import React from "react"
import './NavbarCard.css'
import { Link } from 'react-router-dom';

function NavbarCard(props) {

    return (
        <Link to={`/${props.path ? props.path : ''}`} className="link">
            <div className='section'>
                <i className={`fa fa-${props.icon} m-3`}></i> 
                    {props.sectionName}
            </div>
        </Link>
    )
}

export default NavbarCard