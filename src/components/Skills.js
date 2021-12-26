import React from 'react';
import { FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { SiJavascript, SiApachecordova, SiMongodb, SiTailwindcss, SiElectron } from "react-icons/si";

function Skills() {
    return (
        <div className=' max-w-6xl mx-auto justify-center py-4'>
            <p className=' text-2xl text-black md:text-4xl font-bold text-center'>
                Tech I Love
            </p>
            <div className='flex flex-wrap justify-center pt-12'>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaReact color='#5ed2f3' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>React Js</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaVuejs color='#3fb984' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>Vue Js</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiJavascript color='#efd81d' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>Vanila Js</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaNode color='#73a960' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>Node Js</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiApachecordova color='#3f4a55' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>Cordova</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiMongodb color='#27a342' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>MongoDB</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiTailwindcss color='#44a5ac' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>Tailwind CSS</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiElectron color='#9be3f1' className='mx-auto text-4xl sm:text-4xl'/>
                    <p className='mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center'>Electron JS</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;