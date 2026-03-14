import { Navbar } from 'flowbite-react'
import logo from '../assets/logo.jpg'
import { useState } from 'react';

function Nav() {
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToSection = (sectionId: string, index: number) => {
        setActiveIndex(index);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar className='w-[100vw] nav text-white fixed top-0 z-50'>
            <Navbar.Brand>
                <img src={logo} className="mr-3 h-6 sm:h-9 px-44" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='px-44'>
                <button 
                    onClick={() => scrollToSection('home', 0)} 
                    className={`text-2xl ${activeIndex === 0 ? "text-amber-500" : "text-white"}`}
                >
                    Home
                </button>
                <button 
                    onClick={() => scrollToSection('about', 1)} 
                    className={`text-2xl ${activeIndex === 1 ? "text-amber-500" : "text-white"}`}
                >
                    About
                </button>
                <button 
                    onClick={() => scrollToSection('services', 2)} 
                    className={`text-2xl ${activeIndex === 2 ? "text-amber-500" : "text-white"}`}
                >
                    Services
                </button>
                <button 
                    onClick={() => scrollToSection('portfolio', 3)} 
                    className={`text-2xl ${activeIndex === 3 ? "text-amber-500" : "text-white"}`}
                >
                    Portfolio
                </button>
                <button 
                    onClick={() => scrollToSection('contact', 4)} 
                    className={`text-2xl ${activeIndex === 4 ? "text-amber-500" : "text-white"}`}
                >
                    Contact
                </button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav