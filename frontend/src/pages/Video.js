import React, { useState } from 'react';

function Video() {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [topics, setTopics] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [generatedMaterial, setGeneratedMaterial] = useState('');
  const [summarizedTranscript, setSummarizedTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranscriptSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    fetch('http://127.0.0.1:5000/summarize_transcript', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ video_link: videoLink })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setSummarizedTranscript(data.transcript_summary);
        }
      })
      .catch(error => {
        setLoading(false);
        setError('An error occurred while summarizing transcript.');
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">

      <h1>Summarize Video Transcript</h1>
      <form onSubmit={handleTranscriptSubmit}>
        <div>
          <label htmlFor="videoLink">Video Link:</label>
          <input
            type="text"
            id="videoLink"
            name="videoLink"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </div>
        <br />
        <button className="" type="submit">Summarize Transcript</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <h2>Summarized Transcript:</h2>
      <pre id="transcript-output">{summarizedTranscript}</pre>
    </div>
  );
}

export default Video;
