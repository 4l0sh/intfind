import React, { Fragment, useState } from 'react';
import './studentCard.css';
import { set } from 'mongoose';

const StudentCard = () => {
  const [studentName, setStudentName] = useState('Name');
  const [studentPhoto, setStudentPhoto] = useState(
    'https://www.w3schools.com/howto/img_avatar.png'
  );
  const [Email, setEmail] = useState('Email');
  const userId = localStorage.getItem('userId');
  const getUserInfo = () => {
    fetch(`http://localhost:4000/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudentName(data.username);
        setStudentPhoto(data.selectedAvatar);
        setEmail(data.email);
      });
  };

  return (
    <Fragment>
      <body>
        <div className='SCmainContainer'>
          <div className='studentCardsheader'>
            <div className='studentCardheader1'>1</div>
            <div className='studentCardheader2'>2</div>
            <div className='studentCardheader3'>3</div>
          </div>
          <div className='titleText'>
            <h1>Student Card</h1>
          </div>
          <div className='studentCards'>
            <div className='studentCard1'>
              <h2>Profile</h2>
              <div className='studentAvatar'>
                {' '}
                <img className='img avatar1' src={studentPhoto}></img>{' '}
              </div>
              <div className='studentName'>{studentName}</div>
              <div className='studentEmail'>{Email}</div>
              <div>
                <button onClick={getUserInfo}>Get user info</button>
              </div>
            </div>
            <div className='studentCard2'>
              <h2>Skills</h2>
            </div>
            <div className='studentCard3'>
              <h2>Work</h2>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default StudentCard;
