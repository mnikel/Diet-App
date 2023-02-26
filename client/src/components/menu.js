import { React, ReactDOM } from "react";
import "./menu.css"
function Menu ({ links }) {
    return (
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

    )
}

export default Menu

