import React from 'react';
import "./Add.css";

function handleSubmit(){
    //var varname = document.getElementById("item")
    let workerName = document.getElementById("AddWorker-name");
    let workerId = document.getElementById("AddWorker-workerid");
    let role = document.getElementById("AddWorker-role");
    let workerAge = document.getElementById("AddWorker-age");
    let dateofJoin = document.getElementById("AddWorker-doj");
    const newAddition =  {"workID": workerId,
                          "Name": workerName,
                          "Age" : workerAge, 
                          "DOJ": dateofJoin, 
                          "Role" :role};
    
    //get already storedData
    let storedData = JSON.parse(localStorage.getItem('workerData'));
    if (!storedData) { //if storeddata doesnt exist, create a new instance
      storedData = [];
    }

    //add new data
    storedData.push(newAddition);

    //push updated array
    localStorage.setItem('workerData', JSON.stringify(storedData));
}


const Add = () => {


  return (
    <div className = "login-page">
    <div className="form">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'AddWorker-name' placeholder="Name"/>
        <input type="text" id = 'AddWorker-workerid' placeholder="worker code"/>
        <input type="number" id = 'AddWorker-age' placeholder = "Age" />
        <input type="text" id = 'AddWorker-role' placeholder='role'/>
        <input type="date" id= 'AddWorker-doj'/>     
        <button>Register</button>        
        </form>
    </div>
  </div>
  )
}

export default Add
