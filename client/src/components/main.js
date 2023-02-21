import {React, ReactDOM} from "react";
import Menu from "./menu";
import Button from "./button";
import "./main.css"
import axios from "axios";
function Main () {

    const handleQuasiFilter = (type) => {
        axios.get("/recipes").then((response) => {
            console.log(response.data[`${type}`])
        })
    }
    const mainLinks = [
        { label: <Button label="Breakfasts" onClick={() => handleQuasiFilter("breakfasts")} url=""/>},
        { label: <Button label="Shakes" onClick={() => handleQuasiFilter("shakes")} url=""/>},
        { label: <Button label="Dinners" onClick={() => handleQuasiFilter("dinners")} url=""/>},
    ];    
    
    
    return (
        <div className="main">
            <main>
                <p>Kategorie:</p>
                <div className="main_div_categories">
                <Menu links={mainLinks} />
                <input placeholder="Search for a recipe..."></input>
                </div>
            </main>
        </div>
    )
}

export default Main