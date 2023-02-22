import { React, ReactDOM } from "react";
import Button from "./button";
import "./recipe.css";
// TODO Dopisac funkcje dodajace do plannera 
// TODO dopisac funkcje ktora pozwala na zobaczenie plannera
const Recipe = ({
  imageUrl,
  recipeName,
  kcal,
  protein,
  fat,
  carbs,
  ingredients,
  preparation,
}) => {

  return ( // TODO Pomyslec gdzie dokladnie zdjecie
    <div id="recipe">
      <img id="recipeimg" src={imageUrl} alt={recipeName} /> 
      <h3>{recipeName}</h3>
      <div>
        <h3>Macros:</h3> 
        <ul id="macros_list">
          <li>Kcal: {kcal}</li>
          <li>Carbs: {carbs}</li>
          <li>Protein: {protein}</li>
          <li>Fat: {fat}</li>
        </ul>
      </div>
      <div>
        <h3>Ingredients:</h3>
        <ul id="ingredients_list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li> // TODO zmienic dodawanie spojrzec dokladnie jak wyglada strutkura chcemy tu i gramy i kuchenne miary
          ))}
        </ul>
      </div>
      <div>
        <h3>Preparation:</h3>
        <ol>
          {preparation.map((step, index) => (
            <li key={index}>{step}</li> // TODO zmienic dodawanie na pewno musi byc zrobiony .split na array preparation !!
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
