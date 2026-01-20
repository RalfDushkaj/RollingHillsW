import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png'; 


const Navbar = () => {
   const[isOpen, setIsOpen] = useState(false);
   const[scrolled, setScrolled] =useState(false);
   const[lowOpacity, setLowOpacity] = useState(false);

   useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setLowOpacity(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
   },[]);


  return (
    <>
        <nav className={`nav-container px-10 flex flex-row items-center justify-between 
          max930:flex-col max930:items-center max600:items-start 
          max930:gap-6 sticky top-0 bg-white z-50 transition-[padding-top, padding-bottom] duration-300 ease-in-out
          ${scrolled ? "py-2" :" py-5"}
          ${lowOpacity ? "opacity-80 ":"opacity-100"}`}>

          <div className='nav-logo flex flex-row items-center justify-between max600:w-full'>
             <Link to="/">
              <img src={logo} alt="Logo" className={`logo-image w-48 transition-all duration-300 ${scrolled ? "w-32" : "w-48"}`}/>
             </Link> 

             <button 
               className='hidden max600:block text-[#ffffff] text-3xl'
               onClick={() => setIsOpen(!isOpen)}
             >☰</button>
          </div>
          <div className={`nav-links flex flex-row items-center justify-center gap-8 max600:items-start
            ${isOpen ? "max600:flex-col" : "max600:hidden"}`}>
            <Link to="/" className='nav-link' onClick={() => setIsOpen(false)}>HOME</Link>
            <Link to="/About" className='nav-link' onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link to="/Villas" className='nav-link' onClick={() => setIsOpen(false)}>VILLAS</Link>
            <Link to="/Contact" className='nav-link' onClick={() => setIsOpen(false)}>CONTACT</Link>
            <Link to="/FAQ" className='nav-link' onClick={() => setIsOpen(false)}>FAQ</Link>
          </div>
        </nav>
    </>
  );
};

export default Navbar;