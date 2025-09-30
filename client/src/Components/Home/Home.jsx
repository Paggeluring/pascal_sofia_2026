import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar';
import Toast from '../Toast/Toast';


const Home = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Hero />
            <Toast />
        </div>
    );
};


export default Home;