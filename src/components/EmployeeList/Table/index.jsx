import { useSelector } from "react-redux"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
//import { useDispatch } from "react-redux"
//import { resetStore } from "../../../redux/employeeSlice"

export default function Table() {
	//const dispatch = useDispatch()
	const employees = useSelector((state) => state.employee.employees)
	const columnDefs = [
        { headerName: "First Name", field: "firstName", width: 200 },
        { headerName: "Last Name", field: "lastName", width: 200 },
		{ headerName: "Start Date", field: "startDate", valueFormatter: (params) => new Date(params.value).toLocaleDateString("en-US"), width: 150 },
		{ headerName: "Department", field: "department", width: 150 },
		{ headerName: "Date of Birth", field: "dateOfBirth", valueFormatter: (params) => new Date(params.value).toLocaleDateString("en-US"), width: 150 },
		{ headerName: "Street", field: "address.street", width: 250 },
		{ headerName: "City", field: "address.city", width: 150 },
        { headerName: "State", field: "address.state", width: 100 },
		{ headerName: "Zip Code", field: "address.zipCode", width: 120 }
    ]

    const defaultColDef = {
        sortable: true,
        filter: true,
        resizable: true
    }
	//dispatch(resetStore())
	return (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
            <AgGridReact
                rowData={employees}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
            />
        </div>
	)
}