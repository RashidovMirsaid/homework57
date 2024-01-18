import React, { useState } from 'react';
import { User } from '../../types';

interface UserForm {
	addUser: (user: User) => void;
}

const UserForm: React.FC<UserForm> = ({ addUser }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [active, setActive] = useState(false);
	const [role, setRole] = useState('user');

	const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRole(e.target.value);
	};

	const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setActive(e.target.checked);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addUser({ name, email, role, active });
		setName('');
		setActive(false);
		setEmail('');
		setRole('user');
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					className='form-control'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='email' className='form-label'>
					email
				</label>
				<input
					type='email'
					className='form-control'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='form-check-label'>active</label>
				<input
					type='checkbox'
					className='form-check-input'
					checked={active}
					onChange={handleActiveChange}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='role'>role</label>
				<select
					className='form-select'
					id='role'
					value={role}
					onChange={handleRoleChange}
				>
					<option value='user'>user</option>
					<option value='editor'>editor</option>
					<option value='admin'>admin</option>
				</select>
			</div>
			<button type='submit' className='btn btn-success'>
				create user
			</button>
		</form>
	);
};

export default UserForm;
