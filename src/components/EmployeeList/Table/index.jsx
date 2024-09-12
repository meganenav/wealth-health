import { useSelector } from "react-redux"
//import { useDispatch } from "react-redux"
//import { resetStore } from "../../../redux/employeeSlice"

export default function Table() {
	//const dispatch = useDispatch()
	const employees = useSelector((state) => state.employee.employees)
	let displayEmployees = ""
	if(employees.length !== 0) {
		displayEmployees = employees.map((employee, index) => (
			<li key={index}>
				{ employee.firstName } {employee.lastName}, Department: {employee.department}
			</li>
		))
	}
	else {
		displayEmployees = <p>Not found</p>
	}
	//dispatch(resetStore())
	return (
		<div>
			<ul>{displayEmployees}</ul>
		</div>
	)
}