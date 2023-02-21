import React from "react";
import ReactDOM from "react-dom"
import logo from "../logo.svg";
import Menu from "./menu";
import "./footer.css"

function Footer ()  {
    const footerLinks = [
        { label: "Home", url: "/"},
        { label: "About", url: "/about"},
        { label: "Explore", url: "/explore"}
    ];
    return (
        <div className="footer">
            <footer>
                <div className="footerimg">
                     <img src={logo} className="App-logo" alt="logo" />
                </div>
            <Menu links={footerLinks}/>
            </footer>
        </div>
    )
}

export default Footer