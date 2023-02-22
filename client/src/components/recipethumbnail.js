import { React, ReactDOM } from "react";
import "./recipethumbnail.css"

const RecipeThumbnail = ({ imageUrl, recipeName, kcal, protein, fat, carbs }) => {
    return (
      <div id="thumbnail">
        <img id="thumbnailimg" src={imageUrl} alt={recipeName}/>
        <h3>{recipeName}</h3>
        <div>
          <span>Kcal: {kcal}</span>
          <span>Protein: {protein}</span>
          <span>Fat: {fat}</span>
          <span>Carbs: {carbs}</span>
        </div>
      </div>
    );
  };
  
  export default RecipeThumbnail;





