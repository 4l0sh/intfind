import React, { Fragment, useState } from 'react';
import M from 'materialize-css';
import './signup.css';

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const signUserUp = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    setErrorMessage('');

    fetch('http://localhost:4000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'User already exists') {
          setErrorMessage(result.message);
          M.toast({ html: 'User already exists', classes: 'red' });
        } else {
          console.log('user added', result);
        }
      })
      .catch((err) => console.log('error adding user', err));
  };
  return (
    <Fragment>
      <div className='container'>
        <div className='box1'>
          <i className='fa-solid fa-arrow-left arrow-left'></i>
          <p> Previous</p>
        </div>
        <div className='box2'>
          <div className='title'>
            <h1>Sign Up</h1>
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

export default Signup;
