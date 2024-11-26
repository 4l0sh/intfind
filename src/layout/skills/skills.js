import React from 'react';
import { useNavigate } from 'react-router-dom';
import './skills.css';

const Skills = () => {
  const navigate = useNavigate();
  const redirectToSignup = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='container'>
        <div className='box1'>
          <i
            onClick={redirectToSignup}
            className='fa-solid fa-arrow-left arrow-left'
          ></i>
          <p> Previous</p>
        </div>
        <div className='box2'>
          <div className='title'>
            <h1> Skills</h1>
          </div>
          <div className='skillsDiv'>
            <div className='softSkills'>1</div>
            <div className='techSkills'>2</div>
          </div>
        </div>
        <div className='box3'>
          <i className='fa-solid fa-arrow-right arrow-right'></i>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
