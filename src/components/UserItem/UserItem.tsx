import React from 'react';
import { User } from '../../types';

const UserItem: React.FC<User> = ({ name, email, active, role }) => {
	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<p className='card-title'>{name}</p>
				<p className='card-title'>email {email}</p>
				<p className='card-title'>active {active ? 'y' : 'n'}</p>
				<p className='card-title'>role {role}</p>
			</div>
		</div>
	);
};

export default UserItem;
