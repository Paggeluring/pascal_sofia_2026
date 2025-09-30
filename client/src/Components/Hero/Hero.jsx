import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <img src='/img/logo.png' alt='Logo' className='hero-logo p-3' />
            <div className='hero-image-container'>
                <img src="/img/hero1.jpg" alt="Hero" className="hero-image w-100" />

                <img src="/icon/waves.svg" alt="Heart" className="hero-waves" />
            </div>
            <div className="container px-5 hero-text">
                <h1 className="hero-title">Vi ska gifta oss!</h1>
                <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
    );
};

export default Hero;