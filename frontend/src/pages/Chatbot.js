import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Chatbot() {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [topics, setTopics] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const [generatedContent, setGeneratedContent] = useState();
  const [generatedMaterial, setGeneratedMaterial] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    fetch("http://127.0.0.1:5000/generate_content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: subject, level: level }),
    })
      .then((response) => response.json())
      .then((data) => {
        const cleanedContent = JSON.parse(data?.generated_content.trim());

        console.log("whrwu", cleanedContent);
        setLoading(false);
        if (cleanedContent.error) {
          setError(cleanedContent.error);
        } else {
          setGeneratedContent(cleanedContent);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred while generating content.");
        console.error("Error:", error);
      });
  };

  const handleMaterialSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    fetch("http://127.0.0.1:5000/generate_material", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topics: topics }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setGeneratedMaterial(data.generated_material);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred while generating material.");
        console.error("Error:", error);
      });
  };

  // const arr = generatedContent ? JSON.parse(generatedContent) : [];
  // const navigate = useNavigate();
  // const navigateToChatBotResults = () => {
  //   navigate("/chatbot/results");
  // };

  return (
    <section className="p-5 min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="relative  py-10  rounded-lg shadow-lg w-full max-w-5xl cursor-pointer">
        {/* <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div> */}
        <div className="relative flex flex-col items-center justify-center w-full gap-y-10 px-28">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h2 className="text-6xl text-primaryText font-montserrat">
              Ask Your Chatbot
            </h2>
            <p className="text-center text-secondaryText">
              "Education is the most powerful weapon which you can use to change
              the world." -- <em> Nelson Mandela </em>
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center justify-between">
          <div>
            <form
              className="flex items-end justify-between gap-x-10"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xl text-secondaryText mb-2"
                >
                  Enter the subject name where you got stuck!
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-highlight text-primaryText"
                  placeholder="Enter subject name ....."
                />
              </div>
              <br />
              <div>
                <label
                  htmlFor="level"
                  className="block text-xl text-secondaryText mb-2"
                >
                  Enter your preparation level!
                </label>
                <input
                  type="text"
                  id="level"
                  name="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-highlight text-primaryText"
                />
              </div>
              <br />
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-5 bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                  // onClick={navigateToChatBotResults}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="error text-white">{error}</p>}

        <div className="flex flex-col items-center justify-center w-full px-28">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h2 className="text-4xl text-primaryText font-montserrat">
              'Input field data' for 'level'
            </h2>
          </div>
          <div
            className="grid grid-cols-4 gap-4 py-5 flex-grow"
            style={{
              overflowY: "auto",
              gridAutoFlow: "row dense",
            }}
          >
            {generatedContent?.map((content, i) => (
              <div
                key={i}
                className="relative p-8 rounded-lg shadow-lg w-full max-w-md cursor-pointer"
              >
                <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
                <div className="relative">
                  <div className="text-white">{content.header}</div>
                </div>
                <div className="text-white relative">
                  {console.log(
                    "Subheaders for",
                    content.header,
                    ":",
                    content.subheaders
                  )}
                  {content.subheaders &&
                    content.subheaders.map((subheader, index) => (
                      <div key={index} className="text-white">
                        {subheader}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;

{
  /* 
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
        <button className="" type="submit">
          Generate Material
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <h2>Generated Material:</h2>
      <pre id="material-output">{generatedMaterial}</pre> */
}
