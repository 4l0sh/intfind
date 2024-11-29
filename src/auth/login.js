import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import M from 'materialize-css';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        const userId = result.userId;
        localStorage.setItem('userId', userId);
        navigate('/');
      })
      .catch((err) => {
        console.log('error logging in', err);
        M.toast({ html: 'Error logging in', classes: 'red' });
      });
  };
  return (
    <Fragment>
      <div className='body'>
        <div className='headerContainer'>
          <div className='div headerDiv1'></div>
          <div className='div headerDiv2'>
            <img
              id='logo'
              src={require('../images/intfind.png')}
              alt='Intfind'
            />
          </div>
          <div className='div headerDiv3'>
            <div class='moon-solid icon'></div>
          </div>
        </div>
        <div className='loginContainer'>
          <div className='div loginDiv1'></div>
          <div className='div loginDiv2'>
            <div className='login'>
              {' '}
              <h1>Log In </h1>
              <form className='loginForm'>
                <input
                  className='loginInput'
                  id='email'
                  type='email'
                  placeholder='Email'
                  required
                />
                <input
                  className='loginInput'
                  id='password'
                  type='password'
                  placeholder='Password'
                  required
                />
                <input
                  onClick={onSubmit}
                  className='loginInput'
                  type='submit'
                  value='Log In '
                />
              </form>
            </div>
          </div>
          <div className='div loginDiv3'></div>
        </div>
        {/* <div className='footerContainer'>
          <div className='div footerDiv1'>1</div>
          <div className='div footerDiv2'>2</div>
          <div className='div footerDiv3'>3</div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Login;
