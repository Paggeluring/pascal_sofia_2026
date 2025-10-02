import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero d-flex flex-column align-items-center">
            <img src='/img/logo.png' alt='Logo' className='hero-logo p-3' />
            <div className='hero-image-container'>
                <img src="/img/hero1.jpg" alt="Hero" className="hero-image w-100" />

                <img src="/icon/waves.svg" alt="Heart" className="hero-waves" />
            </div>
            <div className="container px-4 hero-text">
                <h1 className="hero-title mb-2">Vi ska gifta oss...</h1>
                <p className="hero-subtitle">... och det vill vi såklart fira med dig! Vi kommer att viga oss den <b>9:e maj, 2026</b> i Bohuslän.</p>
                <p>Vigseln kommer att hållas i <b>Hunnebostrands kyrka</b> kl. 13:00 och bröllopsfesten hålls på <b>Ramsviks Stugby & Camping</b></p>
                <p>Vi älskar era barn, men den här gången älskar vi dem mer på distans! Vi vill att ni föräldrar känner att ni kan släppa loss lite extra och ta en shot med brudparet, utan några förpliktelser!</p>
                <p>Meddela oss <b>senast 31:a januari</b> om du kommer eller inte. Detta gör du via länken nedan</p>
                <a href="https://forms.gle/Hw9vQ1FW8tCB6g3F8" target='_blank' className='hero-btn mt-4'>OSA Här</a>
            </div>

        </section>
    );
};

export default Hero;