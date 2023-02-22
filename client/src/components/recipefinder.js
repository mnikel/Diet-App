import {React, ReactDOM, useState} from "react";
import Button from "./button";
import "./recipefinder.css"
import axios from "axios";
import RecipeThumbnail from "./recipethumbnail";
function RecipeFinder () {
    
    const [recipes, setRecipes] = useState([]) 
    const handleQuasiFilter = (type) => {
        axios.get("/recipes").then((response) => {
            // console.log(response.data[`${type}`])
            setRecipes(response.data[`${type}`]);
        })
    }
    const handleFilter = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchValue))
        setRecipes(filteredRecipes);
    }
    return (
        <div className="recipefinder_div">
            <section id="recipefinder">
                <p>Kategorie:</p>
                <div className="recipefinder_div_categories">
                <Button label="Breakfasts" onClick={() => handleQuasiFilter("breakfasts")} url=""/>
                <Button label="Shakes" onClick={() => handleQuasiFilter("shakes")} url=""/>
                <Button label="Dinners" onClick={() => handleQuasiFilter("dinners")} url=""/> 
                <input type="text" placeholder="Search for a recipe..." onInput={handleFilter}></input>
                </div>
            </section>
            <main>
            <div id="thumbnails_filter">
            {recipes.map((recipe) => (
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