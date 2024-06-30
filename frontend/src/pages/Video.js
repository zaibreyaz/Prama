import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
// import img1 from "../a"
import "./TextDisplay.css";

function Video() {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [topics, setTopics] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [generatedMaterial, setGeneratedMaterial] = useState("");
  const [summarizedTranscript, setSummarizedTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranscriptSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    fetch("http://127.0.0.1:5000/summarize_transcript", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ video_link: videoLink }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setSummarizedTranscript(data.transcript_summary);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred while summarizing transcript.");
        console.error("Error:", error);
      });
  };

  return (
    <section className="p-5 min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-full gap-y-10 px-28">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-6xl text-primaryText font-montserrat">Pramā</h2>
          <p className="text-center text-secondaryText">
            “We want that education, by which character is formed, strength of
            mind is increased, intellect is expanded and by which one can stand
            on one's on feet.” -- <em>Swami Vivekananda</em>
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-5 ">
          <h1 className="text-primaryText text-3xl text-lato">
            Summarize Video Transcript
          </h1>
          <form
            onSubmit={handleTranscriptSubmit}
            className="flex flex-col items-center justify-center"
          >
            <div>
              {/* <label htmlFor="videoLink">Video Link:</label> */}
              <input
                type="text"
                id="videoLink"
                name="videoLink"
                placeholder="Enter the video link...."
                value={videoLink}
                className="w-[50rem] text-lg px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-highlight text-primaryText"
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>
            <br />
            <div className="text-center flex">
              <button
                type="submit"
                className="w-full bg-accent text-white p-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
              >
                Summarize
              </button>
            </div>
          </form>
        </div>
        {loading && <p className="text-secondaryText">Loading...</p>}
        {error && <p className="error text-secondaryText">{error}</p>}
        <h2 className="text-primaryText text-3xl text-lato">Notes for you:</h2>
        <div className="flex flex-col items-center justify-center">
          <div></div>
          <div id="transcript-output" className="text-secondaryText ">
            <ReactMarkdown>
              {typeof summarizedTranscript === "string"
                ? summarizedTranscript
                : ""}
            </ReactMarkdown>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
