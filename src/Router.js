import React from "react"
import { Home, Users } from "./pages";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />
			<Route path="/users" element={<Users />} />
		</>
	)
)

// TYPESCRIPT > NEXT JS 