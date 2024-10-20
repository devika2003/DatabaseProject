import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './stylelogin.css';
import axios from 'axios'; // Import Axios for making API calls

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState(''); // For feedback messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData); // Call the login API
            if (response.data.message) {
                setMessage(response.data.message); // Set success message
                navigate('/dashboard'); // Navigate to dashboard or another page after successful login
            } else {
                setMessage('Login failed. Please check your credentials.'); // Set error message
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('Login failed. Please try again later.');
        }
    };

    return (
        <div className="body">
            <div className="first">
                <h1 id="shadow">Petslive</h1>
                <div className="sep">
                    <a href="/" className="home-link">
                        <button className="btn">Home</button>
                    </a>
                    <button className="btn">About Us</button>
                    <button className="btn">Sign In/Up</button>
                </div>
            </div>
            <div className="Enter">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <input id="email" type="text" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
                    <input id="password" type="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                    <button id="btn2" type="submit">SUBMIT</button>
                </form>
                {message && <p>{message}</p>} {/* Display feedback message */}
            </div>
        </div>
    );
};

export default Login;
