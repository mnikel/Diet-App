import { React, ReactDOM } from "react";
import "./recipethumbnail.css"
import Macros from "./macros";
const RecipeThumbnail = ({ imageUrl, recipeName, macros, kcal}) => {
    return (
      <div id="thumbnail">
        <img id="thumbnailimg" src={imageUrl} alt={recipeName}/>
        <h3>{recipeName}</h3>
        <Macros macros={macros} kcal={kcal}/>
      </div>
    );
  };
  
  export default RecipeThumbnail;





