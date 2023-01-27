import React, { useContext } from 'react'
import { usersDispatcherContext } from '../context/users'

const CreateUser = () => {

	const { sendUser } = useContext(usersDispatcherContext)

	return (
		<div className="p-3">

		</div>
	)
}

export default CreateUser