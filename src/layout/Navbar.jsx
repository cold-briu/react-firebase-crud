import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-sm bg-light">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/" >
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/users" >
								Users
							</Link>
						</li>

					</ul>
				</div>
			</nav>
			<div className="container p-2">
				<Outlet />

			</div>
		</>
	)
}

export default Navbar