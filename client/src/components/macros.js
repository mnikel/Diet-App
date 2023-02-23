import { React, ReactDOM } from "react";
import "./macros.css"

const Macros = ({ macros, kcal}) => {
    return (
        <div className="macros">
            <h3>Macros:</h3>
            <ul>
                <li><h5>Protein: {macros.protein.value} {macros.protein.unit}</h5> </li>
                <li><h5>Carbs: {macros.carbs.value} {macros.carbs.unit}</h5> </li>
                <li><h5>Fat: {macros.fat.value} {macros.fat.unit}</h5> </li>
                <li><h5>Kcal: {kcal}</h5> </li>
            </ul>
        </div>
    );
};

export default Macros;
