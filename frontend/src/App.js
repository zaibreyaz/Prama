import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextDisplay from "../src/pages/TextDisplay";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/RegisterPage";
import SecuredPage from "../src/pages/SecuredPage";
import LandingPage from "../src/pages/LandingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/secure" element={<SecuredPage />} />
        <Route path="/text-display" element={<TextDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
