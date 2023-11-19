import React, { useState } from "react"

import Employee from "./Employee"
import BottomNavBar from "./BottomNavBar"

import "./EmployeePage.css"
import { FaMagnifyingGlass } from "react-icons/fa6"

const exampleEmployees = [
    {
        id: 1,
        name: "Arjun",
        dob: "16-11-2000",
        role: "Software Engineer"
    },
    {
        id: 2,
        name: "Mahesh",
        dob: "15-01-2000",
        role: "Web Developer"
    },
    {
        id: 3,
        name: "Divya",
        dob: "04-08-1995",
        role: "Product Owner"
    },
    {
        id: 4,
        name: "Jahnavi",
        dob: "01-02-1990",
        role: "Chief Technical Officer"
    },
    {
        id: 5,
        name: "Abhishek",
        dob: "30-06-2001",
        role: "UI/UX Designer"
    },
]

function EmployeePage() {
    const [search, setSearch] = useState('')
    const [employees, setEmployees] = useState(exampleEmployees)

    function populateEmployees() {
        const elementsList = []

        employees.forEach((employee, idx) => {
            const employeeElement = (
                <Employee
                    itemIdx={idx + 1}
                    id={employee.id}
                    name={employee.name}
                    dob={employee.dob}
                    role={employee.role}
                />
            )

            if ((idx + 1) % 2 === 1) {
                elementsList.push(
                    <div className="employee odd" key={idx}>
                        {employeeElement}
                    </div>
                )
            } else {
                elementsList.push(
                    <div className="employee even" key={idx}>
                        {employeeElement}
                    </div>
                )
            }
        })

        return elementsList
    }

    function searchEmployees(e, query) {
        e.preventDefault()

        const results = []

        exampleEmployees.forEach((employee) => {
            const queryName = query.toLowerCase()
            const employeeName = employee.name.toLowerCase()

            if (employeeName.includes(queryName)) {
                results.push(employee)
            }
        })

        setEmployees(results)
    }

    return (
        <div className="employee-content">
            <div className="page-heading">
                <img
                    className="employee-call"
                    src="./images/caller-icon.png"
                    alt="User Call"
                />
                <div className="notifs-section">
                    <img className="notif-moptro" src="./images/moptro-logo.png" alt="MOPTro Notifications" />
                    <div className="notif-badge">
                        <div className="notif-bg"></div>
                        <p className="notif-number">4</p>
                    </div>
                </div>
                <div>
                    <form className="search-form">
                        <div className="search-form-bg"></div>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search with name"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            onClick={(e) => searchEmployees(e, search)}
                            className="search-button"
                        >
                            <FaMagnifyingGlass className="resized-md" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="employees-list">
                {populateEmployees()}
            </div>
            <BottomNavBar />
        </div>
    )
}

export default EmployeePage