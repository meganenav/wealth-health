import { useEffect } from "react"
import Header from "../../components/CreateEmployee/Header"
import Form from "../../components/CreateEmployee/Form"

export default function CreateEmployee() {
	useEffect(() => 
        { document.title="HRNet - Create employee" }
    )

	//Displays a form to add an employee
	return (
		<main>
			<div className="container">
				<Header />
				<Form />
			</div>
		</main>
	)
}