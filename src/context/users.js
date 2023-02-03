import React, { createContext, useState } from 'react'
import { useParams } from 'react-router';
import { users as usersApi } from "../api";

export const usersContext = createContext()

export const usersDispatcherContext = createContext()

export const UsersProvider = ({ children }) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [currentUser, setCurrentUser] = useState({
		username: "init @username",
		name: "initial name",
		age: "initial age"
	})

	const getData = async () => {
		console.log("getData")
		try {
			setData(null)
			setIsLoading(true)
			const res = await usersApi.getUsers()
			setIsLoading(false)
			setData(res.data)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	const sendUser = async (userData) => {
		console.log("sendUser")
		try {
			setIsLoading(true)

			if (userData.id) {
				await usersApi.updateUser(userData.id, userData)
			} else {
				await usersApi.createUser(userData)
			}

			setIsLoading(false)
			await getData()
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	const getUserDetails = async (id) => {
		console.log("getUserDetails")
		try {
			setIsLoading(true)
			const res = await usersApi.getUserDetails(id)
			setCurrentUser(res.data);
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}


	const deleteUser = async (userId) => {
		console.log("deleteUser")
		try {
			setIsLoading(true)
			await usersApi.deleteUser(userId)
			setIsLoading(false)
			await getData()
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	// const state = {
	// 	data: data,
	// 	error: error,
	// 	isLoading: isLoading
	// };

	const state = { data, error, isLoading, currentUser };

	const dispatchers = { getData, deleteUser, sendUser, getUserDetails }

	return (
		<>
			<usersDispatcherContext.Provider value={dispatchers}>
				<usersContext.Provider value={state}>
					{children}
				</usersContext.Provider>
			</usersDispatcherContext.Provider>
		</>
	)
}