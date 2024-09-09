import { NavLink } from "react-router-dom"

export default function Header() {

	return (
        <header>
            <h1>HRnet</h1>
            <nav>
                <NavLink to="/" className={ ({ isActive }) => isActive ? "active-link" : "" }>Home</NavLink>
                <NavLink to="/employee-list" className={ ({ isActive }) => isActive ? "active-link" : "" }>Current Employees</NavLink>
            </nav>
        </header>
	)
}