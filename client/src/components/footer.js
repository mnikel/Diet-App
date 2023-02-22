import React from "react";
import ReactDOM from "react-dom"
import logo from "../logo.svg";
import Menu from "./menu";
import "./footer.css"

function Footer ()  {
    const footerLinks = [
        { label: "Home", url: "/"},
        { label: "About", url: "/about"},
        { label: "Explore", url: "/explore"},
        { label: "To Explore?", url: "/explore"},
        { label: "Or Not to Explore?", url: "/explore"},
        { label: "Explore!", url: "/explore"}
    ];
    return (
        <div id="footer">
            <footer>
                <div className="footerimg">
                     <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p>created by <a href="https://github.com/mnikel" target="_blank">mnikel</a></p>
            <Menu links={footerLinks}/>
            </footer>
        </div>
    )
}

export default Footer