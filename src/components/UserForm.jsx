import React from 'react'
import { useForm } from 'react-hook-form'

/*
username
name
age
*/


const UserForm = ({ sendUser }) => {

	const { register, handleSubmit, reset } = useForm({
		values: {
			username: "initial"
		}
	});

	const handleReset = () => {
		// console.log(data, "reset");
		return {
			username: "",
			name: "",
			age: "",
		}
	}

	const onSubmit = (data) => {
		sendUser(data)

		reset(handleReset)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="md-3">
				<input type="text" className="mb-2 form-control" placeholder="username" id="username" {...register("username")} />
				<input type="text" className="mb-2 form-control" placeholder="name" id="name" {...register("name")} />
				<input type="text" className="mb-2 form-control" placeholder="age" id="age" {...register("age")} />
				<input type="submit" className="btn btn-success" />
			</div>
		</form>
	)
}

export default UserForm