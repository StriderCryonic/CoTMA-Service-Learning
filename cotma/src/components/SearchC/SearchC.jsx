import React from 'react';
import "./SearchC.css";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SearchC = () => {
  
  return (
    
    <div class="login-page">
      
    <div class="form">
      
      <form class="login-form">
        <input type="text" placeholder="cow code"/>
<Link to="/proc">
        <button>search</button>
        </Link>
        </form>
    </div>
  </div>
  )
}

export default SearchC
