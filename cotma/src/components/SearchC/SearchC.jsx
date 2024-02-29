import React from 'react';
import "./SearchC.css";
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';



const SearchC = () => {
  const navigate = useNavigate();
  const handleSubmit = async(data) => {
    localStorage.setItem('cowTemp', document.getElementById('searchform-cowCode').value);
    navigate('/proc');
  }

  return (
    <div class="login-page"> 
    <div class="form"> 
      <form class="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'searchform-cowCode' placeholder="Cow ID"/>
        <button>Search</button>
        </form>
    </div>
  </div>
  )
}

export default SearchC
