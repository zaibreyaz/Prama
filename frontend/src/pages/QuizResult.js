import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultComponent = () => {
  const location = useLocation();
  const { score, total, wrong_answers } = location.state;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-2xl w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Quiz Result</h1>
        <p className="mb-6 text-lg">Your score is {score} out of {total}</p>
        {wrong_answers.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Areas to Improve:</h2>
            <ul className="list-disc pl-5 space-y-4">
              {wrong_answers.map((item, idx) => (
                <li key={idx}>
                  <div className="mb-2">
                    <span className="font-bold">Question:</span> {item.question}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Your Answer:</span> {item.user_answer}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Correct Answer:</span> {item.correct_answer}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultComponent;
