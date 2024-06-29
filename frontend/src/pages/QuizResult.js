import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, wrong_answers } = location.state;

  const handleRetakeQuiz = () => {
    navigate('/quiz');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-2xl w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Quiz Result</h1>
        <p className="text-lg text-center mb-6">
          Your score is <span className="text-blue-400 font-bold">{score}</span> out of <span className="text-blue-400 font-bold">{total}</span>
        </p>
        {wrong_answers.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Areas to Improve:</h2>
            <ul className="list-disc pl-5 space-y-4">
              {wrong_answers.map((item, idx) => (
                <li key={idx} className="mb-4">
                  {/* <div className="mb-2">
                    <span className="font-bold">Question:</span> {item.question}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Your Answer:</span> {item.user_answer}
                  </div> */}
                  <div className="mb-2">
                    <span className="font-bold"></span> {item.correct_answer}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleRetakeQuiz}
          >
            Retake Quiz
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            onClick={handleGoHome}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
