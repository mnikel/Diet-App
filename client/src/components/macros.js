import { React, ReactDOM } from "react";
import "./macros.css"

const Macros = ({ macros, kcal}) => {
    return (
        <div className="macros">
            <h3>Makro:</h3>
            <ul>
                <li><h5>Białko: {macros.protein.value} {macros.protein.unit}</h5> </li>
                <li><h5>Węglowodany: {macros.carbs.value} {macros.carbs.unit}</h5> </li>
                <li><h5>Tłuszcz: {macros.fat.value} {macros.fat.unit}</h5> </li>
                <li><h5>Kalorie: {kcal}</h5> </li>
            </ul>
        </div>
    );
};

export default Macros;
