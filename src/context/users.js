import React, { createContext, useState } from 'react'

export const usersContext = createContext()

export const UsersProvider = ({ children }) => {

	return (
		<>
			{children}
		</>
	)
}