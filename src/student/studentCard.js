import React, { Fragment, useState } from 'react';
import { TbMobiledata } from 'react-icons/tb';
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
  const [workExperience, setWorkExperience] = useState(['']);
  const [referentiePersoon, setReferentiePersoon] = useState('');
  const [referentieProfession, setRefentieProfession] = useState('');
  const [referentieText, setReferentieText] = useState('');
  const [role, setRole] = useState('');

  const userId = localStorage.getItem('userId');
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    window.location.href = '/loginTest';
  };
  const getUserInfo = () => {
    fetch(`http://localhost:4000/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Unauthorized');
          }
          throw new Error('Error getting user info');
        }
        return response.json();
      })
      .then((data) => {
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
        setReferentiePersoon(data.referenties.persoon);
        setRefentieProfession(data.referenties.beroep);
        setReferentieText(data.referenties.referentieText);
        setRole(data.user.role);

        const processedWorkExperience = Array.isArray(data.workExperience)
          ? data.workExperience
          : Object.values(data.workExperience || {});

        setWorkExperience(processedWorkExperience);
      })
      .catch((error) => {
        if (error.message === 'Unauthorized') {
          setErrorMessage('Unauthorized: no token. Please log in again');
          return;
        }
        setErrorMessage('Error getting user info. Check if you are logged in');
        console.error('Error getting user info:', error);
      });
  };
  return (
    <Fragment>
      <body>
        <div className='SCmainContainer'>
          <div className='studentCardsheader'>
            <div className='studentCardheader1'>
              <p>this user is a </p>
              <span className='roletxt'> {role.toUpperCase()}</span>
            </div>
            <div className='studentCardheader2'>2</div>
            <div className='studentCardheader3'>
              <button onClick={logout} className='infobtn'>
                Log Out
              </button>
            </div>
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
                <button className='infobtn' onClick={getUserInfo}>
                  {' '}
                  <p className='btntxt'>Get user info</p>
                  <TbMobiledata className='btnico' />{' '}
                </button>
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
              {Array.isArray(workExperience) && workExperience.length > 0 ? (
                workExperience.map((work, index) => (
                  <div key={work.id || index} className='work'>
                    {work.value}
                  </div>
                ))
              ) : (
                <p>No work experience available</p>
              )}
              <hr className='workhr' />
              <div className='refrences'>
                <h2>References</h2>
                <div className='refrence1'>
                  <ul>
                    <li>
                      <p>
                        Refrence Person: <span>{referentiePersoon}</span>
                      </p>
                    </li>
                    <li>
                      Profession: <span>{referentieProfession}</span>
                    </li>
                    <li>
                      <p>
                        Refrence Text: <span>{referentieText}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default StudentCard;
