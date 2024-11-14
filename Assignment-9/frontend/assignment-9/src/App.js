import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import JobsCarousel from "./components/Jobs/JobsComponent";
import CompanyShowcase from "./components/CompanyShowcase/CompanyShowcase";
import ContactForm from "./components/Contact/ContactForm";
import AboutComponent from "./components/About/AboutComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<JobsCarousel />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/Company Showcase" element={<CompanyShowcase />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
