import React from 'react';
import "./AddC.css";
import { useNavigate } from 'react-router-dom'


const AddC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (data) => {
    let cowId = document.getElementById("AddCow-cowId").value;
    let age = document.getElementById("AddCow-age").value;
    let sick = document.getElementById("AddCow-sick").value;
    let preg = document.getElementById("AddCow-preg").value;

    const newAddition = {"cowId": cowId,
                         "age": age, 
                         "sick" : sick, 
                         "preg": preg};
                         
    let storedData = JSON.parse(localStorage.getItem('cowData'));
    if (!storedData) { //if storeddata doesnt exist, create a new instance
      localStorage.setItem('cowData', '[]');
      storedData = JSON.parse(localStorage.getItem('cowData'));
    }
    //add new data
    storedData.push(newAddition);
    //push updated array
    localStorage.setItem('cowData', JSON.stringify(storedData));

    navigate('/');
  }

  
  return (
    
    <div class="login-page">
    <div class="form">
      
      <form class="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'AddCow-cowId' placeholder="cow code"/>
        <input type="text" id = 'AddCow-age' placeholder="age"/>   
        <input type="text" id = 'AddCow-sick' placeholder='health issues'/>
        <input type="text" id = 'AddCow-preg' placeholder='maternity status'/>
        <button>register</button>
        </form>
    </div>
  </div>
  )
}

export default AddC
