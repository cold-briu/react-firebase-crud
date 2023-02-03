import React, { useContext, useEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import { UserForm } from '../components'
import { users } from '../context'

const CreateUser = () => {
	const { id } = useParams()
	const { sendUser, getUserDetails } = useContext(users.usersDispatcherContext)
	const { currentUser } = useContext(users.usersContext)

	useEffect(() => {
		if (id) {
			getUserDetails(id)
		}
	}, [id])

	return (
		<div className="p-3">
			<h4><em>container: CreateUser.jsx</em></h4>
			<div className="container">
				<div className="row">
					<div className="col-2 col-md-3">

					</div>
					<div className="col-8 col-md-6">
						<UserForm sendUser={sendUser} initialValues={currentUser} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateUser