import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaHeart } from 'react-icons/fa';


function Footer() {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
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
            <div className="flex justify-center mt-4">
                <p className="flex items-center text-black mb-4">
                    Made with 
                    &nbsp;
                    <span className="mr-2" role="link" aria-label="heart">
                        <FaHeart className="text-rose-500"/>
                    </span>
                    by
                    &nbsp;
                    <a className="text-rose-500 hover:underline" href="mailto:srdmathur@gmail.com">Srd Mathur</a>
                </p>
            </div>
        </div>
    );
}

export default Footer;