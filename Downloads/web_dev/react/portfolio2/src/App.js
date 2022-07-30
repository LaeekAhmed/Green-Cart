import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components2/Navbar";
import Home from "./components2/home";
import Work from "./components2/projects";
import Skills from "./components2/skills";

function App() {
  return (
    <div>
      <div className=""></div>
      <Navbar />
      <Home />
      <Work />
      <Skills />
    </div>
  );
}

export default App;
