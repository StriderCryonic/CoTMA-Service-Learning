import React from 'react';
import "./Add.css";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();

  const handleSubmit = async(data) => {
    let workerName = document.getElementById("AddWorker-name").value;
    let workerId = document.getElementById("AddWorker-workerid").value;
    let role = document.getElementById("AddWorker-role").value;
    let workerAge = document.getElementById("AddWorker-age").value;
    let dateofJoin = document.getElementById("AddWorker-doj").value;

    const newAddition =  {"workID": workerId,
                          "Name": workerName,
                          "Age" : workerAge, 
                          "DOJ": dateofJoin, 
                          "Role" :role};
    
    //get already storedData
    let storedData = JSON.parse(localStorage.getItem('workerData'));
    if (!storedData) { //if storeddata doesnt exist, create a new instance
      localStorage.setItem('workerData', '[]');
      storedData = JSON.parse(localStorage.getItem('workerData'));
    }

    //add new data
    storedData.push(newAddition);

    //push updated array
    localStorage.setItem('workerData', JSON.stringify(storedData));

    navigate('/');
}

  return (
    <div className = "login-page">
    <div className="form">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'AddWorker-name' placeholder="Name"/>
        <input type="text" id = 'AddWorker-workerid' placeholder="worker code"/>
        <input type="number" id = 'AddWorker-age' placeholder = "Age" />
        <input type="text" id = 'AddWorker-role' placeholder='role'/>
        <input type="date" id= 'AddWorker-doj'/>     
        <button>register</button>     
        </form>
    </div>
  </div>
  )
}

export default Add
