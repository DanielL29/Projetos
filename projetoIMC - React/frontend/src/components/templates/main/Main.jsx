import React from "react"
import './Main.css'

function Main(props) {
    return (
        <React.Fragment>
            <main className="content container-fluid">
                <div className="content-main">
                    <div className="main-card">
                        <h1 className="title">
                            <i className={`fa fa-${props.icon}`}></i> 
                            {props.title}
                        </h1>
                        <hr />    
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main