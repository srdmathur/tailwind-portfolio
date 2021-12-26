import React, {useState} from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { GiNothingToSay } from 'react-icons/gi';
import { IoHandRightOutline } from 'react-icons/io5';
import ScrollIntoView from 'react-scroll-into-view';


function About() {
    const [viewMore, setViewMore] = useState(0);

    return (
        <div id='about' className='max-w-4xl my-20 mx-auto text-center'>
            <p className=' text-2xl text-black md:text-4xl font-bold text-center'>
                Falling for me?
            </p>
            <div>
                <p className='text-base text-gray-600 md:text-xl text-center leading-relaxed mt-4'>
                    After spending 6 passionate years, I need not to prove myself for what I deserve. <br />My experience speaks for itself.
                </p>
                <p className={`${viewMore ? 'visible opacity-100 ease-in-out' : 'invisible h-0 opacity-0 ease-in-out'} text-base text-gray-600 md:text-xl text-justify leading-relaxed mt-4 transition-opacity delay-300 duration-500`}>
                    I am a full-time Javascript developer with hands-on of Vue JS, Node JS, React JS with 6 Years of corporate and Freelancing experience in total.
                    <br></br>
                    <br></br>
                    Currently, I am working as a System Analyst (Sr. Software Engineer - Level 2) at Pratham Softwares, Jaipur in India, where I’ve been working actively on Vue JS, and Node JS. 
                    <br></br>
                    I am here responsible for leading the frontend team, architecture frontend applications, management of the resources, client interaction, requirement discussions, technical analysis, providing architectural solutions for JS-based modules, task allocation, code review, code quality management, and deliveries.
                    <br></br>
                    <br></br>
                    I have a vast knowledge of the basic of Javascript, Hands-on of Vue JS, Node JS, React JS with Best Practices, Micro Service Architecture, Hybrid Mobil Application with Cordova, Deployment Tools inc of Jenkins, Spinnaker, Kubernetes, Logging tools like kibana, and familiar with Kafka, Couchbase DB, MongoDB. I have expertise in application design and development with MEVN and MERN stack.
                    <br></br>
                    <br></br>
                    I have done a few POCs in my free time with electron JS, ember JS, Three JS, and canon JS as well.
                    <br></br>
                    <br></br>
                    I love to think about solutions, write logic, and seeing a smile on nerd's face when they see my code performing. I also love to learn about new technologies, new inventions, and new trends, also the comparison with the old ones. Moreover, I am a blind coder as well.
                    <br></br>
                    <br></br>
                    I always focus on being a better version of myself. Also, When I’m not on the job, I love to write poetry, do some open mic events, talk about Life, listen to melodious songs. Also, I never miss playing with my loving indie dog.
                    <br></br>
                    <br></br>
                    In recent times, I have learned that nothing is more important to spend time with family and understood what is right and what is required.
                    <br></br>
                    <br></br>
                    I have devotion but I am not a workaholic. I am not selfish but self-focused. I am not loving but a lover, love discussions, hate dictatorship, and last but not the least, I don't work in ILLEGAL HOURS.
                    <br></br>
                    <br></br>
                    If you think our vibe matches,
                    <br></br>
                    <span className='flex items-center'>
                        <FaEnvelope className='text-rose-500'/> 
                        <span className='px-2'>Mail me at: </span>
                        <a className='underline' href="mailto:srdmathur@gmail.com" target='blank'>srdmathur@gmail.com</a>
                    </span>
                    <span className='flex items-center'>
                        <FaLinkedin className='text-blue-500'/> 
                        <span className='px-2'>Message me on: </span>
                        <a className='underline' href="https://linkedin.com/in/srdmathur" target='blank'>https://linkedin.com/in/srdmathur</a>
                    </span>
                    <br></br>
                    <br></br>
                    We can have coffee (virtually nowadays) and work together.
                </p> 
            </div>
            <br />
            {!viewMore ? <button
                className='animate-bounce p-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white'
                onClick={() => setViewMore(!viewMore)}>
                    <p className='flex items-center'>
                        <span>Ooh! Tell me more.</span>
                        &nbsp;
                        <GiNothingToSay />
                    </p>
            </button> :
            <ScrollIntoView selector="#root">
                <button
                    className='p-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white'
                    onClick={() => setViewMore(!viewMore)}>
                        <p className='flex items-center'>
                            <span>Enough Show off!</span>
                            &nbsp;
                            <IoHandRightOutline />
                        </p>
                </button>
            </ScrollIntoView>}
        </div>
    )
}

export default About;