import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SendEmail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to generate a 6-digit code
  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
  };

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    // Generate a 6-digit code
    const code = generateCode();

    // Set up email parameters
    const templateParams = {
      to_email: email, // Dynamic email recipient
      code: code, // Include the generated code
    };

    // Send the email using EmailJS
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
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email address'
          required
        />
        <button type='submit'>Send Code</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SendEmail;
