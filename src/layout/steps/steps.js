import React from 'react';
import './steps.css';

const Steps = ({ currentStep }) => {
  return (
    <div className='steps-container'>
      <div className={`step step1 ${currentStep === 1 ? 'active-step' : ''}`}>
        <i className='fa-solid fa-1'></i>
      </div>
      <div className={`step step2 ${currentStep === 2 ? 'active-step' : ''}`}>
        <i className='fa-solid fa-2'></i>
      </div>
      <div className={`step step3 ${currentStep === 3 ? 'active-step' : ''}`}>
        <i className='fa-solid fa-3'></i>
      </div>
      <div className={`step step4 ${currentStep === 4 ? 'active-step' : ''}`}>
        <i className='fa-solid fa-4'></i>
      </div>
      <div className={`step step5 ${currentStep === 5 ? 'active-step' : ''}`}>
        <i className='fa-solid fa-5'></i>
      </div>
    </div>
  );
};

export default Steps;
