import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserItem from './components/UserItem/UserItem';
import { User } from './types';
import Users from './components/Users/Users';

function App() {
	const [users, setUsers] = useState<User[]>([]);

	const addUser = (user: User) => {
		setUsers([...users, user]);
	};
	return (
		<>
			<div className='container row'>
				<div className='col-md-6'>
					<UserForm addUser={addUser} />
				</div>
				<div className='col-md-6'>
					<Users users={users} />
				</div>
			</div>
		</>
	);
}

export default App;
