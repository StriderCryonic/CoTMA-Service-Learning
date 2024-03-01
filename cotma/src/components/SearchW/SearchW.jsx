import React from 'react';
import "./SearchW.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SearchW = () => {
  const navigate = useNavigate();
  const handleSubmit = async(data) => {
    localStorage.setItem('workerTemp', document.getElementById('searchform-workerCode').value);
    navigate('/prow');
  }
  
  return (
    <div class="login-page">
    <div class="form">
      <form class="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'searchform-workerCode' placeholder="Worker ID"/>
        <button>Search</button>
        </form>
    </div>
  </div>
  )
}

export default SearchW;
