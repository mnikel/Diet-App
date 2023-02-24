import {React, ReactDOM, useState} from "react";
import Button from "./button";
import "./recipefinder.css"
import axios from "axios";
import RecipeThumbnail from "./recipethumbnail";
import Recipe from "./recipe";
import Macros from "./macros";
function RecipeFinder () {
    
    const [recipes, setRecipes] = useState([])
    const [displayedRecipes, setDisplayedRecipes] = useState([])
    const [activeButton, setActiveButton] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null) // ustawienie nowego state dla wybranego przepisu
    const [filteredRecipes, setFilteredRecipes] = useState([]); // 

    const handleClick = (recipe) => { // !!!!
    setSelectedRecipe(recipe) // ustawia state na selected recipe czyli ten ktory klikasz!!
    setDisplayedRecipes([])
    console.log("You've just clicked me!")
  };


    const handleQuasiFilter = (type, event) => {
        axios.get("/recipes").then((response) => {
          setRecipes(response.data[`${type}`]);
          setDisplayedRecipes(response.data[`${type}`]);
          setFilteredRecipes(response.data[`${type}`])
          event.target.classList.add("active");
            if (activeButton && activeButton !== event.target) {
            activeButton.classList.remove("active");
          }
          setActiveButton(event.target);
          setSelectedRecipe(null) // ustawienie dla state po ponownym kliknieciu na kategorie
        });
      };
      
    const handleFilter = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchValue))
        setDisplayedRecipes(filteredRecipes); // to bylby ten stan
        setSelectedRecipe(null)
        setFilteredRecipes(filteredRecipes)
    }
    
    const handleGoBackClick = () => {
      setSelectedRecipe(null);
      setDisplayedRecipes(filteredRecipes);
         }
    return (
        <div className="recipefinder_div">
            <section id="recipefinder">
                <p>Kategorie:</p>
                <div className="recipefinder_div_categories">
                <Button label="Breakfasts" onClick={(event) => handleQuasiFilter("breakfasts", event)} url=""/>
                <Button label="Shakes" onClick={(event) => handleQuasiFilter("shakes", event)} url=""/>
                <Button label="Dinners" onClick={(event) => handleQuasiFilter("dinners", event)} url=""/>
                <input type="text" placeholder="Search for a recipe..." onInput={handleFilter}></input>
                </div>
            </section>
            <main>
            <div id="thumbnails_filter">
            {displayedRecipes.map((recipe) => (
                <RecipeThumbnail
                    key={recipe.id}
                    imageUrl={recipe.imageUrl}
                    recipeName={recipe.name}
                    kcal={recipe.kcal}
                    macros={recipe.macros}
                    onClick={() => handleClick(recipe)} // handle click w arrow by wykonal sie tylko raz
                />
            ))}
                {selectedRecipe && ( // tutaj call selectedREcipe i jego render w komponencie
                     <Recipe
                         recipeName={selectedRecipe.name}
                         kcal={selectedRecipe.kcal}
                         macros={selectedRecipe.macros}
                         ingredients={selectedRecipe.ingredients}
                         preparation={selectedRecipe.preparation}
                         onClick={() => handleGoBackClick()}  />
)}

        </div>
</main>
        </div>
    )
}

export default RecipeFinder