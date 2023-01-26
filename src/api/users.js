import Axios from "axios"

const api = Axios.create({
	baseURL: "http://127.0.1:3004"
})

// export const deleteUser = async () => await api.delete()

export const deleteUser = async (id) => {
	let res = await api.delete(`/users/${id}`)
	return res
}

export const getUsers = async () => {
	let res = await api.get("/users")
	return res
}

export const getUserDetails = async (id) => {
	let res = await api.get(`/users/${id}`)
	return res
}

export const createUser = async (newUser) => {
	let res = await api.post("/users", newUser)
	return res
}

export const updateUser = async (id, newUser) => {
	let res = await api.put(`/users/${id}`, newUser)
	return res
}