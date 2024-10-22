import React, { useState } from 'react';


const SignUp = ({ onPress }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign-Up Data:', formData);
  };
  const handleClick = () => {
    onPress(true);
  };
  return (
    <div className='overlay'>

  
    <div className="signup-container">
         <button className="close-button" onClick={handleClick}>x</button>
      <h2>Sign Up</h2>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
       
      </form>
     
    </div>
    </div>
  );
};

export default SignUp;
