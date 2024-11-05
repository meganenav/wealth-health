import { useEffect } from "react"
import Header from "../../components/EmployeeList/Header"
import Table from "../../components/EmployeeList/Table"

export default function EmployeeList() {
	useEffect(() => 
        { document.title="HRNet - Employee List" }
    )

	//Displays employees' list
	return (
		<main>
			<div className="container">
				<Header />
				<Table />
			</div>
		</main>
	)
}