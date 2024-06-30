import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TextDisplay from "../src/pages/TextDisplay";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/RegisterPage";
import SecuredPage from "../src/pages/SecuredPage";
// import LandingPage from "../src/pages/LandingPage";
import ChatBot from "../src/pages/Chatbot";
import Video from "../src/pages/Video";
import FileUpload from "../src/pages/FileUpload";
import LearnWithAiMainPAge from "./pages/LearnWithAIMainPage";
import ChatbotResults from "./pages/ChatbotResults";
import QuizStart from "../src/pages/QuizStart";
import ResultComponent from "./pages/QuizResult";
import Classroom from "./pages/Classroom";

import "./App.css";
import QuizComponent from "./pages/QuizPage";
import Logo from "./Logo";
import Settings from "./Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <Logo />
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  console.log("Current Path:", location.pathname);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/secure" element={<SecuredPage />} />
        <Route
          path="Learn-with-ai-main-page"
          element={<LearnWithAiMainPAge />}
        />
        <Route path="chatbot" element={<ChatBot />} />
        <Route path="video" element={<Video />} />
        <Route path="file-upload" element={<FileUpload />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="quiz-start" element={<QuizStart />} />
        <Route path="quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
      </Routes>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <>
          <Settings />
          {console.log("Rendering Settings Component")}
        </>
      )}
    </>
  );
}

export default App;
