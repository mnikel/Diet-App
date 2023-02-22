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
     <Macros kcal="2137" carbs="2138" protein="2139" fat="2140" />
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
