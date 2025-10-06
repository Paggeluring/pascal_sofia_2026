import React from 'react';
import Hero from '../Hero/Hero';
import Toast from '../Toast/Toast';
import Party from '../Party/Party';
import Info from '../Info/Info';
import Text from '../Text/Text';


const Home = () => {

    function getYear() {
        return new Date().getFullYear();
    }

    return (
        <div className="wrapper d-flex flex-column align-items-center">
            <Hero />
            <Text text="Vi skulle bli SÅ glada om ni vill hålla tal under vår middag. Anmälan av tal och spex gör ni till pascalochsofia@gmail.com senast 2026/03/30 och tas emot av våra toastmasters." header="💕 Tal & Spex 🎤" />
            <Text text="Dresscode för bröllopsdagen är mörk kostym, men för fredagen och söndagen är valet fritt." header="💃 Klädkod 🕺" />
            <Info />
            <Toast />
            <Party />
            <Text text="Er närvaro denna dag är den bästa gåvan för oss. Om man ändå vill ge en gåva så tar vi gärna emot bidrag till vår smekmånad! Dessa bidrag swishas till 073-377 95 14 ❤️" header="Gåvor" />
            <div className='container mt-5 footer d-flex justify-content-center p-5'>
                © {getYear()} Pascal & Sofia
            </div>
        </div>
    );
};

export default Home;