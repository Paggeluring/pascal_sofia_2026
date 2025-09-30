import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar';
import Toast from '../Toast/Toast';
import Party from '../Party/Party';


const Home = () => {
    return (
        <div className="wrapper d-flex flex-column align-items-center">
            <Navbar />
            <Hero />
            <Toast />
            <Party />
        </div>
    );
};


export default Home;