import React from "react";

function SelectResponsive(props) {
    return (
        <div className="col-12 col-md-6 mb-2">
            <div className="form-group">
                <label>{props.label}</label>
                <select name={props.name} 
                    className={props.class} 
                    value={props.value} 
                    onChange={props.onChange} 
                    disabled={props.disabled}>
                    {props.children}
                </select>
            </div>
        </div>
    )
}

export default SelectResponsive