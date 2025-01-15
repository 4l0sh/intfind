import React from 'react';

const StudentCard = ({ user }) => {
  const { username, selectedAvatar } = user;

  return (
    <div className='userCard'>
      <p className='userName'>
        {' '}
        <img
          className='userAvatar'
          src={selectedAvatar}
          alt='No avatar found '
        />
        {username}
      </p>
      <i class='fa-solid fa-pen-to-square'></i>
    </div>
  );
};

export default StudentCard;
