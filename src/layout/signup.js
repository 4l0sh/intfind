import React, { Fragment } from 'react';
import M from 'materialize-css';
import './signup.css';

const Signup = () => {
  const signUserUp = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('user added', result);
      })
      .catch((err) => console.log('error adding user', err));
  };
  return (
    <Fragment>
      <div class='container'>
        <div class='box1'>box 1</div>
        <div class='box2'>
          <div class='title'>
            <h1>Sign Up</h1>
          </div>
          <div class='signinForm'>
            <form id='signup' onSubmit={signUserUp}>
              <input
                class='input'
                type='username'
                placeholder='Username'
                id='username'
              />
              <input
                class='input'
                type='email'
                placeholder='Email'
                id='email'
              />
              <input
                class='input'
                type='password'
                placeholder='password'
                id='password'
              />
              <input class='submit' type='submit' value='Sign Up' />
            </form>
          </div>
        </div>
        <div class='box3'>box 3</div>
      </div>
    </Fragment>
  );
};

export default Signup;
