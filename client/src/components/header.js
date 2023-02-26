import React from "react";
import ReactDOM from "react-dom";
import logo from "../logo.svg";
import Menu from "./menu";
import "./header.css";
import Button from "./button";
function Header() {
  const headerLinks = [
    { label: "Home", url: "/" },
    { label: "Jak szukać", url: "#howto_main_div" },
    { label: "Footer", url: "#footer" },
  ];

  const handleRedirectToRecipeFinder = () => {
    window.location.href = `#${"recipefinder"}`;
  };

  return (
    <div id="header">
      <div id="header_logo">
        <h1>TUTAJ JEST SUPER LOGO HEHE</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>

         <div id="menu">
        <Menu links={headerLinks} />
      </div>
      <div id="header_description">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec molestie dui.</h1>
          <p> Duis interdum nisi
          euismod turpis venenatis rhoncus. Nam pellentesque dolor bibendum
          aliquet sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec molestie dui. </p>
       
      </div>
      <div id="header_button">
        <Button
          label="Znajdź przepis"
          size="large"
          onClick={handleRedirectToRecipeFinder}
        />
      </div>
    </div>
  );
}

export default Header;