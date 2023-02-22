import { React, ReactDOM } from "react";
import "./macros.css"

const Macros = ({ macros, kcal}) => {
    return (
        <div className="macros">
            <p>Macros:</p>
            <ul>
                <li>Kcal: {kcal}</li>
                <li>Protein: {macros.protein.value} {macros.protein.unit}</li>
                <li>Carbs: {macros.carbs.value} {macros.carbs.unit}</li>
                <li>Fat: {macros.fat.value} {macros.fat.unit}</li>
            </ul>
        </div>
    );
};

export default Macros;
