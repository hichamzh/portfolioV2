import "./App.css";
import { NavigationBar } from "./composants/navigation/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./composants/footer/Footer";
import "animate.css";
import { ButtonTop } from "./composants/arrowUp/ButtonTop";


function App() {
  return (
    <Router>
      <ButtonTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projets" element={<Projets />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
