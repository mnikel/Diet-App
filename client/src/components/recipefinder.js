import { React, useState, useEffect } from "react";
import Button from "./button";
import "./recipefinder.css";
import axios from "axios";
import RecipeThumbnail from "./recipethumbnail";
import Recipe from "./recipe";
// TODO routing w React
// TODO Loader-spinner do Axiosa

function RecipeFinder() {
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // ustawienie nowego state dla wybranego przepisu
  const [filteredRecipes, setFilteredRecipes] = useState([]); //
  const translations = {"śniadania": "Breakfast", "koktajle": "Shake", "obiady": "Dinner"}
  const photosURL = `../../../client/public/foodphotos/`
  const handleClick = (recipe) => {
    // !!!!
    setSelectedRecipe(recipe); // ustawia state na selected recipe czyli ten ktory klikasz!!
    setDisplayedRecipes([]);
    console.log("You've just clicked me!");
  };

  // useEffect(() => {
  //   async function fetchRecipes() {
  //     const response = await fetch('http://localhost:8080/recipes');
  //     const data = await response.json()
  //     setRecipes(data)
  //     console.log(data)
  //   }
  //   fetchRecipes();
  // }, []);
  // TODO edycja wg servera
  const handleRequest = async (type, event) => {
    const response = await axios.get("/recipes/meals");
    const recipesFilteredByType = response.data.filter(
      (recipe) => recipe.type === type
    );
    setRecipes(recipesFilteredByType);
    setDisplayedRecipes(recipesFilteredByType);
    setFilteredRecipes(recipesFilteredByType);
    event.target.classList.add("active");
    if (activeButton && activeButton !== event.target) {
      activeButton.classList.remove("active");
    }
    setActiveButton(event.target);
    setSelectedRecipe(null);
  };

  const handleFilter = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchValue)
    );
    setDisplayedRecipes(filteredRecipes);
    setSelectedRecipe(null);
    setFilteredRecipes(filteredRecipes);
  };

  const handleGoBackClick = () => {
    setSelectedRecipe(null);
    setDisplayedRecipes(filteredRecipes);
  };

  return (
    <div className="recipefinder_div">
      <section id="recipefinder">
        <div className="recipefinder_div_categories">
          <p>Kategorie:</p>
          {Object.keys(translations).map((item) => <Button key={item} label={item} onClick={(event) => handleRequest(translations[item], event).catch()}/>)} 
          {/* <Button
            label="Śniadania"
            x}
            url=""
          />
          <Button
            label="Koktajle"
            onClick={(event) => handleRequest("Shake", event).catch()}
            url=""
          />
          <Button
            label="Obiady"
            onClick={(event) => handleRequest("Dinner", event).catch()}
            url=""
          /> */}
          <input
            type="text"
            placeholder="Wyszukaj przepis..."
            onInput={handleFilter}
          ></input>
        </div>
      </section>
      <main>
        <div id="thumbnails_filter">
          {displayedRecipes.map((recipe) => (
            <RecipeThumbnail
              key={recipe._id}
              imageUrl={require(`../../../client/public/foodphotos/` + /* */
              recipe.imageUrl)}
              recipeName={recipe.name}
              kcal={recipe.kcal}
              macros={recipe.macros}
              onClick={() => handleClick(recipe)} // handle click w arrow by wykonal sie tylko raz
            />
          ))}
          {selectedRecipe && ( // tutaj call selectedREcipe i jego render w komponencie
            <Recipe
              recipeName={selectedRecipe.name}
              imageUrl={require(`../../../client/public/foodphotos/` + /* TODO przemyslec raz jeszcze jak ze zdjeciami*/
              selectedRecipe.imageUrl)}
              kcal={selectedRecipe.kcal}
              macros={selectedRecipe.macros}
              ingredients={selectedRecipe.ingredients}
              preparation={selectedRecipe.preparation}
              onClick={() => handleGoBackClick()}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default RecipeFinder;
