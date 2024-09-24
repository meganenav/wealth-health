import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Select from "react-dropdown-select"
import { addEmployee } from "../../../redux/employeeSlice"
import { states } from "../../../data/statesList"
import { departments } from "../../../data/departmentsList"

export default function Form() {
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newDateOfBirth, setNewDateOfBirth] = useState("")
    const [newStartDate, setNewStartDate] = useState("")
    const [newAddressStreet, setNewAddressStreet] = useState("")
    const [newAddressCity, setNewAddressCity] = useState("")
    const [newAddressState, setNewAddressState] = useState("")
    const [newAddressZipCode, setNewAddressZipCode] = useState("")
    const [newDepartment, setNewDepartment] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const employeeData = {
            firstName: newFirstName,
            lastName: newLastName,
            dateOfBirth: newDateOfBirth,
            startDate: newStartDate,
            address: {
                street: newAddressStreet,
                city: newAddressCity,
                state: newAddressState,
                zipCode: newAddressZipCode,
            },
            department: newDepartment,
        }

        dispatch(addEmployee(employeeData))

        setNewFirstName("")
        setNewLastName("")
        setNewDateOfBirth("")
        setNewStartDate("")
        setNewAddressStreet("")
        setNewAddressCity("")
        setNewAddressState("")
        setNewAddressZipCode("")
        setNewDepartment("")
    }

	return (
        <>
			<form onSubmit={handleSubmit} id="create-employee">
                <div className="form-content">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={newFirstName} 
                    onChange={(e) => setNewFirstName(e.target.value)} />
                    
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={newLastName} 
                    onChange={(e) => setNewLastName(e.target.value)} />

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="text" id="dateOfBirth" name="dateOfBirth" value={newDateOfBirth} 
                    onChange={(e) => setNewDateOfBirth(e.target.value)} />

                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate" name="startDate" value={newStartDate} 
                    onChange={(e) => setNewStartDate(e.target.value)} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="addressStreet">Street</label>
                        <input type="text" id="addressStreet" name="addressStreet" value={newAddressStreet} 
                        onChange={(e) => setNewAddressStreet(e.target.value)} />

                        <label htmlFor="addressCity">City</label>
                        <input type="text" id="addressCity" name="addressCity" value={newAddressCity} 
                        onChange={(e) => setNewAddressCity(e.target.value)} />

                        <label>State</label>
                        <Select
                            options={states}
                            values={[]}
                            onChange={(selectedValues) => setNewAddressState(selectedValues[0] ? selectedValues[0].value : "")}
                        />

                        <label htmlFor="addressZipCode">Zip Code</label>
                        <input type="number" id="addressZipCode" name="addressZipCode" value={newAddressZipCode} 
                        onChange={(e) => setNewAddressZipCode(e.target.value)} />
                    </fieldset>

                    <label>Department</label>
                    <Select
                        options={departments}
                        values={[]}
                        onChange={(selectedValues) => setNewDepartment(selectedValues[0] ? selectedValues[0].value : "")}
                    />
                </div> 
                <button>Save</button>
            </form>	
		</>
	)
}