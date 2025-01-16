import React, { useState } from 'react';
import M from 'materialize-css';

const StudentCard = ({ user }) => {
  const { username, selectedAvatar, _id, role } = user;
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const editHandler = () => {
    setIsEditing(true);
  };

  const closeHandler = () => {
    setIsEditing(false);
  };
  const deleteUser = () => {
    fetch(`http://localhost:4000/users/${_id}`, {
      method: 'DELETE',
      headers: {
        role: role,
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
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

  const updateHandler = (e) => {
    e.preventDefault();
    const newRole = document.getElementById('role').value;
    const token = sessionStorage.getItem('jwt');

    fetch(`http://localhost:4000/users/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        role: role,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ role: newRole }),
    })
      .then((response) => {
        if (response.status === 401) {
          setErrorMessage('Unauthorized You are not an admin ');
        } else if (response.status === 200) {
          M.toast({ html: 'User Role updated successfully', classes: 'green' });
        }
        console.log(response);
      })
      .catch((err) => {
        console.log('Error updating user Role', err);
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
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
            <form className='editUserForm'>
              <label htmlFor='role'>
                Change the user role from {role} to :
              </label>
              <select className='select' name='role' id='role'>
                <option value='' disabled>
                  Select Role
                </option>
                <option value='student'>Student</option>
                <option value='admin'>Admin</option>
              </select>
              <div className='editBtns'>
                <button
                  className='editBtn'
                  type='submit'
                  onClick={updateHandler}
                >
                  Update
                </button>
                <button
                  className='editBtn'
                  type='button'
                  onClick={closeHandler}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
