import {React, ReactDOM} from "react";
import Button from "./button";
import "./recipefinder.css"
import axios from "axios";
function RecipeFinder () {

    const handleQuasiFilter = (type) => {
        axios.get("/recipes").then((response) => {
            console.log(response.data[`${type}`])
        })
    }
    
    return (
        <div className="recipefinder_div">
            <section id="recipefinder">
                <p>Kategorie:</p>
                <div className="recipefinder_div_categories">
                <Button label="Breakfasts" onClick={() => handleQuasiFilter("breakfasts")} url=""/>
                <Button label="Shakes" onClick={() => handleQuasiFilter("shakes")} url=""/>
                <Button label="Dinners" onClick={() => handleQuasiFilter("dinners")} url=""/> 
                <input placeholder="Search for a recipe..."></input>
                </div>
            </section>
        </div>
    )
}

export default RecipeFinder