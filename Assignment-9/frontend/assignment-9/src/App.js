import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./components/LoginForm/LoginForm";
import JobsComponent from "./components/Jobs/JobsComponent";
import CompanyShowcase from "./components/CompanyShowcase/CompanyShowcase";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<JobsComponent />} />
            <Route path="/Company Showcase" element={<CompanyShowcase />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
