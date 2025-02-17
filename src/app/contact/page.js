'use client'; // Mark this file as a client component to enable useState and other hooks

import { useState } from 'react'; // Import useState for state management
import Layout from '../layout'; // Import layout component to wrap the page

const Contact = () => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState(''); // Replacing email with a general "info" field
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Age counter state
  const [age, setAge] = useState(0); // Starting age, adjust as needed
  const targetAge = 30; // Set the target age for the counter, you can modify this value

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, info, message, age });
    setSubmitted(true);
  };

  const incrementAge = () => {
    if (age < targetAge) setAge(age + 1);
  };

  const decrementAge = () => {
    if (age > 0) setAge(age - 1);
  };

  return (
    <Layout>
      <div className="contact-container">
        <h2>Contact Us</h2>
        {submitted ? (
          <p className="success-message">Successfully Submitted! Thank you for reaching out.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="info">Information</label>
              <input
                type="text"
                id="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                placeholder="Enter your details (e.g. email, phone, etc.)"
                required
              />
            </div>
            {/* Age counter placed before the message */}
            <div className="form-field">
              <label htmlFor="age">Age: {age}</label>
              <div className="age-controls">
                <button
                  type="button"
                  onClick={incrementAge}
                  disabled={age >= targetAge}
                >
                  Increment
                </button>
                <button
                  type="button"
                  onClick={decrementAge}
                  disabled={age <= 0}
                >
                  Decrement
                </button>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Contact;