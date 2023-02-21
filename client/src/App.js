import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {

  const hitBackend = () => {
    axios.get("/recipes").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {" "}
          <button onClick={hitBackend}>Send request</button>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;