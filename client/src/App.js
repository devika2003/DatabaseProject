import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homes from './pages/Homes';
import Login from './pages/Login';
import Signup1 from './pages/Signup1';


const App = () => {
    return (
        <Router>
            <div>
                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Homes />} />
                    <Route path="/signup" element={<Signup1 />} />
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
