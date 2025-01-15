import React, { useEffect, useState } from 'react';
import StudentCard from './studentCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        placeholder='Search Users...'
        className='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='usersList'>
        {filteredUsers.map((user) => (
          <StudentCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
