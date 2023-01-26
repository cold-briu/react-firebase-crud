import React from "react"
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<h1>Hola mundo</h1>} />
	)
)