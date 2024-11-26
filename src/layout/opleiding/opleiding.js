import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './opleiding.css';

const Opleiding = () => {
  const navigate = useNavigate();
  const redirectToSkills = () => {
    navigate('/skills');
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
          <div className='title'>
            <h1>Opleiding</h1>
          </div>
          <div className='opleiding'>
            <form className='opleidingForm'>
              <input className='input op' type='text' placeholder='Opleiding' />
              <input className='input op' type='text' placeholder='School' />
              <div className='dateContainer'>
                <p>Finished: </p>
                <input className='input op' type='checkbox' />
              </div>
              <div className='dateContainer'>
                <p>Start Date</p>
                <input className='input op' type='date' />
              </div>
              <div className='dateContainer'>
                <p>End Date</p>
                <input className='input op' type='date' />
              </div>
              <input className='submit' type='submit' value='Submit' />
            </form>
          </div>
        </div>
        <div className='box3'>
          <i className='fa-solid fa-arrow-right arrow-right'></i>
          <p>Next</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Opleiding;
