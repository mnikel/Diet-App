import { React, ReactDOM } from "react";
import "./button.css"
function Button ( { label, onClick }) {
    return (
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}

export default Button