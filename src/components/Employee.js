import React from "react"

import "./Employee.css"

function Employee(props) {
    return (
        <div className="employee-container">
            <div className="employee-bg"></div>
            <div className="employee-index">{props.itemIdx}</div>
            <div className="employee-field">
                <p className="employee-key">EMP ID</p>
                <div className="employee-detail">
                    <p>:</p>
                    <p className="employee-identifier">{props.id}</p>
                </div>
            </div>
            <div className="employee-field">
                <p className="employee-key">Name</p>
                <div className="employee-detail">
                    <p>:</p>
                    <p className="employee-identifier">{props.name}</p>
                </div>
            </div>
            <div className="employee-field">
                <p className="employee-key">DOB</p>
                <div className="employee-detail">
                    <p>:</p>
                    <p className="employee-dob">{props.dob}</p>
                </div>
            </div>
            <div className="employee-field">
                <p className="employee-key">Role</p>
                <div className="employee-detail">
                    <p>:</p>
                    <p className="employee-role">{props.role}</p>
                </div>
            </div>
        </div>
    )
}

export default Employee