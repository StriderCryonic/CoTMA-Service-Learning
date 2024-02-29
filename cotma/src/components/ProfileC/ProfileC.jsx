import React from "react";
import "./ProfileC.css"
import {cowCode} from "../SearchC/SearchC"

function findDetails(){
  let key = cowCode;
  let storedData = JSON.parse(localStorage.getItem('workerData'));
  if (!storedData) { //if storeddata doesnt exist, create a new instance
      console.log("ERROR!!! NO DATA AVAILABLE TO SEARCH.");
  }
  else{
    let matchingUser = storedData.find(cow => cow.cowId  === key);
    console.log(matchingUser);
  }
}
const ProfileC=() =>{

return(
    <div class="login-page">
    <div class="form">
    <div id="test">Testings</div>
    </div>
  </div>
);

}

export default ProfileC;