import React, { useState } from 'react';
import '../experience/experience.css';
import M from 'materialize-css';
const ToggleInputs = () => {
  // State to store input fields with their IDs and values
  const [inputs, setInputs] = useState([]);

  // Function to handle adding a new input field
  const toggleInputField = () => {
    const newId = Date.now(); // Use timestamp to generate a unique ID
    setInputs((prevInputs) => [
      ...prevInputs,
      { id: newId, value: '' }, // New input object with id and value
    ]);
  };

  // Function to handle change in input value
  const handleInputChange = (id, value) => {
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, value: value } : input
    );
    setInputs(newInputs);
  };

  const userId = localStorage.getItem('userId');

  const handleSaveToDatabase = () => {
    fetch('http://localhost:4000/experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ userId, inputs }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('experience added', result);
        M.toast({ html: 'Experience added', classes: 'green' });
      })
      .catch((error) => console.log('error adding experience', error));
  };

  return (
    <div className='maincontainer'>
      <div className='btnContainer'>
        <button className='addBtn' onClick={toggleInputField}>
          Add experience Field
        </button>
        <button className='addBtn' onClick={handleSaveToDatabase}>
          Submit
        </button>
      </div>
      {/* Render each input field based on the state */}
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            className='addInput'
            type='text'
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            placeholder={`Input ${input.id}`}
          />
        </div>
      ))}
    </div>
  );
};

//hallooooo

export default ToggleInputs;
