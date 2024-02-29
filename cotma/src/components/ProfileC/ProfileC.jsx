import React from "react";
import "./ProfileC.css"

function findDetails(){
  let CowCode = localStorage.getItem('temp');
  console.log(CowCode);
  let storedData = JSON.parse(localStorage.getItem('workerData'));
  if (!storedData) { //if storeddata doesnt exist, error
      console.log("ERROR!!! NO DATA AVAILABLE TO SEARCH.");
  }
  else{
    let matchingUser = storedData.find(cow => cow.cowId  === CowCode);
    console.log(matchingUser);
  }
}

const ProfileC=() =>{

return(
    <div class="login-page">
    <div class="form">
    <div id="test">Testings</div>
    {findDetails()}
    </div>
  </div>
);

}

export default ProfileC;