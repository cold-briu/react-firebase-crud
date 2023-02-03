import React, { useContext, useEffect } from 'react'
import { users } from "../context";
import { UserList } from "../components";


const GetUsers = () => {

	const { getData } = useContext(users.usersDispatcherContext)

	const { data, error, isLoading } = useContext(users.usersContext)

	useEffect(() => {
		if (!data) {
			getData()
		}
	}, [data])


	return (
		<>
			<div className="p-3">

				<h4><em>container: GetUsers.jsx</em></h4>

				<p> error: {error}</p>
				<p> isLoading: {String(isLoading)}</p>

				<UserList list={data} />
			</div>
		</>
	)
}

export default GetUsers