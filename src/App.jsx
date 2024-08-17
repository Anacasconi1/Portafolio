import "./styles/App.css";
import { Home } from "./views/Home";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { About } from "./views/About";
import { Resume } from "./views/Resume";
import { Proyects } from "./views/Proyects";


function App() {
    return (
        <div id="all-app">
            <Home />
            <div className="general-container">
              <NavBar/>
              <Routes>
                <Route path="/" element= {<About/>}/>
                <Route path="/resume" element= {<Resume/>}/>
                <Route path="/proyects" element= {<Proyects/>}/>
              </Routes>
            </div>
        </div>
    );
}

export default App;
