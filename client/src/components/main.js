import {React, ReactDOM} from "react";
import "./main.css"
import axios from "axios";
function Main () {

    const handleQuasiFilter = (type) => {
        axios.get("/recipes").then((response) => {
            console.log(response.data[`${type}`])
        })
    }
    
    return (
        <div>
            <main>
                
              
            </main>
        </div>
    )
}

export default Main