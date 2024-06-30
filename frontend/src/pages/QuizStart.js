import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizStart = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz", { state: { topic } });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">
          Welcome to the Quiz
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Please enter a topic to start the quiz:
        </p>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 mb-4 text-black"
        />
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
