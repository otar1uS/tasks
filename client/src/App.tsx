import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UndefinedPage from "./pages/UndefinedPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto h-full">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<UndefinedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
