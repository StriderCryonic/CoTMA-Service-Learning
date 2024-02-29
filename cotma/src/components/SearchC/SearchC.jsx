import React from 'react';
import "./SearchC.css";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function handleSubmit(){
  localStorage.setItem('temp', document.getElementById('searchform-cowCode'));
}

const SearchC = () => {
  return (
    <div class="login-page"> 
    <div class="form"> 
      <form class="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'searchform-cowCode' placeholder="cow code"/>
      <Link to="/proc">
        <button>Search</button>
        </Link>
        </form>
    </div>
  </div>
  )
}

export default SearchC
