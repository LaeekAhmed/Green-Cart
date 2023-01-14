import Navbar from "./components2/Navbar";
import Home from "./components2/home";
import Work from "./components2/projects";
import Skills from "./components2/skills";
import About from "./components2/About";

function App() {
  return (
    <div>
      {/* the funcs called below basically return a set of nested div's.
      so basically it is nothing but HTML */}
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <About/>
    </div>
  );
}

export default App;
