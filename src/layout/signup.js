import React, { Fragment, useState } from 'react';
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Steps from './steps/steps';

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const navigate = useNavigate();

  const redirectToSkills = () => {
    navigate('/skills');
  };

  const signUserUp = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = 'student';

    setErrorMessage('');

    if (!username || !email || !password) {
      setErrorMessage('Please fill all fields');
      M.toast({ html: 'Please fill all fields', classes: 'red' });
      return;
    }

    fetch('http://localhost:4000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedAvatar, username, email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'User already exists') {
          setErrorMessage(result.message);
          M.toast({ html: 'User already exists', classes: 'red' });
        } else {
          console.log('user added', result);
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('token', result.token);
          navigate('/skills');

          // Add role after user is successfully added
          fetch('http://localhost:4000/users/roles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role, userId: result.userId }),
          })
            .then((response) => response.json())
            .then((result) => {
              console.log('role added', result);
            })
            .catch((err) => console.log('error adding role', err));
        }
      })
      .catch((err) => console.log('error adding user', err));
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='box1'></div>
        <div className='box2'>
          <Steps currentStep={1} />
          <div className='title'>
            <h1>Sign Up</h1>
          </div>
          <div className='avatars'>
            <div className='avatar1'>
              {' '}
              <img
                className='img'
                src='https://cdn.prod.website-files.com/6471ebc32c5012b32f0e45ba/66bb5eb7ad03ee7df2221a1f_JoDBRDfRn_QR6OTRO2HZTkDW9MHe84amL9rikLrejCI.png'
                alt='avatar'
                onClick={() =>
                  setSelectedAvatar(
                    'https://cdn.prod.website-files.com/6471ebc32c5012b32f0e45ba/66bb5eb7ad03ee7df2221a1f_JoDBRDfRn_QR6OTRO2HZTkDW9MHe84amL9rikLrejCI.png'
                  )
                }
              ></img>
            </div>
            <div className='avatar2'>
              <img
                className='img'
                src='https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg'
                alt='avatar'
                onClick={() =>
                  setSelectedAvatar(
                    'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg'
                  )
                }
              ></img>
            </div>
            <div className='avatar3'>
              <img
                className='img'
                src='https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6840.jpg'
                alt='avatar'
                onClick={() =>
                  setSelectedAvatar(
                    'https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6840.jpg'
                  )
                }
              ></img>
            </div>
            <div className='avatar4'>
              <img
                className='img'
                src='https://img.freepik.com/free-photo/portrait-beautiful-girl-with-long-braids-blue-jacket_1142-43600.jpg'
                alt='avatar'
                onClick={() =>
                  setSelectedAvatar(
                    'https://img.freepik.com/free-photo/portrait-beautiful-girl-with-long-braids-blue-jacket_1142-43600.jpg'
                  )
                }
              ></img>
            </div>
          </div>
          <div className='signinForm'>
            <form id='signup' onSubmit={signUserUp}>
              <input
                className='input'
                type='username'
                placeholder='Username'
                id='username'
              />
              <input
                className='input'
                type='email'
                placeholder='Email'
                id='email'
              />
              <input
                className='input'
                type='password'
                placeholder='password'
                id='password'
              />
              <input className='submit' type='submit' value='Sign Up' />
            </form>
            <hr />
            <p>
              Already have an account?{' '}
              <a id='loginBtn' href='/loginTest'>
                Log In
              </a>
            </p>
          </div>
        </div>
        <div className='box3'>
          <i
            onClick={redirectToSkills}
            className='fa-solid fa-arrow-right arrow-right'
          ></i>
          <p>Next</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
