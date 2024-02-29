import React from 'react';
import "./SearchW.css";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SearchW = () => {
  
  return (
    
    <div class="login-page">
      
    <div class="form">
      
      <form class="login-form">
        <input type="text" placeholder="worker code"/>
<Link to="/prow">
        <button>search</button>
        </Link>
        </form>
    </div>
  </div>
  )
}

export default SearchW;
