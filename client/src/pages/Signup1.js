import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylelogin.css';

const Signup1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        password: '',
    });
    const [message, setMessage] = useState(''); // For feedback messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send form data to the backend
        try {
            const response = await fetch('http://localhost:5000/api/signup', { // Ensure this matches your backend URL and port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setFormData({
                    name: '',
                    age: '',
                    email: '',
                    phone: '',
                    password: '',
                });
                // Navigate to a different page if necessary
                navigate('/signup-success'); // Adjust this path as needed
            } else {
                setMessage(data.error || 'An error occurred during signup.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to signup. Please try again later.');
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
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input id="name" type="text" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                    <input id="age" type="text" placeholder="Enter Age" value={formData.age} onChange={handleChange} />
                    <input id="email" type="text" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
                    <input id="phone" type="text" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
                    <input id="password" type="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                    <button id="btn2" type="submit">SUBMIT</button>
                </form>
                {message && <p>{message}</p>} {/* Display feedback message */}
            </div>
        </div>
    );
};

export default Signup1;
