import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Home from "./components/Home";
import { YourContextProvider } from "./YourContextProvider";
import Brochure from "./components/Brochure";
import Product from "./components/Product";
import WebDes from "./components/WebDes";
import Mockups from "./components/Mockups";

function App() {
  return (
    <div className="App">
      <YourContextProvider>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/product" element={<Product />} />
              <Route path="/webdes" element={<WebDes />} />
              <Route path="/mockup" element={<Mockups />} />
            </Routes>
          </div>
        </Router>
      </YourContextProvider>
    </div>
  );
}

export default App;
