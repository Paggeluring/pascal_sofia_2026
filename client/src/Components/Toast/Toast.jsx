import React from 'react';
import './Toast.css';
import ToastCard from './ToastCard';

const Toast = () => {
    return (
        <div className='container mt-5 p-4'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <ToastCard name='Lotta Kylén' />
                </div>
                <div className='col-12 col-md-6'>
                    <ToastCard name='Mattias Kylenborg' />
                </div>
            </div>
        </div>
    );
};

export default Toast;