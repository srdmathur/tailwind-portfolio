import React from 'react';
import profile from "./../images/1548386651506.jpeg";
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Card() {
    return (
        <div id='card' className='w-full'>
            <div className='flex flex-col justify-center max-w-xl mx-auto bg-white shadow-xl rounded-xl p-5'>
                <div>
                    <img className='w-32 mx-auto rounded-full drop-shadow-xl' src={profile} alt='profile' />
                </div>
                <div className='text-center mt-5'>
                    <p className='text-xl sm:text-2xl text-gray-900'>
                        Sharad Mathur
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 py-2 px-5 w-auto inline-block border-b-2'>
                    System Analyst at Pratham Software
                    </p>
                    <div className='flex align-center justify-center mt-4'>
                        <a 
                            href="https://github.com/srdmathur" 
                            target="blank"
                            className='text-xl m-1 p-1 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300'>
                            <FaGithub/>
                            <span className='sr-only'>Github</span>
                        </a>
                        <a 
                            href="mailto:srdmathur@gmail.com" 
                            target="blank"
                            className='text-xl m-1 p-1 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full transition-colors duration-300'>
                            <FaEnvelope/>
                            <span className='sr-only'>Email</span>
                        </a>
                        <a 
                            href="https://linkedin.com/in/srdmathur" 
                            target="blank"
                            className='text-xl m-1 p-1 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-colors duration-300'>
                            <FaLinkedin/>
                            <span className='sr-only'>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;