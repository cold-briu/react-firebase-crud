import React, { useContext } from 'react'
import { UserForm } from '../components'
import { users } from '../context'

const CreateUser = () => {

	const { sendUser } = useContext(users.usersDispatcherContext)

	return (
		<div className="p-3">
			<h4><em>container: CreateUser.jsx</em></h4>
			<div className="container">
				<div className="row">
					<div className="col-2 col-md-3">

					</div>
					<div className="col-8 col-md-6">
						<UserForm sendUser={sendUser} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateUser