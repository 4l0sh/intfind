import React, { Fragment } from 'react';
import './editUsers.css';
import UserList from './userList';

const EditUser = () => {
  return (
    <Fragment>
      <div className='editUserContainer'>
        <div className='editHeaderContainer'>
          <div className='editHeader'>
            <h1>Edit Users</h1>
          </div>
        </div>
        <div className='editCard'>
          <div className='usersList'>
            <UserList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUser;
