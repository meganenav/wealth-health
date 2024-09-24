import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: []
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
	addEmployee: (state, action) => {
		state.employees = [...state.employees, action.payload]
	},
	resetStore: (state) => {
		state.employees = []
	},
  },
})

export const { addEmployee, resetStore } = employeeSlice.actions
export default employeeSlice.reducer