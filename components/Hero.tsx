import { FiGithub } from 'react-icons/fi'
import Orbit from './Orbit'

function Hero() {
    return (
        <div className='relative min-h-screen overflow-hidden'>
            <Orbit/>
            <div className='absolute w-full bottom-[10%] md:w-auto md:bottom-[25%] left-[50%] -translate-x-[50%]'>
                <h1 className='text-4xl font-bold'>Cendy</h1>
                <div>
                    Hi there, I&apos;m a Web Developer that specializes in front-end and a dedicated developer who has an incredible look to detail and does not stop until the porject is complete.
                </div>
                <button className='mt-4'>
                    <a className='flex space-x-2 py-2 px-4 bg-[#333] rounded-md'>
                        <FiGithub size={25}/>
                        <p>GitHub</p>
                    </a>
                </button>
            </div>
        </div>
)}

export default Hero