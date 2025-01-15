import React, { useState } from 'react';

const StudentCard = ({ user }) => {
  const { username, selectedAvatar } = user;
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing(true);
  };

  const closeHandler = () => {
    setIsEditing(false);
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
      <i className='fa-solid fa-pen-to-square' onClick={editHandler}></i>
      {isEditing && (
        <div className='editCard'>
          <div className='editForm'>
            {' '}
            <form>
              {/* Add your form fields here */}
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
