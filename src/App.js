import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
