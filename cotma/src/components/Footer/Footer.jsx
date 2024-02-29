import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content'>
                <p className='text'>An application made by Christ University Students for St. Mary's Farm.</p>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer
