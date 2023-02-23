import {React, ReactDOM, useState} from "react";
import Button from "./button";
import "./recipefinder.css"
import axios from "axios";
import RecipeThumbnail from "./recipethumbnail";
function RecipeFinder () {
    
    const [recipes, setRecipes] = useState([])
    const [displayedRecipes, setDisplayedRecipes] = useState([])
    const [activeButton, setActiveButton] = useState(null);
    
    const handleQuasiFilter = (type, event) => {
        axios.get("/recipes").then((response) => {
          setRecipes(response.data[`${type}`]);
          setDisplayedRecipes(response.data[`${type}`]);
          event.target.classList.add("active");
            if (activeButton && activeButton !== event.target) {
            activeButton.classList.remove("active");
          }
          setActiveButton(event.target);
        });
      };
      
    const handleFilter = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchValue))
        setDisplayedRecipes(filteredRecipes);
        console.log(filteredRecipes)
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
                />
            ))}
        </div>
</main>
        </div>
    )
}

export default RecipeFinder