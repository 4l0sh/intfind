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
        sessionStorage.setItem('jwt', result.token);
        localStorage.setItem('token', result.token);
        localStorage.setItem('userId', userId);
        if (result.role === 'student') {
          navigate('/');
        } else if (result.role === 'admin') {
          navigate('/editUser');
        } else {
          M.toast({ html: 'Invalid email or password', classes: 'red auth' });
        }
      })
      .catch((err) => {
        console.log('error logging in', err);
        M.toast({ html: 'Error logging in', classes: 'red' });
      });
  };

  const change = () => {
    const password = document.getElementById('password');
    const closed = document.getElementById('closed');
    if (password.type === 'password') {
      password.type = 'text';
      closed.className = 'fa-solid fa-eye';
    } else {
      password.type = 'password';
      closed.className = 'fa-solid fa-eye-low-vision';
    }
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
                />{' '}
                <i
                  onClick={change}
                  id='closed'
                  class='fa-solid fa-eye-low-vision'
                />
                <input
                  onClick={onSubmit}
                  className='loginInput'
                  type='submit'
                  value='Log In '
                />
                <p>
                  Don't have an account?{' '}
                  <a href='/' className='link'>
                    Register
                  </a>
                </p>
                <p>
                  Log in using verification code{' '}
                  <a href='/loginTest' className='link'>
                    here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className='div loginDiv3'></div>
        </div>
        <div className='footerContainer'>
          {/* <div className='div footerDiv1'>PlaceHolders</div>
          <div className='div footerDiv2'>PlaceHolders</div>
          <div className='div footerDiv3'>PlaceHolders</div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
