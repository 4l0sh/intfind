import React, { useState } from 'react';
import '../experience/experience.css';
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

  // Function to simulate adding inputs to a database
  const handleSaveToDatabase = () => {
    // Example of saving inputs to a database (e.g., using an API call)
    console.log('Saving inputs to database:', inputs);
    // In a real app, you'd make an API request here.
  };

  return (
    <div className='maincontainer'>
      <div className='btnContainer'>
        <button className='addBtn' onClick={toggleInputField}>
          Add Experienc Field
        </button>
        <button className='addBtn' onClick={handleSaveToDatabase}>
          Save to Database
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
