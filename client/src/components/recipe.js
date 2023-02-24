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
        <li key={index}><h3>{ingredient.name.toUpperCase()}</h3><p>{ingredient.quantity.value} {ingredient.quantity.unit.toUpperCase()}</p></li>
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
