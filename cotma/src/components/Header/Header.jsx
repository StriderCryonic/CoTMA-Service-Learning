import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>CoTMA</h1>
                <p className='text-lead'>CoTMA (Cow Tracking and Management Application)</p>
            </div>
        </div>
    </header>
  )
}

export default Header