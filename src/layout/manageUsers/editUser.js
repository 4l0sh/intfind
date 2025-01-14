import React, { Fragment } from 'react';
import './editUsers.css';

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
          <div className='searchBar'>
            {' '}
            <p>Search a user</p> <i class='fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='usersList'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUser;
