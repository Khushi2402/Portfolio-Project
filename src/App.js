import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;