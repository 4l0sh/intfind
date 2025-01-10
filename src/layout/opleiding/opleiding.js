import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './opleiding.css';
import Steps from '../steps/steps';

const Opleiding = () => {
  const navigate = useNavigate();
  const redirectToSkills = () => {
    navigate('/skills');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const opleiding = document.getElementById('opleiding').value;
    const school = document.getElementById('school').value;
    const afgerond = document.getElementById('afgerond').checked;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    console.log(opleiding, school, afgerond, startDate, endDate);

    const userId = localStorage.getItem('userId');
    const Opleiding = {
      opleiding,
      school,
      afgerond,
      startDate,
      endDate,
    };

    fetch('http://localhost:4000/opleiding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, Opleiding }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('added opleiding', result);
      })
      .catch((error) => {
        console.log('error adding opleiding', error);
      });
  };

  const redirectToExperience = () => {
    navigate('/experience');
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='box1'>
          <i
            onClick={redirectToSkills}
            className='fa-solid fa-arrow-left arrow-left'
          ></i>
          <p> Previous</p>
        </div>
        <div className='box2'>
          <Steps currentStep={3} />
          <div className='title'>
            <h1>Opleiding</h1>
          </div>
          <div className='opleiding'>
            <form className='opleidingForm'>
              <input
                id='opleiding'
                className='input op'
                type='text'
                placeholder='Opleiding'
              />
              <input
                id='school'
                className='input op'
                type='text'
                placeholder='School'
              />
              <div className='dateContainer'>
                <p>Finished: </p>
                <input id='afgerond' className='input op' type='checkbox' />
              </div>
              <div className='dateContainer'>
                <p>Start Date</p>
                <input id='startDate' className='input op' type='date' />
              </div>
              <div className='dateContainer'>
                <p>End Date</p>
                <input id='endDate' className='input op' type='date' />
              </div>
              <input
                onClick={onSubmit}
                className='submit'
                type='submit'
                value='Submit'
              />
            </form>
          </div>
        </div>
        <div className='box3'>
          <i
            onClick={redirectToExperience}
            className='fa-solid fa-arrow-right arrow-right'
          ></i>
          <p>Next</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Opleiding;
