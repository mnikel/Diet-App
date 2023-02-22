import React from "react";
import ReactDOM from "react-dom";
import logo from "../logo.svg";
import Menu from "./menu";
import FindRecipesButton from "./button";
import "./header.css";
import Button from "./button";
function Header() {
  const headerLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Footer", url: "#footer" },
  ];

  const handleRedirectToRecipeFinder = () => {
    window.location.href = `#${"recipefinder"}`;
  };

  return (
    <div className="Header">
      <header>
        <div className="headerimg">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec molestie dui. Cras aliquam cursus rhoncus. Duis interdum nisi
          euismod turpis venenatis rhoncus. Nam pellentesque dolor bibendum
          aliquet sollicitudin. Pellentesque bibendum, lorem ut lobortis
          efficitur, orci diam interdum justo, eu aliquam sem lorem quis justo.
          Aliquam erat volutpat. Mauris ut mauris ligula. Nullam dictum vel orci
          at vehicula. Nulla ex diam, vulputate ut tortor at, viverra lobortis
          lectus. Vestibulum vitae tellus tempus, elementum orci id, volutpat
          orci. Etiam varius eros sit amet massa semper, a eleifend dui
          venenatis. Cras tempus venenatis diam eu tincidunt.
        </h1>
        <Menu links={headerLinks} />
        <Button
          label="Find recipes"
          size="large"
          onClick={handleRedirectToRecipeFinder}
        />
      </header>
    </div>
  );
}

export default Header;
