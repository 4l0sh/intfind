import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import emailjs from 'emailjs-com';
import '../../auth/login.css';

const LoginTest = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState('');

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/findUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'User not found') {
          M.toast({
            html: 'User not found Please sign up',
            classes: 'red auth',
          });
        } else {
          M.toast({ html: 'User found', classes: 'blue auth found' });
          const code = generateCode();
          setGeneratedCode(code);
          setUserId(result.userId);
          setToken(result.token);
          setRole(result.role);

          const templateParams = {
            to_email: email,
            code: code,
          };
          emailjs
            .send(
              'service_74cz9qy',
              'template_l5mg53n',
              templateParams,
              'KB7p7JbxPCkcrn0xq'
            )
            .then(
              (result) => {
                console.log('Email sent successfully:', result.text);
                setMessage('Verification code sent!');
              },
              (error) => {
                console.error('Error sending email:', error.text);
                setMessage('Failed to send email');
              }
            );
        }
      });
  };

  const verifyCode = (e) => {
    e.preventDefault();
    console.log('generated code:', generatedCode);
    console.log('verificationCode:', verificationCode);
    if (parseInt(verificationCode) === generatedCode) {
      console.log('code verified');
      M.toast({ html: 'Code verified', classes: 'green auth' });
      sessionStorage.setItem('jwt', token);
      // localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      if (role === 'student') {
        navigate('/');
      } else if (role === 'admin') {
        navigate('/studentCard');
      }
    } else {
      console.log('code not verified');
      M.toast({ html: 'Code not verified', classes: 'red auth' });
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
              src={require('../../images/intfind.png')}
              alt='Intfind'
            />
          </div>
          <div className='div headerDiv3'>
            <div className='moon-solid icon'></div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  onClick={sendEmail}
                  className='loginInput'
                  type='submit'
                  value='Send Code'
                />
                <p>
                  Don't have an account?{' '}
                  <a href='/' className='link'>
                    Register
                  </a>
                </p>
              </form>
              <p className='message'>{message}</p>
              <div className='verification'>
                <form className='loginForm'>
                  <input
                    className='loginInput'
                    type='text'
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  <input
                    className='loginInput '
                    type='submit'
                    value='Verify'
                    onClick={verifyCode}
                  />
                </form>
                <p>
                  Log in using your Password{' '}
                  <a href='/login' className='link'>
                    Here
                  </a>
                </p>
              </div>
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

export default LoginTest;
