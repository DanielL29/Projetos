import React from "react"
import './Button.css'

function Button(props) {
    return (
        <button className={`btn btn-${props.colorClass}`} 
            onClick={props.function}>
                {props.text}
        </button>
    )
}

export default Button
