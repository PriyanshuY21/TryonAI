import React from 'react';
import Logo from './images/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-10 mr-2 pl-9" />
        </div>
        <div className="flex-grow flex justify-around">
          <div className="text-left">
            <h2 className="font-semibold text-lg mb-4">About</h2>
            <ul>
              <li className="mb-2"><a href="#about" className="text-black hover:text-accent">About us</a></li>
              <li className="mb-2"><a href="#features" className="text-black hover:text-accent">Features</a></li>
              <li className="mb-2"><a href="#news" className="text-black hover:text-accent">News and blogs</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h2 className="font-semibold text-lg mb-4">Connect</h2>
            <ul>
              <li className="mb-2"><a href="#linkedin" className="text-black hover:text-accent">LinkedIn</a></li>
              <li className="mb-2"><a href="#facebook" className="text-black hover:text-accent">Facebook</a></li>
              <li className="mb-2"><a href="#twitter" className="text-black hover:text-accent">Twitter</a></li>
              <li className="mb-2"><a href="#instagram" className="text-black hover:text-accent">Instagram</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h2 className="font-semibold text-lg mb-4">Support</h2>
            <ul>
              <li className="mb-2"><a href="#faqs" className="text-black hover:text-accent">FAQs</a></li>
              <li className="mb-2"><a href="#support-centre" className="text-black hover:text-accent">Support Centre</a></li>
              <li className="mb-2"><a href="#contact-us" className="text-black hover:text-accent">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
