import React from "react";
import './DashboardCard.css'

function DashboardCard(props) {
    return (
        <div className="dashboard-card " style={{ backgroundColor: !props.color ? '#A9BCD0' : props.color }}>
            <h3>{props.title}</h3>
            <hr />
            <p>{props.name}</p>
            <p>{props.status}</p>
        </div>
    )
}

export default DashboardCard