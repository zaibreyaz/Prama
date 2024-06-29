import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextDisplay from "../src/pages/TextDisplay";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/RegisterPage";
import SecuredPage from "../src/pages/SecuredPage";
import LandingPage from "../src/pages/LandingPage";
import ChatBot from "../src/pages/Chatbot";
import Video from "../src/pages/Video";
import FileUpload from "../src/pages/FileUpload";
import LearnWithAiMainPAge from "./pages/LearnWithAIMainPage";
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
        <Route path="Learn-with-ai-main-page" element={<LearnWithAiMainPAge/>}/>
        <Route path="chatbot" element={<ChatBot/>}/>
        <Route path="video" element={<Video/>}/>
        <Route path="file-upload" element={<FileUpload/>}/>
      </Routes>
    </Router>
  );
}

export default App;
