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

            <footer id="footer">

                <div id="footer_logo">
                <h1>TUTAJ JEST SUPER LOGO HEHE</h1>
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
                 </div>
               
            <div id="footer_menu">
                <Menu links={footerLinks}/>
            </div>

                 <div id="footer_rights">
                    <p>created by <a href="https://github.com/mnikel" target="_blank">mnikel</a></p>
                </div>

            </footer>
    )
}

export default Footer