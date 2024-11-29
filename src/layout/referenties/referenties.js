import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import './referenties.css';
import Steps from '../steps/steps';

function Referenties() {
  const navigate = useNavigate();

  const redirectToExperience = () => {
    navigate('/experience');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const persoon = document.getElementById('persoon').value;
    const beroep = document.getElementById('beroep').value;
    const referentieText = document.getElementById('referentieText').value;
    const userId = localStorage.getItem('userId');

    if (!userId) {
      M.toast({ html: 'You are not logged in', classes: 'red' });
    } else {
      fetch('http://localhost:4000/referenties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          referentie: { persoon, beroep, referentieText },
        }),
      });
      M.toast({ html: 'Referentie has been added', classes: 'green' });
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='box1'>
          <i
            onClick={redirectToExperience}
            className='fa-solid fa-arrow-left arrow-left'
          ></i>
          <p> Previous</p>
        </div>
        <div className='box2'>
          <Steps currentStep={5} />
          <div className='title'>
            <h1>Referenties</h1>
          </div>
          <div className='referentieDiv'>
            <form className='referentieForm' id='referentiesForm'>
              <input
                id='persoon'
                type='text'
                className='persoon'
                placeholder='Persoon'
                required
              ></input>
              <input
                id='beroep'
                type='text'
                className='beroep'
                placeholder='Beroep'
                required
              ></input>
              <textarea
                id='referentieText'
                type='text'
                className='referentieText'
                placeholder='Referentie Text'
                required
              ></textarea>
              <input
                onClick={onSubmit}
                type='submit'
                className='submit'
                value='Submit'
              ></input>
            </form>
          </div>
        </div>
        <div className='box3'></div>
      </div>
    </div>
  );
}

export default Referenties;
