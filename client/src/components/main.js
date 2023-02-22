import { React, ReactDOM } from "react";
import "./main.css";
import axios from "axios";
import RecipeThumbnail from "./recipethumbnail";
import Recipe from "./recipe";

function Main() {
  const handleQuasiFilter = (type) => {
    axios.get("/recipes").then((response) => {
      console.log(response.data[`${type}`]);
    });
  };

  return (
    <div>
      <main>
        {/* <RecipeThumbnail
          recipeName={"Serek wiejski na wytrawnie"}
          kcal={"2137"}
          protein={"2137"}
          carbs={"2137"}
        />
        <Recipe
          recipeName={"Serek wiejski na wytrawnie"}
          kcal={530}
          carbs={49.64}
          protein={32.32}
          fat={23.41}
          ingredients={[
            "1 cebula",
            "2 kromki chleba",
            "1 lyzka oliwy z oliwek",
            "8 pieczare",
            "serek wiejski",
            "Garsc szpinaku"
          ]}
          preparation={[
            "Cebulę i pieczarki pokroić w kostkę i podsmażyć na niewielkiej ilości oliwy, pod koniec dodać świeży szpinak",
            "Wymieszać z serkiem wiejskim",
            "Podawac z pieczywem",
          ]}
        />{" "} */}
        
      </main>
    </div>
  );
}

export default Main;
