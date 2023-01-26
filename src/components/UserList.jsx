import React from 'react'
import UserCard from './UserCard'


const UsersList = ({ list }) => {

	return (
		<div className="p-3 mt-1">
			<div className="mt-5 mb-3">
				<span> component: UserList.jsx</span>
				<span> aka lista de componentes</span>
			</div>

			{
				list && list.map((e) => (
					<UserCard
						key={e.id}
						username={e.username}
						name={e.name}
						id={e.id}
					/>
				))
			}
		</div>
	)
}

export default UsersList