import React, { Fragment, useState } from 'react';
import './studentCard.css';

const StudentCard = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [studentName, setStudentName] = useState('Name');
  const [studentPhoto, setStudentPhoto] = useState(
    'https://www.w3schools.com/howto/img_avatar.png'
  );
  const [email, setEmail] = useState('Email');
  const [studentOpleiding, setStudentOpleiding] = useState('Opleiding');
  const [studentSchool, setStudentSchool] = useState('School');
  const [studentStart, setStudentStart] = useState('');
  const [studentEnd, setStudentEnd] = useState('');
  const [finished, setFinished] = useState(false);
  const [softSkills, setSoftSkills] = useState([]);
  const [techSkills, setTechSkills] = useState([]);
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
        setStudentName(data.user.username);
        setStudentPhoto(data.user.selectedAvatar);
        setEmail(data.user.email);
        setStudentOpleiding(data.opleiding.opleiding);
        setStudentSchool(data.opleiding.school);
        setStudentStart(data.opleiding.startDate);
        setStudentEnd(data.opleiding.endDate);
        setFinished(data.opleiding.afgerond ? 'Yes' : 'No');
        setSoftSkills(data.softSkills);
        setTechSkills(data.techSkills);
      })
      .catch((error) => {
        setErrorMessage('Error getting user info Check if you are logged in');
        console.error('Error getting user info:', error);
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
            <h1>Student Cards</h1>
          </div>
          <div className='studentCards'>
            <div className='studentCard1'>
              <h2>Profile</h2>
              <div className='studentProfile'>
                <div className='studentAvatar'>
                  {' '}
                  <img
                    className='img avatar1'
                    src={studentPhoto}
                    alt='avatar'
                  ></img>{' '}
                </div>
                <div className='studentName'>{studentName}</div>
                <div className='studentEmail'>{email}</div>
                <div className='studentOpleiding'>{studentOpleiding}</div>
                <div className='sudentSchool'>{studentSchool}</div>
                <div className='studentStart'>Start Date: {studentStart}</div>
                <div className='studentEnd'>End Date: {studentEnd}</div>
                <div className='studentFinished'>Finished? : {finished}</div>
              </div>
              <div>
                <button onClick={getUserInfo}>Get user info</button>
              </div>
            </div>
            <div className='studentCard2'>
              <h2>Skills</h2>
              {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
              <div className='skillsCard'>
                <div className='studentSoftSkills'>
                  <h3>Soft Skills</h3>
                  <ul>
                    <li>
                      <p className='skilltxt'>Skill:</p> {softSkills.skill1}{' '}
                      <p className='skilltxt'>Level: </p> {softSkills.value1}
                    </li>
                    <li>
                      <p className='skilltxt'>Skill:</p> {softSkills.skill2}{' '}
                      <p className='skilltxt'>Level: </p> {softSkills.value2}
                    </li>
                    <li>
                      <p className='skilltxt'>Skill:</p> {softSkills.skill3}{' '}
                      <p className='skilltxt'>Level: </p> {softSkills.value3}
                    </li>
                    <li>
                      <p className='skilltxt'>Skill:</p> {softSkills.skill4}{' '}
                      <p className='skilltxt'>Level: </p> {softSkills.value4}
                    </li>
                    <li>
                      <p className='skilltxt'>Skill:</p> {softSkills.skill5}{' '}
                      <p className='skilltxt'>Level: </p> {softSkills.value5}
                    </li>
                  </ul>
                </div>
                <div className='studentSoftSkills'>
                  <h3>Tech Skills</h3>
                  <ul>
                    <li>
                      <p className='skilltxt'> Skill:</p>{' '}
                      {techSkills.techskill1} <p className='skilltxt'>Level:</p>{' '}
                      {techSkills.techvalue1}
                    </li>
                    <li>
                      <p className='skilltxt'> Skill:</p>{' '}
                      {techSkills.techskill2} <p className='skilltxt'>Level:</p>{' '}
                      {techSkills.techvalue2}
                    </li>
                    <li>
                      <p className='skilltxt'> Skill:</p>{' '}
                      {techSkills.techskill3} <p className='skilltxt'>Level:</p>{' '}
                      {techSkills.techvalue3}
                    </li>
                    <li>
                      <p className='skilltxt'> Skill:</p>{' '}
                      {techSkills.techskill4} <p className='skilltxt'>Level:</p>{' '}
                      {techSkills.techvalue4}
                    </li>
                    <li>
                      <p className='skilltxt'> Skill:</p>{' '}
                      {techSkills.techskill5} <p className='skilltxt'>Level:</p>{' '}
                      {techSkills.techvalue5}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='studentCard3'>
              <h2>Work</h2>
              <div className='workExperience'>List of work experience</div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default StudentCard;
