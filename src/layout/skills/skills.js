import React from 'react';
import { useNavigate } from 'react-router-dom';
import './skills.css';

const Skills = () => {
  const navigate = useNavigate();
  const redirectToSignup = () => {
    navigate('/');
  };

  function clicked() {
    let skill = document.getElementById('inp1').value;
    let range = document.getElementById('inp2').value;
    document
      .getElementById('softskillsForm')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(skill, range);
      });
  }

  function redirectToOpleiding() {
    navigate('/opleiding');
  }

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
            <div className='softSkills'>
              <h2>Soft Skills</h2>
              <form className='softskillsForm' id='softskillsForm'>
                <input
                  id='inp1'
                  className='inp1'
                  placeholder='Type Here your skill'
                />
                <input
                  id='inp2'
                  className='inp2 range'
                  type='range'
                  min='1'
                  max='5'
                />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input
                  onClick={clicked}
                  className='submit send'
                  type='submit'
                  value='Submit'
                />
              </form>
            </div>
            <div className='techSkills'>
              <h2>Tech Skills</h2>
              <form className='techskillsForm' id='techskillsForm'>
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='inp1' placeholder='Type Here your skill' />
                <input className='inp2 range' type='range' min='1' max='5' />
                <input className='submit send' type='submit' value='Submit' />
              </form>
            </div>
          </div>
        </div>
        <div className='box3'>
          <i
            onClick={redirectToOpleiding}
            className='fa-solid fa-arrow-right arrow-right'
          ></i>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
