import React from 'react'
import {Link} from "react-router-dom"
import logo from '../assets/images/logo.png';
import { instaLink } from '../constants/insta';
import { facebookLink } from '../constants/facebook';
import mapLink from '../constants/map';


const Footer = () => {
  return (
    <footer className='bg-[#0c513a] mt-20 pt-5'>
      <div className='flex flex-row justify-evenly items-top py-10 max820:flex-col max820:gap-10 max820:px-10'>
         <div>
            <img src={logo} alt="Logo" className='footer-logo '/>

            <div className='flex flex-row items-center gap-5 mt-5'>
              <a href={instaLink} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-white text-2xl cursor-pointer hover:text-gray-300"></i>
              </a>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook text-white text-2xl cursor-pointer hover:text-gray-300"></i>
              </a>
              <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp text-white text-2xl cursor-pointer hover:text-gray-300"></i>
              </a>
              <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-envelope text-white text-2xl cursor-pointer hover:text-gray-300"></i>
              </a>
            </div>

         </div>
         <div className='flex flex-col gap-2'>
            <Link to="/" className='nav-link'>HOME</Link>
            <Link to="/About" className='nav-link'>ABOUT</Link>
            <Link to="/Villas" className='nav-link'>VILLAS</Link>
            <Link to="/Contact" className='nav-link'>CONTACT</Link>
            <Link to="/FAQ" className='nav-link'>FAQ</Link>
         </div>

         <div className='flex flex-col gap-2'>
           <p className="text-lg font-bold text-white mb-3">Contact Now</p>

          <a
            href="tel:+355698014999"
            className="flex items-center gap-3 text-white hover:text-gray-300"
          >
            <i className="fa-solid fa-phone"></i>
            <span>+355 69 801 4999</span>
          </a>

          <a
            href="mailto:sales@balfinrealestate.com"
            className="flex items-center gap-3 text-white hover:text-gray-300"
          >
            <i className="fa-regular fa-envelope"></i>
            <span>sales@balfinrealestate.com</span>
          </a>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-white hover:text-gray-300"
          >
            <i className="fa-regular fa-map mt-1"></i>
            <span>
              Liqeni i Farkës,Tiranë, Shqipëri
            </span>
          </a>
         </div>

      </div>
      <div className='text-center text-white bg-[#083828] py-5'>
        &copy; {new Date().getFullYear()} Balfin Real Estate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer