import React from "react"
import './inputResponsive.css'

function InputResponsive(props) {
    return (
        <div className="col-12 col-md-6 mb-2">
            <div className="form-group">
                <label>{props.label}</label>
                <input type={props.type} 
                    className={props.class}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    disabled={props.disabled}/>
            </div>
        </div>
    )
}

export default InputResponsive