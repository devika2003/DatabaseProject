import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './stylehome.css'; // Make sure to adjust the path if needed

const Homes = () => {
    return (
        
        <div className="body1">
            <div className="first">
                <h1 id="shadow">Petslive</h1>
                <div className="sep1">
                    <Link to="/" className="btn-link">
                        <button className="btn">Home</button>
                    </Link>
                    <Link to="/about" className="btn-link">
                        <button className="btn">About Us</button>
                    </Link>
                    <Link to="/signup" className="btn-link"> {/* Assuming you have a sign-in route */}
                        <button className="btn">Sign In</button>
                    </Link>
                    <Link to="/login" className="btn-link"> {/* Assuming you have a login route */}
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>
            <div className="header">
                <h1 className="heading">Your<br /> Forever<br /> Friend<br /> Awaits..</h1>
                <div className="overlay"></div>
            </div>
            <div className="mission">
                <h2>MISSION</h2>
                <p>
                    Our mission is to ensure every pet finds a loving, forever home. We rescue, rehabilitate, and rehome animals in need, while promoting responsible pet ownership through education and community support. Together, we’re creating a compassionate world where every pet is cherished.
                </p>
            </div>
            {/* Uncomment this section if you want to display newest arrivals */}
            {/* <div className="newest">
                <h2>NEWEST ARRIVALS</h2>
                <div className="firstrow">
                    {[...Array(3)].map((_, index) => (
                        <div className="image" key={index}>
                            <img className="dogpic" src="C:/Users/devik/Desktop/pet/petslive/src/charlesdeluvio-DziZIYOGAHc-unsplash.jpg" alt="Dog" />
                            <div className="details">
                                <p className="name">PLUTO</p>
                                <p className="age">2 years</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="btn1">
                <Link to="/petsearch" className="search-link">
                    <button id="exp">EXPLORE MORE &#10145;</button>
                </Link>
            </div>
            <div className="about">
                <h2>About Us</h2>
                <p>
                    At Petslive, we simplify the process of rehoming and adopting pets. Our platform connects pet owners with prospective adopters, making it easy to find loving homes for pets or discover your new furry friend. We’re dedicated to making pet adoption straightforward and responsible.
                </p>
            </div>
        </div>
        
    );
};

export default Homes;
