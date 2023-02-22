import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Header from "./components/header"
import Main from "./components/main";
import Footer from "./components/footer";
import RecipeFinder from "./components/recipefinder";
function App() {
  const hitBackend = () => {
    axios.get("/recipes").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <Header />
      <RecipeFinder />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
