import React from "react";
import ReactDOM from "react-dom"
import logo from "../logo.svg";
import Menu from "./menu";
import FindRecipesButton from "./button";
import "./header.css"
import Button from "./button";
function Header ()  {
    const headerLinks = [
        { label: "Home", url: "/"},
        { label: "About", url: "/about"},
        { label: "Explore", url: "/explore"}
    ];
    return (
        <div className="Header">
            <header>
            <div className="headerimg">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <h1>My simple recipe site...</h1>
            <Menu links={headerLinks}/>
            <Button label="Find recipes" />
            </header>
        </div>
    )
}

export default Header