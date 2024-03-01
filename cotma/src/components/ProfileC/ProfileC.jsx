import React from "react";
import "./ProfileC.css"
import { Link } from 'react-router-dom'


function findDetails(){
  let CowCode = localStorage.getItem('cowTemp');
  let storedData = JSON.parse(localStorage.getItem('cowData'));
  if (!storedData) { //if storeddata doesnt exist, error
      console.log("ERROR!!! NO DATA AVAILABLE TO SEARCH.");
      localStorage.setItem('cowData', '[]');
      storedData = []
  }
  else{
    let matchingUser = storedData.find(cow => cow.cowId === CowCode);
    if (matchingUser){
    return [matchingUser.cowId,matchingUser.age,matchingUser.sick,matchingUser.preg];
    }else{
      return ['ERROR', 'ERROR', 'ERROR', 'ERROR'];
    }
  }
}

const ProfileC=() =>{
  var a = 0;
return(
    <div class="login-page">
    <div class="form">
    {a = findDetails()}
    <div id='test-2'>Cow Details</div>
    <div id="test">Id: {a[0]}</div>
    <div id="test">Age: {a[1]}</div>
    <div id="test">Sickness Status: {a[2]}</div>
    <div id="test">Maternity Status: {a[3]}</div>
    <Link to = '/sc' >
    <button>Search Again</button>
    </Link>
    <Link to = '/'>
    <button>Back To Main Menu</button>
    </Link>

    </div>
  </div>
);
}

export default ProfileC;