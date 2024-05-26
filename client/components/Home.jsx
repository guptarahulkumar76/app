import React, { useState } from 'react';
import axios from 'axios'; // For making backend API calls

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    // Basic validation (consider using a library for advanced validation)
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    // Display validation errors if any
    if (Object.keys(errors).length > 0) {
      console.error(errors); // Or display these errors to the user in the UI
      return; // Exit if there are validation errors
    }

    try {
      // const response = await axios.post('https://us-central1-rahul-dd152.cloudfunctions.net/createUser/api/users', formData);
      const response = await axios.post('http://localhost:5001/rahul-dd152/us-central1/createUser/api/users', formData);
      console.log('Data saved successfully:', response.data); // Handle success response (e.g., show confirmation message)
      setFormData({ name: '', email: '', password: '' }); // Clear form after successful submission
    } catch (error) {
      console.error('Error saving data:', error); // Handle errors (e.g., display error message to user)
    }
  };

  return (
    <>
      <h1>Welcome to Reactable Rahul</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required // Add required attribute for basic validation
          />
          {/** Add error display logic if using */}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/** Add error display logic if using */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/** Add error display logic if using */}
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default Home;
