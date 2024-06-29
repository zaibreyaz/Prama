import React, { useState } from 'react';

function Chatbot() {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [topics, setTopics] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [generatedMaterial, setGeneratedMaterial] = useState('');
  const [summarizedTranscript, setSummarizedTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    fetch('http://127.0.0.1:5000/generate_content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject: subject, level: level })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setGeneratedContent(data.generated_content);
        }
      })
      .catch(error => {
        setLoading(false);
        setError('An error occurred while generating content.');
        console.error('Error:', error);
      });
  };

  const handleMaterialSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    fetch('http://127.0.0.1:5000/generate_material', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topics: topics })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setGeneratedMaterial(data.generated_material);
        }
      })
      .catch(error => {
        setLoading(false);
        setError('An error occurred while generating material.');
        console.error('Error:', error);
      });
  };


  return (
    <div className="App">
      <h1>Generate Educational Content</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="level">Level:</label>
          <input
            type="text"
            id="level"
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <br />
        <button className="" type="submit">Generate Content</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <h2>Generated Content:</h2>
      <pre id="output">{generatedContent}</pre>

      <h1>Generate Educational Material</h1>
      <form onSubmit={handleMaterialSubmit}>
        <div>
          <label htmlFor="topics">Topics:</label>
          <textarea
            id="topics"
            name="topics"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
          />
        </div>
        <br />
        <button className="" type="submit">Generate Material</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <h2>Generated Material:</h2>
      <pre id="material-output">{generatedMaterial}</pre>
      </div>

  );
}

export default Chatbot;
