import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "../../sass/main.scss"
import Header from "../../components/Header"
import CreateEmployee from "../../pages/CreateEmployee/"
import EmployeeList from "../../pages/EmployeeList/"
import Error from "../../components/Error"

export default function Routing() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error/>} />
        </Routes>
    </Router>
  )
}