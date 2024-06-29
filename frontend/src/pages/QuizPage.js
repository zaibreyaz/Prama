import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizComponent = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/quiz')
      .then(response => {
        setQuiz(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching quiz data');
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/api/submit', { answers })
      .then(response => {
        const { score, total, wrong_answers } = response.data;
        navigate('/result', { state: { score, total, wrong_answers } });
      })
      .catch(error => {
        setError('Error submitting quiz');
      });
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
        <form onSubmit={handleSubmit}>
          {quiz.questions.map((q, idx) => (
            <div className="question mb-6" key={idx}>
              <p className="mb-2 text-lg">{q.question}</p>
              {q.options.map((option, optIdx) => (
                <label className="block mb-1" key={optIdx}>
                  <input
                    type="radio"
                    name={`question_${idx}`}
                    value={option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <input
            type="submit"
            value="Submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white font-bold rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default QuizComponent;
