import { React, ReactDOM } from "react";
import "./recipethumbnail.css"
import Macros from "./macros";
const RecipeThumbnail = ({ imageUrl, recipeName, kcal, protein, fat, carbs }) => {
    return (
      <div id="thumbnail">
        <img id="thumbnailimg" src={imageUrl} alt={recipeName}/>
        <h3>{recipeName}</h3>
        <Macros kcal="2137" carbs="2138" protein="2139" fat="2140" />
      </div>
    );
  };
  
  export default RecipeThumbnail;





