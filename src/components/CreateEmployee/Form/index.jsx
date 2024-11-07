import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import Select from "react-dropdown-select"
import DatePicker from "react-datepicker"
//@ts-ignore
import Modal from "custom-modal-react-component"
import "custom-modal-react-component/dist/styles/modal-component.css"
import closeIcon from "custom-modal-react-component/dist/icons/close.svg"
import "react-datepicker/dist/react-datepicker.css"
import { addEmployee } from "../../../redux/employeeSlice"
import { states } from "../../../data/statesList"
import { departments } from "../../../data/departmentsList"

export default function Form() {
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newDateOfBirth, setNewDateOfBirth] = useState(new Date())
    const [newStartDate, setNewStartDate] = useState(new Date())
    const [newAddressStreet, setNewAddressStreet] = useState("")
    const [newAddressCity, setNewAddressCity] = useState("")
    const [newAddressState, setNewAddressState] = useState("")
    const [newAddressZipCode, setNewAddressZipCode] = useState("")
    const [newDepartment, setNewDepartment] = useState("")
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const modalRef = useRef() 

    // Validation form implementation
    const validateForm = () => {
        const newErrors = {}
        if (!newFirstName) newErrors.firstName = "First Name is required"
        if (!newLastName) newErrors.lastName = "Last Name is required"
        if (!newAddressStreet) newErrors.addressStreet = "Street is required"
        if (!newAddressCity) newErrors.addressCity = "City is required"
        if (!newAddressState) newErrors.addressState = "State is required"
        if (!newAddressZipCode) newErrors.addressZipCode = "Zip Code is required"
        if (!newDepartment) newErrors.department = "Department is required"
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    /* Submit function, checks validation form.
    If data are validated, adds a new employee in the store with data in an object.
    Opens dialog to display successful form submission and resets form.
    */
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const employeeData = {
            firstName: newFirstName,
            lastName: newLastName,
            dateOfBirth: newDateOfBirth.getTime(),
            startDate: newStartDate.getTime(),
            address: {
                street: newAddressStreet,
                city: newAddressCity,
                state: newAddressState,
                zipCode: newAddressZipCode,
            },
            department: newDepartment,
        }

        dispatch(addEmployee(employeeData))

        if (modalRef.current) {
            modalRef.current.open()
        }

        setNewFirstName("")
        setNewLastName("")
        setNewDateOfBirth(new Date())
        setNewStartDate(new Date())
        setNewAddressStreet("")
        setNewAddressCity("")
        setNewAddressState("")
        setNewAddressZipCode("")
        setNewDepartment("")
        setErrors({})
    }

    //Displays form with different fields and calls external components DatePicker, Select and Modal with parameters
	return (
        <>
            <Modal ref={modalRef} title="Success" message="Employee created!" theme="light" closeIconPath={closeIcon} />
			<form onSubmit={handleSubmit} id="create-employee">
                <div className="form-content">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={newFirstName} 
                    onChange={(e) => setNewFirstName(e.target.value)} />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={newLastName} 
                    onChange={(e) => setNewLastName(e.target.value)} />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}

                    <label>Date of Birth</label>
                    <DatePicker selected={newDateOfBirth} onChange={(date) => setNewDateOfBirth(date)} />

                    <label>Start Date</label>
                    <DatePicker selected={newStartDate} onChange={(date) => setNewStartDate(date)} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="addressStreet">Street</label>
                        <input type="text" id="addressStreet" name="addressStreet" className="input-address" value={newAddressStreet} 
                        onChange={(e) => setNewAddressStreet(e.target.value)} />
                        {errors.addressStreet && <div className="error">{errors.addressStreet}</div>}

                        <label htmlFor="addressCity">City</label>
                        <input type="text" id="addressCity" name="addressCity" className="input-address" value={newAddressCity} 
                        onChange={(e) => setNewAddressCity(e.target.value)} />
                        {errors.addressCity && <div className="error">{errors.addressCity}</div>}

                        <label>State</label>
                        <Select
                            options={states}
                            values={[]}
                            onChange={(selectedValues) => setNewAddressState(selectedValues[0] ? selectedValues[0].value : "")}
                        />
                        {errors.addressState && <div className="error">{errors.addressState}</div>}

                        <label htmlFor="addressZipCode">Zip Code</label>
                        <input type="number" id="addressZipCode" name="addressZipCode" className="input-address" value={newAddressZipCode} 
                        onChange={(e) => setNewAddressZipCode(e.target.value)} />
                        {errors.addressZipCode && <div className="error">{errors.addressZipCode}</div>}
                    </fieldset>

                    <label>Department</label>
                    <Select
                        options={departments}
                        values={[]}
                        onChange={(selectedValues) => setNewDepartment(selectedValues[0] ? selectedValues[0].value : "")}
                    />
                    {errors.department && <div className="error">{errors.department}</div>}
                </div> 
                <button className="btn-submit">Save</button>
            </form>	
		</>
	)
}