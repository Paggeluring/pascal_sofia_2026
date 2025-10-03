import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar';
import Toast from '../Toast/Toast';
import Party from '../Party/Party';
import Info from '../Info/Info';


const Home = () => {
    return (
        <div className="wrapper d-flex flex-column align-items-center">
            <Navbar />
            <Hero />
            <Info />
            <Toast />
            <Party />
            <div className='container mt-5 footer d-flex justify-content-center p-5'>
                © 2025 Pascal & Sofia
            </div>
        </div>
    );
};

export default Home;