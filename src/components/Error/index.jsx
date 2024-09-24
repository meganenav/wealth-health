import { NavLink } from "react-router-dom"

export default function Error() {
    return (
        <main>
			<div className="container">
				<h1>404</h1>
				<p>Page not found.</p>
				<NavLink to="/">Go to the homepage</NavLink>
			</div>
        </main>
    )
}