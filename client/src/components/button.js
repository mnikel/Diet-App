// import { React, ReactDOM } from "react";
// import "./button.css"
// function Button ( { label, onClick }) {
//     return (
//         <div>
//             <button onClick={onClick}>{label}</button>
//         </div>
//     )
// }

// export default Button

import React from "react";
import "./button.css";

function Button({ label, onClick, size = "small" }) {
  return (
    <div>
      <button
        className={`Button ${size === "large" ? "large" : ""}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
