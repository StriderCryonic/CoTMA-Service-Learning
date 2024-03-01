import React from "react";
import "./DisplayC.css"
import { Link } from 'react-router-dom'


function findDetails(){
  let storedData = JSON.parse(localStorage.getItem('cowData'));
  if (!storedData){
    localStorage.setItem('cowData','[]');
    storedData = [];
  }
  
  let dataArray = []
  storedData.forEach(item => {
    dataArray.push([item.cowId,item.age, item.sick,item.preg]);    
  }); 
  return dataArray;

}

const DisplayC=() =>{
  var a = findDetails();
return(
    <div class="login-page">
    <div class="form">
    <div id='test-2'>Cow Details</div>
    <table id = 'test'>
		<th>ID</th><th>Age</th><th>Sick</th><th>Maternity</th>
		{a.map((item) => (
			<tr id = 'test-3' key ={item[0]}>
				<td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
        <td>{item[3]}</td>
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

export default DisplayC;