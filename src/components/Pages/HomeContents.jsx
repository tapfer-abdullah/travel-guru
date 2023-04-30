/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import HomeCards from './HomeCards';

const HomeContents = () => {
    return (
        <div className='mt-32 grid grid-cols-2 gap-3'>
            <div>
                <h1 className='text-8xl font-semibold text-black'>Cox's bazar</h1>
                <p className='my-6'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className='btn bg-my-primary border-none'>
                    <Link>Booking</Link>
                </button>
            </div>
            <div>
                <HomeCards></HomeCards>
            </div>
        </div>
    );
};

export default HomeContents;