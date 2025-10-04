import React from 'react';
import './Toast.css';
import ToastCard from './ToastCard';

const Toast = () => {
    return (
        <div className='container p-4'>
            <h2 className='text-center mb-5'>Möt våra underbara Toast masters</h2>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <ToastCard name='Lotta Kylén' image='/img/lotta.png' description='På Lottas CV står det lärare på dagtid, social butterfly på kvällstid och så giggar hon på bröllop ibland (Vad är detta för otrolig person tänker ni). Med dessa färdigheter var Lotta ett självklart val som toastmadame och vi är helt övertygade om att ni kommer vara väl omhändertagna av henne under middagen.' />
                </div>
                <div className='col-12 col-md-6'>
                    <ToastCard name='Mattias Kylenborg' image='/img/mattias.png' description='Straight from Kalix har vi Mattias som kom till Stockholm för att söka lyckan som UX-designer. Mattias är inte bara bra på design, han är också bra på fest! Om ni tycker om att ha roligt på bröllop (och uppskattar norrländsk dialekt) så lovar vi att vi har hittat rätt man för jobbet som vår toastmaster. ' />
                </div>

                <p className='text-center'>
                    💕 🎤 Vi skulle bli SÅ glada om ni vill hålla tal under vår middag. Anmälan av tal och spex gör ni till pascalochsofia@gmail.com senast 30/03/2026 och tas emot av våra toastmasters.
                </p>
            </div>
        </div>
    );
};

export default Toast;