import React from "react";
import "./DisplayW.css"
import { Link } from 'react-router-dom'


function findDetails(){
  let storedData = JSON.parse(localStorage.getItem('workerData'));
  let dataArray = []
  storedData.forEach(item => {
    dataArray.push([item.workID,item.Name, item.Age,item.DOJ, item.Role]);    
  }); 
  return dataArray;

}

const DisplayW=() =>{
  var a = findDetails();
return(
    <div class="login-page">
    <div class="form">
    <div id='test-2'>Worker Details</div>
    <table id = 'test'>
		<th>ID</th><th>Name</th><th>Age</th><th>DoJ</th><th>Role</th>
		{a.map((item) => (
			<tr id = 'test-3' key ={item[0]}>
				<td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
        <td>{item[3]}</td>
        <td>{item[4]}</td>
			</tr>
		))
		}	
	  </table>

    <br></br>
    <Link to = '/'>
    <button>Back To Main Menu</button>
    </Link>

    </div>
  </div>
);
}

export default DisplayW;