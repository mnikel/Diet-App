import { React, ReactDOM } from "react";
import "./menu.css"
function Menu ({ links }) {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Menu

