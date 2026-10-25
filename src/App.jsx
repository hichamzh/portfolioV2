import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./composants/navigation/NavigationBar";
import { Footer } from "./composants/footer/Footer";
import { ButtonTop } from "./composants/arrowUp/ButtonTop";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ButtonTop />
    </Router>
  );
}

export default App;
