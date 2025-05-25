import React, { useState } from "react";
import Axiom from "../assets/axiomdev.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <div className="flex tertiary-color gap-10 items-center justify-between h-24 w-full px-8 rounded-xl shadow hover:shadow-lg transition">
        <div>
           <img src={Axiom} alt="logo" className="w-48 h-24 primary-text"/>
        </div>


        <div className="hidden sm:flex gap-20">
          <ul className="flex primary-text gap-12 items-center justify-center">
            <li><Link to="about">About Us</Link></li>
            <li><Link to="contact">Contact Us</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="faq">FAQ</Link></li>
          </ul>
        {/* <button className="primary-color  w-36 h-10 rounded">{btn}</button> */}
        <Button text="Login" />
      </div>

      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#880d1e] focus:outline-none"
        >
          &#9776; 
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-24 right-8 tertiary-color shadow-md rounded-md flex flex-col gap-4 p-4 sm:hidden z-50">
          {/* <button className="primary-color  w-36 h-10 rounded">{btn}</button>
          <button className="primary-color w-36 h-10 rounded">{btns}</button> */}
          <Button text="Login" />
          <Button text="Sign in" />
        </div>
      )}
    </div>
      
    )
}

export default Navbar;