/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-1/3 mt-4 py-4 px-14 mx-auto text-center rounded-2xl'
            style={{backgroundImage: "linear-gradient(to right, rgb(33 65 72 / 40%), rgb(113 189 178))"}}
        >
            <h3 className='text-2xl font-semibold mb-5'>Please Register</h3>
            <form className='text-left'>
                <div>
                    <h4 className='text-lg font-medium mt-2 mb-1'>First name</h4>
                    <input  type="text" name="firstName" id="" placeholder='First name' className="input input-bordered w-full max-w-xs"/>
                </div>
                <div>
                    <h4 className='text-lg font-medium mt-2 mb-1'>Last name</h4>
                    <input  type="text" name="lastName" id="" placeholder='Last name' className="input input-bordered w-full max-w-xs"/>
                </div>
                
                <div>
                    <h4 className='text-lg font-medium mt-2 mb-1'>Your Email</h4>
                    <input  type="email" name="email" id="" placeholder='Username or Email' className="input input-bordered w-full max-w-xs"/>
                </div>
                <div>
                    <h4 className='text-lg font-medium mt-2 mb-1' >Your Password</h4>
                    <input type="password" name="password" id="" placeholder='Password' className="input input-bordered w-full max-w-xs"/>
                </div>
                <div>
                    <h4 className='text-lg font-medium mt-2 mb-1' >Confirm Password</h4>
                    <input type="password" name="password" id="" placeholder='Confirm Password' className="input input-bordered w-full max-w-xs"/>
                </div>
                
                <button className='w-full mt-3'>
                    <Link className="btn bg-my-primary border-none w-full">Register</Link>
                </button>
                <p className='my-2'>
                    Already have an account? 
                    <Link to="/login" className='text-warning'>  Login</Link>
                </p>
            </form> 
        </div>
    );
};

export default Register;