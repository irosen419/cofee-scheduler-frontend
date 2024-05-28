import { Employee } from './Types/Employee'
export function getEmployees(): Promise<Employee[]> {
  return fetch('http://localhost:4242/api/employees')
    .then(res => { return res.json() })
    .then(employees => {
      return employees
    })
}