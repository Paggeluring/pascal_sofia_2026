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
                <p className="hero-subtitle">Och vi vill fira med er</p>
            </div>
        </section>
    );
};

export default Hero;