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
        <Navbar className="w-full nav text-white fixed top-0 z-50">
            <Navbar.Brand className="px-4 md:px-8">
                <img
                    src={logo}
                    className="mr-3 h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover"
                    alt="Logo"
                />
                <span className="self-center whitespace-nowrap text-xl text-amber-500">
                    Abanoub Samir
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="px-4 md:px-8">
                <button 
                    onClick={() => scrollToSection('home', 0)} 
                    className={`text-lg md:text-2xl ${activeIndex === 0 ? "text-amber-500" : "text-white"}`}
                >
                    Home
                </button>
                <button 
                    onClick={() => scrollToSection('about', 1)} 
                    className={`text-lg md:text-2xl ${activeIndex === 1 ? "text-amber-500" : "text-white"}`}
                >
                    About
                </button>
                <button 
                    onClick={() => scrollToSection('services', 2)} 
                    className={`text-lg md:text-2xl ${activeIndex === 2 ? "text-amber-500" : "text-white"}`}
                >
                    Services
                </button>
                <button 
                    onClick={() => scrollToSection('portfolio', 3)} 
                    className={`text-lg md:text-2xl ${activeIndex === 3 ? "text-amber-500" : "text-white"}`}
                >
                    Portfolio
                </button>
                <button 
                    onClick={() => scrollToSection('contact', 4)} 
                    className={`text-lg md:text-2xl ${activeIndex === 4 ? "text-amber-500" : "text-white"}`}
                >
                    Contact
                </button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav