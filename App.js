import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
//import { browserHistory, Router, Route } from 'react-router';
//import { About } from "./components/Pages/About";
//import { Blog } from "./components/Pages/Blog";
//import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" component={Home} />
          </Routes>
        </div>
      </Router>

      <p className="uptext">Zetgo - Amazing hostel for the free spirited traveler</p>
      <p className="downtext">
          Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
      </p>

      
    </>

    
  );


}


export default App;

