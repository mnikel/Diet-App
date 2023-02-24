import { React, ReactDOM } from "react";
import "./recipethumbnail.css"
import Macros from "./macros";
const RecipeThumbnail = ({ imageUrl, recipeName, macros, kcal, onClick}) => {
    return (
      <div id="thumbnail">
      <button id="thumbnailbutton" onClick={onClick}>
        <div id="thumbnail_img">
        <img src={imageUrl} alt={recipeName}/>
        </div>
        <div id="thumbnail_name">
        <h3>{recipeName}</h3>
        </div>
        <div id="thumbnail_macros">
        <Macros macros={macros} kcal={kcal}/>
        </div>
      </button>
      </div>
    );
  };
  
  export default RecipeThumbnail;





