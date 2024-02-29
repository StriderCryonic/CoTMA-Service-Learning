import React from 'react';
import "./Add.css";

const Add = () => {


  return (
    <div class="login-page">
    <div class="form">
      
      <form class="login-form">
      
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="worker code"/>
        <input type="text" placeholder='role'/>
        <input type="date" id='doj'/>     
        <button>register</button>
        </form>
    </div>
  </div>
  )
}

export default Add
