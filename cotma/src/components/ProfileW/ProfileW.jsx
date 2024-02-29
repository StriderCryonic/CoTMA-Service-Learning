import React from "react";
import "./ProfileW.css"
import { Link } from 'react-router-dom'

function findDetails(){
  let workerCode = localStorage.getItem('workerTemp');
  let storedData = JSON.parse(localStorage.getItem('workerData'));
  if (!storedData){
    console.log("ERROR!");
  }else{
    let matchingUser = storedData.find(worker => worker.workID === workerCode);
    if (matchingUser){
      return [matchingUser.workID,matchingUser.Name, matchingUser.Age,matchingUser.DOJ, matchingUser.Role];
    }else{
      return['ERROR','ERROR','ERROR','ERROR','ERROR'];
    }
  }
}

const ProfileW=() =>{
  var a = 0;
return(
  <div class="login-page">
  <div class="form">
  {a = findDetails()}
  <div id='test-2'>Worker Details</div>
  <div id="test">Id: {a[0]}</div>
  <div id="test">Name: {a[1]}</div>
  <div id="test">Age: {a[2]}</div>
  <div id="test">Date of Join: {a[3]}</div>
  <div id="test">Role: {a[4]}</div>

  <Link to = '/sw' >
  <button>Search Again</button>
  </Link>

  <Link to = '/'>
  <button>Back To Main Menu</button>
  </Link>
  </div>
  </div>
);

}

export default ProfileW;