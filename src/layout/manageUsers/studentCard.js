import React, { useState } from 'react';
import M from 'materialize-css';

const StudentCard = ({ user }) => {
  const { username, selectedAvatar, _id, role } = user;
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing(true);
  };

  const closeHandler = () => {
    setIsEditing(false);
  };
  const deleteUser = () => {
    const role = localStorage.getItem('role');
    // Add delete logic here
    fetch(`http://localhost:4000/users/${_id}`, {
      method: 'DELETE',
      headers: {
        role: role,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
          M.toast({ html: 'User deleted successfully' });
        } else if (response.status === 401) {
          M.toast({ html: 'Unauthorized You are no admin', classes: 'red' });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='userCard'>
      <p className='userName'>
        <img
          className='userAvatar'
          src={selectedAvatar}
          alt='No avatar found '
        />
        {username}
      </p>
      <div className='userActions'>
        <i className='fa-solid fa-pen-to-square' onClick={editHandler}></i>
        <i className='fa-solid fa-trash' onClick={deleteUser}></i>
      </div>

      {isEditing && (
        <div className='editCard'>
          <div className='editForm'>
            {' '}
            <form className='editUserForm'>
              <select className='select' name='role' id='role'>
                <option value='' disabled>
                  Select Role
                </option>
                <option value='student'>Student</option>
                <option value='admin'>Admin</option>
              </select>
              <button type='button' onClick={closeHandler}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
