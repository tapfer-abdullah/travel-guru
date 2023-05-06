/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Booking = () => {
    const singleDest = useLoaderData();
    console.log(singleDest)
    return (
        <div className='mt-14 grid grid-cols-2 gap-3'>
            <div>
            <h1 className='text-6xl font-semibold text-white'>{singleDest?.title}</h1>
                <p className='my-6 text-white'>{singleDest?.description}</p>
            </div>

            <div>
            <div className=' py-9 px-14 mx-auto text-center rounded-2xl'
            style={{backgroundImage: "linear-gradient(to right, rgb(33 65 72 / 40%), rgb(113 189 178))"}}
        >
            <form className='text-left'>
                <div className='w-full'>
                    <h4 className='text-lg font-medium mt-2 mb-1'>Origin</h4>
                    <input  type="text" name="origin" id="" placeholder='Enter origin' className="input input-bordered w-full text-black"/>
                </div>
                <div>
                    <h4 className='text-lg font-medium mt-2 mb-1' >Destination</h4>
                    <input type="text" name="destination" id="" placeholder='Enter destination' className="input input-bordered w-full text-black"/>
                </div>
                
                <div className='grid grid-cols-2 gap-4 my-2'>
                    <div>
                        <input type="date" name="from" id="" placeholder='From' className='input input-bordered w-full text-black'/>
                    </div>
                    <div>
                        <input type="date" name="destination" id="" placeholder='Destination' className='input input-bordered w-full text-black'/>
                    </div>
                </div>

                <button className='w-full mt-7'>
                    <Link className="btn bg-my-primary border-none w-full">Start Booking</Link>
                </button>
            </form> 
        </div>
            </div>
        </div>
    );
};

export default Booking;