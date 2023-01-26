import React from 'react'
import { Outlet } from 'react-router'

const Navbar = () => {
	return (
		<>
			<div>Navbar</div>
			<Outlet />
			<div>Footer</div>
		</>
	)
}

export default Navbar