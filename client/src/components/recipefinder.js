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


    const handleRequest = (type, event) => {
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
            <div className="recipefinder_div_categories">
                <p>Kategorie:</p>
                <Button label="Śniadania" onClick={(event) => handleRequest("breakfasts", event)} url=""/>
                <Button label="Koktajle" onClick={(event) => handleRequest("shakes", event)} url=""/>
                <Button label="Obiady" onClick={(event) => handleRequest("dinners", event)} url=""/>
                <input type="text" placeholder="Wyszukaj przepis..." onInput={handleFilter}></input>
                </div>
            </section>
            <main>
            <div id="thumbnails_filter">
            {displayedRecipes.map((recipe) => (
                <RecipeThumbnail
                    key={recipe.id}
                    imageUrl={require(`../../../client/public/foodphotos/` + recipe.imageUrl)}
                    recipeName={recipe.name}
                    kcal={recipe.kcal}
                    macros={recipe.macros}
                    onClick={() => handleClick(recipe)} // handle click w arrow by wykonal sie tylko raz
                />
            ))}
                {selectedRecipe && ( // tutaj call selectedREcipe i jego render w komponencie
                     <Recipe
                         recipeName={selectedRecipe.name}
                         imageUrl={require(`../../../client/public/foodphotos/` + selectedRecipe.imageUrl)}
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