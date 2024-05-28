import { useEffect, useState } from "react"
import { getEmployees } from '../requests.ts'
import EmployeeCard from "./EmployeeCard.jsx"
import '../Styles/employee.scss'

export default function EmployeeContainer() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees()
      .then(employees => setEmployees(employees))
  }, [])

  return (
    <div className="employee-container">
      {employees.map((employee) => <EmployeeCard key={`employee_${employee.firstName}`} employee={employee} />)}
    </div>
  )
}