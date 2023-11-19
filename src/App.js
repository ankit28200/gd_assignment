import React from "react"
import { Routes, Route } from "react-router-dom"

import EmployeePage from "./components/EmployeePage"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </div>
  )
}

export default App