import { React, ReactDOM } from "react";
import "./macros.css"
function Macros ({ kcal, carbs, protein, fat }) {
    return (
        <div id="macros_dic">
        <h3>Macros:</h3> 
        <ul id="macros_list">
          <li>Kcal: {kcal}</li>
          <li>Carbs: {carbs}</li>
          <li>Protein: {protein}</li>
          <li>Fat: {fat}</li>
        </ul>
        </div>
    )
}

export default Macros

