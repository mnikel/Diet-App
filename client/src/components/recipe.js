import { React, ReactDOM } from "react";
import Button from "./button";
import "./recipe.css";
import Macros from "./macros";
// TODO Dopisac funkcje dodajace do plannera 
// TODO dopisac funkcje ktora pozwala na zobaczenie plannera
const Recipe = ({
  imageUrl,
  recipeName,
  kcal,
  macros,
  ingredients,
  preparation,
}) => {
  
  const declinationEndings = {
    "łyżka": ["łyżka", "łyżki", "łyżek"],
    "łyżeczka": ["łyżeczka", "łyżeczki", "łyżeczek"],
    "szczypta": ["szczypta", "szczypty", "szczypt"],
    "kromka": ["kromka", "kromki", "kromek"],
    "plaster": ["plaster", "plastry", "plastrów"],
    "sztuka": ["sztuka", "sztuki", "sztuk"],
    "opakowanie": ["opakowanie", "opakowania", "opakowań"],
    "porcja": ["porcja", "porcje", "porcji"],
    "garść": ["garść", "garście", "garści"],
    "szklanka": ["szklanka", "szklanki", "szklanek"],
    "liść": ["liść", "liście", "liści"],
    "ząbek": ["ząbek", "ząbki", "ząbków"], 
  };
  
  function formatQuantity(quantity, unit) {
    const endings = declinationEndings[unit];
    if ((quantity > 1 && quantity < 2 && unit === "porcja") || (quantity > 2 && quantity < 3 && unit === "porcja")||  (quantity > 3 && quantity < 4 && unit === "porcja") ) {
      unit = endings[2]
    }
    else if ((quantity < 1  && unit === "garść") || (quantity > 1 && quantity < 2 && unit === "garść") || (quantity > 2 && quantity < 3 && unit === "garść") ||  (quantity > 3 && quantity < 4 && unit === "garść") ) {
      unit = endings[2]
    }
    else if (quantity < 1 || (quantity > 1 && quantity <= 4)) {
      unit = endings[1];
    } else if (quantity === 1) {
      unit = endings[0];
    } else {
      unit = endings[2];
    }
    return `${quantity} ${unit}`;
  } // ogarnac to lepiej kiedys tam na razie dziala w miare ok 
  
  
  return ( // TODO Pomyslec gdzie dokladnie zdjecie
  <div id="recipe">
  <div id="recipe_header">
    <div id="recipe_name_macros">
      <h3>{recipeName.toUpperCase()}</h3>
      <div id="recipe_macros">
        {<Macros macros={macros} kcal={kcal}/>}
      </div>
    </div>
    <div id="image_placeholder">
      <img id="recipeimg" src={imageUrl} alt={recipeName}/> 
    </div>
  </div>
  <div id="recipe_ingredients">
    <h3>Ingredients:</h3>
    <ul id="ingredients_list">
      {ingredients.map((ingredient, index) => (
        <li key={index}><h3>{ingredient.name.toUpperCase()}</h3><p>{formatQuantity(ingredient.quantity.value, ingredient.quantity.unit)} LUB {ingredient.weight.value} {ingredient.weight.unit}</p></li>
      ))}
    </ul>
  </div>
  <div id="recipe_preparation">
    <h3>Preparation:</h3>
    <ol id="preparation_list">
      {preparation.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  </div>
  <div id="recipe_buttons">
    <Button label="ADD TO PLANNER" /* onClick={() => handleAddToPlanner()} */ url=""/>
    <Button label="VIEW PLANNER"/*  onClick={() => handleViewPlanner()} */ url=""/>
  </div>
</div>

  );
};

export default Recipe;
